import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";

const Partners = () => {
    return (
        <Box
            py="24"
            bgImage="images/partnersIllustion.svg"
            bgRepeat="no-repeat"
            bgPosition="bottom left"
        >
            <ScreenWidth>
                <Box maxW="760" textAlign="center" mx="auto">
                    <Text
                        fontWeight="500"
                        fontSize={["sm", "md", "lg"]}
                        color="brand.orange"
                    >
                        Our Partners
                    </Text>
                    <Text
                        mt="2"
                        fontWeight="700"
                        fontSize={["2xl", null, "4xl"]}
                    >
                        Trusted by leading organizations
                    </Text>
                    <Text
                        mt="2"
                        fontWeight="400"
                        fontSize={["md", null, "lg"]}
                        color="brand.light"
                    >
                        Afri-Pro Services Cyber holds, operates to, and delivers
                        its cybersecurity services in accordance with the
                        following certifications and accreditations
                    </Text>
                </Box>
                <Flex
                    p="10"
                    justify="space-between"
                    mt={["5", "10"]}
                    //     overflowX="auto"
                    gap={["32px", null, "205"]}
                    flexDir={["column", null, "row"]}
                >
                    <Image
                        src="/images/partners/vodafone.svg"
                        alt=""
                        h={["64px", "80px"]}
                    />
                    <Image
                        src="/images/partners/stambicBank.svg"
                        alt=""
                        h={["64px", "80px"]}
                    />
                    <Image
                        src="/images/partners/nmb.svg"
                        alt=""
                        h={["64px", "80px"]}
                    />
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default Partners;
