
import {cn} from '@/libs/utils'

interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder: string;
  value?: string | number;
  onInputChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  onTextAreaChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  rows?: number;
  disabled?: boolean;
  customStyles?: string;
}

const Input = ({id, name, type ="text", placeholder, value, onInputChange, onTextAreaChange, disabled, customStyles, rows}: InputProps) => {

  if (type === "textarea") {

    return (
      <textarea 
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onTextAreaChange}
        disabled={disabled}
        className={cn(
          `
            bg-input
            text-input-text
            p-2
            rounded
            outline-none
            disabled:cursor-not-allowed
            disabled:opacity-80
          `,
          customStyles
          )}
        rows={rows}

      />
      )
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
      disabled={disabled}
      className={cn(
        `
          bg-input
          text-input-text
          p-2
          rounded
          outline-none
          disabled:cursor-not-allowed
          disabled:opacity-80
        `,
        customStyles
        )}
    />
  )
}

export default Input