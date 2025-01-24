import { Link } from "react-router";
import { Accordion1 } from "../components/molecules/Accordion";
import { Cards } from "../components/molecules/Cards";
import { ChooseButton } from "../components/atoms/button/ChooseButton";
import { MotionPage } from "../utils/MotionPage";
import pic1 from "../assets/pics/pic1.webp";
import pic2 from "../assets/pics/pic2.webp";
import pic3 from "../assets/pics/pic3.webp";
import pic4 from "../assets/pics/pic4.webp";
import pic5 from "../assets/pics/pic5.webp";
import pic6 from "../assets/pics/pic6.webp";
import pic7 from "../assets/pics/pic7.webp";
import pic9 from "../assets/pics/pic9.webp";
import pic10 from "../assets/pics/pic10.webp";
import pic11 from "../assets/pics/pic11.webp";
import LazyLoadingImg from "../utils/LazyLoadingImg";

export const HomePage = () => {
  return MotionPage(
    <div>
      <div className="mt-2">
        <h1 className="text-5xl text-center">
          Добейтесь наилучших результатов с помощью
          <br /> натуральных продуктов
        </h1>
        <div className="flex justify-center items-center">
          <LazyLoadingImg
            src={pic1}
            alt="pic1"
            className="shadow-lg m-2 rounded-full object-cover size-52"
          />
          <LazyLoadingImg
            src={pic3}
            alt="pic3"
            className="drop-shadow-lg m-2 rotate-[30deg] size-2/5"
          />
          <LazyLoadingImg
            src={pic2}
            alt="pic2"
            className="shadow-lg m-2 rounded-full object-cover size-52"
          />
        </div>
      </div>
      <div className="flex justify-around items-center bg-gradient-to-r from-[#033219] to-[#076e2f] shadow-lg w-[100%] h-auto">
        <p className="p-4 text-2xl text-white text-wrap">
          Процедуры красоты - это не только улучшение внешнего вида. Они
          направлены на питание кожи и тела, укрепление здоровья и уход за
          собой.
        </p>
        <LazyLoadingImg src={pic4} alt="pic4" className="shadow-sm w-60" />
      </div>
      <div className="flex justify-evenly mt-12">
        <LazyLoadingImg src={pic5} alt="pic5" className="shadow-lg" />
        <div className="p-4">
          <h3 className="mb-1 text-4xl">
            Приготовлено из натуральных ингредиентов
          </h3>
          <p className="mb-2 text-lg">Экстракты питают и омолаживают кожу.</p>
          <Link to="/shop">
            <button className="bg-[#D2F179] hover:bg-[#076e2f] shadow-lg p-3 border rounded-full hover:text-white transition-all active:scale-110">
              Изучите наш магазин
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#033219] to-[#076e2f] shadow-lg mt-12 text-white">
        <h3 className="p-4 text-5xl text-center">Сияние для всех</h3>

        <div className="flex justify-evenly items-start pb-4">
          <div className="flex flex-col items-center self-center">
            <p className="p-2 max-w-96 text-wrap text-xl">
              Подходит для всех типов кожи и с обеспечивает видимые результаты,
              делая кожу более гладкой, упругой и наполненной энергией при
              каждом использовании.
            </p>
            <LazyLoadingImg
              src={pic6}
              alt="pic6"
              className="shadow-lg m-2 w-auto h-52"
            />
          </div>
          <div className="flex flex-col justify-center items-center self-center">
            <LazyLoadingImg
              src={pic7}
              alt="pic7"
              className="shadow-lg m-2 w-auto h-52"
            />
            <p className="p-2 max-w-96 text-wrap text-xl">
              Мы предлагаем тщательно подобранный ассортимент средств по уходу
              за кожей, предназначенных для поддержания здоровья и внешнего вида
              вашей кожи.
            </p>
          </div>
        </div>
      </div>
      <h2 className="mt-12 text-5xl text-center">
        Популярные средства по уходу за кожей
      </h2>

      <div className="flex flex-wrap justify-center gap-2">
        <Cards />
      </div>
      <div className="flex justify-around items-center gap-4 mt-12">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-center">
            Стремитесь к новому стандарту красоты.
          </h2>
          <Accordion1 />
        </div>
        <LazyLoadingImg
          src={pic9}
          alt="pic9"
          className="shadow-lg rounded-full h-96"
        />
      </div>
      <div className="flex flex-row justify-around bg-[#DDF1E6]/100 mt-12 pt-4 pb-4">
        <LazyLoadingImg
          src={pic10}
          alt="pic10"
          className="shadow-lg m-4 w-60"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-4xl">Крем для отбеливания кожи</h3>
          <p className="p-2 text-sm">
            Разработан для эффективного осветления пигментных пятен, веснушек и
            других неровностей тона кожи. Его легкая формула быстро впитывается,
            не оставляя ощущения липкости. Регулярное использование крема
            помогает добиться ровного, сияющего и здорового цвета лица.
          </p>

          <ChooseButton />
          <Link to="/shop">
            <button className="bg-[#D2F179] hover:bg-[#076e2f] shadow-lg m-2 p-3 rounded-full w-72 hover:text-white transition-all active:scale-110">
              Купить сейчас
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-around items-center bg-gradient-to-r from-[#033219] to-[#076e2f] text-white">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl">Вся продукция</h3>
          <Link to="/shop">
            <button className="border-[#D2F179] border-2 hover:bg-[#D2F179] shadow-lg m-2 p-3 rounded-full hover:text-black transition-all active:scale-110">
              Магазин
            </button>
          </Link>
        </div>
        <LazyLoadingImg src={pic11} alt="pic11" className="drop-shadow-lg" />
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl">По всем вопросам</h3>
          <Link to="/contacts">
            <button className="border-[#D2F179] border-2 hover:bg-[#D2F179] shadow-lg m-2 p-3 rounded-full hover:text-black transition-all active:scale-110">
              Связаться
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
