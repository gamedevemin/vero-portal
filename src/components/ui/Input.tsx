import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { colors, animations } from '@/styles/shared'

interface InputProps extends Omit<HTMLMotionProps<"input">, "ref"> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  touched?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className = '',
      touched,
      ...props
    },
    ref
  ) => {
    const baseInputStyles = `
      w-full
      px-4
      py-2.5
      rounded-lg
      border
      transition-colors
      duration-200
      focus:ring-2
      focus:ring-blue-500
      focus:border-transparent
      disabled:opacity-60
      disabled:cursor-not-allowed
      ${touched && error ? 'border-red-300 bg-red-50' : 'border-gray-300'}
      ${leftIcon ? 'pl-10' : ''}
      ${rightIcon ? 'pr-10' : ''}
    `

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              {leftIcon}
            </div>
          )}
          <motion.input
            ref={ref}
            whileFocus={{ scale: 1.01 }}
            className={`${baseInputStyles} ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-1 text-sm ${
              error ? 'text-red-600' : 'text-gray-500'
            }`}
          >
            {error || helperText}
          </motion.p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input' 