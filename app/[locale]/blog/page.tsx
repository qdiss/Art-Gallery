import TranslationsProvider from "@/components/shared/TranslationsProvider";
import Blog from "./components/blogMain";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["blog"];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <Blog params={{ locale }} />
    </TranslationsProvider>
  );
}
