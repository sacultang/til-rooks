import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  text: string
  link: string
}
const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link className="btn" href={link}>
      {text}
    </Link>
  )
}

export default Button
