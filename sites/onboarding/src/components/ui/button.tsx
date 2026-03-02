import type { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'
import './ui.css'

const buttonVariants = cva('ui-button', {
  variants: {
    variant: {
      default: 'ui-button--default',
      secondary: 'ui-button--secondary',
      ghost: 'ui-button--ghost',
    },
    size: {
      default: 'ui-button--size-default',
      sm: 'ui-button--size-sm',
      lg: 'ui-button--size-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

function Button({ className, variant, size, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      type={type}
      {...props}
    />
  )
}

export { Button, buttonVariants }
