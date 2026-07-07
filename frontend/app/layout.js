import "./globals.css";

export const metadata = {
  title: "Rediwala",
  description: "Discover street vendors near you."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
