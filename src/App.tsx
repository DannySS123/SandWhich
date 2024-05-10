import { useContext, useEffect, useState } from "react";

import "./App.css";
import { Chip, Grid, Stack, Typography } from "@mui/material";
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
            key={item}
            label={item}
            variant={activeChip === item ? "filled" : "outlined"}
            onClick={() => handleChipClick(item)}
          />
        ))}
      </Stack>
      <Grid container spacing={2}>
        {burgers.map((burger) => (
          <Grid item xs={6} key={burger.id}>
            <ItemCard burger={burger} />
          </Grid>
        ))}
      </Grid>
      {burgers.length === 0 && activeChip === HamburgerType.FAVOURITE && (
        <Typography mt={2} fontStyle="italic" textAlign="center">
          You haven't marked any burgers as favourite yet!
        </Typography>
      )}
    </>
  );
}

export default App;
