import {
  List,
  ListItem,
  Stack,
  Typography,
  IconButton as MuiIconButton,
} from "@mui/material";
import viteLogo from "/vite.svg";
import IconButton from "../utils/iconButton";
import { Add, Remove, Edit, Star, StarBorder } from "@mui/icons-material";
import { useState } from "react";

export default function ItemPage() {
  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleEdit = () => {
    console.log("navigate to edit page");
  };

  return (
    <Stack height="100%" justifyContent="space-between">
      <Stack gap={4}>
        <Stack flexDirection="row" gap={4}>
          <img src={viteLogo} className="logo" alt="Vite logo" width="150px" />
          <Stack>
            <Stack flexDirection="row" alignItems="center">
              <MuiIconButton onClick={() => setFavorite(!favorite)}>
                {favorite ? <Star /> : <StarBorder />}
              </MuiIconButton>
              <Typography>Hamburger</Typography>
            </Stack>
            <List>
              <ListItem>Bun</ListItem>
              <ListItem>Meat</ListItem>
              <ListItem>Souce</ListItem>
            </List>
          </Stack>
        </Stack>
        <Typography>A tasty, simple burger that everyone loves</Typography>
        <Typography>Price: 10$</Typography>
      </Stack>
      <Stack justifyContent="space-between" flexDirection="row" mt={2}>
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <IconButton onClick={handleRemove}>
            <Remove />
          </IconButton>
          <Typography>{count}</Typography>
          <IconButton onClick={handleAdd}>
            <Add />
          </IconButton>
        </Stack>
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Stack>
    </Stack>
  );
}
