import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextField(props: TextFieldProps) {
  return (
    <input {...props} className="bg-white rounded-lg border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 w-full px-3 py-2" />
  )
}