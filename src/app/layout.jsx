import Navbar from "./_components/navbar/navbar";
import "./globals.css";

export const metadata = {
  title: "Wacko Pix",
  description: "Wacko Pix | Media Production",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}