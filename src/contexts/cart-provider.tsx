import { PropsWithChildren, useState } from "react";
import { Hamburger, HamburgerType, Topping } from "../types";
import { CartContext } from "./cart-context";

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Hamburger[]>([]);
  const [favourites, setFavourites] = useState<Hamburger[]>([]);

  const addToCart = (b: Hamburger) => {
    setCart([...cart, b]);
  };
  const addToFavourites = (b: Hamburger) => {
    setFavourites([...favourites, b]);
  };
  const removeFromFavourites = (b: Hamburger) => {
    setFavourites(favourites.filter((burger) => burger.id !== b.id));
  };
  const getBurger = (id: string): Hamburger | undefined => {
    const burger = burgers.find((b) => b.id === parseInt(id));
    if (!burger) return undefined;
    return {
      ...burger,
      favourite: favourites.some((b) => b.id === parseInt(id)),
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
        cart,
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

export const allToppings = [chicken, Mayo, Lettuce, Tomato];

const burgers: Hamburger[] = [
  {
    id: 1,
    name: "McCrispy",
    description: "finom",
    price: 12,
    toppings: [chicken, Mayo, Lettuce, Tomato],
    type: HamburgerType.REGULAR,
    bunType: "normal",
  },
];
