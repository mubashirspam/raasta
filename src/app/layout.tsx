import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "../../context/ThemeContext";
import { Metadata } from "next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raasta Realty - Real Estate with Purpose",
  description:
    "Raasta Realty - Dubai's purpose-driven real estate company. We transform lives through every deal, contributing 6% of revenue to charity. Specializing in Dubai property investments, agent partnerships, and legacy-building transactions. Where impact matters more than income.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
