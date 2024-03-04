import { Box, Typography, styled } from "@mui/material";

export const HeroBackground = styled(Box)({
  background: "url(/hero-section.webp)",
  minHeight: "100vh",
  backgroundPosition: "center",
  backgroundAttachment: "scroll",
  backgroundSize: "cover",
  display: "grid",
  gridTemplateColumns: "auto 60%",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
});

export const InfoSection = styled(Box)({
  padding: "2rem",
  display: "block",
  opacity: "0",
  transform: "translateX(100%)",
  transition: "all",
  transitionDuration: "1s",
});

export const GraphSection = styled(Box)({
  display: "block",
  opacity: "0",
  transform: "translateX(-100%)",
  transition: "all",
  transitionDuration: "1s",
});

export const CanteenName = styled(Typography)({
  color: "white",
  textAlign: "right",
  fontFamily: '"Lora", sans-serif',
  margin: "1rem 0",
  cursor: "default",
});

export const Address = styled(Typography)({
  color: "white",
  textAlign: "right",
  fontFamily: '"Oswald", sans-serif',
  display: "block",
  cursor: "default",
});
