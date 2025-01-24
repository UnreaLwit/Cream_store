import { MotionPage } from "../utils/MotionPage";
import pic13 from "../assets/pics/pic13.webp";
import LazyLoadingImg from "../utils/LazyLoadingImg";

export const ContactsPage = () => {
  return MotionPage(
    <div className="min-h-[70vh]">
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="absolute text-7xl">Контакты</h1>
        <LazyLoadingImg
          src={pic13}
          alt="pic13"
          className="flex justify-center opacity-50 shadow-lg border border-black/15 rounded-lg w-[50%] h-[50%]"
        />
      </div>
      <div className="m-10">
        <h2 className="text-4xl">Живая косметика</h2>
        <h3 className="text-xl">
          Свяжитесь с нами любым, удобным для Вас, способом
        </h3>
      </div>
      <div className="flex justify-around">
        <ul>
          <h3>ЮРИДИЧЕСКИЙ АДРЕС</h3>
          <li>ул. Московская, д. 15, кв. 20</li>
          <li>123456 Москва</li>
          <li>РОССИЯ</li>
        </ul>
        <ul>
          <h3>НАШИ ТЕЛЕФОНЫ</h3>
          <li>
            VIBER, WHATSAPP: <br />
            <span>+7 916 123 45 67</span>
          </li>
          <li>
            РОССИЯ: <br />
            <span>+7 985 987 65 43</span>
          </li>
          <li>
            БЕЛАРУСЬ: <br /> <span>+375 33 987 65 43</span>
          </li>
        </ul>
        <ul>
          <h3>СЛУЖБА ПОДДЕРЖКИ</h3>
          <li>
            Пн-Пт 11:00-18:00 (МСК) <br />
            <span>support@NaturalСosmetics.ru</span>
          </li>
          <li>
            По вопросам доставки <br />
            <span>dostavka@NaturalСosmetics.ru</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
