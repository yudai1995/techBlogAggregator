import React from 'react';
import Layout from '../components/layout';
import { graphql, PageProps } from 'gatsby';
import rssFeeds from '../utils/rssFeeds.json';
import { Box, Link } from '@chakra-ui/react';

type BlogPost = {
    title: string;
    link: string;
};

type BlogData = {
    [key: string]: { nodes: BlogPost[] };
};

type SiteData = {
    [key: string]: BlogPost;
};

type DataProps = BlogData & SiteData;

const BlogsPage: React.FC<PageProps<DataProps>> = ({ data }) => {
    return (
        <Layout>
            <Box as='ul'>
                {rssFeeds.map((rssFeed) => {
                    const siteName = rssFeed.name;
                    if (data[`feed${siteName}Meta`]) {
                        return (
                            <Box
                                as='li'
                                key={siteName}
                                listStyleType={'none'}
                                mb={4}
                            >
                                <Link
                                    href={data[`feed${siteName}Meta`].link}
                                    isExternal
                                >
                                    {data[`feed${siteName}Meta`].title}
                                </Link>
                            </Box>
                        );
                    }
                    return null;
                })}
            </Box>
        </Layout>
    );
};

export default BlogsPage;

export const query = graphql`
    query {
        feedLineYahooMeta {
            link
            title
        }
        allFeedLineYahoo {
            nodes {
                title
                link
            }
        }
        feedSakuraInternetMeta {
            link
            title
        }
        allFeedSakuraInternet {
            nodes {
                title
                link
            }
        }
        feedHatenaMeta {
            link
            title
        }
        allFeedHatena {
            nodes {
                title
                link
            }
        }
        feedGoogleMeta {
            link
            title
        }
        allFeedGoogle {
            nodes {
                title
                link
            }
        }
        feedDwangoMeta {
            link
            title
        }
        allFeedDwango {
            nodes {
                title
                link
            }
        }
        feedMixiMeta {
            link
            title
        }
        allFeedMixi {
            nodes {
                title
                link
            }
        }
        feedCyberAgentMeta {
            link
            title
        }
        allFeedCyberAgent {
            nodes {
                title
                link
            }
        }
        feedYumemiMeta {
            link
            title
        }
        allFeedYumemi {
            nodes {
                title
                link
            }
        }
        feedClassMethodMeta {
            link
            title
        }
        allFeedClassMethod {
            nodes {
                title
                link
            }
        }
        feedMercariMeta {
            link
            title
        }
        allFeedMercari {
            nodes {
                title
                link
            }
        }
        feedStudySapuriMeta {
            link
            title
        }
        allFeedStudySapuri {
            nodes {
                title
                link
            }
        }
        feedGunosyMeta {
            link
            title
        }
        allFeedGunosy {
            nodes {
                title
                link
            }
        }
        feedCookpadMeta {
            link
            title
        }
        allFeedCookpad {
            nodes {
                title
                link
            }
        }
        feedGurunaviMeta {
            link
            title
        }
        allFeedGurunavi {
            nodes {
                title
                link
            }
        }
        feedDelyMeta {
            link
            title
        }
        allFeedDely {
            nodes {
                title
                link
            }
        }
        feedKLabMeta {
            link
            title
        }
        allFeedKLab {
            nodes {
                title
                link
            }
        }
        feedMoneyForwardMeta {
            link
            title
        }
        allFeedMoneyForward {
            nodes {
                title
                link
            }
        }
        feedFreeeMeta {
            link
            title
        }
        allFeedFreee {
            nodes {
                title
                link
            }
        }
        feedZaimMeta {
            link
            title
        }
        allFeedZaim {
            nodes {
                title
                link
            }
        }
        feedWantedlyMeta {
            link
            title
        }
        allFeedWantedly {
            nodes {
                title
                link
            }
        }
        feedFindyMeta {
            link
            title
        }
        allFeedFindy {
            nodes {
                title
                link
            }
        }
        feedKaonaviMeta {
            link
            title
        }
        allFeedKaonavi {
            nodes {
                title
                link
            }
        }
        feedSansanMeta {
            link
            title
        }
        allFeedSansan {
            nodes {
                title
                link
            }
        }
    }
`;
