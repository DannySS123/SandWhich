import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const sumPrice = cart.reduce((sum, current) => (sum += current.price), 0);

  return (
    <Stack>
      <Typography variant="h5">Your cart</Typography>
      <Typography>Items:</Typography>
      <Stack>
        {cart.map((item) => (
          <Stack flexDirection="row">
            <p>{item.name}</p>
            <p>{item.price}</p>
          </Stack>
        ))}
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography>Total:</Typography>
        <Typography>{sumPrice}</Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{ borderRadius: 4, width: "fit-content", alignSelf: "center" }}
      >
        Go to payment
      </Button>
    </Stack>
  );
};
