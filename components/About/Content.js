/**
 * 🧑‍💻 About Content
 *
 * Handles special layout on About template
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'

// Styles
import styles from './About.module.scss'

const Content = () => (
    <>
        <section className={styles.grid}>
            <div>
                <img className={styles.image} src="/dainemawer.jpg" alt="Daine in Amsterdam, The Netherlands in 2019" />
            </div>
            <div>
                <p>Over the past 10 years, Daine has worked on some of the worlds most top of mind brands. From <strong>Coca Cola</strong> to <strong>The Nobel Peace Prize</strong> and award winning author <strong>Ken Follet</strong>, Daine is a true South African success story. Born and raised in Cape Town, Daine has spent years honing his craft. After completing his <strong>B.A in Creative Brand Communication</strong>, he put down Art Direction and ventured into the world of code. Completely self-taught, he spent the next few years understanding the ins and outs of <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>NodeJS</strong> and more.</p>
                <p>Coming from a strong design and visual communication background has proven to be one of his biggest strengths, allowing him to consistently ensure that design aesthetic, accessibility and engineering coincide peacefully. His articles and know-how have been shared on websites like <strong>Medium</strong>, <strong>Quora</strong>, <strong>Envato</strong>, <strong>Web Designer Depot</strong> and <strong>CSS Tricks</strong>.</p>
            </div>
        </section>
        <div>
            <p>Daine is also a certified <strong>Agile42 Scrum Master</strong>, Agile enthusiast, <strong>speaker</strong>, <strong>writer</strong> and a willing member of the open-source community who gives back to those less fortunate than himself through building websites for charities and schools that need them. An avid traveller and digital nomad, he has spent the last 3 years travelling the world, while working for 10up, an acclaimed US-based digital agency on brands like <strong>Uber</strong>, <strong>Microsoft</strong> and <strong>Samsung</strong>.</p>
        </div>
    </>
);

export default Content;