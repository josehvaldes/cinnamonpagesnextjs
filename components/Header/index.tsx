"use client";

import Image from "next/image";
import { Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "Products", "About", "Contact"];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="justify-between w-full gap-4 p-4">
        <div className="grid grid-cols-5 gap-4 w-full">
            <div className="col-start-1 col-end-2 flex items-center justify-start">
                <Image
                            className="dark:invert"
                            src="/next.svg"
                            alt="Next.js logo"
                            width={50}
                            height={10}
                            priority
                          />
            </div>
            
            <div className="col-start-2 col-end-4 hidden md:flex items-center justify-center gap-8">
              <ul className="flex gap-8">
                {navItems.map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase()}`} className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-start-5 col-end-6 flex items-center justify-end gap-8">
              <div className="flex flex-col gap-2">
                <Heart className="size-5" />
              </div>
              <div className="flex flex-col gap-2">
                <ShoppingBag className="size-5" />
              </div>
              <button
                className="md:hidden"
                aria-label="Toggle menu"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-lg border bg-background shadow-md">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    className="w-full px-4 py-3 text-left hover:bg-muted transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <a href={`/${item.toLowerCase()}`} className="hover:underline">
                      {item}
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
    </header>
  );
}

export default Header;