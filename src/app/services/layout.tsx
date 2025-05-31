import WithNavAndFooter from '@/Components/Layout/WithNavAndFooter'
import React from 'react'

const layout = ({children}: {children: React.ReactNode} ) => {
  return (
    <WithNavAndFooter>
{children}    
    </WithNavAndFooter>
  )
}

export default layout
