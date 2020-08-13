/**
 * 🔒 Terms
 *
 * Renders the Terms Page Template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'


// Components
import Banner from '@components/Banner/Banner'
import Layout from '@components/Layout/Layout'
import Hero from  '@components/Hero/Hero'
import Meta from '@components/Meta/Meta'

const Uses = () => (
    <>
        <Meta
            title="Uses | Daine Mawer"
            description="Tools of My Trade"
            url="https://dainemawer.com/uses"
        />
        <Layout>
            <Hero title="Uses" subtitle="The tools I use every day to get the job done" />
            <article itemScope itemType="https://schema.org/BlogPosting" className="page-content">

                <div itemProp="articleBody">
                    <section>
                        <h2>Software</h2>
                        <p>
                            <strong>Editor</strong> - Visual Studio Code (VS Code) is the
                            primary IDE used in my work. I&apos;ve experienced multiple IDE’s,
                            including PHPStorm and Atom. However, VS Code, provides a fast and
                            minimal UI to work in as well as incredible tooling. I wrote an
                            article for{' '}
                            <a
                                href='https://webdesign.tutsplus.com'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Tuts+
                            </a>{' '}
                            highlighting some of the best{' '}
                            <a
                                href='https://webdesign.tutsplus.com/tutorials/a-guide-to-setting-up-vs-code-for-front-end-development--cms-30461'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                VS Code plugins around
                            </a>
                            . Wes Bos&apos;s{' '}
                            <a
                                href='https://github.com/wesbos/cobalt2-vscode'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Colbalt2
                            </a>
                            , is the colour theme of preference.
                        </p>
                        <p>
                            <strong>Terminal</strong> -{' '}
                            <a
                                href='https://www.iterm2.com/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                iTerm2
                            </a>{' '}
                            is the terminal replacement used for mac OS X’s native Terminal
                            application. I spend more time in VS Code&apos;s terminal window as
                            opposed to iTerm2. However, I ensure both shell&apos;s run the same
                            colour theme and settings.{' '}
                            <a
                                href='https://ohmyz.sh/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                ZSH
                            </a>{' '}
                            as well as Oh My ZSH are utilised as opposed to Bash.{' '}
                            <a
                                href='https://fonts.google.com/specimen/Inconsolata'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Inconsolata
                            </a>{' '}
                            is used as the font of choice.
                        </p>
                        <p>
                            <strong>Browser</strong> - A fair amount of my time has been spent
                            in Google Chrome. However, recently I have transitioned to Mozilla
                            Firefox due to my concerns regarding privacy. Brave is a vendor that
                            I am familiar with, however I find it uncomfortable to navigate.
                        </p>
                        <p>
                            <strong>Password Management</strong> -{' '}
                            <a
                                href='https://1password.com/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                1Password
                            </a>{' '}
                            is used to store passwords across my various devices. I recommend a
                            premium subscriptions of 1Password as it stores passwords and
                            details in the cloud.
                        </p>
                        <p>
                            <strong>Design</strong> -{' '}
                            <a
                                href='https://www.sketch.com/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Sketch
                            </a>{' '}
                            is used for design based assets used in projects, including scalable
                            vector graphics (SVG&apos;s). As my current focus is not on raster
                            editing, Sketch is a great platform for icons, resizing images etc.
                            Sketch has introduced additional features such as prototyping which
                            allows for seamless presentational capabilities and more efficient
                            translation from design to code.
                        </p>
                        <p>
                            <strong>Communication</strong> -{' '}
                            <a
                                href='https://slack.com/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Slack
                            </a>{' '}
                            has become a part of my daily routine. Slack is used for all
                            communications with clients and team members. The integration with
                            Google Calendar and Uber allows me to stay ahead of the game.
                        </p>
                        <p>
                            <strong>Music</strong> -{' '}
                            <a
                                href='https://www.spotify.com/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Spotify Premium
                            </a>{' '}
                            allows for the curation of my own library from the “Discover Weekly”
                            and “Release Radar” playlists. Spotify is far more intelligent from
                            a “suggestions” perspective, and definitely seem to know my taste
                            better than I do.
                        </p>
                        <p>
                            <strong>Tasks</strong> - From JIRA, Trello, Asana, Todoist,
                            I&apos;ve tested most tools. For my client tasks, JIRA is the
                            project management platform of choice. For personal tasks I depend
                            on{' '}
                            <a
                                href='https://todoist.com/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Todoist
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2>Hardware</h2>
                        <p>
                            <strong>Computer</strong> - A MacBook Pro 15-inch, 2.8 GHz Quad Core
                            i7 with 16GB of RAM is used for my professional work. The MacBook is
                            a 2017 model with Touchbar. In addition to the laptop, an Apple
                            Magic Wireless Mouse and Keyboard are used. Secondary screens are
                            not preferred, however, I do utilise the Sidecar functionality on
                            iPad Pro, (9.7- inch) which has proved to be incredibly useful.
                        </p>
                        <p>
                            <strong>Phone</strong> - A iPhone Xs is used for my professional
                            work. My iPhone is mostly managed on “Do Not Disturb” mode
                            throughout the day. Minimal applications are stored on the phone, in
                            my attempt to decrease the ScreenTime percentage on a weekly basis.
                        </p>
                        <p>
                            <strong>Notebook</strong> - Various{' '}
                            <a
                                href='https://us.moleskine.com/en/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Moleskine
                            </a>{' '}
                            notebooks are used for my professional work. On a day-to-day basis I
                            have 2 A4 size notebooks, one is a bullet journal for tasks. One is
                            used for journalling and a smaller A5 notebook is used for notes
                            that I take when upskilling via online courses.
                        </p>
                    </section>

                    <section>
                        <h2>Gear</h2>
                        <p>
                            <strong>Laptop Bag</strong> - A navy blue{' '}
                            <a
                                href='https://www.thule.com/en-za/backpacks/laptop-backpacks/thule-subterra-backpack-23l-_-3204052'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Thule Subterra 23L Backpack
                            </a>{' '}
                            is used. This particular bag has accompanied me on my travels all
                            over the world. I&apos;ve always been impressed with Thule&apos;s
                            engineering and their bags are almost indestructible.
                        </p>
                        <p>
                            <strong>Transport</strong> - Recently, I purchased an electric
                            skateboard, which I am in love with. The skateboard is an{' '}
                            <a
                                href='https://evolveskateboardssa.com/products/gtr-bamboo-2-in-1'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Evolve GTR 2 14AH Bamboo
                            </a>
                            . Currently, the skateboard is only fitted with the street kit.
                            However, when the time is right, I plan to upgrade the kit to the AT
                            (All Terrain) kit. Having skated most of my life, using an electric
                            skateboard to transport me to meetings has been a dream.
                        </p>
                        <p>
                            <strong>Headphones</strong> - The best purchase that I&apos;ve made
                            to date has been a pair of{' '}
                            <a
                                href='https://www.amazon.com/dp/B0756GB78C/ref=twister_B075RYG44J?_encoding=UTF8&psc=1'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                Bose Quiet Comfort II
                            </a>{' '}
                            (Bluetooth Noise Cancelling) headphones. These headphones accompany
                            me to my favourite coffee shops, and are a great investment for
                            travel.
                        </p>
                        <p>
                            <strong>Coffee Machine</strong> - I own a Delonghi / Nespresso
                            machine which has a cappuccino and espresso setting that I probably
                            use too often for my own good.
                        </p>
                    </section>
                    <p>
                        Missing something? Ask me on{' '}
                        <a
                            href='https://twitter.com/dainemawer'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            Twitter
                        </a>
                    </p>
                </div>

            </article>
            <Banner background="rgba(185,141,79, 0.28)" />
        </Layout>
    </>
);

export default Uses;