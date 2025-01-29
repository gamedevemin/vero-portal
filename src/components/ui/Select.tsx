import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { colors, animations } from '@/styles/shared'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<HTMLMotionProps<"select">, "ref"> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
  touched?: boolean
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      options,
      className = '',
      touched,
      ...props
    },
    ref
  ) => {
    const baseSelectStyles = `
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
      appearance-none
      pr-10
      ${touched && error ? 'border-red-300 bg-red-50' : 'border-gray-300'}
    `

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          <motion.select
            ref={ref}
            whileFocus={{ scale: 1.01 }}
            className={`${baseSelectStyles} ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </motion.select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
            <ChevronDownIcon className="h-5 w-5" />
          </div>
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

Select.displayName = 'Select' 