import algoliasearch from 'algoliasearch';

const appId = process.env.ALGOLIA_APPLICATION_KEY;
const apiKey = process.env.ALGOLIA_API_KEY;

export default class algolia {
    constructor(index) {
        this.client = algoliasearch(appId, apiKey);
        this.index = index;
    }

    async search(query) {
        const req = await this.client.initIndex(this.index).search({
            query,
            hitsPerPage: 3,
            page: 0,
            analytics: false,
            attributesToRetrieve: '*',
            facets: []
        });

        return await req.hits;
    }
}
