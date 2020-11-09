import React, { FC, ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import LayoutState from "../lib/globalstate";
import {
    Box,
    Button,
    Flex,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useColorMode,
} from "@chakra-ui/core";
import { useRouter } from "next/router";

interface LayoutProps {
    title: string;
    loading?: boolean;
    error?: string | any;
    children: FC | ReactElement | ReactElement[] | Element[] | FC[];
    index: number;
}

const Layout: FC<LayoutProps> = ({
    title,
    loading,
    error,
    children,
    index,
}: LayoutProps) => {
    const router = useRouter();
    const { setLoading } = LayoutState.useContainer();
    const { colorMode, toggleColorMode } = useColorMode();
    const [tabIndex, setTabIndex] = React.useState(0);

    useEffect(() => {
        if (loading !== undefined) setLoading(loading);
    }, [loading]);

    useEffect(() => {
        // Prefetch the dashboard page
        router.prefetch("/");
        router.prefetch("/cintillo");
        router.prefetch("/fachada");
    }, []);

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
            <Flex justifyContent="space-between" alignItems="flex-end" mb={8}>
                <Box>
                    <Text as="h1" textStyle="h1">
                        BAAAS - Movistar Challenge 2020
                    </Text>
                </Box>
                <Button onClick={toggleColorMode} colorScheme="teal">
                    Modo {colorMode === "light" ? "oscuro" : "claro"}
                </Button>
            </Flex>
            <Tabs
                variant="soft-rounded"
                colorScheme="gray"
                defaultIndex={index}
                onChange={(index) => setTabIndex(index)}
            >
                <TabList>
                    <Tab onClick={() => router.push("/")}>Formulario</Tab>
                    <Tab onClick={() => router.push("/cintillo")}>Cintillo</Tab>
                    <Tab onClick={() => router.push("/fachada")}>Fachada</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px={1}>
                        <Text
                            opacity={0.5}
                            fontSize="sm"
                            fontWeight="bold"
                            colorScheme="gray"
                        >
                            {" "}
                            Objetivo: Validación libre de data.
                        </Text>
                        <main>{children}</main>
                    </TabPanel>
                    <TabPanel px={1}>
                        <Text opacity={0.5} fontSize="sm" fontWeight="bold">
                            Modo de uso: Se añaden imagenes de los cintillos
                            para registrar evidencias y validarlas.
                        </Text>

                        <main>{children}</main>
                    </TabPanel>
                    <TabPanel px={1}>
                        <Text opacity={0.5} fontSize="sm" fontWeight="bold">
                            Modo de uso: Se añaden imagenes de las fachadas para
                            registrar evidencias y validarlas.
                        </Text>

                        <main>{children}</main>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Layout;
