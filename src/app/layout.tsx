import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider, themeInitScript } from "@/context/theme-context";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sujal Manandhar — Developer & UI/UX Designer Portfolio",
  description:
    "Portfolio of Sujal Manandhar, developer and UI/UX designer specializing in scalable web apps and beautiful interfaces.",
  authors: [{ name: "Sujal Manandhar" }],
  keywords: [
    "Sujal Manandhar",
    "Web Developer",
    "UI/UX Designer",
    "Portfolio",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Data Analytics",
  ],
  openGraph: {
    title: "Sujal Manandhar — Developer & UI/UX Designer Portfolio",
    description:
      "Portfolio of Sujal Manandhar, developer and UI/UX designer specializing in scalable web apps and beautiful interfaces.",
    url: "https://sujalmanandhar.com",
    siteName: "Sujal Manandhar Portfolio",
    images: [
      {
        url: "/favicon.svg",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujal Manandhar — Developer & UI/UX Designer",
    description:
      "Portfolio of Sujal Manandhar, developer and UI/UX designer specializing in scalable web apps and beautiful interfaces.",
    images: ["/favicon.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
