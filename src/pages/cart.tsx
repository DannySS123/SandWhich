import { Button, IconButton, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import viteLogo from "/vite.svg";
import { useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const sumPrice = cart.reduce((sum, current) => (sum += current.price), 0);

  return (
    <Stack gap={1}>
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h1" fontSize={25} fontWeight="bold">
          Your cart
        </Typography>
        <Button
          onClick={clearCart}
          variant="contained"
          color="error"
          disabled={cart.length === 0}
          sx={{
            borderRadius: 4,
            width: "fit-content",
            alignSelf: "center",
          }}
        >
          Clear cart
        </Button>
      </Stack>
      <Typography fontWeight="bold">Items</Typography>
      <Stack>
        {cart.map((item) => (
          <Stack
            sx={{ background: "lightgray" }}
            flexDirection="row"
            justifyContent="space-between"
            p={1}
            key={item.id}
          >
            <Stack flexDirection="row" gap={1} alignItems="center">
              <img
                src={item.picPath ?? viteLogo}
                className="logo"
                alt={item.name}
                width="100px"
                height="100px"
                style={{ objectFit: 'contain', backgroundColor: 'white' }}
              />
              <p style={{ fontWeight: 'bold' }}>{item.name}</p>
            </Stack>
            <Stack flexDirection="row" gap={1} alignItems="center">
              <p style={{ fontWeight: 'bold' }}>${item.price}</p>
              <IconButton onClick={() => removeFromCart(item)}>
                <Delete color="error" />
              </IconButton>
            </Stack>
          </Stack>
        ))}
        {cart.length === 0 && (
          <Typography fontStyle="italic" textAlign="center">
            Your cart is empty!
          </Typography>
        )}
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography fontWeight="bold">Total:</Typography>
        <Typography fontWeight="bold">{sumPrice}$</Typography>
      </Stack>
      <Button
        onClick={() => navigate("/payment")}
        variant="contained"
        disabled={cart.length === 0}
        sx={{
          borderRadius: 4,
          width: "fit-content",
          alignSelf: "center",
          fontWeight: "bold",
        }}
      >
        Go to payment
      </Button>
    </Stack>
  );
};
