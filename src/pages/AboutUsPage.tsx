import { aboutUsData } from "../data/aboutUsData";
import { MotionPage } from "../utils/MotionPage";
import pic12 from "../assets/pics/pic12.webp";
import LazyLoadingImg from "../utils/LazyLoadingImg";

export const AboutUsPage = () => {
  return MotionPage(
    <>
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="absolute text-5xl">Немного истории </h1>
        <LazyLoadingImg
          src={pic12}
          alt="pic12"
          className="flex justify-center opacity-50 shadow-lg border border-black/15 rounded-lg w-[50%] h-[50%]"
        />
      </div>
      {aboutUsData.map((item) => {
        return (
          <h2
            key={item.id}
            className="bg-[#f2eee6] shadow-lg mt-4 p-4 border border-black/30 rounded-lg"
          >
            <span className="font-bold">{item.head}</span> <br />
            <p>{item.text}</p>
          </h2>
        );
      })}
      <h2 className="bg-[#f2eee6] shadow-lg mt-4 p-4 border border-black/30 rounded-lg font-bold font-montserrat text-center text-lg">
        Добро пожаловать! <br /> В мир красоты и здоровья от "Живая косметика"!
        Мы уверены, вы останетесь довольны.
      </h2>
    </>
  );
};
