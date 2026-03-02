import type { InputHTMLAttributes } from 'react'

import { cn } from '../../lib/utils'
import './ui.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>

function Input({ className, type = 'text', ...props }: InputProps) {
  return <input className={cn('ui-input', className)} type={type} {...props} />
}

export { Input }
