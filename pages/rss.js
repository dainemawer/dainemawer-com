/**
 * 📘 RSS
 *
 * RSS Feed for Articles
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'

// Internal
import Contentful from "@lib/contentful";

const RSSFeed = articles => {
    let items = ''

    articles.forEach( article => {
        items += `
            <item>
                <title>${article.title}</title>
                <link>https://dainemawer.com/articles/${article.slug}</link>
                <pubDate>${article.published}</pubDate>
                <description>${article.excerpt}</description>
            </item>
        `
    });

    return items;
}

const RSS = articles => {
    return `<?xml version="1.0" ?>
        <rss version="2.0">
            <channel>
                <title>Daine Mawer</title>
                <link>https://dainemawer.com</link>
                <description>I build accessible front-ends for the industries biggest brands.</description>
                <language>en</language>
                <lastBuildDate>${articles[0].published}</lastBuildDate>
                ${RSSFeed(articles)}
            </channel>
        </rss>
    `;
}

RSS.getInitialProps = async ({ res }) => {

    if(!res) {
        return;
    }

    const ArticlesAPI = new Contentful('articles');
    const articles = await ArticlesAPI.fetchEntries();

    res.setHeader("Content-Type", "text/xml");
    res.write(RSS(articles))
    res.end();

}

export default RSS;