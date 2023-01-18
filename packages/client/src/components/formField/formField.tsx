import styles from './formField.module.css'

interface FormFieldProps {
  label?: string
  placeholder?: string
  name: string
  type: 'text' | 'password' | 'email' | 'tel'
  value: string
  error?: string
  onChange: { (event: React.ChangeEvent<HTMLInputElement>): void }
  onBlur?: { (event: React.FocusEvent<HTMLInputElement>): void }
  disabled?: boolean
  children?: any
}

export const FormField = (props: FormFieldProps) => {
  const {
    children,
    label,
    placeholder,
    name,
    value,
    error,
    onChange,
    onBlur,
    type,
    disabled,
  } = props

  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>

      <div>
        <input
          className={styles.input}
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        />
        {children}
      </div>

      <p className={styles.error}>{disabled ? '' : error}</p>
    </div>
  )
}
