import { Button, Stack, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import SideMenu from "./sideMenu";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        background: "purple",
        flexDirection: "row",
        p: 1,
        alignItems: "center",
      }}
    >
      <SideMenu />
      <Button href="/">
        <Typography variant="h5">SandWhich</Typography>
      </Button>
      <Button href="/cart">
        <ShoppingCart />
        <Typography sx={{ mr: 1 }}>{cart.length}</Typography>
      </Button>
    </Stack>
  );
}
