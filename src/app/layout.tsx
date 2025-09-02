import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";
import { FloatingDock } from "./ui/floating-dock";
import { IconArticle, IconHome } from "@tabler/icons-react";
import Providers from "./common/queryWrapper";
import { ToastProvider } from "./common/ToastProvider";

export const metadata: Metadata = {
  title: "Min Thant Mg | Front-end Developer",
  description:
    "Portfolio of Min Thant Maung – a passionate front-end developer with expertise in React, Next.js, and modern web technologies. Discover projects, skills, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Blogs",
      icon: (
        <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },
  ];
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="flex items-center justify-center w-full">
            <FloatingDock mobileClassName="translate-y-20" items={links} />
          </div>
          <ToastProvider>{children}</ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
