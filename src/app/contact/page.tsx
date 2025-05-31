import React from 'react'
import  { Metadata } from "next";
import GetInTouch from '@/Components/Contact/GetInTouch';
import ContactInfo from '@/Components/Contact/Contact-Info';
import FAQ from '@/Components/Contact/FAQ';
import Rate from '@/Components/Home/Rate';

export const metadata: Metadata = {
  title: "Contact Us @ Foland Realty",
  description:
    "Contact Foland Realty for property inquiries, support, or partnerships. Reach us via phone, email, or our contact form. We're here to help.",
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
const page = () => {
  return (
    <>
      <GetInTouch/>
      <ContactInfo/>
      <FAQ/>
      <Rate/>
    </>
  )
}

export default page
