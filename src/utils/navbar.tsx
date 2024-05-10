import { Stack, Typography } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";
import SideMenu from "./sideMenu";

export default function Navbar() {
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
      <Typography variant="h5">SandWhich</Typography>
      <ShoppingCart sx={{ mr: 2 }} />
    </Stack>
  );
}
