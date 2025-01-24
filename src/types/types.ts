export type TProduct = {
  id: number;
  name: string;
  price: number;
  description?: string;
  numberOfstars?: number;
  src?: string;
};

export type TCartItem = TProduct & {
  quantity: number;
};

export type TCartState = {
  cartItems: TCartItem[];
  addToCart: (product: TProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

export type TItemCardProductProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  numberOfstars: number;
  src: string;
  children?: React.ReactNode;
};
export type TItemCardProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  numberOfstars: number;
  src: string;
  children?: React.ReactNode;
  product: TItemCardProductProps;
};

export type TCardProps = {
  id: number;
  name: string;
  price: string;
  oldprice: string;
  src: string;
};

export type TFilter = {
  searchQuery?: string;
  priceSort?: "asc" | "desc" | null;
};
