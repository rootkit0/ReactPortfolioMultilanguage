import type { Lang } from '@/i18n';

type Localized<T> = Record<Lang, T>;

export interface ServiceCityContent {
  intro: Localized<string>;
  note: Localized<string>;
  useCases: Localized<string[]>;
  faq: Localized<{ question: string; answer: string }[]>;
}
