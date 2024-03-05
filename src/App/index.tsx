import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import BackToTop from "../Components/BackToTop";
import MenuSection from "../Components/MenuSection";
import ContactSection from "../Components/ContactSection";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContactSection />
      <BackToTop />
    </Box>
  );
}
