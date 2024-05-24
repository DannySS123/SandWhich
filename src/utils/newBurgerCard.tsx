import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";

export default function NewBurgerCard() {
  return (
    <Link to={`new`}>
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
            height: "100px",
            width: "100px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Add fontSize="large" />
        </Stack>
        <Typography fontWeight="bold">Create burger</Typography>
        <Typography fontWeight="bold">$$</Typography>
      </Stack>
    </Link>
  );
}
