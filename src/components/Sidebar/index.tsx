import MediaBox from "@/assets/icons/logo.svg?react";
import { categories } from "@/constants";
import { useState } from "react";

interface SidebarProps {
  currentCategories: string;
  setCategories: (category: string) => void;
}
const Sidebar: React.FC<SidebarProps> = (props) => {
  const { currentCategories, setCategories } = props;

  const onSwitchTab = (category: string) => {
    setCategories(category);
  };

  return (
    <div className="min-w-[320px] flex flex-col w-[320px] min-h-screen bg-[#D9D9D9] pt-15">
      <div className="flex justify-center gap-x-2 items-center mb-20">
        <MediaBox className="mb-5" />
        <span className="text-[20px]">MediaBox</span>
      </div>
      <div className="flex flex-col ">
        {categories?.map((item) => (
          <p
            className={`pl-10 px-4 py-3 ${item == currentCategories ? "bg-[#3F4A52] text-white" : ""}`}
            key={item}
            onClick={() => onSwitchTab(item)}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
