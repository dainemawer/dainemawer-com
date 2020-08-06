/**
 * 🔑 Contentful API
 *
 * Handles API calls to Contentful.
 *
 * @link https://www.contentful.com/developers/docs/references/content-delivery-api/
 * @author Daine Mawer
 */
import {createClient} from 'contentful';

class Contentful {
    constructor(type) {
        this.client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        });

        this.type = type;
    }

    async fetchEntries() {
        return this.client
            .getEntries({
                content_type: this.type,
                order: 'sys.createdAt'
            })
            .then((entries) => {
                if (entries && entries.items && entries.items.length > 0) {
                    const posts = entries.items.map((entry) => this.convertEntry(entry, this.type));
                    return posts;
                }
                return [];
            });
    }

    async fetchEntryBySlug(slug) {
        return await this.client.getEntries({
            content_type: this.type,
            'fields.slug': slug,
        });
    }

    async getEntryBySlug(slug) {
        try {
            const content = await this.fetchEntryBySlug(slug);
            const entry = content.items[0].fields || null;
            const sys = content.items[0].sys || null;

            return {
                published: sys.createdAt || null,
                modified: sys.updatedAt || null,
                title: entry.title || null,
                content: entry.content || null,
                excerpt: entry.excerpt || null,
                hidden: entry.hidden || null,
                featured: {
                    title: entry.featured.fields.title,
                    description: entry.featured.fields.description,
                    url: entry.featured.fields.file.url.replace('//', 'https://'),
                    height: entry.featured.fields.file.details.image.height,
                    width: entry.featured.fields.file.details.image.width
                },
                hero: {
                    title: entry.hero.fields.title,
                    description: entry.hero.fields.description,
                    url: entry.hero.fields.file.url.replace('//', 'https://'),
                    height: entry.hero.fields.file.details.image.height,
                    width: entry.hero.fields.file.details.image.width
                },
                client: entry.client || null,
                agency: entry.agency || null,
                date: entry.date || null,
                role: entry.role || null,
                id: entry.id || null,
                type: this.type,
            }

        } catch (error) {
            console.error(error);
        }
    }

    convertEntry(data, type) {
        const { fields, sys } = data;
        let post;

        switch(type) {
            case 'kudos':
                post = {
                    author: fields.author || null,
                    content: fields.content || null,
                    linkedin: fields.linkedin || null,
                    id: fields.id || null,
                }
                break;
            case 'projects':
                post = {
                    title: fields.title || null,
                    hidden: fields.hidden,
                    excerpt: fields.excerpt || null,
                    featured: {
                        description: fields.featured.fields.description || null,
                        title: fields.featured.fields.title || null,
                        url: fields.featured.fields.file.url.replace('//', 'https://'),
                        height: fields.featured.fields.file.details.image.height,
                        width: fields.featured.fields.file.details.image.width
                    },
                    hero: {
                        description: fields.hero.fields.description || null,
                        title: fields.hero.fields.title || null,
                        url: fields.hero.fields.file.url.replace('//', 'https://'),
                        height: fields.hero.fields.file.details.image.height,
                        width: fields.hero.fields.file.details.image.width
                    },
                    content: fields.content || null,
                    client: fields.client || null,
                    agency: fields.agency || null,
                    date: fields.date || null,
                    role: fields.role || null,
                    id: fields.id || null,
                    slug: fields.slug || null,
                    type: this.type,
                }
                break;
            case 'articles':
                post = {
                    published: sys.createdAt || null,
                    modified: sys.updatedAt || null,
                    id: fields.id || null,
                    title: fields.title || null,
                    excerpt: fields.excerpt || null,
                    content: fields.content || null,
                    slug: fields.slug || null,
                    type: this.type,
                    hero: {
                        description: fields.hero.fields.description || null,
                        title: fields.hero.fields.title || null,
                        url: fields.hero.fields.file.url.replace('//', 'https://'),
                        height: fields.hero.fields.file.details.image.height,
                        width: fields.hero.fields.file.details.image.width
                    },
                    featured: {
                        description: fields.featured.fields.description || null,
                        title: fields.featured.fields.title || null,
                        url: fields.featured.fields.file.url.replace('//', 'https://'),
                        height: fields.featured.fields.file.details.image.height,
                        width: fields.featured.fields.file.details.image.width
                    },
                }
                break;
            default:
                post = {

                }
        }

        return post;

    }
}

export default Contentful;