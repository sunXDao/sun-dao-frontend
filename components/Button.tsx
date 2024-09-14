import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: boolean;
  children: React.ReactNode
}

export default function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <button {...props} className={`rounded-xl font-semibold ${variant ? "bg-[#056855]" : "border border-[#056855]"} px-20 py-3.5 disabled:cursor-not-allowed disabled:bg-[#056855]/70`}>
      {children}
    </button>
  )
}
