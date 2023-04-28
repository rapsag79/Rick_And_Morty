import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://storage.googleapis.com/pai-images/6acee0b2e35d42f6baa9d83252c1d1a8.jpeg"
        alt="Rick_And_Morty"
        className={styles.image}
      />

      <h1 className={styles.title}>Hi I´am Francisco Contreras</h1>
      <h2 className={styles.subtitle}>
        I am a HENRY student preparing to be a FULL-STACK Web Developer, and
        this little app is a reflection of the evolution in my career as a
        programmer rick_and_mort
      </h2>
    </div>
  );
};

export default About;
