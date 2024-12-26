import React from "react";
import MediaBox from "@/assets/icons/logo.svg?react";
import Extensions from "@/assets/images/extensions.png";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/media");
      return;
    }
    navigate("/login");
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex flex-col  ">
      <header className="py-6  flex w-full bg-[#D9D9D9]">
        <div className="container flex items-center justify-between ">
          <div className="flex items-center gap-x-2">
            <MediaBox />
            <span className="text-[24px]">MediaBox</span>
          </div>
          <ul className="flex flex-col gap-y-1 text-[20px]">
            <li>Связаться с нами:</li>
            <li>+7(800)555-35-35</li>
            <li>mediabox@mediabox.ru</li>
          </ul>
        </div>
      </header>
      <div className="container py-[140px]">
        <div className="flex justify-between items-center">
          <p className="text-[58px] max-w-[700px]">
            <span className="font-bold">MediaBox</span> простой и безопасный доступ к вашим медиа
          </p>
          <MediaBox
            width={289}
            height={289}
          />
        </div>
        <div className="flex flex-col gap-y-2 items-start mb-20">
          <button
            className="border-solid border-2 p-3 text-[20px] border-black border-radis rounded-2xl"
            onClick={navigateToMain}>
            Перейти в MediaBox
          </button>
          <div className="flex gap-x-10">
            <button className="text-[20px]">Нет аккаунта?</button>
            <button
              className="text-[20px] underline-offset-2"
              onClick={navigateToRegister}>
              Создать
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <img
            src={Extensions}
            width={639}
            height={240}
            alt="Расширения"
          />
          <p className="max-w-[360px]  text-[20px]">
            Ещё <span className="font-bold ">БОЛЬШЕ МЕСТА</span> с подпиской. При этом фото и видео с телефона можно загружать безлимитно. Все файлы сохраняются в исходном качестве.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
