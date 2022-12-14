import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
    return (
        <Flex
            bgImage="/images/about/hero.png"
            bgPosition="center"
            bgSize="cover"
            h={["324px", null, "512px"]}
            align="center"
            justify="center"
            color="brand.white"
        >
            <Text
                fontWeight="700"
                fontSize={["32px", null, "56px"]}
                maxW={["184px", null, "100%"]}
                textAlign="center"
            >
                {" "}
                MEET THE AFRI-PROS
            </Text>
	    
        </Flex>
    );
};

export default Hero;
