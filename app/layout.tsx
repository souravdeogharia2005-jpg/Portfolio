import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Sourav Deogharia | Full Stack Developer & Cloud Engineer",
  description: "Portfolio of Sourav Deogharia — Full Stack Developer & Cloud Engineer specializing in high-performance web applications and cloud infrastructure.",
  keywords: ["Sourav Deogharia", "Full Stack Developer", "Cloud Engineer", "React", "Next.js", "AWS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
