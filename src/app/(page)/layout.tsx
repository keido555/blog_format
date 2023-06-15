import "../../css/globals.css";
import { Inter } from "next/font/google";
import Header from "../_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="js">
      <body className={inter.className}>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
