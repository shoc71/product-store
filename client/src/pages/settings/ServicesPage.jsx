import React from "react";
import { Heading, Text, Container, Grid, GridItem } from "@chakra-ui/react";

const ServicesPage = () => {
  return (
    <Container maxW="container.md" p={8}>
      <Heading>Our Services</Heading>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={4}>
        <GridItem>
          <Heading size="md">Fast Shipping</Heading>
          <Text>
            We offer quick and reliable shipping options to ensure your products
            arrive on time.
          </Text>
        </GridItem>
        <GridItem>
          <Heading size="md">Secure Payment</Heading>
          <Text>
            Our payment system is secure and supports multiple payment methods
            for your convenience.
          </Text>
        </GridItem>
        <GridItem>
          <Heading size="md">Customer Support</Heading>
          <Text>
            Have questions? Our dedicated support team is here to assist you
            24/7.
          </Text>
        </GridItem>
        <GridItem>
          <Heading size="md">Easy Returns</Heading>
          <Text>
            Not satisfied? We have a hassle-free return policy to make shopping
            stress-free.
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ServicesPage;
