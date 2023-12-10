import React  from 'react'
import { Link } from 'react-router-dom'

const Button = ({
    children,
    className="",
    to='/',
    bgColor='bg-green-600',
    textColor='text-white',
    props
}) => {
  return (
    <Link to={to} className={`${bgColor} ${textColor} py-2 px-4 rounded-lg hover:ring-2 ring-stone-200 ${className}`}
    {...props}
    >{children}</Link>
  )
}

export default Button