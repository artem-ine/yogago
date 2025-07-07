import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import "./globals.css";
/* import { getLocales } from "@/lib/getLocales";
import { Layout } from "@/components/Layout";
 */

type Params = { lang: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { lang } = await params;

  const client = createClient();

  const page = await client
    .getByUID("page", "landing-page", { lang })
    .catch(() => notFound());

  // const locales = await getLocales(page, client);

  return (
    // <Layout locales={locales} currentLang={lang}>
    <SliceZone slices={page.data.slices} components={components} />
    // </Layout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang } = await params;
  const client = createClient();
  const page = await client
    .getByUID("page", "landing-page", { lang })
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}
