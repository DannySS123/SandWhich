import { Stack, Typography } from "@mui/material";
import viteLogo from "/vite.svg";

interface ItemCardProps {
  title: string;
  logo: string;
}

export default function ItemCard({ title }: ItemCardProps) {
  return (
    <Stack
      sx={{ background: "orange", p: 2, borderRadius: 4, alignItems: "center" }}
    >
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>

      <Typography>{title}</Typography>
    </Stack>
  );
}
