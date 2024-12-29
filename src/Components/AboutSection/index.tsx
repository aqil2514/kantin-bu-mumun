import { Box, Paper, Typography } from "@mui/material";
import { AboutContainer, AboutUsText, AboutUsTextContainer, GoogleMap, HealthyFoodIcon, IconContainer, MapAboutContainer, YummyIcon } from "./component";
import PaidIcon from "@mui/icons-material/Paid";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const mapAboutRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [posY, setPosY] = useState<number>(0);

  useEffect(() => {
    const scrollHandler = () => {
      setPosY(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);

    if (textRef.current && posY >= 200) {
      textRef.current.style.opacity = "1";
      textRef.current.style.transform = "translateY(0)";
    }

    if (mapAboutRef.current && posY >= 300) {
      mapAboutRef.current.style.opacity = "1";
      mapAboutRef.current.style.transform = "translateY(0)";
    }

    if (iconRef.current && posY >= 500) {
      iconRef.current.style.opacity = "1";
      iconRef.current.style.transform = "translateY(0)";
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [posY]);
  return (
    <AboutContainer id="about">
      <AboutUsTextContainer ref={textRef}>
        <AboutUsText variant="h3">About Us</AboutUsText>
      </AboutUsTextContainer>

      <MapAboutContainer ref={mapAboutRef}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", gap: "1rem", width: "100%" }}>
          <Paper elevation={12} sx={{ borderRadius: "1rem", padding: "2rem" }}>
            <Typography variant="h6" textAlign={"center"}>
              Kantin Sukawangi
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore itaque, id, eveniet pariatur quia provident rerum eos consequuntur ipsam doloremque, quaerat ducimus aperiam aut ratione veniam a accusantium sed ea illum
              vitae! Laudantium facere rem voluptate dolorem sunt maiores, eaque similique vitae qui ipsa asperiores odit aliquam voluptatibus distinctio?
            </Typography>
          </Paper>
        </Box>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "flex-end", gap: "1rem" }}>
          <Paper elevation={12} sx={{ display: "block", margin: "0 auto" }}>
            <GoogleMap />
          </Paper>
        </Box>
      </MapAboutContainer>

      <IconContainer ref={iconRef}>
        <Box textAlign={"center"}>
          <YummyIcon />
          <Typography sx={{ fontSize: "1rem", color: "darksalmon", fontFamily: '"Poppins", sans-serif', fontWeight: "bold" }}>Rasa Lezat</Typography>
        </Box>
        <Box textAlign={"center"}>
          <HealthyFoodIcon />
          <Typography sx={{ fontSize: "1rem", color: "darksalmon", fontFamily: '"Poppins", sans-serif', fontWeight: "bold" }}> Dijamin Sehat</Typography>
        </Box>
        <Box textAlign={"center"}>
          <PaidIcon sx={{ fontSize: "6rem", color: "darksalmon", border: "10px double darksalmon", padding: ".2rem", borderRadius: "50%" }} />
          <Typography sx={{ fontSize: "1rem", color: "darksalmon", fontFamily: '"Poppins", sans-serif', fontWeight: "bold" }}> Harga bersahabat</Typography>
        </Box>
      </IconContainer>
    </AboutContainer>
  );
}
