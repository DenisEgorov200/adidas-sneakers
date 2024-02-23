import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...rest }: Props) => {
  return (
    <button
      className="inline-block py-2 px-4 text-white capitalize bg-third rounded-full transition-colors duration-300 hover:text-third hover:bg-white"
      {...rest}>
      {children}
    </button>
  )
}
