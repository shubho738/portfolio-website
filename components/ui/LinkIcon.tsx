
import Link from 'next/link'

import {IconType} from '@/libs/types'
import {cn} from '@/libs/utils'

interface LinkIconProps {
  icon: IconType;
  size?: number;
  color?: string;
  href: string;
  newTab?: boolean;
  customStyles?: string;

}

const LinkIcon = ({icon: Icon, size = 24, color = "hsl(var(--clr-accent))", href, newTab, customStyles}: LinkIconProps) => {

  return (
    <Link
      target={newTab ? "_blank" : "_self"}
      href={href}
      className={cn(
        `
          inline-block
          hover:translate-x-1
          transition-standard
        `,
        customStyles
        )}
    >
      <Icon
        size={size}
        color={color}
      />
    </Link>
  )
}

export default LinkIcon