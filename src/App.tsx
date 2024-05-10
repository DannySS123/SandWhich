import { useContext, useEffect, useState } from "react";

import "./App.css";
import { Chip, Grid, Stack } from "@mui/material";
import ItemCard from "./utils/ItemCard";
import { Hamburger, HamburgerType } from "./types";
import { CartContext } from "./contexts/cart-context";

function App() {
  const [activeChip, setActiveChip] = useState(HamburgerType.REGULAR);
  const [burgers, setBurgers] = useState<Hamburger[]>([]);
  const { getBurgers } = useContext(CartContext);

  useEffect(() => {
    setBurgers(getBurgers(HamburgerType.REGULAR));
  }, [getBurgers]);

  const handleChipClick = (type: HamburgerType) => {
    setActiveChip(type);
    setBurgers(getBurgers(type));
  };

  const mockBurgers = [
    "Hamburger",
    "Cheeseburger",
    "Vegan Burger",
    "Spicy Burger",
    "Hamburger",
    "Cheeseburger",
    "Vegan Burger",
    "Spicy Burger",
    "Hamburger",
    "Cheeseburger",
    "Vegan Burger",
    "Spicy Burger",
    "Hamburger",
    "Cheeseburger",
    "Vegan Burger",
    "Spicy Burger",
  ];

  const mockCoupons = [
    "Drink Coupon",
    "Large Meal",
    "Family Pack",
    "Drink Coupon",
    "Large Meal",
    "Family Pack",
    "Drink Coupon",
    "Large Meal",
    "Family Pack",
  ];

  const mockFavorites = ["Spicy Burger", "Family Pack"];

  return (
    <>
      <Stack
        sx={{ flexDirection: "row", justifyContent: "space-evenly", my: 1 }}
      >
        {[
          HamburgerType.REGULAR,
          HamburgerType.COUPON,
          HamburgerType.FAVOURITE,
        ].map((item) => (
          <Chip
            label={item}
            variant={activeChip === item ? "filled" : "outlined"}
            onClick={() => handleChipClick(item)}
          />
        ))}
      </Stack>
      <Grid container spacing={2}>
        {burgers.map((burger) => (
          <Grid item xs={6}>
            <ItemCard burger={burger} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
