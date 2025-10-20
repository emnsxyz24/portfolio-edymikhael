import { clsx } from "clsx";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "relative flex min-h-screen flex-col overflow-x-hidden",
        fontSans.className,
      )}
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-64 w-full bg-gradient-to-b from-purple-950/15 dark:from-purple-950/30 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-64 w-full bg-gradient-to-t from-purple-950/10 dark:from-purple-950/30 to-transparent" />

      <div className="pointer-events-none fixed left-[-10%] top-20 z-0 hidden h-96 w-96 rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-transparent opacity-30 blur-3xl dark:block" />
      <div className="pointer-events-none fixed bottom-10 right-[-10%] z-0 hidden h-99 w-96 rounded-full bg-gradient-to-bl from-blue-500 via-purple-600 to-transparent opacity-30 blur-3xl dark:block" />

      <div className="pointer-events-none fixed left-[-10%] top-20 z-0 block h-96 w-96 rounded-full bg-gradient-to-br from-pink-300 via-sky-300 to-transparent opacity-30 blur-3xl dark:hidden" />
      <div className="pointer-events-none fixed bottom-10 right-[-10%] z-0 block h-99 w-96 rounded-full bg-gradient-to-bl from-sky-300 via-pink-300 to-transparent opacity-30 blur-3xl dark:hidden" />
      <Head />
      <Navbar />
      <main className="container relative z-10 mx-auto flex max-w-screen-2xl flex-grow flex-col px-8">
        {children}
      </main>
      <footer className="relative z-10 flex w-full items-center justify-center py-8">
        <p className="text-sm text-center text-default-600">
          © 2025 Edy Mikhael. All Rights Reserved.
        </p>
      </footer>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-64 w-full bg-gradient-to-t from-purple-950/30 to-transparent" />
    </div>
  );
}
