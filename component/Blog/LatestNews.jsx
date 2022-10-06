import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ScreenWidth from "../../Layout/ScreenWidth";
import NewsCard from "../NewsCard";

const LatestNews = () => {
    return (
        <Box py={["40px", null, "80px"]}>
            <ScreenWidth>
                <Box>
                    <Text
                        fontSize={["4l", null, "4xl"]}
                        fontWeight={["700", null, "400"]}
                    >
                        Latest News
                    </Text>
                    {/* News ======>> */}
                    <Box pt="40px">
                        <SimpleGrid minChildWidth={"300px"} gap="40px">
                            {
                                news.map(({ image, date, title, href }, i) => {
                                    return (
                                        <NewsCard
                                            key={i}
                                            image={image}
                                            date={date}
                                            title={title}
                                            href={href}
                                        />
                                    );
                                })

                                //
                            }
                        </SimpleGrid>
                    </Box>
                    <Flex mt="40px" justify="space-between">
                        <Flex
                            cursor="pointer"
                            align="center"
                            fontSize="14px"
                            fontWeight="400"
                            color="brand.blue"
                        >
                            <Icon as={BsArrowLeft} mr="11.5px" />
                            <Text>Older entries</Text>
                        </Flex>

                        <Flex
                            cursor="pointer"
                            align="center"
                            fontSize="14px"
                            fontWeight="400"
                            color="brand.blue"
                        >
                            <Text>Next entries</Text>
                            <Icon as={BsArrowRight} ml="11.5px" />
                        </Flex>
                    </Flex>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default LatestNews;

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
    {
        image: "images/blog3.svg",
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
    {
        image: "images/blog3.svg",
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
    {
        image: "images/blog3.svg",
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
    {
        image: "images/blog3.svg",
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
    {
        image: "images/blog3.svg",
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
    {
        image: "images/blog3.svg",
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
    {
        image: "images/blog3.svg",
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
    {
        image: "images/blog3.svg",
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
