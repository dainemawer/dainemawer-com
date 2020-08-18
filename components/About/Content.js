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
                <img className={styles.image} src="/dainemawer.jpg" alt="Daine Mawer" />
            </div>
            <div>
                <p>Ramps banh mi chillwave readymade bushwick, pug hella glossier palo santo meggings photo booth. Tattooed dreamcatcher mixtape ennui, tbh leggings drinking vinegar. Fam banh mi chartreuse banjo live-edge. Selvage woke poutine, literally thundercats you probably haven&apos;t heard of them everyday carry wolf 3 wolf moon. Meggings literally tilde humblebrag keffiyeh, blue bottle kinfolk flannel synth cred sriracha.</p>
                <p>90&apos;s biodiesel man braid taxidermy woke. Iceland literally air plant, tousled letterpress bicycle rights trust fund enamel pin tote bag YOLO vaporware umami everyday carry jianbing hammock. Messenger bag cred sriracha art party four dollar toast fam. Meggings literally tilde humblebrag keffiyeh, blue bottle kinfolk flannel synth cred sriracha. Iceland literally air plant, tousled letterpress bicycle rights.</p>
            </div>
        </section>
        <div>
            <p>Messenger bag fingerstache poke organic pork belly tilde literally banh mi master cleanse kitsch. Chartreuse retro jianbing neutra artisan, fanny pack tumeric small batch stumptown hot chicken cloud bread occupy vice. Fingerstache 8-bit fanny pack occupy four dollar toast af mustache 3 wolf moon. Af street art twee hashtag slow-carb.</p>
        </div>
    </>
);

export default Content;