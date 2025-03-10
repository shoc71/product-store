import { Box, Stack, Text, Link, Flex, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.900" color="gray.300" py={6} px={4} mt={10}>
      <Flex
        maxW="container.lg"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        {/* Logo or Site Name */}
        <Text fontSize="lg" fontWeight="bold">
          Mystery Orbs
        </Text>

        {/* Navigation Links */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="/about" _hover={{ color: "white" }}>
            About
          </Link>
          <Link href="/services" _hover={{ color: "white" }}>
            Services
          </Link>
          <Link href="/contact" _hover={{ color: "white" }}>
            Contact
          </Link>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={4} mt={{ base: 4, md: 0 }}>
          <IconButton
            as="a"
            href="https://github.com/shoc71"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            color="gray.300"
            _hover={{ color: "white" }}
          />
          <IconButton
            as="a"
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            color="gray.300"
            _hover={{ color: "white" }}
          />
          <IconButton
            as="a"
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            color="gray.300"
            _hover={{ color: "white" }}
          />
        </Stack>
      </Flex>

      {/* Copyright */}
      <Text fontSize="sm" textAlign="center" mt={4}>
        © {new Date().getFullYear()} Mystery Orbs. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
