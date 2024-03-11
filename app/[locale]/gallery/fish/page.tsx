import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/shared/TranslationsProvider";
import Fish from "@/components/shared/fishCarousel";

const i18nNamespaces = ["common"];

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
      <Fish />
    </TranslationsProvider>
  );
}
