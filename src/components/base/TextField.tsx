import React, { InputHTMLAttributes, Ref } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextField = React.forwardRef((props: TextFieldProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input ref={ref} {...props} className={`bg-white rounded-lg border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 w-full px-3 py-2 ${props.className}`} />
  )
})

export default TextField;