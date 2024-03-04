import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import BackToTop from "../Components/BackToTop";
import MenuSection from "../Components/MenuSection";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <BackToTop />
    </Box>
  );
}
