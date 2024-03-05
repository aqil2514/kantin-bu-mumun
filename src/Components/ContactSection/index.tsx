import { Box, Button, Typography } from "@mui/material";
import { ContactContainer } from "./Component";
import { useRef } from "react";

export default function ContactSection() {
  const textRef = useRef<HTMLDivElement | null>(null);

  return (
    <ContactContainer>
      <Box ref={textRef} sx={{ opacity: "1", transform: "translateY(0)", transition: "all", transitionDuration: "1s" }}>
        <Typography variant="h3" textAlign={"center"} sx={{ fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
          Kontak Kami
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 50%)" }}>
          <Box sx={{ position: "relative" }}>
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
            <Box sx={{ width: "100%", margin: "6rem 0 0", display: "flex", justifyContent: "center" }}>
              <Typography variant="h4" textAlign={"center"} sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: "500" }}>
                Terimakasih telah berkunjung. Semoga harimu menyenangkan
              </Typography>
            </Box>
          </Box>
          <Box sx={{ margin: "0 auto" }}>
            <img src="/asset/contact-illustration.png" alt="Contact illustration" />
          </Box>
        </Box>
      </Box>
    </ContactContainer>
  );
}

// #a9ec76
