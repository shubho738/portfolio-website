
import Link from 'next/link'

interface StyledLinkProps {

  href: string;
  label: string;
}

const StyledLink = ({href, label}: StyledLinkProps) => {

  return (

      <Link
        href={href}
        className="sm:underline-split"
      >
        {label}
      </Link>
  )
}

export default StyledLink