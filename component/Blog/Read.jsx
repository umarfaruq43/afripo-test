import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "./Hero";
import Layout from "../../Layout/Layout";
import ScreenWidth from "../../Layout/ScreenWidth";
const Read = () => {
    return (
        <Layout>
            <Hero />
            <ScreenWidth>
                <Flex mt="80px">
                    <Box>
                        <Text maxW="571px"
                            fontSize={["20px", null, "24px"]}
                            fontWeight="700"
                        >
                            Social media attacks surged in 2021, financial
                            institutions targeted the most
                        </Text>

                        <Image
                            src="images/blogmain.png"
                            alt="Blog main Image"
                        />
                    </Box>
                    <Box></Box>
                </Flex>
            </ScreenWidth>
        </Layout>
    );
};

export default Read;
