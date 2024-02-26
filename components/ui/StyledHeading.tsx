
import React from 'react'

interface StyledHeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: string;
}

const StyledHeading = ({ text, level, size }: StyledHeadingProps) => {
  const headingTag = `h${level}`
  const classes = size ? `${size} heading-underline` : 'heading-underline'

  return (
    React.createElement(headingTag, { className: classes }, text)
  )
}

export default StyledHeading
