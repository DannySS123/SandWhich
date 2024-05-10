import { Badge, Button, Stack, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import SideMenu from "./sideMenu";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import { Link } from "react-router-dom";

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
        color: "white",
      }}
    >
      <SideMenu />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography color="white" variant="h5">
          SandWhich
        </Typography>
      </Link>
      <Link to="/cart">
        <Button>
          <Badge badgeContent={cart.length} showZero color="error">
            <ShoppingCart sx={{ color: "white" }} />
          </Badge>
        </Button>
      </Link>
    </Stack>
  );
}
