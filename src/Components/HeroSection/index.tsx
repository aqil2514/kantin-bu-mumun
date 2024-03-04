import { Box, Button } from "@mui/material";
import { Address, CanteenName, GraphSection, HeroBackground, InfoSection } from "./components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./index.css";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const infoSectionRef = useRef<HTMLDivElement | null>(null);
  const graphSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (infoSectionRef.current && graphSectionRef.current) {
      infoSectionRef.current.style.opacity = "1";
      infoSectionRef.current.style.transform = "translateX(0)";
      graphSectionRef.current.style.opacity = "1";
      graphSectionRef.current.style.transform = "translateX(0)";
    }
  }, []);

  return (
    <HeroBackground id="home">
      <GraphSection ref={graphSectionRef}>
        <img src="/asset/main-food.png" alt="Main food" className="image-class" />
      </GraphSection>
      <InfoSection ref={infoSectionRef}>
        <CanteenName variant="h3">Kantin Bu Mumun</CanteenName>

        <Address variant="h6">Jl. Raya Sukawangi No.1, Sukawangi, Bekasi, Jawa Barat 17620, Indonesia</Address>

        <Box sx={{ textAlign: "right" }}>
          <Button variant="contained" color="warning" sx={{ my: "2rem" }} startIcon={<ShoppingBasketIcon />}>
            Pesan Sekarang
          </Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "flex-end", gap: "1rem" }}>
          <Button variant="contained" sx={{ fontSize: { lg: "14px", sm: "12px" } }} startIcon={<WhatsAppIcon />} color="success">
            Pesan via WhatsApp
          </Button>
          <Button variant="contained" sx={{ fontSize: { lg: "14px", sm: "12px" } }} startIcon={<FacebookIcon />}>
            Pesan via Facebook
          </Button>
        </Box>
      </InfoSection>
    </HeroBackground>
  );
}
