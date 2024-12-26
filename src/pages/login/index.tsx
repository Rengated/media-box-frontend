import MediaBox from "@/assets/icons/logo.svg?react";
import Input from "@/components/Input";
import Letter from "@/assets/icons/letter.svg?react";
import Lock from "@/assets/icons/lock.svg?react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "@/api/auth";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  const onLogin = async () => {
    try {
      const response = await login(user);
      if (response.accessToken) {
        localStorage.setItem("token", response.accessToken);
        navigate("/media");
      } else {
        console.error("Invalid login credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-500">
      <div className="rounded-2xl bg-white px-20 py-10 min-w-[600px] shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center mb-6">
          <MediaBox className="mr-2" /> <span className="text-2xl font-bold text-gray-800">MediaBox</span>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-y-4 mb-8">
          <Input
            name="email"
            onChange={onInputChange}
            placeholder="Логин"
            Icon={Letter}
          />
          <Input
            name="password"
            type="password"
            onChange={onInputChange}
            placeholder="Пароль"
            Icon={Lock}
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full rounded-2xl py-2 bg-blue-600 text-white text-lg hover:bg-blue-700 transition"
          onClick={onLogin}>
          Войти
        </button>

        {/* Register Section */}
        <div className="flex justify-center gap-x-2 mt-4 text-sm text-gray-600">
          <span>Нет аккаунта?</span>
          <p
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={navigateToRegister}>
            Создать
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
