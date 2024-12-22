import React from "react";
import styles from './Hero.module.css';


const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <p className={styles.hello}>Hello I Am</p>
            <h1 className={styles.name}>SANIA SAEED</h1>
            <h2 className={styles.jobTitle}>WEB</h2>
            <p className={styles.role}>DEVELOPER</p>
            <div className={styles.description}>
              <p className={styles.descriptionText}>I'm a passionate and skilled web developer with several</p>
              <p className={styles.descriptionText}>years of experience in the field of web development.</p>
            </div>
          </div>
        </div>

        

      
      </div>
    </div>
  );
}

export default Hero;
