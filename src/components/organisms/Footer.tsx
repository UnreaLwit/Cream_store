import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp, FaViber } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { BottomButton } from "../atoms/button/BottomButton";
import { footerData } from "../../data/footerData";

export const Footer = () => {
  const socialLinks = [
    { icon: <MdOutlineContactSupport /> },
    { icon: <FaViber /> },
    { icon: <FaWhatsapp /> },
    { icon: <CiTwitter /> },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between mt-4 px-10 pt-4 pb-4 border-t border-b border-black/50">
        <span>Sales@NaturalСosmetics.ru</span>
        <h3>Присоединитесь и получите скидку 15%!</h3>
      </div>
      <div className="flex justify-between p-4">
        <div className="flex">
          {footerData.map((menu, index) => (
            <ul key={index} className="mr-4">
              <h3>{menu.title}</h3>
              {menu.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex">
          {socialLinks.map((social, index) => (
            <BottomButton key={index}>{social.icon}</BottomButton>
          ))}
        </div>
      </div>
    </div>
  );
};
