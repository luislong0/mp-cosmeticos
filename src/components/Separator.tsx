import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Separator({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('h-[1px] w-full bg-zinc-800', className)}
      {...props}
    />
  )
}
