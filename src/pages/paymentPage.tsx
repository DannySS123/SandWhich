import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const PaymentPage = () => {
  const [value, setValue] = useState("0");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Stack gap={2}>
      <Typography variant="h5">Adress</Typography>
      <Stack gap={1} mb={2}>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography>City</Typography>
          <input></input>
        </Stack>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography>Street</Typography>
          <input></input>
        </Stack>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography>House</Typography>
          <input></input>
        </Stack>
      </Stack>
      <FormControl>
        <Typography variant="h5">Payment method</Typography>
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
        sx={{ borderRadius: 4, width: "fit-content", alignSelf: "center" }}
      >
        Order
      </Button>
    </Stack>
  );
};
