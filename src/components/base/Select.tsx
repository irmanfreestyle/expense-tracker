import React, { InputHTMLAttributes, ReactNode, Ref } from "react";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
}

const Select = React.forwardRef((props: SelectProps, ref: Ref<HTMLSelectElement>) => {
  const { children } = props;
  return (
    <select ref={ref} {...props} className={`text-xs bg-white rounded-lg border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 w-full px-3 py-2 ${props.className}`}>
      { children }
    </select>
  )
})

export default Select;