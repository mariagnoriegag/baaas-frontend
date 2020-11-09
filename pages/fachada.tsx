import React, { useCallback } from "react";
import { NextPage } from "next";
import Layout from "../components/layout";
import { Box, Flex, Grid, Text, useColorModeValue } from "@chakra-ui/core";
// import { useCountriesQuery } from "../integration/graphql";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";

const Fachada: NextPage = () => {
    const router = useRouter();
    // const [{ data, fetching, error }] = useCountriesQuery();
    const bg = useColorModeValue("gray.100", "gray.800");
    const borderColor = useColorModeValue("teal.500", "gray.100");
    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    return (
        <Box>
            <Layout title={"Validación de fachadas de casas"} index={2}>
            <Grid
                    my={6}
                    gap={6}
                    templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                >
                    <Flex
                        {...getRootProps()}
                        gridColumnGap={2}
                        justifyContent="center"
                        alignItems="center"
                        borderStyle="solid"
                        borderColor="teal"
                        borderWidth={2}
                        borderRadius={4}
                        gridRowGap={8}
                        style={{ backgroundClip: "padding-box" }}
                        height="fit-content"
                        py={10}
                        cursor="pointer"
                    >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <Text>Sube imágenes</Text>
                        ) : (
                            <Text>Sube imágenes</Text>
                        )}
                    </Flex>
                    <Box
                        p={6}
                        bg={bg}
                        borderWidth={2}
                        borderColor={borderColor}
                        borderRadius={10}
                    >
                        <Box
                            pb={2}
                            fontWeight="bold"
                            color={borderColor}
                            borderBottom={2}
                            borderColor={borderColor}
                            borderStyle="solid"
                        >
                            Resultados
                        </Box>
                        <Grid my={6} gridRowGap={2}>
                        <Box ><span>Imagen 1</span> <span>Correcto</span></Box>
                        <Box ><span>Imagen 2</span> <span>Correcto</span></Box>
                        </Grid>
                    </Box>
                </Grid>
            </Layout>
        </Box>
    );
};

export default Fachada;
