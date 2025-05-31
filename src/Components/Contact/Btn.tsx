import React from 'react'

const Btn = ({children, mobile}: {children: React.ReactNode, mobile: boolean}) => {
  return (
    <button className={`px-3 py-2 font-bold  text-[.8em] text-gray-600 border-2 rounded-lg bg-white ${!mobile ? 'max-md:hidden max-md:px-2' : ''} `}>
      {children}
    </button>
  )
}

export default Btn
