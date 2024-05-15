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
    picPath: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/305766371_424765256420531_1575862216488960953_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=npnJCO0N6U0Q7kNvgEBpDTO&_nc_ht=scontent-vie1-1.xx&oh=00_AYCA9yB39AXZtxhoRyX5PO2ZhWqDBxFKEZ8t_Xqp8weWdQ&oe=664A68AB"
  },
  {
    id: "2",
    name: "Spicy Burger",
    description: "very spicy",
    price: 15,
    toppings: [chicken, Lettuce, Tomato],
    type: HamburgerType.REGULAR,
    bunType: "Normal",
    picPath: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/305766371_424765256420531_1575862216488960953_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=npnJCO0N6U0Q7kNvgEBpDTO&_nc_ht=scontent-vie1-1.xx&oh=00_AYCA9yB39AXZtxhoRyX5PO2ZhWqDBxFKEZ8t_Xqp8weWdQ&oe=664A68AB"
  },
  {
    id: "3",
    name: "Vegan Burger",
    description: "not finom",
    price: 10,
    toppings: [Mayo, Lettuce, Tomato],
    type: HamburgerType.REGULAR,
    bunType: "Sezame seeds",
    picPath: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/305766371_424765256420531_1575862216488960953_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=npnJCO0N6U0Q7kNvgEBpDTO&_nc_ht=scontent-vie1-1.xx&oh=00_AYCA9yB39AXZtxhoRyX5PO2ZhWqDBxFKEZ8t_Xqp8weWdQ&oe=664A68AB"
  },
  {
    id: "4",
    name: "Vegan Burger Coupon",
    description: "very not finom",
    price: 2,
    toppings: [Lettuce, Tomato],
    type: HamburgerType.COUPON,
    bunType: "Sezame seeds",
    picPath: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/305766371_424765256420531_1575862216488960953_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=npnJCO0N6U0Q7kNvgEBpDTO&_nc_ht=scontent-vie1-1.xx&oh=00_AYCA9yB39AXZtxhoRyX5PO2ZhWqDBxFKEZ8t_Xqp8weWdQ&oe=664A68AB"
  },
];
