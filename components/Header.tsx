import { PrismicNextLink } from "@prismicio/next";
import type { Locales } from "./Layout";
import Link from "next/link";

type Props = {
  locales: Locales[];
  currentLang: string;
};

export function Header({ locales, currentLang }: Props) {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* 🌿 Logo */}
        <Link href={`/${currentLang}`} className="flex items-center">
          <span className="text-2xl font-semibold text-gray-900 tracking-tight">
            YogaGo
          </span>
        </Link>

        {/* 🧭 Navigation */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <Link href="#" className="hover:text-black transition">
            Program
          </Link>
          <Link href="#" className="hover:text-black transition">
            Reviews
          </Link>
          <Link href="#" className="hover:text-black transition">
            About Us
          </Link>
          <Link href="#" className="hover:text-black transition">
            FAQ
          </Link>
        </nav>

        {/* 🌍 Language Switcher */}
        <ul className="flex items-center gap-3 text-sm text-gray-700">
          {locales.map((locale) => {
            const isActive = locale.lang === currentLang;
            return (
              <li key={locale.lang}>
                <PrismicNextLink
                  href={locale.url!}
                  locale={locale.lang}
                  aria-label={`Change language to ${locale.lang_name}`}
                  className={`hover:text-black transition ${
                    isActive ? "font-semibold underline underline-offset-2" : ""
                  }`}
                >
                  {locale.lang.slice(0, 2).toUpperCase()}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
