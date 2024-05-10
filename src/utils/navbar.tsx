import { Stack } from "@mui/material";

import { ShoppingCart, Menu } from "@mui/icons-material";

export default function Navbar() {
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        background: "purple",
        flexDirection: "row",
        p: 1,
      }}
    >
      <Menu />
      <ShoppingCart />
    </Stack>
  );
}
