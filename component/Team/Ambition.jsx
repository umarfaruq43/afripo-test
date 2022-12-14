import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import { ButtonFill } from "../Buttons";
const Ambition = () => {
    return (
        <Box mt={["0", null, "40px"]} py={["0", null, "40px"]} pb="40px">
            <ScreenWidth>
                <Flex
                    flexDir={["column-reverse", null, "row"]}
                    justify="space-between"
                    align="center"
                    gap="32px"
                >
                    <Box>
                        <Image
                            src="images/Team/ambition.png"
                            alt="Future Image"
                        />
                    </Box>

                    <Box w={["100%", null, "50%"]}>
                        {" "}
                        <Box
                            maxW={["100%", null, "456px"]}
                            fontSize={["16px", null, "18px"]}
                        >
                            <Text
                                fontWeight="400"
                                fontSize={["xl2", null, "4l"]}
                            >
                                Do our values match your ambitions?
                            </Text>
                            <Text mt="24px">
                                If the answer is yes, detail your experience,
                                qualifications and preference in your
                                application for a great career opportunity with
                                us. AFRI PRO SERVICES uses creative recruitment
                                practices that ensure all applicants are
                                carefully evaluated.{" "}
                                <Text as="a" color="brand.orange">
                                    Email us CV
                                </Text>{" "}
                                with detail your experience, qualifications and
                                preferenc
                            </Text>
                            <Box mt="40px">
                                <ButtonFill
                                    text="Shoot us an email"
                                    blue={true}
                                    textTransformation="uppercase"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default Ambition;
