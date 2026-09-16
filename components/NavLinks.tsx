"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
];

function normalizePath(p: string | null | undefined) {
  if (!p) return "/";
  if (p === "/") return "/";
  return p.replace(/\+$/, "");
}

export default function NavLinks() {
    const pathname = usePathname();
    const current = normalizePath(pathname);
    
    return (
        <nav>
            <ul className="flex gap-6">
          {links.map(({ href, label }) => {
            const normalizedHref = normalizePath(href);    
            const isActive = 
              normalizedHref === "/"
                ? current === "/"
                : current === normalizedHref || current.startsWith(normalizedHref + "/");
            
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      isActive
                        ? "font-semibold text-white underline underline-offset-4"
                        : "text-blue-100 transition hover:text-white"
                    }                  
                >
                    {label}
                  </Link>
                </li>
              );
            }
            )}
            </ul>
        </nav>
    );
}