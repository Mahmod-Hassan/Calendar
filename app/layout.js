
import "./globals.css";

import { Inter, Roboto_Mono } from 'next/font/google';
 
export const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata = {
  title: "Calendar App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
