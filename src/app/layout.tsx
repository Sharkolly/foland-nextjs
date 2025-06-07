import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/Components/Hooks/ReactQueryProvider";
import Context from "@/Components/Store/Context";
// import ContextProvider from "@/Components/Store/ContextProvider";
// import AuthGuard from '@/Components/Auth/AuthGuard';

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className='overflow-x-hidden'
     
      >
        <ReactQueryProvider>
          {/* <AuthGuard> */}
          <Context>
              <main>{children}</main>
          </Context>
          {/* </AuthGuard> */}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
