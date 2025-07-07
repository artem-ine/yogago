import type { Client, PrismicDocument } from "@prismicio/client";

export async function getLocales(doc: PrismicDocument, client: Client) {
  const [repository, altDocs] = await Promise.all([
    client.getRepository(),
    doc.alternate_languages.length > 0
      ? client.getAllByIDs(
          doc.alternate_languages.map((altLang) => altLang.id),
          {
            lang: "*",
            fetch: `${doc.type}.__nonexistent-field__`,
          }
        )
      : Promise.resolve([]),
  ]);

  return [doc, ...altDocs].map((doc) => {
    return {
      ...doc,
      lang_name:
        repository.languages.find((lang) => lang.id === doc.lang)?.name ||
        "unknown",
    };
  });
}
