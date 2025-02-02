import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { Link } from "react-router";
import useCart from "../context/ZustandContext";
import shopProducts from "../data/shopProducts";
import { MotionPage } from "../utils/MotionPage";
import { PayForm } from "../utils/PayForm";
import LazyLoadingImg from "../utils/LazyLoadingImg";

export const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return MotionPage(
    <div className="bg-[#F5F2EC]/30 w-full">
      <div className="bg-[#F5F2EC]/30 mx-auto min-w-36 max-w-4xl min-h-[70vh] text-pretty container">
        <div className="flex flex-row justify-center mt-4">
          <div className="flex flex-col">
            {cartItems.length === 0 ? (
              <div className="border-[#076e2f]/70 border-2 shadow-lg rounded-lg w-[600px]">
                <h1 className="p-4 font-semibold text-3xl text-center">
                  Корзина пуста
                </h1>
              </div>
            ) : (
              <div className="border-[#076e2f]/70 border-4 shadow-lg rounded-lg w-[600px]">
                <div className="flex flex-col p-4">
                  <h1 className="mb-2 text-3xl text-center">Список товаров</h1>
                  <div>
                    <div className="[&::-webkit-scrollbar-thumb]:bg-[#076e2f]/70 [&::-webkit-scrollbar-track]:bg-[#076e2f]/30 snap-mandatory snap-y [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar]:w-2 min-h-[340px] max-h-[520px] overflow-y-auto scroll-smooth">
                      {cartItems.map((item) => (
                        <div
                          className="flex justify-around border-2 shadow-lg m-4 mb-4 snap-center border-black/30 rounded-lg"
                          key={item.id}
                        >
                          <Link className="m-4 w-1/2" to={`/shop/${item.id}`}>
                            <LazyLoadingImg
                              src={shopProducts[item.id - 1].src}
                              alt={item.name}
                              className="shadow-lg"
                            />
                          </Link>

                          <div className="flex flex-col justify-center items-center mr-4 w-1/2 text-center">
                            <span className="text-xl">
                              <h2 className="mb-2 text-xl">{item.name}</h2>
                              <span>Цена:</span>
                              {item.price} ₽
                            </span>
                            <div className="m-2 text-2xl">
                              <form className="flex justify-center mx-auto my-2 max-w-xs">
                                <div className="relative flex items-center max-w-[8rem]">
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                    type="button"
                                    id={`decrement-button-${item.id}`}
                                    key={item.id}
                                    data-input-counter-decrement="quantity-input"
                                    className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:hover:bg-gray-600 hover:bg-gray-200 dark:bg-gray-700 p-3 border rounded-s-lg focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 h-11 transition-all focus:outline-none"
                                  >
                                    <svg
                                      className="w-3 h-3 text-gray-900 dark:text-white"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 2"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h16"
                                      />
                                    </svg>
                                  </button>
                                  <input
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                      updateQuantity(
                                        item.id,
                                        parseInt(e.target.value)
                                      )
                                    }
                                    type="text"
                                    id={`quantity-input-${item.id}`}
                                    data-input-counter
                                    aria-describedby="helper-text-explanation"
                                    className="block border-gray-300 border-x-0 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 py-2.5 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 w-full h-11 text-center text-gray-900 text-sm dark:text-white dark:placeholder-gray-400"
                                    placeholder="0"
                                    required
                                  />
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                    type="button"
                                    id={`increment-button-${item.id}`}
                                    data-input-counter-increment="quantity-input"
                                    className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:hover:bg-gray-600 hover:bg-gray-200 dark:bg-gray-700 p-3 border rounded-e-lg focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 h-11 transition-all focus:outline-none"
                                  >
                                    <svg
                                      className="w-3 h-3 text-gray-900 dark:text-white"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 18"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 1v16M1 9h16"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </form>

                              <Button
                                onClick={() => removeFromCart(item.id)}
                                color="inherit"
                                variant="contained"
                              >
                                Удалить
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="flex justify-center pt-2 pb-2 text-2xl">
                      Итого: {calculateTotal()} ₽
                    </p>
                    <Stack
                      spacing={2}
                      direction="row"
                      className="flex justify-center"
                    >
                      <Button
                        onClick={clearCart}
                        color="inherit"
                        variant="contained"
                      >
                        Очистить корзину
                      </Button>
                    </Stack>
                  </div>
                </div>
              </div>
            )}

            <div className="border-[#076e2f]/70 border-2 shadow-lg mt-4 rounded-lg w-[600px]">
              <div className="flex flex-col m-4">
                <h2 className="mb-2 font-semibold text-3xl text-center">
                  Информация о доставке
                </h2>
                <span className="text-lg">
                  Адрес: ул. Московская, д. 15, кв. 20 <br />
                  Телефон: +7 916 123 45 67 <br />
                  Email: dostavka@NaturalСosmetics.ru
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center border-[#076e2f]/70 border-2 shadow-lg ml-4 p-4 rounded-lg w-[250px] h-fit text-center">
            <h2 className="mb-2 font-semibold text-3xl">Детали платежа</h2>
            <div>
              <ul className="border-[#076e2f]/70 border-2 mb-2 rounded-lg">
                <li>Наложенный платеж</li>
                <li className="border-[#076e2f]/70 border-2 border-t-2 border-r-0 border-l-0">
                  Apple Pay
                </li>
                <li>Кредитная или дебетовая карта</li>
              </ul>
              <div className="flex flex-row justify-around">
                <FaCcVisa size={50} />
                <FaCcMastercard size={50} />
                <FaCcApplePay size={50} />
              </div>
              <PayForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
