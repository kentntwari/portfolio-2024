import { Github, Copyright } from "lucide-react";

import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="py-8 bg-site font-body text-base sm:text-lg lg:text-xl text-light">
        <div className="min-h-[100dvh] min-h-screen flex flex-col">
          <nav className="max-w-[22.875rem] sm:max-w-[37.5rem] lg:max-w-[47.125rem] xl:max-w-[56rem] 2xl:max-w-[70rem] 3xl:max-w-[80rem] 4xl:max-w-[93rem] m-auto w-full flex items-center justify-between">
            <span>Kent Ntwari</span>
            <div className="flex items-center gap-6">
              <Link to="#contact" className="flex items-center gap-6">
                Contact
              </Link>
              <Link to="https://github.com/kentntwari">
                <Github className="w-6" />
              </Link>
            </div>
          </nav>
          <main className="flex-1 lg:max-w-[47.125rem] xl:max-w-[56rem] 2xl:max-w-[70rem] 3xl:max-w-[80rem] 4xl:max-w-[93rem] lg:m-auto">
            {children}
          </main>
        </div>

        <footer className="max-w-[22.875rem] sm:max-w-[37.5rem] lg:max-w-[47.125rem] xl:max-w-[56rem] 2xl:max-w-[70rem] 3xl:max-w-[80rem] 4xl:max-w-[93rem] mx-auto mt-24 sm:mt-36 xl:mt-40 flex flex-col sm:flex-row-reverse sm:justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-20">
            <Link to="https://www.linkedin.com/in/kentntwari/">Linkedin</Link>
            <Link to="https://github.com/kentntwari">Github</Link>
          </div>
          <span className="flex items-center gap-2">
            <Copyright className="w-5" />
            Kent Ntwari. 2024
          </span>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
