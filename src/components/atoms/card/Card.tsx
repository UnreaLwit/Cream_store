import React from "react";
import { TCardProps } from "../../../types/types";
import LazyLoadingImg from "../../../utils/LazyLoadingImg";

export const Card: React.FC<TCardProps> = ({
  id,
  name,
  price,
  oldprice,
  src,
}) => {
  if (!id || !name || !price || !oldprice || !src) {
    return <div>Неверные данные о продукте</div>;
  }

  return (
    <div className="flex flex-col w-auto h-auto">
      <div className="shadow-lg rounded min-h-[450px] max-h-[450px] overflow-hidden">
        <LazyLoadingImg
          src={src}
          alt={name}
          className="w-full h-72 object-cover"
        />
        <div className="flex px-3 py-6">
          <div className="flex flex-col items-start mb-2 w-44 text-xl">
            <h3 className="line-clamp-2 font-medium text-xl">{name}</h3>
            <p className="mt-1 text-base text-gray-700">
              100% подлинный продукт
            </p>
          </div>
          <div className="flex flex-col justify-start items-center ml-auto">
            <span className="mt-1 ml-2">{price}</span>
            <span className="ml-2 text-gray-500 line-through">{oldprice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
