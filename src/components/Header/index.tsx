import Add from "@/assets/icons/add.svg?react";
import Logout from "@/assets/icons/logout.svg?react";
import ImportContent from "@/assets/images/import.png";
import React, { useRef, useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Header: React.FC<HeaderProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const onImportFile = () => {
    inputRef.current?.click();
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="w-full pt-25 flex border-b-2 border-solid border-l-0 border-r-0 border-t-0 border-gray-500 pt-[100px] pb-2.5">
      <input
        className="hidden"
        accept="image/*;video/*"
        type="file"
        onChange={onChange}
        ref={inputRef}
      />
      <div className="flex justify-between w-full px-10">
        <div className="relative">
          <button
            className="focus:outline-none"
            onMouseEnter={toggleDropdown}>
            <Add className="add" />
          </button>

          {isOpen && (
            <div
              className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg z-10  max-w-[134px]"
              onMouseLeave={closeDropdown}>
              <div className="flex rounded-2xl bg-gray-300 p-2.5 pt-3 flex-col items-center gap-y-3">
                <img
                  onClick={onImportFile}
                  className="cursor-pointer"
                  src={ImportContent}
                  alt="import content"
                />
                <p className="text-center text-[12px]"> Загрузить с устройства</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-x-2">
          <Logout
            className="cursor-pointer "
            onClick={onLogout}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
