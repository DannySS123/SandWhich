import {
  List,
  ListItem,
  Stack,
  Typography,
  IconButton as MuiIconButton,
  Button,
} from "@mui/material";
import viteLogo from "/vite.svg";
import IconButton from "../utils/iconButton";
import {
  Add,
  Remove,
  Edit,
  Star,
  StarBorder,
  ShoppingCart,
} from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Hamburger } from "../types";
import { CartContext } from "../contexts/cart-context";

export default function ItemPage() {
  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const { id } = useParams();
  const [burger, setBurger] = useState<Hamburger | undefined>();
  const { getBurger, addToFavourites, removeFromFavourites, addToCart } =
    useContext(CartContext);

  useEffect(() => {
    setBurger(getBurger(id ?? "0"));
  }, [getBurger, id]);

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

  const handleFavourite = () => {
    if (burger) {
      if (favorite) {
        removeFromFavourites(burger);
      } else {
        addToFavourites(burger);
      }
      setFavorite(!favorite);
    }
  };

  const handleAddToCart = () => {
    if (burger) {
      for (let i = 0; i < count; i++) {
        addToCart(burger);
      }
      setCount(0);
    }
  };

  return (
    <Stack height="100%" justifyContent="space-between">
      <Stack gap={4}>
        <Stack flexDirection="row" gap={4}>
          <img
            src={burger?.picPath ?? viteLogo}
            className="logo"
            alt="Vite logo"
            width="150px"
          />
          <Stack>
            <Stack flexDirection="row" alignItems="center">
              <MuiIconButton onClick={handleFavourite}>
                {favorite ? <Star /> : <StarBorder />}
              </MuiIconButton>
              <Typography>{burger?.name}</Typography>
            </Stack>
            <List>
              <ListItem>{burger?.bunType}</ListItem>
              {burger?.toppings.map((t) => (
                <ListItem>{t.name}</ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
        <Typography>{burger?.description}</Typography>
        <Typography>Price: {burger?.price}$</Typography>
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
        <Button startIcon={<ShoppingCart />} onClick={handleAddToCart}>
          Add to cart
        </Button>
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Stack>
    </Stack>
  );
}
