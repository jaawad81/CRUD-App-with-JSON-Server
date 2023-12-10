import React from 'react'

const Container = ({children,
className=''
}) => {
  return (
    <section className={`h-[400px] w-[650px] bg-stone-50 p-4 rounded-lg shadow-2xl shadow-black ${className}`}>{children}</section>
  )
}

export default Container