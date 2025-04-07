import Navbar from "@/components/Navbar";
import "./globals.css";
import "./styles.css";
import { quicksand, cardo } from "@/fonts";

export const metadata = {
  title: "BARBERBOB",
  description:
    "Profesional barber shop who dedicated to make you achieve your maximum handsome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.className} `}>
      <body className="text-gray-700">
        <Navbar />
        <main className="flex shrink flex-col">{children}</main>
        <footer className={`bg-gray-400 py-8 text-center text-xl text-white`}>
          <span className={cardo.className}>Barberbob</span> &copy; 2025
        </footer>
      </body>
    </html>
  );
}
