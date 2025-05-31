import WithNav from '@/Components/Layout/WithNav'
import React from 'react'

const layout = ({children}: {children: React.ReactNode} ) => {
  return (
    <WithNav>
{children}    
    </WithNav>
  )
}

export default layout
