'use client'
import {useState} from 'react';
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Link  from "next/link";
import { useMutationContactMessageFunction } from '../Hooks/useQuery';

const ContactInfo = () => {
  const {mutateAsync, isPending} = useMutationContactMessageFunction('contact-message')

  const [contactMessage, setContactMessage] = useState<string>('');
  const [contactPhoneNumber, setContactPhoneNumber] = useState<string>('');
  const [contactFullName, setContactFullName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactResponse, setContactResponse] = useState<string>('');

  const messageOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContactMessage(e.target.value)
  }
  const phoneNumberOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactPhoneNumber(e.target.value)
  }
  const fullNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactFullName(e.target.value)
  }
  const EmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactEmail(e.target.value)
  }
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactMessage, contactPhoneNumber, contactFullName, contactEmail)
    try{
      const contactDetails = {
        contactMessage, contactPhoneNumber, contactFullName, contactEmail
      }
const postMessage = await mutateAsync(contactDetails);
if(postMessage?.success) {
  setContactResponse(postMessage?.message);
}
    }
    catch(error) {
      console.log(error);
    }

  };

  return (
    <section className='w-[85%] max-lg:w-[89%] mx-auto max-md:w-[93%] flex gap-3 mt-12 max-lg:mt-7 max-lg:flex-col max-lg:gap-12'>
      <div className="w-[30%] max-lg:w-full">
        <h2 className="text-3xl tracking-widest leading-[40px] max-md:tracking-wide max-md:text-2xl">
          Our team is always ready to assist you. Reach out through any of the
          Listed Channels
        </h2>
        <h3 className='font-semibold text-xl my-5'>Contact Information</h3>

        <div className="text-slate-400 text-lg max-md:text-md flex flex-col gap-3 max-md:text-md">
          <Link href="https://wa.me/+2347035439642" className="flex gap-3 items-center">
            <span className="hover:text-red-500 max-md:hover:text-slate-400">
          <MdEmail />              
            </span>

            <p className="text-semi-navy-blue">support@foland.com</p>
          </Link>
          <Link href="https://wa.me/+2347035439642" className="flex gap-3 items-center">
            <span className="hover:text-green-500 max-md:hover:text-slate-400">
              <IoLogoWhatsapp />
            </span>

            <p>+234 703 5439 642</p>
          </Link>          
          <Link href="https://wa.me/+2347035439642" className="flex gap-3 items-center">
            <span className="hover:text-red-500 max-md:hover:text-slate-400">
          <MdEmail />              
            </span>

            <p className="text-semi-navy-blue">support@foland.com</p>
          </Link>
          <Link href="https://wa.me/+2347035439642" className="flex gap-3 items-center">
            <span className="hover:text-green-500 max-md:hover:text-slate-400">
              <IoLogoWhatsapp />
            </span>

            <p>+234 703 5439 642</p>
          </Link>          
          <Link href="https://wa.me/+2347035439642" className="flex gap-3 items-center">
            <span className="hover:text-red-500 max-md:hover:text-slate-400">
          <MdEmail />              
            </span>

            <p className="text-semi-navy-blue">support@foland.com</p>
          </Link>
          <Link href="https://wa.me/+2347035439642" className="flex gap-3 items-center">
            <span className="hover:text-green-500 max-md:hover:text-slate-400">
              <IoLogoWhatsapp />
            </span>

            <p>+234 703 5439 642</p>
          </Link>          
        </div>
      </div>

      <div className='w-[68%] max-lg:w-full rounded-md border-2 border-gray-300/40 pb-4'>
        <h2 className='bg-blue-300/20 pl-3 py-4'>Send Us A Message</h2>

        <form className='mx-8 flex flex-col gap-5 max-md:mx-5 max-md:mt-4 py-4 max-md:py-2' onSubmit={(e) => sendMessage(e)}>
          <div>
            <label htmlFor="Full Name" className="text-gray-500">Full Name</label>
            <input type="text" name='Full Name' onChange={(e) => fullNameOnChange(e)} placeholder="Required" className='w-full rounded-lg pl-3 py-3 outline-none border-1 mt-1 border-gray-300' />
          </div>
          <div>
            <label htmlFor="Email Address" className="text-gray-500">Email Address</label>
            <input type="email" name='Email Address'  onChange={(e) => EmailOnChange(e)}  placeholder="Required" className='w-full rounded-lg pl-3 py-3 outline-none border-1 mt-1 border-gray-300' />
          </div>
          <div>
            <label htmlFor="Phone Number" className="text-gray-500">Phone Number</label>
            <input type="number" name='Phone Number'  onChange={(e) => phoneNumberOnChange(e)}  placeholder="Required" className='w-full rounded-lg pl-3 py-3 outline-none border-1 mt-1 border-gray-300' />
          </div>
          <div>
            <label htmlFor="Message" className="text-gray-500">Message</label>
            <textarea name='Message'  onChange={(e) => messageOnChange(e)}  placeholder="Type Your Message..." className='w-full rounded-lg pl-3 py-3 outline-none border-1 mt-1 h-[100px] border-gray-300' ></textarea>
          </div>

          <div>
            <p className={`${contactResponse}`}>{contactResponse}</p>
          </div>


<button type='submit' disabled={isPending ? true :  false} className={` cursor-pointer bg-semi-navy-blue hover:opacity-[.8] text-white px-5 py-2 max-md:py-3 rounded-md  ${isPending ? 'opacity-[.8]' : '' }`}>
  {isPending ? 'Please wait ... ' : "Submit"}
</button>
        </form>
      </div>
    </section>
  );
};

export default ContactInfo;


