// import { Link } from "react-router-dom";
// import styles from "./Form.module.css";
// import { useState } from "react";

// // const EMAIL = "servisechimino79@gmail.com";
// // const PASSWORD = "unaPassword3&";
// const Form = ({ login }) => {
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//   });

//   const validate = (inputs) => {
//     let errors = {};

//     if (!inputs.email) {
//       errors.email = "El email es requerido";
//     } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
//       errors.email = "El email ingresado no es válido";
//     } else if (inputs.email.length > 35) {
//       errors.email = "El email no puede tener más de 35 caracteres";
//     }
//     if (!inputs.password) {
//       errors.password = "La contraseña es requerida";
//     } else if (inputs.password.length <= 1) {
//       errors.password = "La contraseña debe tener al menos un número";
//     } else if (inputs.password.length < 6 || inputs.password.length < 10) {
//       errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
//     }

//     return errors;
//   };

//   function handleChange(event) {
//     setInputs({
//       ...inputs,
//       [event.target.name]: event.target.value,
//     });

//     setErrors(
//       validate({
//         ...inputs,
//         [event.target.name]: event.target.value,
//       })
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const aux = Object.keys(errors);
//     if (aux.length === 0) {
//       setInputs({
//         email: "",
//         password: "",
//       });
//       setErrors({
//         email: "",
//         password: "",
//       });
//       login(inputs);
//       return alert("Todo ok");
//     }
//     return alert("Error");
//   }

//   return (
//     <div className={styles["form-container"]}>
//       <form className={styles["rick-morty-form"]} onSubmit={handleSubmit}>
//         <h1>Welcome</h1>
//         <img
//           src="https://storage.googleapis.com/pai-images/6acee0b2e35d42f6baa9d83252c1d1a8.jpeg"
//           alt="Rick_And_Morty"
//           className={styles.image}
//         />

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             className={styles.input}
//             value={inputs.email}
//             name="email"
//             type="text"
//             placeholder="ingrese su email"
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>

//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             className={styles.input}
//             value={inputs.password}
//             name="password"
//             type="password"
//             placeholder="ingrese su password"
//             onChange={handleChange}
//           />
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//         {Object.keys(errors).length === 0 ? (
//           <Link to="/home">
//             <button className={styles.button} type="submit">
//               Submit
//             </button>
//           </Link>
//         ) : null}
//       </form>
//     </div>
//   );
// };

// export default Form;
