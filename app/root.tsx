import type { LinksFunction } from "@remix-run/node";

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

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/rethinksans-regular.ttf",
  },
  {
    rel: "preload",
    href: "/fonts/rethinksans-medium.ttf",
  },
  {
    rel: "preload",
    href: "/fonts/rethinksans-semibold.ttf",
  },
  {
    rel: "preload",
    href: "/fonts/rethinksans-bold.ttf",
  },
];

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
          <main className="md:container flex-1 mt-24">{children}</main>
=
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
