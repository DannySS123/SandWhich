import { createContext } from "react";
import { Hamburger, HamburgerType } from "../types";

export type CartContextType = {
  getBurger: (id: string) => Hamburger | undefined;
  addToCart: (burger: Hamburger) => void;
  addToFavourites: (burger: Hamburger) => void;
  removeFromFavourites: (burger: Hamburger) => void;
  getBurgers: (type: HamburgerType) => Hamburger[];
  cart: Hamburger[];
};

export const CartContext = createContext<CartContextType>({
  addToFavourites: () => undefined,
  removeFromFavourites: () => undefined,
  addToCart: () => undefined,
  getBurger: () => undefined,
  getBurgers: () => [],
  cart: [],
});
