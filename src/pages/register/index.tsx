import MediaBox from "@/assets/icons/logo.svg?react";
import Input from "@/components/Input";
import Letter from "@/assets/icons/letter.svg?react";
import Lock from "@/assets/icons/lock.svg?react";
import User from "@/assets/icons/user.svg?react";
import { useState } from "react";
import { register } from "@/api/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    passwordrepeat: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onRegister = async () => {
    if (user.password !== user.passwordrepeat) {
      console.error("Passwords do not match");
      return;
    }
    const { passwordrepeat, ...others } = user;
    const response = await register(others);
    if (response.email) {
      await navigate("/login");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-500">
      <div className="rounded-2xl bg-white bg-gray-300 px-20 py-10 min-w-[600px]">
        <div className="flex items-center mb-15">
          <MediaBox className="mb-4" /> <span className="text-[40px]">MediaBox</span>
        </div>
        <div className="flex mb-[40px] flex-col">
          <Input
            onChange={onInputChange}
            name="username"
            placeholder="Имя"
            Icon={User}
          />
          <Input
            onChange={onInputChange}
            name="email"
            placeholder="Логин"
            Icon={Letter}
          />
          <Input
            onChange={onInputChange}
            name="password"
            placeholder="Пароль"
            Icon={Lock}
          />
          <Input
            onChange={onInputChange}
            name="passwordrepeat"
            placeholder="Повторите пароль"
            Icon={Lock}
          />
        </div>
        <button
          className="w-full border-solid rounded-2xl py-2 text-[20px] mb-3"
          onClick={onRegister}>
          Создать аккаунт
        </button>
      </div>
    </div>
  );
};

export default Register;
