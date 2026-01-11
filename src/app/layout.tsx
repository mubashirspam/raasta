import "./globals.css";
import { ThemeContextProvider } from "../../context/ThemeContext";
import { Metadata } from "next";

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
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
