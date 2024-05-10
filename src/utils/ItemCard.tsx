import { Stack, Typography } from "@mui/material";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { Hamburger } from "../types";

interface ItemCardProps {
  burger: Hamburger;
}

export default function ItemCard({ burger }: ItemCardProps) {
  return (
    <Stack
      sx={{ background: "orange", p: 2, borderRadius: 4, alignItems: "center" }}
    >
      <Link to={`burger/${burger.id}`}>
        <img
          src={burger.picPath ?? viteLogo}
          className="logo"
          alt="Vite logo"
        />
        <Typography>{burger.name}</Typography>
      </Link>
    </Stack>
  );
}
