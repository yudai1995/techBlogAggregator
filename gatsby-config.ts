import type { GatsbyConfig } from 'gatsby';
import rssFeeds from './src/utils/rssFeeds.json';

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Tech Blog Aggregator',
    },
    plugins: [
        ...rssFeeds.map((feed) => ({
            resolve: 'gatsby-source-rss-feed',
            options: {
                url: feed.feed,
                name: feed.name,
            },
        })),
        '@chakra-ui/gatsby-plugin',
    ],
};

export default config;
