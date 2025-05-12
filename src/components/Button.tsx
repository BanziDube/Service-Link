import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  leftIcon?: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  leftIcon,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size])}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
    </button>
  );
};
