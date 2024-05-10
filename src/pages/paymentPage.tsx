import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cart-context";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [value, setValue] = useState("0");
  const [snackOpen, setSnackOpen] = useState(false);
  const { clearCart } = useContext(CartContext);
  const nav = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleOrder = () => {
    if (!city || !street || !house) {
      setSubmitted(true);
      return;
    }
    clearCart();
    setSnackOpen(true);
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
    nav("/");
  };

  return (
    <Stack gap={2}>
      <Typography variant="h2" fontSize={25} fontWeight="bold">
        Address
      </Typography>
      <Stack gap={1} mb={2}>
        <TextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          required
          error={submitted && !city}
        />
        <TextField
          label="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          variant="outlined"
          required
          error={submitted && !street}
        />
        <TextField
          label="House"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          variant="outlined"
          required
          error={submitted && !house}
        />
      </Stack>
      <FormControl>
        <Typography variant="h2" fontSize={25} fontWeight="bold">
          Payment method
        </Typography>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="0" control={<Radio />} label="PayPal" />
          <FormControlLabel value="1" control={<Radio />} label="SimplePay" />
          <FormControlLabel value="2" control={<Radio />} label="Cash" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        sx={{
          borderRadius: 4,
          width: "fit-content",
          alignSelf: "center",
          fontWeight: "bold",
        }}
        onClick={handleOrder}
      >
        Order
      </Button>
      <Snackbar open={snackOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", fontWeight: "bold" }}
        >
          We've received your order!
        </Alert>
      </Snackbar>
    </Stack>
  );
};
