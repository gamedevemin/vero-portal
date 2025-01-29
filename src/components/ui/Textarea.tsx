import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { colors, animations } from '@/styles/shared'

interface TextareaProps extends Omit<HTMLMotionProps<"textarea">, "ref"> {
  label?: string
  error?: string
  helperText?: string
  touched?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      className = '',
      touched,
      ...props
    },
    ref
  ) => {
    const baseTextareaStyles = `
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
      resize-none
      ${touched && error ? 'border-red-300 bg-red-50' : 'border-gray-300'}
    `

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <motion.textarea
          ref={ref}
          whileFocus={{ scale: 1.01 }}
          className={`${baseTextareaStyles} ${className}`}
          {...props}
        />
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

Textarea.displayName = 'Textarea' 