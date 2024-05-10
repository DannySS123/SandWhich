import { Check, Close } from "@mui/icons-material";
import {
  SelectChangeEvent,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cart-context";
import { useNavigate } from "react-router-dom";
import { Hamburger, HamburgerType, Topping } from "../types";
import IconButton from "../utils/iconButton";
import { v4 as uuidv4 } from "uuid";
import { allToppings } from "../contexts/mock-data";

const bunTypes = ["Normal", "Sezame seeds", "Wholewheat", "Rye"];

const emptyHamburger: Hamburger = {
  bunType: "Normal",
  description: "",
  name: "",
  toppings: [],
  price: 20,
  type: HamburgerType.REGULAR,
  id: "-1",
};

export const NewPage = () => {
  const [burger, setBurger] = useState<Hamburger>(emptyHamburger);
  const { addExtraBurger } = useContext(CartContext);
  const nav = useNavigate();

  const onBunChange = (event: SelectChangeEvent<string>) => {
    if (burger) {
      setBurger({ ...burger, bunType: event.target.value });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onNameChange = (event: any) => {
    if (burger) {
      setBurger({ ...burger, name: event.target.value });
    }
  };

  const handleApprove = () => {
    if (burger) {
      const newId = uuidv4();
      addExtraBurger({
        ...burger,
        id: newId,
        name: burger.name,
      });
      nav(`/burger/${newId}`);
    }
  };

  const handleCancel = () => {
    nav("/");
  };

  const handleToppingChange = (t: Topping) => {
    if (burger) {
      if (burger.toppings.includes(t)) {
        setBurger({
          ...burger,
          toppings: burger.toppings.filter((top) => t !== top),
        });
      } else {
        setBurger({ ...burger, toppings: [...burger.toppings, t] });
      }
    }
  };

  return (
    <Stack flexDirection="column" gap={2}>
      <Typography variant="h1" fontSize={25} fontWeight="bold">
        Create burger
      </Typography>
      <FormControl fullWidth>
        <Typography fontWeight="bold" id="name">
          Name
        </Typography>
        <TextField
          value={burger.name}
          onChange={(e) => onNameChange(e)}
        ></TextField>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="bun">Select bun type</InputLabel>
        <Select
          labelId="bun"
          value={burger.bunType}
          label="Select bun type"
          onChange={onBunChange}
        >
          {bunTypes.map((bt) => (
            <MenuItem key={bt} value={bt}>
              {bt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <Typography fontWeight="bold" variant="h3" fontSize="16px">
          Toppings
        </Typography>

        {allToppings.map((t) => (
          <Stack
            key={t.name}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack flexDirection="row" alignItems="center" gap={2}>
              <img src={t.picPath} />
              <Typography>{t.name}</Typography>
            </Stack>
            <Checkbox
              checked={burger.toppings.includes(t)}
              onChange={() => handleToppingChange(t)}
            />
          </Stack>
        ))}
      </div>
      <Stack flexDirection="row" justifyContent="flex-end">
        <IconButton onClick={handleApprove}>
          <Check />
        </IconButton>
        <IconButton onClick={handleCancel}>
          <Close />
        </IconButton>
      </Stack>
    </Stack>
  );
};
