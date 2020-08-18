/**
 * 🙅‍♂️ Privacy
 *
 * Renders the Privacy Page Template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'

// Components
import Banner from '@components/Banner/Banner'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'

const Privacy = () => (
    <>
        <Meta
            title="Privacy | Daine Mawer"
            description="A word on my privacy policy"
            url="https://dainemawer.com/privacy"
        />
        <Layout>
            <Hero title="Privacy Policy." subtitle="A word on my privacy policy." />
            <article itemScope itemType="https://schema.org/BlogPosting" className="page-content">

                <div itemProp="articleBody">
                    <p>I&apos;m baby hoodie 90&apos;s polaroid bicycle rights shabby chic live-edge twee health goth forage iPhone brooklyn 3 wolf moon jean shorts. Vice fam +1 chia portland, disrupt master cleanse farm-to-table hoodie squid taiyaki. Taiyaki everyday carry literally, snackwave tbh mustache 90&apos;s intelligentsia edison bulb tumblr seitan master cleanse gastropub tacos tilde. Seitan post-ironic craft beer, man bun snackwave ugh skateboard tofu church-key iPhone four loko sustainable crucifix air plant. Taxidermy gochujang freegan kinfolk, schlitz raclette pabst offal. Shaman stumptown cray disrupt thundercats hoodie deep v cardigan.</p>
                    <p>Thundercats paleo schlitz, pickled listicle microdosing chillwave. Cornhole prism swag sriracha, raclette health goth ennui pickled YOLO fashion axe crucifix tousled. Tilde pour-over mixtape wolf, listicle artisan lomo typewriter skateboard meggings ugh williamsburg umami XOXO literally. Mixtape bicycle rights sartorial locavore man braid knausgaard hammock mlkshk swag heirloom lyft tattooed biodiesel. Biodiesel forage cray XOXO, selvage migas post-ironic retro beard meditation edison bulb master cleanse. Swag bushwick cronut lumbersexual messenger bag sriracha gentrify, af succulents. Hella butcher chillwave, beard quinoa enamel pin bespoke tofu flannel keffiyeh schlitz.</p>
                    <p>Pop-up neutra raclette, cliche tote bag venmo beard tbh seitan typewriter four dollar toast man braid green juice intelligentsia. Man braid freegan af woke DIY. Organic snackwave single-origin coffee hexagon YOLO fixie authentic photo booth quinoa twee. Post-ironic sartorial listicle swag yuccie flannel. Etsy venmo yuccie iceland man braid, vaporware tattooed shoreditch chicharrones raclette dreamcatcher narwhal. Irony disrupt hexagon kogi, affogato viral occupy raw denim intelligentsia fixie readymade health goth gochujang. Vaporware hell of photo booth tofu, vegan mumblecore kogi irony distillery YOLO cred hashtag neutra.</p>
                    <p>Knausgaard activated charcoal la croix poke vice poutine wayfarers celiac trust fund microdosing. Man bun put a bird on it asymmetrical beard, succulents kickstarter thundercats austin cardigan butcher DIY irony live-edge. Pok pok sustainable hoodie health goth seitan YOLO coloring book ramps portland poke. Subway tile yr locavore hoodie vape etsy waistcoat cornhole salvia copper mug. Locavore asymmetrical dreamcatcher, franzen tumblr microdosing poke 90&apos;s pinterest vape. Tbh typewriter sriracha, cred etsy authentic jean shorts tumblr vexillologist tumeric single-origin coffee. Trust fund put a bird on it PBR&B seitan bitters umami glossier.</p>
                    <p>Small batch selvage godard hashtag disrupt PBR&B. Quinoa kinfolk polaroid godard. Synth ramps XOXO, chicharrones freegan locavore meggings cronut fingerstache distillery poutine humblebrag. YOLO tacos knausgaard banh mi hoodie food truck put a bird on it marfa man braid blog messenger bag. Subway tile ethical occupy neutra sartorial blog.</p>
                </div>

                <p className="screen-reader-text">
                    <strong>Publish Date</strong>:
                    <span itemProp="datePublished">
                            <time dateTime="2016-05-01">May 1, 2016</time>
                        </span>
                </p>

                <p className="screen-reader-text">
                    <strong>Last Modified Date</strong>:
                    <span itemProp="dateModified">
                            <time dateTime="2016-05-01">May 1, 2016</time>
                        </span>
                </p>

            </article>
            <Banner background="rgba(185,141,79, 0.28)" />
        </Layout>
    </>
);

export default Privacy;