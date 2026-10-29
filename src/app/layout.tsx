import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChurchOS Ghana",
  description: "ChurchOS Ghana admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
