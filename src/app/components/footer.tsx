import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css"
export default function Footer() {
    return (
        <footer>
            <div id="footer" className={styles.footerContainer}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <p className={styles.logoText}>S.</p> Saeed
                    </div>
                    <div className={styles.socialIcons}>
                    <div className={styles.iconWrapper}>
                     <FaFacebookSquare />
                       </div>

                       <div className={styles.iconWrapper}>
                        <FaInstagramSquare  />
                        </div>
                        <div className={styles.iconWrapper}>
                        <FaLinkedin />
                        </div>
                    </div>
                    <div>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <Link className={styles.navLink} href="/">Home</Link>
                                <Link className={styles.navLink} href="#about">About</Link>
                                <Link className={styles.navLink} href="#services">Services</Link>
                                <Link className={styles.navLink} href="#project">Projects</Link>
                                <Link className={styles.navLink} href="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
