/**
 * ⚙️ Helpers
 *
 * Helper functions for generateSiteMap
 *
 * @file helpers
 * @author Daine Mawer
 * @since 1.0.0
 */

require('dotenv').config();
const {createClient} = require('contentful');

const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
});

const CONTENT_TYPE_BLOGPOST = 'articles';
const CONTENT_TYPE_PROJECT = 'projects';

const getAllArticles = async () =>
    client.getEntries({
        content_type: CONTENT_TYPE_BLOGPOST,
        select: 'fields.title,fields.slug',
    });

exports.generateAllArticles = async () => {
    const articles = await getAllArticles();
    return articles.items.map((item) => ({...item.fields}));
};

const getAllProjects = async () =>
    client.getEntries({
        content_type: CONTENT_TYPE_PROJECT,
        'fields.hidden[ne]': 'true',
        select: 'fields.title,fields.slug'
    });

exports.generateAllProjects = async () => {
    const articles = await getAllProjects();
    return articles.items.map((item) => ({...item.fields}));
};