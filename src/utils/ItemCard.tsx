import { Stack, Typography } from "@mui/material";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { Hamburger } from "../types";

interface ItemCardProps {
  burger: Hamburger;
}

export default function ItemCard({ burger }: ItemCardProps) {
  return (
    <Link to={`burger/${burger.id}`} style={{ textDecoration: "none" }}>
      <Stack
        sx={{
          background: "orange",
          p: 2,
          borderRadius: 4,
          alignItems: "center",
        }}
      >
        <img
          src={burger.picPath ?? viteLogo}
          width="100px"
          className="logo"
          alt="Vite logo"
        />
        <Typography fontWeight="bold">{burger.name}</Typography>
      </Stack>
    </Link>
  );
}
