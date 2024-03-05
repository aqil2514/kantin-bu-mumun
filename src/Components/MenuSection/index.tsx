import { Box, Button, Paper, Typography } from "@mui/material";
import { FoodContainer, MenuContainer } from "./components";
import "./index.css";
import { ShoppingCart, ForwardSharp } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export default function MenuSection() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const favImage1Ref = useRef<HTMLDivElement | null>(null);
  const favImage2Ref = useRef<HTMLDivElement | null>(null);
  const otherMenuRef = useRef<HTMLDivElement | null>(null);
  const otherFoodRef = useRef<HTMLDivElement | null>(null);
  const orderRef = useRef<HTMLDivElement | null>(null);
  const [posY, setPosY] = useState<number>(0);

  useEffect(() => {
    const scrollHandler = () => {
      setPosY(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);

    if (textRef.current && posY >= 800) {
      textRef.current.style.opacity = "1";
      textRef.current.style.transform = "translateY(0)";
    }

    if (favImage1Ref.current && favImage2Ref.current && posY >= 1000) {
      favImage1Ref.current.style.opacity = "1";
      favImage1Ref.current.style.transform = "translateX(0)";

      favImage2Ref.current.style.opacity = "1";
      favImage2Ref.current.style.transform = "translateX(0)";
    }

    if (otherMenuRef.current && posY >= 1500) {
      otherMenuRef.current.style.opacity = "1";
      otherMenuRef.current.style.transform = "scaleX(1)";
    }

    if (otherFoodRef.current && posY >= 1600) {
      otherFoodRef.current.style.opacity = "1";
      otherFoodRef.current.style.transform = "translateY(0)";
    }

    if (otherFoodRef.current && posY >= 1600) {
      otherFoodRef.current.style.opacity = "1";
      otherFoodRef.current.style.transform = "translateY(0)";
    }

    if (orderRef.current && posY >= 1700) {
      orderRef.current.style.opacity = "1";
      orderRef.current.style.transform = "translateY(0)";
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [posY]);
  return (
    <MenuContainer id="products" sx={{ overflow: "hidden" }}>
      <Box ref={textRef} sx={{ opacity: "0", transform: "translateY(100%)", transition: "all", transitionDuration: "1s" }}>
        <Typography variant="h3" textAlign={"center"} sx={{ fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
          Menu Kami
        </Typography>
      </Box>

      <FoodContainer>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center", gap: "2rem", flexDirection: { sm: "row", xs: "column" } }}>
          <Box ref={favImage1Ref} sx={{ opacity: "0", transform: "translateX(-100%)", transition: "all", transitionDuration: "1s" }}>
            <Paper elevation={12} sx={{ padding: "1rem", borderRadius: "1rem", maxWidth: "400px" }}>
              <Box sx={{ overflow: "hidden", borderRadius: "1rem" }}>
                <img src="https://placeholder.co/320x320" alt="fav-1" className="image" />
              </Box>
              <Typography variant="h6" sx={{ fontFamily: '"poppins", sans-serif', fontWeight: "bold", margin: "6px 0", textAlign: "center" }}>
                Menu 1
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nihil consectetur, molestiae eos facere facilis quibusdam, recusandae sequi ullam maxime quaerat deleniti. Nam at sunt beatae modi veritatis! Quasi ipsa unde
                esse nostrum error voluptas quidem laudantium possimus labore eum magni perferendis autem doloremque, voluptates dolorum sequi fuga, non facilis?
              </Typography>
              <Box sx={{ margin: "1rem auto", display: "flex", justifyContent: "center" }}>
                <Button variant="contained" startIcon={<ShoppingCart />}>
                  Pesan ini
                </Button>
              </Box>
            </Paper>
          </Box>
          <Box ref={favImage2Ref} sx={{ opacity: "0", transform: "translateX(100%)", transition: "all", transitionDuration: "1s" }}>
            <Paper elevation={12} sx={{ padding: "1rem", borderRadius: "1rem", maxWidth: "400px" }}>
              <Box sx={{ overflow: "hidden", borderRadius: "1rem" }}>
                <img src="https://placeholder.co/320x320" alt="fav-1" className="image" />
              </Box>
              <Typography variant="h6" sx={{ fontFamily: '"poppins", sans-serif', fontWeight: "bold", margin: "6px 0", textAlign: "center" }}>
                Menu 2
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus nihil consectetur, molestiae eos facere facilis quibusdam, recusandae sequi ullam maxime quaerat deleniti. Nam at sunt beatae modi veritatis! Quasi ipsa unde
                esse nostrum error voluptas quidem laudantium possimus labore eum magni perferendis autem doloremque, voluptates dolorum sequi fuga, non facilis?
              </Typography>
              <Box sx={{ margin: "1rem auto", display: "flex", justifyContent: "center" }}>
                <Button variant="contained" startIcon={<ShoppingCart />}>
                  Pesan ini
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>

        <Box ref={otherMenuRef} sx={{ display: "flex", width: "100%", justifyContent: "center", margin: "1rem 0", opacity: "0", transform: "scaleX(0)", transition: "all", transitionDuration: "1s" }}>
          <Button variant="contained" endIcon={<ForwardSharp />}>
            Menu Lain
          </Button>
        </Box>

        <Box sx={{ width: "100%", opacity: "0", transform: "translateY(100%)", transition: "all", transitionDuration: "1s" }} ref={otherFoodRef}>
          <Paper elevation={12} sx={{ padding: "1rem 2rem", borderRadius: "1rem", width: "100%", maxWidth: "900px", margin: "2rem auto", display: "block" }}>
            <Typography variant="h5" sx={{ fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
              Sedia Juga :
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { md: "repeat(4, 25%)", sm: "repeat(3, 33%)", xs: "repeat(2, 50%)" }, textAlign: "center" }}>
              <Typography variant="body1" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
                - Aneka kopi
              </Typography>
              <Typography variant="body1" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
                - menu lain
              </Typography>
              <Typography variant="body1" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
                - menu lain
              </Typography>
              <Typography variant="body1" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
                - menu lain
              </Typography>
              <Typography variant="body1" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
                - Aneka kopi
              </Typography>
              <Typography variant="body1" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
                - menu lain
              </Typography>
              <Typography variant="body1" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
                - menu lain
              </Typography>
              <Typography variant="body1" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
                - menu lain
              </Typography>
            </Box>
          </Paper>
        </Box>
      </FoodContainer>
      <Box ref={orderRef} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", opacity: "0", transform: "translateY(-100%)", transition: "all", transitionDuration: "1s" }}>
        <Typography variant="h5" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', textAlign: "center", fontWeight: "bold" }}>
          Ingin pesan menu yang lain?
        </Typography>
        <Typography variant="h6" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', textAlign: "center", fontWeight: "bold" }}>
          Hubungi nomor yang tertera di bawah
        </Typography>
      </Box>
    </MenuContainer>
  );
}
