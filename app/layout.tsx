import type { Metadata } from "next";
import "./globals.css";

import Boulevard from "./components/Boulevard";

export const metadata: Metadata = {
  title: "Identity Aesthetics MedSpa | Kingwood, TX",
  description:
    "Luxury medical spa in Kingwood offering injectables, laser treatments, laser hair removal, facials, and skin rejuvenation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Boulevard />
      </body>
    </html>
  );
}