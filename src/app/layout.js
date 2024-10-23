import { Montserrat, Jost } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "MAP",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${montserrat.variable} `}>
        {children}
      </body>
    </html>
  );
}
