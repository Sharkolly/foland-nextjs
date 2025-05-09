type ChildrenProp =  {
  children: React.ReactNode
}

const LayoutAuth = ({children}: ChildrenProp) => {
  return (
    <div className='bg-linear-gradient text-navy-blue flex justify-center items-center h-[100vh]'>
        <div className='shadow-2xl bg-white shadow-blue-300/100 w-[30%] mx-auto rounded-xl pt-7 pb-12 max-xl:w-[50%] max-lg:w-[70%] max-md:w-[95%] max-md:py-8'>
          {children}
        </div>
    </div>
  )
};

export default LayoutAuth;
