import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { List, Typography, ListItem, Link } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./index.css";

const ListContainer = styled(List)({
  display: "flex",
  flexWrap: "nowrap",
  gap: "1rem",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
});

const Text = styled(Link)({
  color: "white",
  fontWeight: "bold",
  fontFamily: '"Oswald" sans-serif',
  fontSize: "1.2rem",
  transition: "all",
  transitionDuration: "500ms",
  "::after": {
    transition: "all",
    transitionDuration: "200ms",
    content: '""',
    display: "block",
    backgroundColor: "white",
    width: "100%",
    height: "2px",
    transform: "scaleX(0)",
  },
  ":hover::after": {
    width: "100%",
    transform: "scaleX(1)",
  },
});

interface PositionYState {
  prev: number;
  current: number;
  next: number;
}

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [positionY, setPositionY] = useState<PositionYState>({ prev: 0, current: 0, next: 0 });

  useEffect(() => {
    const homeSection = document.getElementById("home") as HTMLDivElement;
    const aboutSection = document.getElementById("about") as HTMLDivElement;
    const productsSection = document.getElementById("products") as HTMLDivElement;
    const contactSection = document.getElementById("contacts") as HTMLDivElement;

    const homeNav = document.querySelector("a[href='#home']") as HTMLAnchorElement;
    const aboutNav = document.querySelector("a[href='#about']") as HTMLAnchorElement;
    const productsNav = document.querySelector("a[href='#products']") as HTMLAnchorElement;
    const contactNav = document.querySelector("a[href='#contacts']") as HTMLAnchorElement;

    const scrollHandler = () => {
      setPositionY({ ...positionY, current: window.scrollY });
    };

    window.addEventListener("scroll", scrollHandler);

    if (navbarRef.current) {
      navbarRef.current.style.opacity = "1";
      navbarRef.current.style.transform = "translateY(0)";

      if (positionY.current >= 100) {
        navbarRef.current.style.background = "#7ecc1f";
        navbarRef.current.style.position = "fixed";
      } else if (positionY.current <= 10) {
        navbarRef.current.style.background = "none";
      }

      // Scroll Down
      if (positionY.next <= positionY.current && positionY.current !== 0) {
        navbarRef.current.style.top = "-100%";
        setPositionY({ ...positionY, prev: positionY.current - 50, next: positionY.current + 50 });
      }
      // Scroll Up
      if (positionY.prev >= positionY.current && positionY.current >= 100) {
        navbarRef.current.style.top = "0";
        setPositionY({ ...positionY, prev: positionY.current - 50, next: positionY.current + 50 });
      }

      if (positionY.current >= homeSection.offsetTop && positionY.current <= aboutSection.offsetTop - 200) {
        homeNav.classList.add("active-nav");
        aboutNav.classList.remove("active-nav");
        productsNav.classList.remove("active-nav");
        contactNav.classList.remove("active-nav");
      } else if (positionY.current >= aboutSection.offsetTop - 200 && positionY.current <= productsSection.offsetTop - 200) {
        homeNav.classList.remove("active-nav");
        aboutNav.classList.add("active-nav");
        productsNav.classList.remove("active-nav");
        contactNav.classList.remove("active-nav");
      } else if (positionY.current >= productsSection.offsetTop - 200 && positionY.current <= contactSection.offsetTop - 200) {
        homeNav.classList.remove("active-nav");
        aboutNav.classList.remove("active-nav");
        productsNav.classList.add("active-nav");
        contactNav.classList.remove("active-nav");
      } else if (positionY.current >= contactSection.offsetTop - 200) {
        homeNav.classList.remove("active-nav");
        aboutNav.classList.remove("active-nav");
        productsNav.classList.remove("active-nav");
        contactNav.classList.add("active-nav");
      }
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [positionY]);

  return (
    <Grid
      container
      ref={navbarRef}
      sx={{ position: "absolute", zIndex: "999", opacity: "0", transition: "background 200ms, opacity 1s, transform 1s, top 500ms", transform: "translateY(-100%)" }}
      spacing={2}
      paddingX={"2rem"}
      paddingY={"2px"}
    >
      <Grid item xs={6} md={2} marginY="auto">
        <Typography variant="h6" sx={{ cursor: "pointer", fontSize: { xs: "1rem", sm: "1.4rem" } }} onClick={() => (location.href = "/")} color="#ffeb3b" fontWeight={"900"} fontFamily={'"Lora", sans-serif'}>
          Kantin Sukawangi
        </Typography>
      </Grid>
      <Grid item sx={{ display: { xs: "none", md: "flex" } }} xs={8} container rowSpacing={4} marginY={"auto"} direction="row" justifyContent="center" alignContent="center" id="navigation">
        <ListContainer>
          <ListItem>
            <Text underline="none" href="#home" className="active-nav">
              Home
            </Text>
          </ListItem>
          <ListItem>
            <Text underline="none" href="#about">
              About
            </Text>
          </ListItem>
          <ListItem>
            <Text underline="none" href="#products">
              Products
            </Text>
          </ListItem>
          <ListItem>
            <Text underline="none" href="#contacts">
              Contacts
            </Text>
          </ListItem>
        </ListContainer>
      </Grid>
      <Grid item xs={6} md={2} container marginY="auto" direction="row" justifyContent={"right"}>
        <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white", cursor: "pointer", transition: "all", transitionDuration: "200ms", ":hover": { color: "#ffeb3b" } }} titleAccess="Shopping Cart" />
      </Grid>
    </Grid>
  );
}
