import { useState } from 'react'

interface Validation {
  pattern?: {
    value: string
    message: string
  }
  custom?: {
    validation: (value: string) => boolean
    message: string
  }
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>
type ActiveRecord<T> = Partial<Record<keyof T, boolean>>
export type Validations<T extends Record<string, unknown>> = Partial<
  Record<keyof T, Validation>
>

type Options<T extends Record<string, unknown>> = {
  validations?: Validations<T>
  initialValues?: Partial<T>
}

export const useForm = <
  T extends Record<keyof T, any> = Record<string, unknown>
>({
  validations = {},
  initialValues = {},
}: Options<T>) => {
  if (!validations) {
    throw new Error('the `validations` is required')
  }

  if (typeof validations !== 'object') {
    throw new Error('the `validations` should be an object')
  }

  if (typeof initialValues !== 'object') {
    throw new Error('the `initialValues` should be an object')
  }

  const [values, setValues] = useState<T>((initialValues || {}) as T)
  const [errors, setErrors] = useState<ErrorRecord<T>>({})
  const [isActive, setActive] = useState<ActiveRecord<T>>({})

  const validateField = (name: keyof T, value: string) => {
    const rules = validations![name]

    if (rules) {
      if (rules.pattern) {
        if (!RegExp(rules.pattern.value).test(value)) {
          return rules.pattern.message || 'invalid'
        }
      }

      if (rules.custom && typeof rules.custom.validation === 'function') {
        const error = rules.custom.validation(value)

        if (!error) {
          return rules.custom.message || 'invalid'
        }
      }
    }

    return ''
  }

  const register = (name: keyof T) => {
    if (!name) {
      throw new Error('The field name parameter is required')
    }

    if (name && typeof name !== 'string') {
      throw new Error('The field name should be a string')
    }

    return {
      value: values[name] || '',
      error: errors[name] || '',
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        setValues(state => ({
          ...state,
          [name]: value,
        }))

        if (isActive[name]) {
          setErrors(state => ({
            ...state,
            [name]: validateField(name, value),
          }))
        }
      },
      onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
        const { value } = event.target

        setActive(state => ({
          ...state,
          [name]: true,
        }))

        setErrors(state => ({
          ...state,
          [name]: validateField(name, value),
        }))
      },
    }
  }

  const watch = (name: keyof T) => {
    if (!name) {
      throw new Error('The field name parameter is required')
    }

    if (name && typeof name !== 'string') {
      throw new Error('The field name should be a string')
    }

    return values[name]
  }

  const isValid = () => {
    const hasErrors = Object.keys(validations).reduce((acc, name) => {
      const error = validateField(
        name as keyof T,
        values[name as keyof T] || ''
      )

      if (!error && isActive[name as keyof T] && values[name as keyof T]) {
        return acc
      }

      setActive(state => ({
        ...state,
        [name]: true,
      }))

      return {
        ...acc,
        [name]: error,
      }
    }, {})

    setErrors(hasErrors)

    return !Object.keys(hasErrors).length
  }

  return {
    values,
    errors,
    watch,
    validateField,
    register,
    isValid,
  }
}
