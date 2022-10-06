import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonFill } from "../Buttons";
import ScreenWidth from "../../Layout/ScreenWidth";

const Report = () => {
    return (
        <Box
            bgImage="images/about/report.svg"
            bgColor="brand.lightBlue"
            bgRepeat="no-repeat"
            py={["64px", null, "80px"]}
            bgPos="left center"
        >
            <ScreenWidth>
                <Box>
                    <Text
                        fontSize={["xl2", null, "4l"]}
                        textAlign="center"
                        fontWeight="700"
                        color="brand.white"
                        maxW="1024px"
                        mx="auto"
                    >
                        Our report offers you a complete overview of the
                        security posture of your organization, threats and
                        expert advice on the mitigation measures, identified
                        risks, and a step-by-step instruction for remediation of
                        security issues.
                    </Text>
                    <Box mt="40px" textAlign="center">
                        <ButtonFill
                            maxW={["100%", null, "147px"]}
                            mx="auto"
                            text="Contact us"
                            style={{ width: "100%" }}
                        />
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Report;
