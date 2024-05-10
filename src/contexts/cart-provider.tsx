import { PropsWithChildren, useState } from "react";
import { Hamburger, HamburgerType, Topping } from "../types";
import { CartContext } from "./cart-context";

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Hamburger[]>([]);
  const [extraBurgers, setExtraBurgers] = useState<Hamburger[]>([]);
  const [favourites, setFavourites] = useState<Hamburger[]>([]);

  const addToCart = (b: Hamburger, amount = 1) => {
    const toAdd = [];
    for (let i = 0; i < amount; i++) {
      toAdd.push(b);
    }
    setCart([...cart, ...toAdd]);
  };
  const clearCart = () => {
    setCart([]);
  };
  const addToFavourites = (b: Hamburger) => {
    setFavourites([...favourites, b]);
  };
  const addExtraBurger = (b: Hamburger) => {
    setExtraBurgers([...extraBurgers, b]);
  };

  const removeFromFavourites = (b: Hamburger) => {
    setFavourites(favourites.filter((burger) => burger.id !== b.id));
  };
  const getBurger = (id: string): Hamburger | undefined => {
    const burger =
      burgers.find((b) => b.id === id) ?? extraBurgers.find((b) => b.id === id);
    if (!burger) return undefined;
    return {
      ...burger,
      favourite: favourites.some((b) => b.id === id),
    };
  };
  const getBurgers = (t: HamburgerType) =>
    t === HamburgerType.FAVOURITE
      ? favourites
      : burgers.filter((b) => b.type === t);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        getBurger,
        getBurgers,
        addToFavourites,
        addExtraBurger,
        cart,
        clearCart,
        removeFromFavourites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const chicken: Topping = {
  name: "Chicken",
  picPath: "",
};

const Mayo: Topping = {
  name: "Mayo",
  picPath: "",
};
const Lettuce: Topping = {
  name: "Lettuce",
  picPath: "",
};
const Tomato: Topping = {
  name: "Tomato",
  picPath: "",
};
const Onion: Topping = {
  name: "Onion",
  picPath: "",
};

export const allToppings = [chicken, Mayo, Lettuce, Tomato, Onion];

const burgers: Hamburger[] = [
  {
    id: "1",
    name: "McCrispy",
    description: "finom",
    price: 12,
    toppings: [chicken, Mayo, Lettuce, Tomato],
    type: HamburgerType.REGULAR,
    bunType: "Normal",
  },
  {
    id: "2",
    name: "Spicy Burger",
    description: "very spicy",
    price: 15,
    toppings: [chicken, Lettuce, Tomato],
    type: HamburgerType.REGULAR,
    bunType: "Normal",
  },
  {
    id: "3",
    name: "Vegan Burger",
    description: "not finom",
    price: 10,
    toppings: [Mayo, Lettuce, Tomato],
    type: HamburgerType.REGULAR,
    bunType: "Sezame seeds",
  },
  {
    id: "4",
    name: "Vegan Burger Coupon",
    description: "very not finom",
    price: 2,
    toppings: [Lettuce, Tomato],
    type: HamburgerType.COUPON,
    bunType: "Sezame seeds",
  },
];
