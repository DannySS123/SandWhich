import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const sumPrice = cart.reduce((sum, current) => (sum += current.price), 0);

  return (
    <Stack gap={2}>
      <Typography variant="h5">Your cart</Typography>
      <Typography>Items:</Typography>
      <Stack>
        {cart.map((item) => (
          <Stack
            sx={{ background: "lightgray" }}
            flexDirection="row"
            justifyContent="space-between"
            p={1}
          >
            <Stack flexDirection="row">
              <img
                src={item.picPath ?? viteLogo}
                className="logo"
                alt="Vite logo"
              />
              <p>{item.name}</p>
            </Stack>
            <Stack flexDirection="row">
              <p>{item.price}$</p>
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography>Total:</Typography>
        <Typography>{sumPrice}$</Typography>
      </Stack>
      <Button
        onClick={() => navigate("/payment")}
        variant="contained"
        sx={{ borderRadius: 4, width: "fit-content", alignSelf: "center" }}
      >
        Go to payment
      </Button>
    </Stack>
  );
};
