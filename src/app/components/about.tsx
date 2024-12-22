import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h1 className={styles.heading}>About Me</h1>
     
      <div className={styles.grid}>
        <div>
          <img className={styles.image} src="/a1.png" alt="About me" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textBox}>
            <div className={styles.textContent}>
              <p className={styles.description}>
                I am a skilled professional responsible for designing, building, and maintaining websites and web applications. I work with various programming languages, such as HTML, CSS, JavaScript, TypeScript, and Next.js.
              </p>
            </div>
          </div>

          <div className={styles.skillBox}>
            <h1 className={styles.skillTitle}>HTML/CSS</h1>
            <div className={styles.progressBar} style={{ width: "90%" }}>
            
            </div>
          </div>

          <div className={styles.skillBox}>
            <h1 className={styles.skillTitle}>JavaScript</h1>
            <div className={styles.progressBar} style={{ width: "85%" }}>
              
            </div>
          </div>

          <div className={styles.skillBox}>
            <h1 className={styles.skillTitle}>TypeScript</h1>
            <div className={styles.progressBar} style={{ width: "70%" }}>
            
            </div>
          </div>

          <div className={styles.skillBox}>
            <h1 className={styles.skillTitle}>Next.js</h1>
            <div className={styles.progressBar} style={{ width: "50%" }}>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
