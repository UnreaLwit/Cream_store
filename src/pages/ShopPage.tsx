import ItemCards from "../components/organisms/ItemCards";
import { MotionPage } from "../utils/MotionPage";
import pic14 from "../assets/pics/pic14.webp";
import LazyLoadingImg from "../utils/LazyLoadingImg";

export const ShopPage = () => {
  return MotionPage(
    <>
      <div className="flex flex-row justify-around items-center bg-[#f2eee6] shadow-lg mt-4 border border-black/15 rounded-lg w-[100%]">
        <div className="flex flex-col justify-around items-start ml-8">
          <h1 className="text-4xl">
            Получите скидку до 50% <br />
            на выбранный крем
          </h1>
        </div>
        <LazyLoadingImg src={pic14} alt="pic14" className="ml-2 w-2/4" />
      </div>
      <ItemCards />
    </>
  );
};
