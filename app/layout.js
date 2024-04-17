import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"] })

export const metadata = {
  title: "Geanco EPRS",
  description: "Geanco database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
