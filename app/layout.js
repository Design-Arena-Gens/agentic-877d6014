import "./globals.css";

export const metadata = {
  title: "1969 Economic Documentary",
  description: "A cinematic scroll through 1969 macroeconomic story beats."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
