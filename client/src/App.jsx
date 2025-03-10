import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Footer from "./components/Footer";
import AboutUsPAge from "./pages/settings/AboutUsPAge";
import ServicesPage from "./pages/settings/ServicesPage";
import ContactUsPage from "./pages/settings/ContactUsPage";

function App() {
  return (
    <Box minH={"100vh"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/about" element={<AboutUsPAge />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
