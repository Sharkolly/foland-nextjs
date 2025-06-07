'use client'
import Context from './Context'

const ContextProvider = ({children}: {children: React.ReactNode} )  => {
  return (
    <Context>
      {children}
    </Context>
  )
}

export default ContextProvider
