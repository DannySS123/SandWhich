import {
  List,
  ListItem,
  Stack,
  Typography,
  IconButton as MuiIconButton,
  Button,
  Alert,
  Snackbar,
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
import { useNavigate, useParams } from "react-router-dom";
import { Hamburger } from "../types";
import { CartContext } from "../contexts/cart-context";

export default function ItemPage() {
  const [snackOpen, setSnackOpen] = useState(false);
  const [count, setCount] = useState(1);
  const nav = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const { id } = useParams();
  const [burger, setBurger] = useState<Hamburger | undefined>();
  const { getBurger, addToFavourites, removeFromFavourites, addToCart } =
    useContext(CartContext);

  useEffect(() => {
    const burger = getBurger(id ?? "0");
    setBurger(burger);
    setFavorite(!!burger?.favourite);
  }, [getBurger, id]);

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleEdit = () => {
    nav(`/burger/${id}/edit`);
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
    if (burger && count > 0) {
      addToCart(burger, count);
      setCount(0);
      setSnackOpen(true);
    }
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  return (
    <Stack height="100%" justifyContent="space-between">
      <Stack gap={2}>
        <Stack flexDirection="row" gap={4}>
          <img
            src={burger?.picPath ?? viteLogo}
            className="logo"
            alt={burger?.name || ''}
            width="150px"
            height="150px"
            style={{ objectFit: 'contain', backgroundColor: 'white' }}
          />

          <Stack>
            <Stack flexDirection="row" alignItems="center">
              <Typography variant="h1" fontSize={25} fontWeight="bold">
                {burger?.name}
              </Typography>
              <MuiIconButton onClick={handleFavourite}>
                {favorite ? <Star /> : <StarBorder />}
              </MuiIconButton>
            </Stack>
            <List>
              <ListItem sx={{ padding: "4px" }}>{burger?.bunType} bun</ListItem>
              {burger?.toppings.map((t) => (
                <ListItem sx={{ padding: "4px" }} key={t.name}>
                  {t.name}
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
        <Typography>{burger?.description}</Typography>
        <Typography>Price: ${burger?.price}</Typography>
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
        <Button
          sx={{ fontWeight: "bold" }}
          startIcon={<ShoppingCart />}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Stack>
      <Snackbar open={snackOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", fontWeight: "bold" }}
        >
          Items added to cart!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
