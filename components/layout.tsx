import React, { FC, ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import LayoutState from "../lib/globalstate";
import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/core";

interface LayoutProps {
    title: string;
    loading?: boolean;
    error?: string | any;
    children: FC | ReactElement | ReactElement[] | Element[] | FC[];
}

const Layout: FC<LayoutProps> = ({
    title,
    loading,
    error,
    children,
}: LayoutProps) => {
    const { setLoading } = LayoutState.useContainer();
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        if (loading !== undefined) setLoading(loading);
    }, [loading]);

    return (
        <Box m={[6, 10]}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <Flex justifyContent="space-between" alignItems="flex-end" mb={6}>
                <Box>
                    <Text as="h1" textStyle="h1">
                        BAAAS - Movistar Challenge 2020
                    </Text>
                </Box>
                <Button onClick={toggleColorMode} colorScheme="blue">
                    Modo {colorMode === "light" ? "oscuro" : "claro"}
                </Button>
            </Flex>
            <main>{children}</main>
        </Box>
    );
};

export default Layout;
