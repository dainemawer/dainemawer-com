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
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
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
                agency: entry.agency || null,
                client: entry.client || null,
                content: entry.content || null,
                date: entry.date || null,
                excerpt: entry.excerpt || null,
                featured: {
                    description: entry.featured.fields.description,
                    height: entry.featured.fields.file.details.image.height,
                    title: entry.featured.fields.title,
                    url: entry.featured.fields.file.url.replace('//', 'https://'),
                    width: entry.featured.fields.file.details.image.width
                },
                hero: {
                    description: entry.hero.fields.description,
                    height: entry.hero.fields.file.details.image.height,
                    title: entry.hero.fields.title,
                    url: entry.hero.fields.file.url.replace('//', 'https://'),
                    width: entry.hero.fields.file.details.image.width
                },
                hidden: entry.hidden || null,
                id: entry.id || null,
                modified: sys.updatedAt || null,
                published: sys.createdAt || null,
                role: entry.role || null,
                title: entry.title || null,
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
                    id: fields.id || null,
                    linkedin: fields.linkedin || null,
                }
                break;
            case 'projects':
                post = {
                    agency: fields.agency || null,
                    client: fields.client || null,
                    content: fields.content || null,
                    date: fields.date || null,
                    excerpt: fields.excerpt || null,
                    featured: {
                        description: fields.featured.fields.description || null,
                        height: fields.featured.fields.file.details.image.height,
                        title: fields.featured.fields.title || null,
                        url: fields.featured.fields.file.url.replace('//', 'https://'),
                        width: fields.featured.fields.file.details.image.width
                    },
                    hero: {
                        description: fields.hero.fields.description || null,
                        height: fields.hero.fields.file.details.image.height,
                        title: fields.hero.fields.title || null,
                        url: fields.hero.fields.file.url.replace('//', 'https://'),
                        width: fields.hero.fields.file.details.image.width
                    },
                    hidden: fields.hidden,
                    id: fields.id || null,
                    role: fields.role || null,
                    slug: fields.slug || null,
                    title: fields.title || null,
                    type: this.type,
                }
                break;
            case 'articles':
                post = {
                    content: fields.content || null,
                    excerpt: fields.excerpt || null,
                    featured: {
                        description: fields.featured.fields.description || null,
                        height: fields.featured.fields.file.details.image.height,
                        title: fields.featured.fields.title || null,
                        url: fields.featured.fields.file.url.replace('//', 'https://'),
                        width: fields.featured.fields.file.details.image.width
                    },
                    hero: {
                        description: fields.hero.fields.description || null,
                        height: fields.hero.fields.file.details.image.height,
                        title: fields.hero.fields.title || null,
                        url: fields.hero.fields.file.url.replace('//', 'https://'),
                        width: fields.hero.fields.file.details.image.width
                    },
                    id: fields.id || null,
                    modified: sys.updatedAt || null,
                    published: sys.createdAt || null,
                    slug: fields.slug || null,
                    title: fields.title || null,
                    type: this.type,
                }
                break;
            default:
                post = { error: 'Nothing matches' }
        }

        return post;

    }
}

export default Contentful;