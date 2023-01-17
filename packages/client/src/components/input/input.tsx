import classes from './input.module.css'

interface Props {
  placeholder: string
  class?: string
  type: string
}

export const Input = (props: Props) => {
  const { placeholder = 'Инпут' } = props
  const inputClasses = props.class
    ? `${classes.form__input} ${props.class}`
    : classes.form__input
  return (
    <label>
      <input
        className={inputClasses}
        type={props.type}
        placeholder={placeholder}
      />
    </label>
  )
}
