// components/ui/Button.tsx

import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Variant = 'default' | 'primary' | 'secondary' | 'ghost' | 'outline' | 'solid';
type Size = 'sm' | 'md' | 'lg';

interface SimpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  default: 'text-black',
  primary: 'bg-[#58BB48] text-white hover:bg-[#0A3C77]',
  secondary: 'bg-white text-[#0A3C77] hover:bg-[#58BB48] hover:text-white',
  ghost: 'bg-transparent hover:bg-gray-100',
  outline: 'border border-[var(--primary-color)] text-[--var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)]',
  solid: 'bg-[var(--primary-color)] text-white hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] rounded-xl',
  
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-2 md:px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

const Button: React.FC<SimpleButtonProps> = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClass =
    'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none cursor-pointer';
  return (
    <button
      className={clsx(baseClass, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
