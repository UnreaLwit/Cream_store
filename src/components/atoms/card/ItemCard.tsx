import React, { useState } from "react";
import { Link } from "react-router";
import useCartStore from "../../../context/ZustandContext";
import { TItemCardProps } from "../../../types/types";
import LazyLoadingImg from "../../../utils/LazyLoadingImg";

export const ItemCard: React.FC<TItemCardProps> = ({
  id,
  name,
  price,
  description,
  src,
  product,
}) => {
  const { addToCart, removeFromCart } = useCartStore();
  const [active, setActive] = useState(true);
  const handleclick = (product: any) => {
    if (active) {
      addToCart(product);
      setActive(!active);
    } else {
      removeFromCart(id);
      setActive(!active);
    }
  };

  return (
    <div className="flex flex-col border border-black/15 w-auto h-auto">
      <div className="flex flex-col justify-around items-center shadow-lg rounded overflow-hidden">
        <Link to={`/shop/${id}`}>
          <LazyLoadingImg src={src} alt={name} className="w-auto h-72" />
        </Link>

        <div className="flex px-4 pt-6 pb-0 min-h-52">
          <div className="flex-col items-start text-xl">
            <h3>{name}</h3>
            <p className="text-base text-gray-700">{description}</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <button
            onClick={() => handleclick(product)}
            key={id}
            className={`${
              active
                ? "hover:border-[#076e2f] hover:bg-[#076e2f] bg-[rgb(237,233,225)] shadow-lg hover:shadow-lg m-4 mr-2 px-4 py-2 border border-black/40 rounded-md w-32 h-10 text-center text-sm hover:text-white transition-all active:scale-110"
                : "border-[#076e2f] bg-[#076e2f]   shadow-lg  m-4 mr-2 px-4 py-2 border  rounded-md w-32 h-10 text-center text-sm text-white transition-all"
            }`}
          >
            {active ? "Купить" : "В корзине"}
          </button>
          <span className="ml-4 text-xl">{`₽${price}.00`}</span>
        </div>
      </div>
    </div>
  );
};
