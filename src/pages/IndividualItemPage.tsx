import { shopProducts } from "../data/shopProducts";
import { useParams, useNavigate } from "react-router";
import { TProduct } from "../types/types";
import useCartStore from "../context/ZustandContext";
import { MotionPage } from "../utils/MotionPage";
import { useState } from "react";
import LazyLoadingImg from "../utils/LazyLoadingImg";

export const IndividualItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { addToCart, removeFromCart } = useCartStore();
  const [active, setActive] = useState(true);

  const handleclick = (product: any) => {
    if (active) {
      addToCart(product);
      setActive(!active);
    } else {
      removeFromCart(product.id);
      setActive(!active);
    }
  };

  const handleAddToCart = (product: TProduct) => {
    addToCart(product);
    navigate("/cart");
  };

  const product = shopProducts.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center mt-4 min-h-[70vh]">
        <h1 className="text-4xl">Товар не найден</h1>
        <button
          className="bg-[#076e2f] m-4 border border-black/10 rounded-full w-32 h-10 text-white active:scale-125"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </div>
    );
  }

  return MotionPage(
    <div className="flex flex-row justify-around mt-4 min-h-[70vh]">
      <div className="flex flex-col w-[40%]">
        <LazyLoadingImg
          src={product.src}
          alt={product.name}
          className="shadow-lg mt-2"
        />
      </div>
      <div className="flex flex-col w-[40%]">
        <div>
          <h1 className="text-4xl">{product.name}</h1>
          <p className="py-2 text-sm">{product.description}</p>
        </div>
        <div>
          <h1 className="p-2 border border-t-black/10 border-r-0 border-b-black/10 border-l-0 text-4xl">
            ₽{product.price}.00
          </h1>
        </div>
        <div className="flex flex-row">
          <button
            onClick={() => handleAddToCart(product)}
            className="border-[#076e2f] bg-[#076e2f] shadow-lg m-4 mr-2 px-4 py-2 border rounded-md w-32 h-10 text-center text-sm text-white transition-all active:scale-125"
          >
            Купить
          </button>
          <button
            onClick={() => handleclick(product)}
            key={product.id}
            className={`${
              active
                ? "hover:border-[#076e2f] hover:bg-[#076e2f] bg-[rgb(237,233,225)] shadow-lg hover:shadow-lg m-4 mr-2 px-4 py-2 border border-black/40 rounded-md w-32 h-10 text-center text-sm hover:text-white transition-all active:scale-110"
                : "border-[#076e2f] bg-[#076e2f]   shadow-lg  m-4 mr-2 px-4 py-2 border  rounded-md w-32 h-10 text-center text-sm text-white transition-all"
            }`}
          >
            {active ? "Добавить" : "В корзине"}
          </button>
        </div>
        <div className="shadow-lg p-4 border border-black/15 rounded-lg">
          <h3 className="pb-2 border-b-2">Бесплатная доставка</h3>
          <h3>
            Политика возврата: <br />{" "}
            <span>Возврат в течении 30 дней - бесплатно</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
