import styles from "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/validation";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });

    // const validateErrors = validation({
    //   ...inputs,
    //   [event.target.name]: event.target.value,
    // });

    // setErrors(validateErrors);
    // opcion 2 y mas simple
    setErrors(
      validation({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(inputs);
  }

  return (
    <div className={styles["form-container"]}>
      <form className={styles["rick-morty-form"]} onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <img
          src="https://storage.googleapis.com/pai-images/9bab556bc1574fce9e72b39aa2e9cfe1.jpeg"
          alt="Rick_And_Morty"
          className={styles.image}
        />

        <div>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            value={inputs.email}
            name="email"
            type="text"
            placeholder="ingrse su email"
            onChange={handleChange}
          />
          <br />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            value={inputs.password}
            name="password"
            type="password"
            placeholder="ingrese su password"
            onChange={handleChange}
          />
          <br />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
