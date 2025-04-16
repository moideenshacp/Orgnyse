import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "lg",
  onClick,
  className = "",
  type = "button",
  disabled = false,
  icon,
}) => {
  const baseClasses =
    "font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-primary hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary:
      "bg-subtitle hover:bg-gray-300 text-gray-800 focus:ring-gray-400",
    outline:
      "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-blue-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };

  const disabledClasses = disabled
    ? "opacity-60 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex items-center justify-center space-x-2">
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
