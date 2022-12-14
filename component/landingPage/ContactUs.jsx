import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import ContactForm from "./ContactForm";

const ContactUs = () => {
    return (
        <Box
            bgColor="brand.lightBlue"
            color="brand.white"
            py={["10", "20"]}
            bgImage="images/touch.svg"
            bgPosition="center"
            bgSize={["cover", null, "contain"]}
        >
            <ScreenWidth>
                <Flex
                    gap="32px"
                    justify="space-between"
                    flexDirection={["column", null, "row"]}
                >
                    <Flex justify="center" align="center">
                        <Box textAlign={["center", null, "left"]}>
                            <Text
                                fontWeight="500"
                                fontSize={["sm", "md", "lg"]}
                                color="brand.orange"
                            >
                                Contact Us
                            </Text>
                            <Text
                                fontWeight="500"
                                fontSize={["3xl", null, "5xl"]}
                                color="brand.tickwhite"
                            >
                                Get in touch
                            </Text>
                            <Text
                                mt="8px"
                                maxW={["328", null, "288"]}
                                fontSize={["md", null, "lg"]}
                                fontWeight="400"
                            >
                                Gain access to our advanced Advanced
                                Cybersecurity Services
                            </Text>
                        </Box>
                    </Flex>
                    <Box>
                        <Box>
                            <ContactForm />
                            {/* <Image src="images/getInTouch.svg" /> */}
                        </Box>
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default ContactUs;
