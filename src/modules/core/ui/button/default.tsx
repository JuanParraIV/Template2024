import { Loader } from '@/modules/core/icons'
import { cn } from '@/modules/core/utils'
import type { ButtonHTMLAttributes, FC } from 'react'

export const ButtonVariants = {
  primary: 'button button__primary',
  text: 'hover:text-black duration-200 disabled:opacity-60 dark:hover:text-indigo-600 disabled:cursor-not-allowed',
  secondary:
    'bg-white/50 text-black px-[.8rem] py-[.4rem] rounded-md border border-black hover:bg-white/80 disabled:opacity-60 disabled:cursor-not-allowed hover:border-black/50 shadow-none shadow hover:shadow-xl hover:bg-neutral-50 active:bg-neutral-100 active:shadow-none active:tracking-wide duration-200',
  tertiary:
    'hover:text-black bg-white shadow-md border border-neutral-200 duration-200 p-2 rounded-md hover:shadow-lg active:shadow-md active:border-neutral-100 disabled:opacity-60 disabled:cursor-not-allowed',
  error:
    'text-black duration-200 px-[1rem] py-[.4rem] border border-pink-500 text-pink-500 rounded-md bg-pink-50/90 shadow-lg shadow-neutral-100 dark:shadow-neutral-950 hover:shadow-pink-600/10 dark:hover:shadow-pink-600/10 dark:bg-pink-600/10 block hover:bg-pink-100/90',
}

export type ButtonVariant = keyof typeof ButtonVariants

interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const Button: FC<InputProps & { loading: boolean }> = ({
  children,
  className,
  variant = 'primary',
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        ButtonVariants[variant],
        className ?? '',
        props?.loading && 'flex gap-2 items-center'
      )}
      {...props}
      disabled={props?.disabled || props?.loading}
    >
      {children}
      {props.loading && <Loader />}
    </button>
  )
}

export { Button }
