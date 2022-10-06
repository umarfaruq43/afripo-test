import { Box, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import { ButtonFill, ButtonOutline } from "../Buttons";

const About = () => {
    return (
        <Box
            mt="44"
            bgColor="brand.lightBlue"
            borderRadius="8"
            bgImage={["/images/aboutBgM.svg", null, "/images/aboutBg.svg"]}
            bgRepeat="no-repeat"
            bgSize="cover"
        >
            <ScreenWidth>
                <Flex
                    py="20"
                    justify="space-between"
                    flexDir={["column-reverse", null, "row"]}
                    gap="14"
                >
                    <Flex w="100%">
                        <Box color="brand.white" maxW="448">
                            <Text fontSize={["xl"]} color="brand.orange">
                                About us
                            </Text>
                            <Text
                                fontWeight="700"
                                fontSize={["2xl", null, "4xl"]}
                                mt="2"
                            >
                                Specialized in the delivery of world-class
                                Cybersecurity
                            </Text>
                            <Text
                                mt="6"
                                fontSize={["md", null, "lg"]}
                                fontWeight="400"
                            >
                                Cyber security is all that we do, helping you
                                secure your information technology assets and
                                protecting your business is our priority. We are
                                a team of highly dedicated security specialists,
                                powered by strategic and emerging security
                                vendor partners, helping us fully focus on
                                protecting our clients across different
                                verticals and industries.
                            </Text>
                            <SimpleGrid
                                minChildWidth="147px"
                                spacing={["4", "8"]}
                                mt="10"
                            >
                                <ButtonFill
                                    text="CONTACT US"
                                    blue={false}
                                    style={{ width: "100%" }}
                                />
                                <ButtonOutline
                                    text="MEET THE TEAM"
                                    style={{ width: "100%" }}
                                />
                            </SimpleGrid>
                        </Box>
                    </Flex>
                    <Flex w="100%">
                        <Image
                            src="/images/about/aboutUs.svg"
                            alt="Image about Afripro"
                        />
                    </Flex>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default About;

// queen, Lizzy01;
