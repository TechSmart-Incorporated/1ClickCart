import type { InputHTMLAttributes } from 'react'

import { cn } from '../../lib/utils'
import './ui.css'

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

function Checkbox({ className, ...props }: CheckboxProps) {
  return <input className={cn('ui-checkbox', className)} type="checkbox" {...props} />
}

export { Checkbox }
