import React from "react";
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div>
        <h1 className={styles.heading}>Contact Me</h1>
        <form>
          <div className={styles.formContainer}>
            <div className={styles.inputGrid}>
              <input
                type="text"
                placeholder="Name"
                className={styles.inputField}
                required
              />
              <input
                type="text"
                placeholder="Email@"
                className={styles.inputField}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className={styles.inputField}
              required
            />
             <div id="TextArea"><textarea
              rows={6}
              placeholder="Message"
              className={styles.textareaField}
              required
            ></textarea></div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
