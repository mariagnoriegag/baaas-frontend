import React from "react";
import { NextPage } from "next";
import Layout from "../components/layout";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    Input,
    Text,
    useColorModeValue,
} from "@chakra-ui/core";
// import { useCountriesQuery } from "../integration/graphql";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";

const Home: NextPage = () => {
    const router = useRouter();
    // const [{ data, fetching, error }] = useCountriesQuery();
    const bg = useColorModeValue("gray.100", "gray.800");
    const borderColor = useColorModeValue("teal.500", "gray.100");
    const validateName = (value) => {
        console.log(value);
        let error;
        if (!value) {
            error = "El código es requerido.";
        } else if (value.length > 8) {
            error = "El código no debe tener más de 8 caracteres.";
        }
        return error;
    };

    return (
        <Box>
            <Layout title={"Validación de formularios"} index={0}>
                <Grid
                    my={6}
                    gap={6}
                    templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                >
                    <Box flex="1">
                        <Formik
                            initialValues={{ code: "" }}
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                        >
                            {(props) => (
                                <Form>
                                    <Field name="name" validate={validateName}>
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.name &&
                                                    form.touched.name
                                                }
                                            >
                                                <FormLabel htmlFor="name">
                                                    Código de operación
                                                </FormLabel>
                                                <Input
                                                    {...field}
                                                    id="code"
                                                    placeholder="Ingrese el código"
                                                    width={[
                                                        "100%",
                                                        "100%",
                                                        "70%",
                                                        "50%",
                                                    ]}
                                                    focusBorderColor="teal.500"
                                                    variant="filled"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.name}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Button
                                        mt={4}
                                        colorScheme="teal"
                                        isLoading={props.isSubmitting}
                                        type="submit"
                                    >
                                        Validar
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                    <Box
                        flex="1"
                        p={6}
                        bg={bg}
                        borderWidth={2}
                        borderColor={borderColor}
                        borderRadius={10}
                    >
                        <Box pb={2} fontWeight="bold" color={borderColor} borderBottom={2} borderColor={borderColor} borderStyle="solid">CAMPO 1 CORRECTO | CAMPO 2 INCORRECTO</Box>
                        <Box py={4}>Result</Box>
                    </Box>
                </Grid>
            </Layout>
        </Box>
    );
};

export default Home;
