import styles from './input.module.css'

interface Props {
  placeholder?: string
  className?: string
  type: string
  name?: string
  value?: string
}

export const Input = (props: Props) => {
  const { placeholder = 'Поле' } = props
  const inputClasses = props.className
    ? `${styles.formInput} ${props.className}`
    : styles.formInput
  return (
    <label>
      <input
        className={inputClasses}
        type={props.type}
        placeholder={placeholder}
        value={props.value}
        name={props.name}
      />
    </label>
  )
}
