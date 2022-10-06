import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";
import { ButtonFill } from "./Buttons";

const JoinTeam = () => {
    return (
        <Box py="80px" bgColor="brand.tickwhite">
            <ScreenWidth>
                <Flex align="center" justify="space-between" flexDir={['column', null, "row"]}>
                    <Box maxW="784px" textAlign={["center", null, "left"]}>
                        <Text
                            fontWeight="700"
                            fontSize={["24px", null, "45px"]}
                        >
                            Want to Join the Team?
                        </Text>
                        <Text
                            fontSize={["16", null, "20px"]}
                            fontWeight="400"
                            mt="8px"
                            color="brand.lightGray"
                        >
                            Are you a fresh Graduate from University? Are you a
                            cyber cerurity expert?.
                        </Text>
                    </Box>
                    <Box mt={['40px',null,""]}>
                        <ButtonFill text="FIND OUT MORE" icon="arrow" />
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default JoinTeam;
