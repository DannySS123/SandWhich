export interface Hamburger {
  id: string;
  picPath?: string;
  name: string;
  toppings: Topping[];
  description: string;
  price: number;
  bunType: "Normal" | "Sezame seeds" | "Wholewheat" | "Rye" | string;
  type: HamburgerType;
  favourite?: boolean;
}

export enum HamburgerType {
  REGULAR = "Regular",
  COUPON = "Coupon",
  FAVOURITE = "Favourites",
}

export interface Topping {
  name: string;
  picPath: string;
}
