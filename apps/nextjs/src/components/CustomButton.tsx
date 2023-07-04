import { cva, VariantProps } from 'class-variance-authority'
import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/util/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900',
        outline: 'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }: ButtonProps, ref) => {
    return <button ref={ref} {...props} className={cn(buttonVariants({ variant, size, className }))} />
  }
)

export default CustomButton
