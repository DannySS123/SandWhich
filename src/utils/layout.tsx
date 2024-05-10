import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import { Box } from "@mui/material";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <Box mx={1}>{children}</Box>
    </div>
  );
}
