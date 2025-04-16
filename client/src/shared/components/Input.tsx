import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClassName?: string;
  icon?: React.ReactNode; // Optional icon prop
}

const Input: React.FC<InputProps> = ({
  label,
  className = "",
  wrapperClassName = "",
  icon,
  ...props
}) => {
  return (
    <div className={`w-full ${wrapperClassName}`}>
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        <input
          className={`w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            icon ? "pl-10" : ""
          } ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
