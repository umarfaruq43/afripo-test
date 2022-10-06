import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./Hero";
import Layout from "../../Layout/Layout";
import LatestNews from "./LatestNews";

const Blog = () => {
    return (
        <Layout>
            <Hero />
            <LatestNews />
        </Layout>
    );
};

export default Blog;
