import { CheckBox, Image } from "@mui/icons-material";
import {
  SelectChangeEvent,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cart-context";
import { useParams } from "react-router-dom";
import { Hamburger } from "../types";

const bunTypes = [
  {
    value: "normal",
    name: "Normal",
  },
  {
    value: "sezame",
    name: "Sezame seeds",
  },
  {
    value: "wholewheat",
    name: "Wholewheat",
  },
  {
    value: "rye",
    name: "Rye",
  },
];
export const BurgerEdit = () => {
  const [burger, setBurger] = useState<Hamburger | undefined>();
  const { id } = useParams();
  const [bun, setBun] = useState("normal");
  const { getBurger } = useContext(CartContext);

  useEffect(() => {
    setBurger(getBurger(id));
    setBun(burger?.bunType ?? "normal");
  }, [burger, id, getBurger]);

  const onBunChange = (event: SelectChangeEvent<string>) => {
    setBun(event.target.value);
  };
  return (
    <Stack flexDirection="column" gap={2}>
      <Typography variant="h1" fontSize="40px">
        Customize
      </Typography>
      <div>
        <Typography variant="h3" fontSize="16px" mb={1}>
          Bun
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="bun">Select bun type</InputLabel>
          <Select
            labelId="bun"
            value={bun}
            label="Select bun type"
            onChange={onBunChange}
          >
            {bunTypes.map((bt) => (
              <MenuItem value={bt.value}>{bt.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography variant="h3" fontSize="16px">
          Toppings
        </Typography>

        {burger?.toppings.map((t) => (
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack flexDirection="row" alignItems="center" gap={2}>
              <Image href={t.picPath} />
              <p>{t.name}</p>
            </Stack>
            <CheckBox />
          </Stack>
        ))}
      </div>
    </Stack>
  );
};
