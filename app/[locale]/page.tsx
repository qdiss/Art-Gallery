import TranslationsProvider from "@/components/shared/TranslationsProvider";
import initTranslations from "../i18n";
import Carousel from "@/components/shared/carouselMain";

const i18nNamespaces = ["home"];

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
      <Carousel />
    </TranslationsProvider>
  );
}
