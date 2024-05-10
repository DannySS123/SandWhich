import { IconButton as MuiIconButton } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClick: () => void;
}

export default function IconButton({ children, onClick }: Props) {
  return (
    <MuiIconButton color="primary" sx={{ height: "40px" }} onClick={onClick}>
      {children}
    </MuiIconButton>
  );
}
