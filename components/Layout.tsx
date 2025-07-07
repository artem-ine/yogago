import { Header } from "./Header";
import { Footer } from "./Footer";
import type { PrismicDocument } from "@prismicio/client";

export interface Locales extends PrismicDocument {
  lang_name: string;
}

interface Props {
  locales: Locales[];
  children: React.ReactNode;
  currentLang: string;
}

export async function Layout({ locales, children, currentLang }: Props) {
  return (
    <div className="text-slate-800 flex flex-col min-h-lvh">
      <Header locales={locales} currentLang={currentLang} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
