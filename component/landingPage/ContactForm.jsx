import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCaretDown, AiFillTaobaoSquare } from "react-icons/ai";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Box,
    Text,
    Flex,
    Select,
    Textarea,
    Checkbox,
} from "@chakra-ui/react";
import { ButtonFill } from "../Buttons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
    const [phone, setPhone] = useState("");
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    function onSubmit(values) {
        values.number = phone;
        // console.log(values);
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 3000);
        });
    }

    return (
        <Box
            py="10"
            px={["12px", null, "8"]}
            bgColor="brand.white"
            color="brand.blue"
            maxW="672"
        >
            <Box>
                <Text fontWeight="700" fontSize={["xl", "2xl", "4l"]}>
                    Contact Us
                </Text>
                <Text fontSize={["sm", "md", "lg"]} color="brand.lightGray">
                    Gain access to our advanced Advanced Cybersecurity Services
                </Text>
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* ******** First Row******* */}
                        <Flex
                            mt="4"
                            gap={["16px", "32px"]}
                            flexDir={["column", "row"]}
                        >
                            <FormControl isInvalid={errors.Fname}>
                                <FormLabel
                                    htmlFor="Fname"
                                    color="brand.verylightGray"
                                    fontSize={["sm", null, "md"]}
                                    fontWeight="400"
                                >
                                    First name
                                </FormLabel>
                                <Input
                                    id="Fname"
                                    placeholder="First name"
                                    {...register("Fname", {
                                        required: "This is required",
                                        minLength: {
                                            value: 4,
                                            message:
                                                "Minimum length should be 4",
                                        },
                                    })}
                                    py="13px"
                                    px="16px"
                                    bgColor="brand.dimWhite"
                                    _focusVisible={{
                                        border: "1px",
                                        borderColor: "brand.veryDimWhite",
                                    }}
                                    borderRadius="0"
                                    borderColor="brand.veryDimWhite"
                                    border="1px"
                                    outline="none"
                                />
                                <FormErrorMessage>
                                    {errors.Fname && errors.Fname.message}
                                </FormErrorMessage>
                            </FormControl>
                            {/* ***** Last Name ***** */}
                            <FormControl isInvalid={errors.Lname}>
                                <FormLabel
                                    htmlFor="Lname"
                                    color="brand.verylightGray"
                                    fontSize={["sm", null, "md"]}
                                    fontWeight="400"
                                >
                                    Last name
                                </FormLabel>
                                <Input
                                    id="Lname"
                                    placeholder="Last name"
                                    {...register("Lname", {
                                        required: "This is required",
                                        minLength: {
                                            value: 4,
                                            message:
                                                "Minimum length should be 4",
                                        },
                                    })}
                                    py="13px"
                                    px="16px"
                                    bgColor="brand.dimWhite"
                                    _focusVisible={{
                                        border: "1px",
                                        borderColor: "brand.veryDimWhite",
                                    }}
                                    borderRadius="0"
                                    borderColor="brand.veryDimWhite"
                                    border="1px"
                                    outline="none"
                                />
                                <FormErrorMessage>
                                    {errors.Lname && errors.Lname.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>
                        {/* ****SECOND ROW***** */}
                        <Flex
                            mt="4"
                            gap={["16px", "32px"]}
                            flexDir={["column", "row"]}
                        >
                            <FormControl isInvalid={errors.Bmail}>
                                <FormLabel
                                    htmlFor="Bmail"
                                    color="brand.verylightGray"
                                    fontSize={["sm", null, "md"]}
                                    fontWeight="400"
                                >
                                    Business Email
                                </FormLabel>
                                <Input
                                    id="Bmail"
                                    placeholder="Business Email"
                                    type="email"
                                    {...register("Bmail", {
                                        required: "Email is required",
                                        minLength: {
                                            value: 4,
                                            message:
                                                "Minimum length should be 4",
                                        },
                                    })}
                                    py="13px"
                                    px="16px"
                                    bgColor="brand.dimWhite"
                                    _focusVisible={{
                                        border: "1px",
                                        borderColor: "brand.veryDimWhite",
                                    }}
                                    borderRadius="0"
                                    borderColor="brand.veryDimWhite"
                                    border="1px"
                                    outline="none"
                                />
                                <FormErrorMessage>
                                    {errors.Bmail && errors.Bmail.message}
                                </FormErrorMessage>
                            </FormControl>
                            {/* ***** Phome number  ***** */}

                            <FormControl>
                                <FormLabel
                                    htmlFor="Bmail"
                                    color="brand.verylightGray"
                                    fontSize={["sm", null, "md"]}
                                    fontWeight="400"
                                >
                                    Contact Tel
                                </FormLabel>
                                <PhoneInput
                                    country={"us"}
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                />
                            </FormControl>
                        </Flex>
                        {/* ************DIscussion*********** */}

                        <FormControl mt="6">
                            <Select
                                icon={<AiFillCaretDown />}
                                {...register("dicussion")}
                                bgColor="brand.dimWhite"
                                _focusVisible={{
                                    border: "1px",
                                    borderColor: "brand.veryDimWhite",
                                }}
                                borderRadius="0"
                                borderColor="brand.veryDimWhite"
                                border="1px"
                                outline="none"
                                color="#6B6B86"
                                px=""
                            >
                                <option value="1">
                                    I would like to discuss....
                                </option>
                                <option value="2">Report a bug</option>
                                <option value="3">Need advice</option>
                            </Select>
                        </FormControl>

                        {/* ***** Message ******** */}

                        <FormControl mt="4" isInvalid={errors.message}>
                            <FormLabel
                                htmlFor="message"
                                color="brand.verylightGray"
                                fontSize={["sm", null, "md"]}
                                fontWeight="400"
                            >
                                Your Message
                            </FormLabel>
                            <Textarea
                                id="message"
                                placeholder="Describe your needs (optional)"
                                type="tel"
                                h="104"
                                {...register("message")}
                                py="13px"
                                px="16px"
                                bgColor="brand.dimWhite"
                                _focusVisible={{
                                    border: "1px",
                                    borderColor: "brand.veryDimWhite",
                                }}
                                borderRadius="0"
                                borderColor="brand.veryDimWhite"
                                border="1px"
                                outline="none"
                            />
                            <FormErrorMessage>
                                {errors.message && errors.message.message}
                            </FormErrorMessage>
                        </FormControl>

                        {/* *PRIVACY AND POLICY* */}

                        <Flex justify="space-between" gap="8px" mt="24px">
                            <Checkbox size="lg">
                                <Text fontSize={["sm"]}>
                                    {" "}
                                    I have read the Privacy Policy and agree
                                    with the processing of my data provided
                                    above by the Afripro according to the
                                    policy.
                                </Text>
                            </Checkbox>
                        </Flex>

                        <ButtonFill
                            mt={8}
                            colorScheme="teal"
                            isLoading={isSubmitting}
                            type="submit"
                            blue={true}
                            text="SEND REQUEST"
                            style={{ width: "100%" }}
                        >
                            Submit
                        </ButtonFill>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};
export default ContactForm;
