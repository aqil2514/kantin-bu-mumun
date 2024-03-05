import { Box, styled } from "@mui/material";

export const MenuContainer = styled(Box)({
  width: "100%",
  padding: "2rem",
  minHeight: "100vh",
  background: "url(/menu-section.webp)",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const FoodContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "2rem",
});
