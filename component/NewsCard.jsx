import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const NewsCard = ({ image, date, title, href }) => {
    console.log(image);
    return (
        <Box
            w={["100%"]}
            //     className="filter"
            shadow="0px 6px 12px rgba(24, 39, 75, 0.12)"
            border="1px"
            borderColor="brand.white"
        //     maxW="328px"
            cursor="pointer"
            mx="auto"
        >
            <Box w="100%" h="193px" >
                <Image src={image} alt="" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Box pt="20px" pb="32px" px="20px">
                <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="brand.verylightGray"
                >
                    {date}
                </Text>
                <Text
                    color="brand.blue"
                    fontSize={["16px", null, "20px"]}
                    mt="16px"
                    fontWeight="500"
                    noOfLines="3"
                >
                    {title}
                </Text>
                <Link
                    href={href}
                    mt="32px"
                    display="inline-block"
                    color="brand.orange"
                    fontSize={["14px"]}
                    fontWeight="700"
                >
                    READ MORE
                </Link>
            </Box>
        </Box>
    );
};

export default NewsCard;
