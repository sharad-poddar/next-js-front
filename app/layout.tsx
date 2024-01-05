///@dev adding global css on top level route
///@notice global.css contains tailwind styles
import "@/app/ui/global.css";

///@dev importing the font from font.ts
import { inter } from "@/app/ui/font";





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  ///@dev here antialised is tailwind class
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
