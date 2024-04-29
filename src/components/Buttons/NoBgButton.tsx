'use client'

import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface NoBgButtonProps extends ComponentProps<'button'> {
  label?: string
}

export function NoBgButton({ label, className, ...props }: NoBgButtonProps) {
  return (
    <button
      className={twMerge(
        'text-nowrap text-no w-full rounded-full bg-transparent transition-all',
        className,
      )}
      {...props}
    >
      {label}
    </button>
  )
}
