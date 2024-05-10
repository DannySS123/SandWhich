import { createContext } from "react";
import { Hamburger, HamburgerType } from "../types";

export type CartContextType = {
  getBurger: (id: string) => Hamburger | undefined;
  addToCart: (burger: Hamburger, amount?: number) => void;
  removeFromCart: (burger: Hamburger) => void;
  addToFavourites: (burger: Hamburger) => void;
  addExtraBurger: (burger: Hamburger) => void;
  removeFromFavourites: (burger: Hamburger) => void;
  getBurgers: (type: HamburgerType) => Hamburger[];
  clearCart: () => void;
  cart: Hamburger[];
};

export const CartContext = createContext<CartContextType>({
  addToFavourites: () => undefined,
  removeFromFavourites: () => undefined,
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  addExtraBurger: () => undefined,
  getBurger: () => undefined,
  getBurgers: () => [],
  clearCart: () => undefined,
  cart: [],
});
