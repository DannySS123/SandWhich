import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";

export default function NewBurgerCard() {
  return (
    <Link to={`new`} style={{ textDecoration: "none" }}>
      <Stack
        sx={{
          background: "orange",
          p: 2,
          borderRadius: 4,
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            background: "white",
            height: "35px",
            width: "35px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Add style={{ width: "50px" }} />
        </Stack>
        <Typography fontWeight="bold">Create</Typography>
      </Stack>
    </Link>
  );
}
