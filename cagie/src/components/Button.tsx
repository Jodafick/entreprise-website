import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  className?: string
  children: ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

const variants = {
  primary:
    'bg-brand-900 text-white hover:bg-brand-800 shadow-sm shadow-brand-900/15 active:scale-[0.98]',
  secondary:
    'bg-brand-50 text-brand-900 border border-brand-100 hover:bg-brand-100 active:scale-[0.98]',
  outline:
    'border border-brand-900/20 text-brand-900 bg-white hover:border-brand-700 hover:bg-brand-50 active:scale-[0.98]',
  ghost: 'text-brand-900 hover:bg-brand-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm font-semibold',
  lg: 'px-7 py-3.5 text-base font-semibold',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  to,
  className,
  children,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
