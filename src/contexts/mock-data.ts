import { Topping, Hamburger, HamburgerType } from "../types";

export const chicken: Topping = {
  name: "Chicken",
  picPath: "",
};

export const Mayo: Topping = {
  name: "Mayo",
  picPath: "",
};
export const Lettuce: Topping = {
  name: "Lettuce",
  picPath: "",
};
export const Tomato: Topping = {
  name: "Tomato",
  picPath: "",
};
export const Onion: Topping = {
  name: "Onion",
  picPath: "",
};

export const allToppings = [chicken, Mayo, Lettuce, Tomato, Onion];

export const burgers: Hamburger[] = [
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
