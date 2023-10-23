import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <button {...props} className={`rounded-lg py-3 ${props.className}`}>
      { children }
    </button>
  )
}