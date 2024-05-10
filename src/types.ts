export interface Hamburger {
  id: string;
  picPath?: string;
  name: string;
  toppings: Topping[];
  description: string;
  price: number;
  bunType: string;
  type: HamburgerType;
  favourite?: boolean;
}

export enum HamburgerType {
  REGULAR = "regular",
  COUPON = "coupon",
  FAVOURITE = "favourite",
}

export interface Topping {
  name: string;
  picPath: string;
}
