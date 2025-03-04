import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import rssFeeds from '../utils/rssFeeds.json';
import { Box, Heading, Link, List, ListItem } from '@chakra-ui/react';
// 型定義
type BlogPost = {
    title: string;
    link: string;
    pubDate?: string;
};

type BlogData = {
    [key: string]: { nodes: BlogPost[] };
};

type SiteData = {
    [key: string]: BlogPost;
};

type DataProps = BlogData & SiteData;

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
    return (
        <Layout>
            {rssFeeds.map((rssFeed) => {
                const siteName = rssFeed.name;
                if (data[`allFeed${siteName}`] && data[`feed${siteName}Meta`]) {
                    return (
                        <Box
                            key={siteName}
                            mb={8}
                            borderBlockEnd={1}
                            borderRadius='lg'
                        >
                            <Heading as='h2' size='md'>
                                <Link
                                    href={data[`feed${siteName}Meta`].link}
                                    isExternal
                                >
                                    {data[`feed${siteName}Meta`].title}
                                </Link>
                            </Heading>
                            <List spacing={2} mt={2} p={0}>
                                {data[`allFeed${siteName}`].nodes.map(
                                    (post, index) => (
                                        <Box mb={6}>
                                            {post.pubDate ? (
                                                <Box fontSize='ms'>
                                                    {new Date(
                                                        post.pubDate
                                                    ).toLocaleString()}
                                                </Box>
                                            ) : null}
                                            <ListItem key={index}>
                                                <Link
                                                    href={post.link}
                                                    isExternal
                                                >
                                                    {post.title}
                                                </Link>
                                            </ListItem>
                                        </Box>
                                    )
                                )}
                            </List>
                        </Box>
                    );
                }
                return null;
            })}
        </Layout>
    );
};

export default IndexPage;

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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
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
                pubDate
            }
        }
    }
`;
