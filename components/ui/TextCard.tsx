
import {cn} from '@/libs/utils'

interface TextCardProps {

  children: React.ReactNode;
  customStyles?: string;
}

const TextCard = ({children, customStyles}: TextCardProps) => {

  return (
    <div
      className={cn(
        `
          bg-accent
          text-neutral-light 
          py-1 
          px-2 
          rounded
        `,
        customStyles
        )}
    >
      {children}
    </div>
  )
}

export default TextCard