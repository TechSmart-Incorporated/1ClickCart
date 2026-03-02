import type { TextareaHTMLAttributes } from 'react'

import { cn } from '../../lib/utils'
import './ui.css'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={cn('ui-textarea', className)} {...props} />
}

export { Textarea }
