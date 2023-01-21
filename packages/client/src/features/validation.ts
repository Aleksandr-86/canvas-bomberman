import { Validations } from '../hooks/useForm'

interface ValidationsType {
  [key: string]: unknown
}

const validations: ValidationsType = {
  displayName: {
    custom: {
      validation: (value: string) => value.length > 3,
      message: `Поле должно быть длинее 3 символов`,
    },
  },
  firstName: {
    custom: {
      validation: (value: string) => value.length > 2,
      message: `Поле должно быть длинее 2 символов`,
    },
  },
  secondName: {
    custom: {
      validation: (value: string) => value.length > 3,
      message: `Поле должно быть длинее 3 символов`,
    },
  },
  login: {
    custom: {
      validation: (value: string) => value.length > 3,
      message: `Поле должно быть длинее 3 символов`,
    },
  },
  email: {
    pattern: {
      value: '^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,4})$',
      message: 'Неверный формат почты',
    },
  },
  phone: {
    pattern: {
      value: '^((8|\\+7)[- ]?)?(\\(?\\d{3}\\)?[- ]?)?[\\d\\- ]{7,10}$',
      message: 'Неверный формат телефона',
    },
  },
  password: {
    custom: {
      validation: (value: string) => value.length > 6,
      message: 'Поле должно быть длинее 6 символов',
    },
  },
  newPassword: {
    custom: {
      validation: (value: string) => value.length > 6,
      message: 'Поле должно быть длинее 6 символов',
    },
  },
}

export const getValidations = <T extends Record<string, unknown>>(
  validationNames: string[]
) => {
  return validationNames.reduce((acc, validationName) => {
    if (validations[validationName]) {
      return {
        ...acc,
        [validationName]: validations[validationName],
      }
    }
    return acc
  }, {} as Validations<T>)
}
