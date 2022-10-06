import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const WhoWeAre = () => {
    return (
        <Box
            py="96px"
            bgImage={[
                "images/about/MWhoBackground.svg",
                null,
                "images/about/WhoBackground.svg",
            ]}
            bgPos="center"
            bgSize={["cover", "cover"]}
            bgRepeat="no-repeat"
        >
            <ScreenWidth>
                <Flex flexDir={["column", null, "row"]} gap="32px">
                    <Flex
                        w={["100%", null, "50%"]}
                        align="center"
                        justify="center"
                    >
                        <Box>
                            <Text
                                fontWeight="700"
                                mb={["16px", null, "24px"]}
                                fontSize={["24px", null, "36px"]}
                            >
                                {" "}
                                Who we are
                            </Text>
                            <Text maxW={["100%", null, "415px"]}>
                                Cyber security is all that we do, helping you
                                secure your information technology assets and
                                protecting your business is our priority. We are
                                a team of highly dedicated security specialists,
                                powered by strategic and emerging security
                                vendor partners, helping us fully focus on
                                protecting our clients across different
                                verticals and industries.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        w={["100%", null, "50%"]}
                        align="center"
                        justify="center"
                    >
                        <Image
                            src="/images/about/logoFrame.svg"
                            alt=" Afripro Logo Frame"
                        />
                    </Flex>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default WhoWeAre;
