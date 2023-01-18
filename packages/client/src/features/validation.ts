import { Validations } from '../hooks/useForm'

interface ValidationsType {
  [key: string]: unknown
}

const validations: ValidationsType = {
  displayName: {
    custom: {
      validation: (value: string) => value.length > 3,
      message: `Field must be longer than 3 chars`,
    },
  },
  firstName: {
    custom: {
      validation: (value: string) => value.length > 2,
      message: `Field must be longer than 2 chars`,
    },
  },
  secondName: {
    custom: {
      validation: (value: string) => value.length > 3,
      message: `Field must be longer than 3 chars`,
    },
  },
  login: {
    custom: {
      validation: (value: string) => value.length > 3,
      message: `Field must be longer than 3 chars`,
    },
  },
  email: {
    pattern: {
      value: '^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,4})$',
      message: 'Email has invalid format',
    },
  },
  phone: {
    pattern: {
      value: '^((8|\\+7)[- ]?)?(\\(?\\d{3}\\)?[- ]?)?[\\d\\- ]{7,10}$',
      message: 'Phone has invalid format',
    },
  },
  password: {
    custom: {
      validation: (value: string) => value.length > 6,
      message: 'Field must be longer than 6 chars',
    },
  },
  newPassword: {
    custom: {
      validation: (value: string) => value.length > 6,
      message: 'Field must be longer than 6 chars',
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
