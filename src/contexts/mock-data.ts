import { Topping, Hamburger, HamburgerType } from "../types";

export const Chicken: Topping = {
  name: "Chicken patty",
  picPath: "https://i.imgur.com/MGzlG22.jpg",
};

export const Beef: Topping = {
  name: "Beef patty",
  picPath: "https://i.imgur.com/JSMLs9b.jpg",
};

export const VeganPatty: Topping = {
  name: "Vegan patty",
  picPath: "https://i.imgur.com/K6Aot3a.jpg",
};

export const Lettuce: Topping = {
  name: "Lettuce",
  picPath: "https://i.imgur.com/f4JKMFU.png",
};
export const Tomato: Topping = {
  name: "Tomato",
  picPath: "https://i.imgur.com/iVCPc2A.jpg",
};
export const Onion: Topping = {
  name: "Onion",
  picPath: "https://i.imgur.com/fHk9HDt.jpg",
};

export const Ketchup: Topping = {
  name: "Ketchup",
  picPath: "https://i.imgur.com/Cr01WVg.jpg",
};

export const Mayo: Topping = {
  name: "Mayo",
  picPath: "https://i.imgur.com/GwVpWa0.jpg",
};

export const Spicy: Topping = {
  name: "Spicy sauce",
  picPath: "https://i.imgur.com/KK1st9O.jpg",
};

export const Cheese: Topping = {
  name: "Cheese",
  picPath: "https://i.imgur.com/lHjoVAs.jpg",
};

export const allToppings = [Chicken, Mayo, Lettuce, Tomato, Onion, Ketchup, Beef, Cheese, Spicy, VeganPatty];

export const burgers: Hamburger[] = [
  {
    id: "0",
    name: "McChicken",
    description: "For me, it is the mcchicken. The best fast food sandwich.",
    price: 8,
    toppings: [Chicken, Mayo, Lettuce],
    type: HamburgerType.REGULAR,
    bunType: "Normal",
    picPath: "https://i.imgur.com/gRGyr0p.jpg"
  },
  {
    id: "1",
    name: "McCrispy",
    description: "Pácolt csirkemellfilé ropogós, borsos panírozott bundában, elősütött, főtt és gyorsfagyasztott, szeletelt paradicsom, jégsaláta, borsos zöldfűszeres szósz, burgonyás hamburger zsemlében. ",
    price: 12,
    toppings: [Chicken, Mayo, Lettuce, Tomato],
    type: HamburgerType.REGULAR,
    bunType: "Normal",
    picPath: "https://i.imgur.com/TvxbMry.jpg"
  },
  {
    id: "2",
    name: "Spicy Burger",
    description: "Beef burger with extra hot sauce.",
    price: 15,
    toppings: [Beef, Lettuce, Spicy, Onion],
    type: HamburgerType.REGULAR,
    bunType: "Normal",
    picPath: "https://i.imgur.com/lUco98S.jpg"
  },
  {
    id: "3",
    name: "Vegan Burger",
    description: "A burger with a plant based patty for our vegan cutomers!",
    price: 10,
    toppings: [VeganPatty, Lettuce, Tomato, Onion],
    type: HamburgerType.REGULAR,
    bunType: "Wholewheat",
    picPath: "https://i.imgur.com/R0o6Daa.jpg"
  },
  {
    id: "4",
    name: "Vegan Burger Coupon",
    description: "A burger with a plant based patty for our vegan cutomers! At a discounted price! Let's save the planet!",
    price: 3,
    toppings: [VeganPatty, Lettuce, Tomato, Onion],
    type: HamburgerType.COUPON,
    bunType: "Wholewheat",
    picPath: "https://i.imgur.com/R0o6Daa.jpg"
  },
    {
    id: "5",
    name: "Meat lover Burger",
    description: "A burger with all different types of meat.",
    price: 12,
    toppings: [Beef, Lettuce, Spicy, VeganPatty, Lettuce, Tomato, Onion],
    type: HamburgerType.Regular,
    bunType: "Wholewheat",
    picPath: "https://i.imgur.com/R0o6Daa.jpg"
  },
      {
    id: "5",
    name: "Everything Burger",
    description: "This burger has it all.",
    price: 15,
    toppings: [Beef, Lettuce, Spicy, VeganPatty, Lettuce, Tomato, Onion, Ketchup, Chicken, Cheese, Mayo],
    type: HamburgerType.Regular,
    bunType: "Wholewheat",
    picPath: "https://i.imgur.com/R0o6Daa.jpg"
  },
];
