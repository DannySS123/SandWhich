import { Check, Close, Image } from "@mui/icons-material";
import {
  SelectChangeEvent,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cart-context";
import { useNavigate, useParams } from "react-router-dom";
import { Hamburger, Topping } from "../types";
import { allToppings } from "../contexts/cart-provider";
import IconButton from "../utils/iconButton";
import { v4 as uuidv4 } from "uuid";

const bunTypes = ["Normal", "Sezame seeds", "Wholewheat", "Rye"];
export const BurgerEdit = () => {
  const [burger, setBurger] = useState<Hamburger | undefined>();
  const { id } = useParams();
  const { getBurger, addExtraBurger } = useContext(CartContext);
  const nav = useNavigate();

  useEffect(() => {
    setBurger(getBurger(id ?? "0"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, getBurger]);

  const onBunChange = (event: SelectChangeEvent<string>) => {
    if (burger) {
      setBurger({ ...burger, bunType: event.target.value });
    }
  };

  const handleApprove = () => {
    if (burger) {
      const newId = uuidv4();
      addExtraBurger({
        ...burger,
        id: newId,
        name: burger.name + " (modified)",
      });
      nav(`/burger/${newId}`);
    }
  };

  const handleCancel = () => {
    nav(`/burgers/${id}`);
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
  if (!burger) return null;
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
      </div>
      <div>
        <Typography variant="h3" fontSize="16px">
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
              <Image href={t.picPath} />
              <p>{t.name}</p>
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
