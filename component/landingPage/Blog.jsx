import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import { ButtonOutline } from "../Buttons";
import NewsCard from "../NewsCard";

const Blog = () => {
    return (
        <Box py="80px">
            <ScreenWidth>
                <Box>
                    <Box>
                        <Text
                            color="brand.orange"
                            fontWeight="500"
                            fontSize={["14px", null, "20px"]}
                        >
                            Blog
                        </Text>

                        <Text
                            color="brand.blue"
                            fontWeight="500"
                            fontSize={["24px", null, "36px"]}
                        >
                            Latest News
                        </Text>
                    </Box>
                    <Box mt="40px">
                        <SimpleGrid minChildWidth="250px" gap="40px">
                            {news.map(({ i, image, date, title, href }) => {
                                return (
                                    <NewsCard
                                        key={i}
                                        image={image}
                                        date={date}
                                        href={href}
                                        title={title}
                                    />
                                );
                            })}
                        </SimpleGrid>
                    </Box>
                    <Box mt="40px" textAlign={["center", null, "right"]}>
                        <Link href="#" _hover={{ textDecoration: "none" }}>
                            <ButtonOutline
                                text="SEE MORE"
                                maxWidth="156px"
                                blue={true}
                                icon="arrow"
                            />
                        </Link>
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Blog;

const news = [
    {
        image: "images/blog1.svg",
        date: "September 23, 2022",
        title: "Social media attacks surged in 2021, financial institutions targeted the most",
        href: "",
    },
    {
        image: "images/blog2.svg",
        date: "September 23, 2022",
        title: "Social media attacks surged in 2021, financial institutions targeted the most",
        href: "",
    },
    {
        image: "images/blog3.svg",
        date: "September 23, 2022",
        title: "Social media attacks surged in 2021, financial institutions targeted the most",
        href: "",
    },
];
