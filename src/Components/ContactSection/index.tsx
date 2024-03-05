import { Box, Button, Typography } from "@mui/material";
import { ContactContainer } from "./Component";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const leftSideRef = useRef<HTMLDivElement | null>(null);
  const rightSideRef = useRef<HTMLDivElement | null>(null);
  const closingRef = useRef<HTMLDivElement | null>(null);

  const [posY, setPosY] = useState<number>(0);

  useEffect(() => {
    const scrollHandler = () => {
      setPosY(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);

    if (textRef.current && posY >= 1800) {
      textRef.current.style.opacity = "1";
      textRef.current.style.transform = "translateY(0)";
    }

    if (leftSideRef.current && rightSideRef.current && posY >= 2000) {
      leftSideRef.current.style.opacity = "1";
      leftSideRef.current.style.transform = "translateX(0)";

      rightSideRef.current.style.opacity = "1";
      rightSideRef.current.style.transform = "translateX(0)";
    }

    if (closingRef.current && posY >= 2300) {
      closingRef.current.style.opacity = "1";
      closingRef.current.style.transform = "translateY(0)";
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [posY]);

  return (
    <ContactContainer id="contacts">
      <Box ref={textRef} sx={{ opacity: "0", transform: "translateY(100%)", transition: "all", transitionDuration: "1s" }}>
        <Typography variant="h3" textAlign={"center"} sx={{ fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
          Kontak Kami
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "grid" }, flexDirection: "column-reverse", gridTemplateColumns: "repeat(2, 50%)" }}>
        <Box ref={leftSideRef} sx={{ display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "space-evenly", opacity: "0", transform: "translateX(-100%)", transition: "all", transitionDuration: "1s" }}>
          <Box sx={{ width: "100%", margin: "1rem 0", display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ margin: "0 auto", minWidth: "200px", borderRadius: "1rem", fontFamily: '"Poppins", sans-serif', fontWeight: "bold" }}
              variant="contained"
              startIcon={<img src="/asset/facebook-icon.png" alt="facebook icon" width={32} height={32} />}
            >
              Facebook
            </Button>
          </Box>
          <Box sx={{ width: "100%", margin: "1rem 0", display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ margin: "0 auto", minWidth: "200px", borderRadius: "1rem", fontFamily: '"Poppins", sans-serif', fontWeight: "bold" }}
              variant="contained"
              color="success"
              startIcon={<img src="/asset/whatsapp-icon.png" alt="facebook icon" width={55} height={55} />}
            >
              WhatsApp
            </Button>
          </Box>
          <Box sx={{ width: "100%", margin: "1rem 0", display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ margin: "0 auto", minWidth: "200px", borderRadius: "1rem", fontFamily: '"Poppins", sans-serif', fontWeight: "bold" }}
              variant="contained"
              color="error"
              startIcon={<img src="/asset/google-map-icon.png" alt="google map icon" width={32} height={32} />}
            >
              Kantin Bu Mumun
            </Button>
          </Box>
        </Box>
        <Box ref={rightSideRef} sx={{ margin: "0 auto", opacity: "0", transform: "translateX(100%)", transition: "all", transitionDuration: "1s" }}>
          <img src="/asset/contact-illustration.png" alt="Contact illustration" />
        </Box>
      </Box>
      <Box
        ref={closingRef}
        sx={{ width: "100%", display: "column", justifyContent: "center", alignContent: "center", margin: { xs: "2rem 0", sm: "0", opacity: "0", transform: "translateY(100%)", transition: "all", transitionDuration: "1s" } }}
      >
        <Typography variant="h4" textAlign={"center"} sx={{ fontFamily: '"Poppins", sans-serif', fontSize: { xs: "1.1rem", sm: "2.25rem" }, fontWeight: "500" }}>
          Terimakasih telah berkunjung.
        </Typography>
        <Typography variant="h4" textAlign={"center"} sx={{ fontFamily: '"Poppins", sans-serif', fontSize: { xs: "1.1rem", sm: "2.25rem" }, fontWeight: "500" }}>
          Semoga harimu menyenangkan
        </Typography>
      </Box>
    </ContactContainer>
  );
}

// #a9ec76
