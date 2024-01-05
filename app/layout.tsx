///@dev adding global css on top level route
///@notice global.css contains tailwind styles
import "@/app/ui/global.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
