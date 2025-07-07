import React from "react"
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variantStyle =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700"

  return (
    <button
      className={cn(baseStyle, variantStyle, className)}
      {...props}
    />
  )
}