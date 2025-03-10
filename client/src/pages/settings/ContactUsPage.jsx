import {
  Heading,
  Button,
  Text,
  Container,
  VStack,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const response = await fetch("https://formspree.io/f/mjkgajnj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Your message has been sent!",
          description: "Message has been successfully sent.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Error sending message. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Container maxW="container.md" p={8}>
      <Heading>Contact Us</Heading>
      <Text mt={4}>
        We’d love to hear from you! Whether you have a question about your
        order, our products, or anything else, our team is ready to help.
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} mt={6} align="stretch">
          <FormControl isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              size="lg"
              required
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              size="lg"
              required
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              size="lg"
              required
            />
            <FormErrorMessage>{errors.message}</FormErrorMessage>
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Send Message
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ContactUsPage;
