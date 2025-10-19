https://github.com/Harshaaaaaaaa/feeswitchfinalboss/blob/main/src/components/Layout.tsx

Click pencil icon, delete everything, and paste this:

import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ThemeSelector } from "@/components/ThemeSelector";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="flex-shrink-0 sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-xl font-bold">
                Fee Switch
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <ThemeSelector />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
Fix 2: Complete App.css File
Go to: https://github.com/Harshaaaaaaaa/feeswitchfinalboss/blob/main/src/App.css

Click pencil icon, delete everything, and paste this:

#root {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
