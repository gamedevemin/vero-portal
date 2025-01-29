import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { colors, animations, shadows, borderRadius } from '@/styles/shared'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonBaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

type ButtonAsButtonProps = ButtonBaseProps & {
  as?: 'button'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsLinkProps = ButtonBaseProps & {
  as: 'link'
  href: string
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const getVariantStyles = (variant: ButtonVariant = 'primary') => {
  switch (variant) {
    case 'primary':
      return `bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg hover:from-blue-700 hover:to-blue-900`
    case 'secondary':
      return `bg-blue-50 text-blue-700 hover:bg-blue-100`
    case 'outline':
      return `border-2 border-blue-600 text-blue-600 hover:bg-blue-50`
    case 'ghost':
      return `text-blue-600 hover:bg-blue-50`
    default:
      return ''
  }
}

const getSizeStyles = (size: ButtonSize = 'md') => {
  switch (size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'md':
      return 'px-6 py-2.5 text-base'
    case 'lg':
      return 'px-8 py-3 text-lg'
    default:
      return ''
  }
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      children,
      ...rest
    } = props

    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
    const variantStyles = getVariantStyles(variant)
    const sizeStyles = getSizeStyles(size)
    const disabledStyles = 'disabled:opacity-60 disabled:cursor-not-allowed'
    const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${className}`

    if (props.as === 'link') {
      return (
        <Link 
          href={props.href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Yükleniyor...
            </>
          ) : (
            <>
              {leftIcon && <span className="mr-2">{leftIcon}</span>}
              {children}
              {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </>
          )}
        </Link>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={isLoading || (rest as ButtonAsButtonProps).disabled}
        {...(rest as ButtonAsButtonProps)}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Yükleniyor...
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button' 