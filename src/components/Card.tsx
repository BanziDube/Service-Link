import React from "react";
import clsx from "clsx";

// Base Card wrapper
type CardProps = {
  children: React.ReactNode;
  variant?: "outlined" | "elevated";
  isClickable?: boolean;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = "outlined",
  isClickable = false,
  className = "",
}) => {
  const baseStyles = "rounded-lg border transition-shadow";
  const variantStyles =
    variant === "elevated"
      ? "bg-white shadow-md border-gray-100"
      : "bg-white border-gray-200";

  const clickableStyles = isClickable ? "hover:shadow-lg cursor-pointer" : "";

  return (
    <div
      className={clsx(baseStyles, variantStyles, clickableStyles, className)}
    >
      {children}
    </div>
  );
};

// CardHeader
export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={clsx("px-6 py-4 border-b border-gray-100", className)}>
    {children}
  </div>
);

// CardContent
export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={clsx("px-6 py-4", className)}>{children}</div>
);

// CardFooter
export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={clsx("px-6 py-4 border-t border-gray-100", className)}>
    {children}
  </div>
);
