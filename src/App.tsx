import { useState } from "react";

import "./App.css";
import { Chip, Grid, Stack } from "@mui/material";
import ItemCard from "./utils/ItemCard";

function App() {
  const [activeChip, setActiveChip] = useState(0);
  const handleChipClick = (num: number) => {
    setActiveChip(num);
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

  const getItems = () => {
    switch (activeChip) {
      case 0:
        return mockBurgers;
      case 1:
        return mockCoupons;
      case 2:
        return mockFavorites;
    }
  };

  return (
    <>
      <Stack
        sx={{ flexDirection: "row", justifyContent: "space-evenly", my: 1 }}
      >
        {["Regular", "Coupons", "Favorites"].map((item, idx) => (
          <Chip
            label={item}
            variant={activeChip === idx ? "filled" : "outlined"}
            onClick={() => handleChipClick(idx)}
          />
        ))}
      </Stack>
      <Grid container spacing={2}>
        {getItems()?.map((burger) => (
          <Grid item xs={6}>
            <ItemCard title={burger} logo={""} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
