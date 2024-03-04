import { Box, Typography, styled } from "@mui/material";

export const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "linear-gradient(45deg, #106e29 20%, #fff 20%)",
  padding: "1rem 4rem",
  [theme.breakpoints.down("xl")]: {
    display: "grid",
    gridTemplateRows: "80px 350px auto",
  },
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const AboutUsTextContainer = styled(Box)({
  opacity: "0",
  transform: "translateY(100%)",
  transition: "all",
  transitionDuration: "1s",
});

export const MapAboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "2rem",
  opacity: "0",
  transform: "translateY(100%)",
  transition: "all 1s",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "2rem",
  margin: "2rem 0",
  padding: "0 4rem",
  opacity: "0",
  transform: "translateY(100%)",
  transition: "all 1s",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export const AboutUsText = styled(Typography)({
  textAlign: "center",
  fontFamily: '"Lora", sans-serif',
  fontWeight: "900",
});

export const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126942.63553243408!2d107.04071153401038!3d-6.136431477873783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69872586b05d33%3A0x72888d271a020fd9!2sKantin%20Bu%20Mumun!5e0!3m2!1sid!2sid!4v1709459797016!5m2!1sid!2sid"
      width="400"
      height="300"
      style={{ border: "0" }}
      // allowfullscreen=""
      loading="lazy"
      // referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
