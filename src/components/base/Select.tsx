import { InputHTMLAttributes, ReactNode } from "react";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
}

export default function Select(props: SelectProps) {
  const { children } = props;
  return (
    <select {...props} className="text-xs bg-white rounded-lg border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 w-full px-3 py-2">
      { children }
    </select>
  )
}