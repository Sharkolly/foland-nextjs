import type { Metadata } from "next";
import "./globals.css";
import Context from "../Components/Store/Context";
import ReactQueryProvider from "@/Components/Hooks/ReactQueryProvider";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
     
      >
        <ReactQueryProvider>
          <Context>
              <main>{children}</main>
          </Context>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
