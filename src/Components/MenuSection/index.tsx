import { Box, Button, Paper, Typography } from "@mui/material";
import { FoodContainer, MenuContainer } from "./components";
import "./index.css";
import { ShoppingCart } from "@mui/icons-material";

export default function MenuSection() {
  return (
    <MenuContainer>
      <Box>
        <Typography variant="h3" textAlign={"center"} sx={{ fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
          Menu Kami
        </Typography>
      </Box>
      <FoodContainer>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center", gap: "2rem" }}>
          <Box>
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
          <Box>
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
        <Box sx={{ width: "100%" }}>
          <Paper elevation={12} sx={{ padding: "1rem 2rem", borderRadius: "1rem", width: "100%", maxWidth: "900px", margin: "2rem auto", display: "block" }}>
            <Typography variant="h5" sx={{ fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
              Sedia Juga :
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 25%)", textAlign: "center" }}>
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
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography variant="h5" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
              Ingin pesan menu yang lain?
            </Typography>
            <Typography variant="h6" sx={{ margin: "0.25rem 0", fontFamily: '"Lora", sans-serif', fontWeight: "bold" }}>
              Hubungi nomor yang tertera di bawah
            </Typography>
          </Box>
        </Box>
      </FoodContainer>
    </MenuContainer>
  );
}
