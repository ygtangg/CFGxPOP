import { Forum, Jura } from 'next/font/google';

import Navigation from "./_components/nav";
import Footer from "./_components/footer"

import "./globals.css";


export const forum = Forum({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-forum',
  weight: '400',
});

export const jura = Jura({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jura',
  weight: '400',
});

export const metadata = {
  title: "Plastic Ocean Project",
  description: "Plastic ocean project.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
