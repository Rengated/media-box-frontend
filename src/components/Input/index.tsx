import React, { ElementType } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  Icon?: ElementType;
}
const Input: React.FC<InputProps> = (props) => {
  const { Icon } = props;
  return (
    <div className="flex items-center gap-x-3 border-solid border-t-0 border-l-0 border-r-0 mb-7 border-b-2 py-2 border-gray-900 text-black text-[20px] w-full">
      {Icon && <Icon className="min-w-[40px]" />}
      <input
        {...props}
        className="placeholder:text-black"
      />
    </div>
  );
};

export default Input;
