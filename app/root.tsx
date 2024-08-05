import { Github, Copyright } from "lucide-react";

import { useEffect } from "react";

import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ArrowLink } from "./components/ArrowLink";

import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className="py-8 bg-site font-body font-normal text-base sm:text-lg text-light">
        <div className="w-full m-auto min-h-[100dvh] min-h-screen flex flex-col">
          <nav className="w-full max-w-[22.875rem] sm:container sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-[7.5rem] m-auto flex items-start justify-between">
            <span>Kent Ntwari</span>
            <div className="flex items-center gap-20">
              <ArrowLink to="#contact">Contact</ArrowLink>
              <Link to="https://github.com/kentntwari">
                <Github className="w-6" />
              </Link>
            </div>
          </nav>
          <main className="md:container flex-1 mt-24">{children}</main>
          <footer className="mt-36 sm:mt-60 mx-auto sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-[7.5rem] w-full max-w-[22.875rem] sm:container sm:flex sm:flex-row-reverse sm:items-center sm:justify-between space-y-6 sm:space-y-0">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-20">
              <ArrowLink to="https://www.linkedin.com/in/kentntwari/">
                Linkedin
              </ArrowLink>
              <ArrowLink to="https://github.com/kentntwari">Github</ArrowLink>
            </div>
            <span className="flex items-center gap-2">
              <Copyright className="w-5" />
              Kent Ntwari. 2024
            </span>
          </footer>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
