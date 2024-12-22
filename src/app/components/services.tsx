import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
import { TbBrandWebflow } from "react-icons/tb";
import styles from './Services.module.css';

const Services = () => {
    return (
        <section>
            <div id="services" className={styles.servicesSection}>
                <div>
                    <h1 className={styles.heading}>Services</h1>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <FaLaptopCode />
                            <h2 className={styles.cardTitle}>Website Development</h2>
                            <p>
                                I am a Front-end developer and use HTML, CSS, and JavaScript
                                to make a website visually appealing and responsive and
                                also Back-end developers and use languages like PHP, Python, Ruby,
                                and frameworks like Node.js to create databases, server logic,
                                and APIs that support website functionality. I am proficient in both front-end and back-end development, enabling
                                them to build complete web applications.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <MdOutlineMobileFriendly />
                            <h2 className={styles.cardTitle}>Responsive Design and Mobile Optimization</h2>
                            <p>
                                I ensure a website works well across all device sizes
                                (desktops, tablets, smartphones) is crucial today. I use responsive design techniques to make sure websites
                                are mobile-friendly, optimizing layouts and interactions for smaller screens.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <FaSearchengin />
                            <h2 className={styles.cardTitle}>Search Engine Optimization (SEO)</h2>
                            <p>
                                Many web developers offer SEO services, making sure that a site is built
                                with best practices for search engines in mind. This includes optimizing
                                site speed, implementing meta tags, and ensuring site structure
                                is optimized for ranking.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <TbBrandWebflow />
                            <h2 className={styles.cardTitle}>Custom Web Applications</h2>
                            <p>
                                For businesses needing more than a traditional website,
                                I create custom web applications tailored to specific functions,
                                such as online booking systems, customer portals, and internal tools.
                                These applications often involve complex logic and interactivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
