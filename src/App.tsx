import { useState } from "react";

import "./App.css";
import { Chip, Stack } from "@mui/material";
import ItemCard from "./utils/ItemCard";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.info("You clicked the Chip.", count, setCount);
  };
  return (
    <>
      <Stack
        sx={{ flexDirection: "row", justifyContent: "space-evenly", my: 1 }}
      >
        <Chip label="Regular" onClick={handleClick} />
        <Chip label="Coupons" onClick={handleClick} />
        <Chip label="Favorites" onClick={handleClick} />
      </Stack>
      <Stack sx={{ flexWrap: "wrap", flexDirection: "row", gap: 1 }}>
        <ItemCard title="Hamburger" logo={""} />
        <ItemCard title="Hamburger" logo={""} />
        <ItemCard title="Hamburger" logo={""} />
        <ItemCard title="Hamburger" logo={""} />
        <ItemCard title="Hamburger" logo={""} />
        <ItemCard title="Hamburger" logo={""} />
      </Stack>
    </>
  );
}

export default App;
