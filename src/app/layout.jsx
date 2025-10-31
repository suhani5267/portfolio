import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Suhani Portfolio",
  description: "Created with Next.js & Tailwind CSS v4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <Navbar />
        <main className="min-h-screen container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
