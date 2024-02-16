import Navigation from "./_components/nav";
import Footer from "./_components/footer"

import "./globals.css";


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
