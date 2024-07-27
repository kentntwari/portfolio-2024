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
      <body className="py-8 bg-site font-medium text-base sm:text-lg text-light">
        <div className="min-h-[100dvh] min-h-screen flex flex-col">
          <nav className="max-w-[22.875rem] m-auto w-full flex items-center justify-between">
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
          <main className="flex-1">{children} </main>
        </div>

        <footer className="max-w-[22.875rem] mx-auto mt-24 space-y-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-20">
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
