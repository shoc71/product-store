import React from "react";
import { Heading, Text, Container } from "@chakra-ui/react";

const AboutUsPAge = () => {
  return (
    <Container maxW="container.md" p={8}>
      <Heading>About Our Store</Heading>
      <Text mt={4}>
        Founded in 2025, our e-commerce store is dedicated to providing
        customers with top-quality products, exceptional service, and a seamless
        shopping experience. Our team works tirelessly to curate a selection of
        the best products available.
      </Text>
      <Text mt={4}>
        Our mission is to bring the latest trends and best deals to our
        customers while ensuring a secure and enjoyable shopping experience.
      </Text>
    </Container>
  );
};

export default AboutUsPAge;
