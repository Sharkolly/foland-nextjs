import Footer from "../Static/Footer";
import Nav from "../Static/Nav";

const WithNavAndFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <main className='mt-[80px]'>{children}</main>
      <Footer />
    </>
  );
};

export default WithNavAndFooter;
