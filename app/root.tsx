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
      <body className="bg-site py-4 min-h-[100dvh] min-h-screen flex flex-col font-body text-base text-very-light-maroon">
        <div className="px-5 w-full flex items-center justify-between">
          <span className="text-lg">Kent Ntwari</span>
          <div className="flex items-center gap-6">
            <Link to="#contact" className="flex items-center gap-6">
              Contact
            </Link>
            <Link to="https://github.com/kentntwari">
              <Github className="w-6" />
            </Link>
          </div>
        </div>
        <main className="mt-20 mb-16 flex-1 container space-y-16">{children}</main>
        <footer className="px-5 space-y-6">
          <div className="flex flex-col gap-3">
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
