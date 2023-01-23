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

/**
 * Хук предназначен для хранения, валидации и манипулирования формой
 * @param {{validations: Object.<string, Validation>, initialValues: Object.<string, string>}} options
 * validations - объект с нужными валидациями типа Validation.
 * initialValues - объект, в котором передаются значения для формы по умолчанию.
 * @returns {{
 *  values: string,
 *  errors: string,
 *  watch: function,
 *  validateField: function,
 *  register: function,
 *  isValid: function
 * }}
 */

export const useForm = <
  T extends Record<keyof T, any> = Record<string, unknown>
>({
  validations = {},
  initialValues = {},
}: Options<T>) => {
  if (typeof validations !== 'object') {
    throw new Error('the `validations` should be an object')
  }

  if (typeof initialValues !== 'object') {
    throw new Error('the `initialValues` should be an object')
  }

  const [values, setValues] = useState<T>(initialValues as T)
  const [errors, setErrors] = useState<ErrorRecord<T>>({})
  const [isActive, setActive] = useState<ActiveRecord<T>>({})

  /**
   * Метод проверки значения поля на правила валидации
   * @param {string} name - Название валидации
   * @param {string} value - Значение поля
   * @returns {string} Текст ошибки
   */
  const validateField = (name: keyof T, value: string) => {
    const rules = validations![name]

    if (rules) {
      if (rules.pattern && !RegExp(rules.pattern.value).test(value)) {
        return rules.pattern.message || 'invalid'
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

  /**
   * Метод для добавления поля в форму(values) и отслеживания его изменения
   * @param {string} name - Название поля формы
   * @returns {{
   * value: string,
   * error: string,
   * onChange: function(ChangeEvent),
   * onBlur: function(FocusEvent)
   * }} Текст ошибки
   */
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

        //Изменяем состояние поля формы
        setValues(state => ({
          ...state,
          [name]: value,
        }))

        //Добавляем ошибку валидации, если поле активно
        if (isActive[name]) {
          setErrors(state => ({
            ...state,
            [name]: validateField(name, value),
          }))
        }
      },
      onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
        const { value } = event.target

        //Делаем поле активным
        setActive(state => ({
          ...state,
          [name]: true,
        }))

        //Добавляем ошибку валидации
        setErrors(state => ({
          ...state,
          [name]: validateField(name, value),
        }))
      },
    }
  }

  /**
   * Метод для получения значений других полей формы
   * @param {string} name - Название поля формы
   * @returns {string} Значение поля
   */
  const watch = (name: keyof T) => {
    if (!name) {
      throw new Error('The field name parameter is required')
    }

    if (name && typeof name !== 'string') {
      throw new Error('The field name should be a string')
    }

    return values[name]
  }

  /**
   * Метод для валидации формы
   * @returns {boolean} Валидна ли форма
   */
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
