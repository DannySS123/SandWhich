import { PropsWithChildren, useEffect, useState } from "react";
import { Hamburger, HamburgerType } from "../types";
import { CartContext } from "./cart-context";
import { burgers } from "./mock-data";

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Hamburger[]>([]);
  const [extraBurgers, setExtraBurgers] = useState<Hamburger[]>([]);
  const [favourites, setFavourites] = useState<Hamburger[]>([]);

  useEffect(() => {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    }

    const extrasFromStorage = localStorage.getItem("extras");
    if (extrasFromStorage) {
      setExtraBurgers(JSON.parse(extrasFromStorage));
    }

    const favsFromStorage = localStorage.getItem("favs");
    if (favsFromStorage) {
      setFavourites(JSON.parse(favsFromStorage));
    }
  }, []);

  const addToCart = (b: Hamburger, amount = 1) => {
    const toAdd = [];
    for (let i = 0; i < amount; i++) {
      toAdd.push(b);
    }
    const newCart = [...cart, ...toAdd];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  const addToFavourites = (b: Hamburger) => {
    const newFavs = [...favourites, b];
    setFavourites(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
  };
  const removeFromFavourites = (b: Hamburger) => {
    const newFavs = favourites.filter((burger) => burger.id !== b.id);
    setFavourites(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
  };
  const addExtraBurger = (b: Hamburger) => {
    const newExtras = [...extraBurgers, b];
    setExtraBurgers(newExtras);
    localStorage.setItem("extras", JSON.stringify(newExtras));
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
