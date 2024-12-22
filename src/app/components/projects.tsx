import React from "react";
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section id="project" className={styles.projectsSection}>
            <div>
                <h1 className={styles.heading}>Projects</h1>
                <div className={styles.cardGrid}>
                    {/* Card 1 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardImageContainer}>
                                <img src="/project01.jpg" alt="Website Project" />
                                <div>
                                    <h1 className={styles.cardTitle}>WEBSITE</h1>
                                    <p className={styles.cardDescription}>
                                        An e-commerce website is an online platform designed for buying and selling products or services. It typically includes essential features like product listings, a shopping cart, secure checkout, and payment processing to provide a smooth shopping experience.
                                    </p>
                                    <a href="a" className={styles.exploreButton}>Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardImageContainer}>
                                <img src="/project2.jpg" alt="Calculator Project" />
                                <div>
                                    <h1 className={styles.cardTitle}>CALCULATOR</h1>
                                    <p className={styles.cardDescription}>
                                        It’s a basic web-based calculator built with HTML, CSS, and JavaScript. It features a simple interface with buttons for numbers, basic arithmetic operations (addition, subtraction, multiplication, and division), and a display area to show the input and results.
                                    </p>
                                    <a href="a" className={`${styles.exploreButton} ${styles.hoverExploreButton}`}>Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardImageContainer}>
                                <img  src="/project003.jpg" alt="Weather App Project" />
                                <div>
                                    <h1 className={styles.cardTitle}>WEATHER APP</h1>
                                    <p className={styles.cardDescription}>
                                        The Weather App project is a web-based application that provides real-time weather information for any city. It is built using HTML, CSS, and JavaScript, and often incorporates a weather API (such as OpenWeatherMap) to fetch live data like temperature, humidity, wind speed, and forecast details.
                                    </p>
                                    <a href="a" className={`${styles.exploreButton} ${styles.hoverExploreButton}`}>Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
