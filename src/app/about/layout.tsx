import WithNavAndFooter from '@/Components/Layout/WithNavAndFooter'
import React from 'react'

export const metadata = {
  title: "About Us - Foland Realty",
  description:
    "Learn more about Foland Realty - where innovation meets real estate innovation",
  keywords: [
    "real estate",
    "Foland",
    "Property",
    "rental",
    "about",
    "house",
    "shortlet",
    "land",
  ],
};


const layout = ({children}: {children: React.ReactNode} ) => {
  return (
    <WithNavAndFooter>
{children}    
    </WithNavAndFooter>
  )
}

export default layout
