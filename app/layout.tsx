import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
  
}
