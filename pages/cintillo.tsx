import React from "react";
import { NextPage } from "next";
import Layout from "../components/layout";
import { Box, Text } from "@chakra-ui/core";
// import { useCountriesQuery } from "../integration/graphql";
import { useRouter } from "next/router";

const Cintillo: NextPage = () => {
    const router = useRouter();
    // const [{ data, fetching, error }] = useCountriesQuery();
    return (
        <Box>
            <Layout title={"Validación de cintillos"} index={1}>
                <Text>Cintillos</Text>
            </Layout>
        </Box>
    );
};

export default Cintillo;
