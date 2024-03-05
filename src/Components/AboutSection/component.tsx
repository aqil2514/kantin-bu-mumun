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
      height="300"
      style={{ border: "0", width: "100%" }}
      // allowfullscreen=""
      loading="lazy"
      // referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export const YummyIcon = () => {
  return (
    <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: "6rem" }}>
      <circle cx="36" cy="36" fill="#fcea2b" r="24" />
      <path d="m50.5707 44.471s6.3864 4.2101 6.3864 7.6241c0 2.4671-1.5752 4.5107-4.2717 4.5107-3.7214 0-7.6844-6.2448-7.6844-6.2448" fill="#ea5a47" />
      <g fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2">
        <path
          d="m57.2506 44.8137c1.1272-2.7145 1.7494-5.6915 1.7494-8.8137 0-12.7031-10.2978-23-23-23-12.7031 0-23 10.2969-23 23 0 12.7022 10.2969 23 23 23 3.3707 0 6.5721-.7251 9.4566-2.0279"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="m31.6941 33.4036c-1.0598-2.3854-3.8527-3.46-6.238-2.4002-1.0697.4752-1.9249 1.3305-2.4002 2.4002" strokeLinecap="round" />
        <path d="m48.9441 33.4036c-1.0598-2.3854-3.8527-3.46-6.238-2.4002-1.0697.4752-1.9249 1.3305-2.4002 2.4002" strokeLinecap="round" />
        <path d="m50.5707 44.471s6.3864 4.2101 6.3864 7.6241c0 2.4671-1.5752 4.5107-4.2717 4.5107-3.7214 0-7.6844-6.2448-7.6844-6.2448" />
        <path d="m20.1657 41.3575c2.2328 6.6016 8.4783 11.3541 15.8343 11.3541 7.3561 0 13.6024-4.7533 15.8349-11.3559" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};

export const HealthyFoodIcon = () => {
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.41" fill="#e5273a" fillRule="evenodd" style={{ fontSize: "6rem" }}>
      <title>healthy-food</title>
      <path d="M60.83,17.19c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.62c-3.34,6.65-10.11,14.56-17.61,22.32C95.34,73.79,88.15,80.53,82.27,86.2L66,67.66l8-10.13c13.77,6.66,33.38-20.25,20.19-31.41C83.34,16.94,60.94,36.9,67,51.89l-7.16,8.68-7.36-8.39a8.23,8.23,0,0,0,1.75-2.63c1.26-4.11.68-7.64-4.06-12.86L38.56,22.75c-1.65-1.93-5.53.9-3.9,3.24l9.26,11.42c1.75,2.13-1.51,5-3.31,2.76L31,28.36c-1.78-2.05-5.47.66-3.61,3,2.7,3.24,6.89,8.56,9.59,11.81a1.86,1.86,0,1,1-2.83,2.35L24.65,33.79c-1.39-1.52-3.67-.57-4.28,1.2s.95,3.27,2,4.68L33,53.39c3.29,3.81,7,6.08,11.26,4.8a10.56,10.56,0,0,0,2.32-1.13l7.85,10L38.72,86.16l-.09.12C21.77,70.91.82,52.28,0,30-.63,11.75,13.73.09,30.25.31,45,.5,51.22,7.84,60.83,17.19ZM75,93.32l-14.2,14.09L46.46,93.56,46,93.11c.12-.14.25-.28.37-.43l14.11-18L75,93.32Z" />
    </svg>
  );
};
