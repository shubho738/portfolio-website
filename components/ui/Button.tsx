
'use client'

import Link from 'next/link'
import {ClipLoader} from 'react-spinners'

import {cn} from '@/libs/utils'

interface ButtonProps {

  label: string;
  href?: string;
  newTab?: boolean;
  onClick?(e?: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>): void
  disabled?: boolean;
  isLoading?: boolean;
  customStyles?: string;
  loaderColor?: string;
}

const Button = ({label, href, newTab, onClick, disabled, isLoading, customStyles, loaderColor}: ButtonProps) => {


  if (href) {

    return (
      <Link
        href={href}
        target={newTab ? "_blank" : "_self"}
      >
        <div
          className="inline-block border border-foreground"
        >
          <button
            className={cn(
              `
                bg-btn
                text-btn-text
                hover:opacity-90
                py-2
                px-4
                rounded
                relative
                bottom-2
                right-2
                hover:bottom-0
                hover:right-0
                transition-all
                duration-200
                ease-in-out
              `,
              customStyles
              )}
          >

            {label}
          </button>
        </div>
      </Link>
      )
  }


  return (
   <div
     className="inline-block border border-foreground"
   >
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `
          bg-btn
          text-btn-text
          hover:opacity-90
          py-2
          px-4
          rounded
          relative
          bottom-2
          right-2
          hover:bottom-0
          hover:right-0
          transition-all
          duration-200
          ease-in-out
          disabled:cursor-not-allowed
          ${isLoading ? "bottom-0 right-0" : ""}
          flex
          gap-2
          items-center
        `,
        customStyles
        )}
    >

      {isLoading && (
       <ClipLoader
          size={16}
          color={loaderColor ?? "hsl(var(--clr-btn-loader))"}
        />
      )}

      {label}
    </button>
   </div>
  )
}

export default Button