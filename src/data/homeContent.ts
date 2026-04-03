import type { Lang } from '@/i18n';

type Localized<T> = Record<Lang, T>;

export interface CaseStudy {
  category: Localized<string>;
  title: Localized<string>;
  summary: Localized<string>;
  href: string;
  cta: Localized<string>;
}

export const homeHero = {
  kicker: {
    es: 'Ingenieria aplicada para equipos que necesitan pasar de la idea al despliegue real.',
    ca: 'Enginyeria aplicada per a equips que necessiten passar de la idea al desplegament real.',
    en: 'Applied engineering for teams that need to move from idea to real deployment.',
  },
  title: {
    es: 'IA e IoT para productos, operaciones y proyectos tecnicos que no pueden fallar.',
    ca: 'IA i IoT per a productes, operacions i projectes tecnics que no poden fallar.',
    en: 'AI and IoT for products, operations, and technical projects that cannot afford to fail.',
  },
  lead: {
    es: 'Soy Xavier Berga. Diseno firmware, plataformas de datos, automatizaciones y experiencias de usuario claras para convertir sensores, modelos y procesos en sistemas utiles de verdad.',
    ca: 'Soc Xavier Berga. Dissenyo firmware, plataformes de dades, automatitzacions i experiencies d usuari clares per convertir sensors, models i processos en sistemes realment utils.',
    en: 'I am Xavier Berga. I design firmware, data platforms, automations, and clear user experiences to turn sensors, models, and processes into genuinely useful systems.',
  },
  primaryCta: {
    es: 'Ver servicio de IA',
    ca: 'Veure servei d IA',
    en: 'Explore AI services',
  },
  secondaryCta: {
    es: 'Ver servicio IoT',
    ca: 'Veure servei IoT',
    en: 'Explore IoT services',
  },
  tertiaryCta: {
    es: 'Proyectos seleccionados',
    ca: 'Projectes seleccionats',
    en: 'Selected projects',
  },
};

export const homeProofs: Localized<string[]> = {
  es: [
    '5 anos en software empresarial y operaciones',
    'Cofundador de AgroMind con trabajo real en campo',
    'Experiencia en firmware, plataforma, datos y automatizacion',
  ],
  ca: [
    '5 anys en software empresarial i operacions',
    'Cofundador d AgroMind amb feina real al camp',
    'Experiencia en firmware, plataforma, dades i automatitzacio',
  ],
  en: [
    '5 years in enterprise software and operations',
    'AgroMind co-founder with real field work',
    'Experience across firmware, platform, data, and automation',
  ],
};

export const homeFocusAreas: Localized<{ title: string; text: string }[]> = {
  es: [
    {
      title: 'De PoC a produccion',
      text: 'No me quedo en demos bonitas. Trabajo para que el sistema pueda integrarse, mantenerse y evolucionar.',
    },
    {
      title: 'Hardware, software y datos',
      text: 'Puedo unir sensores, firmware, APIs, dashboards, IA y automatizacion en una arquitectura coherente.',
    },
    {
      title: 'Producto y experiencia',
      text: 'La parte tecnica importa, pero tambien que el usuario entienda el sistema y confie en el.',
    },
  ],
  ca: [
    {
      title: 'De PoC a produccio',
      text: 'No em quedo en demos maques. Treballo perque el sistema es pugui integrar, mantenir i evolucionar.',
    },
    {
      title: 'Hardware, software i dades',
      text: 'Puc unir sensors, firmware, APIs, dashboards, IA i automatitzacio en una arquitectura coherent.',
    },
    {
      title: 'Producte i experiencia',
      text: 'La part tecnica importa, pero tambe que l usuari entengui el sistema i hi confiI.',
    },
  ],
  en: [
    {
      title: 'From PoC to production',
      text: 'I do not stop at pretty demos. I work so the system can be integrated, maintained, and evolved.',
    },
    {
      title: 'Hardware, software, and data',
      text: 'I can connect sensors, firmware, APIs, dashboards, AI, and automation into one coherent architecture.',
    },
    {
      title: 'Product and experience',
      text: 'The technical layer matters, but so does making the system understandable and trustworthy for the user.',
    },
  ],
};

export const featuredCases: CaseStudy[] = [
  {
    category: { es: 'Producto propio', ca: 'Producte propi', en: 'Own product' },
    title: { es: 'AgroMind', ca: 'AgroMind', en: 'AgroMind' },
    summary: {
      es: 'Sensores, firmware, validacion en campo y evolucion de plataforma para agricultura y ganaderia con apoyo de IA.',
      ca: 'Sensors, firmware, validacio al camp i evolucio de plataforma per a agricultura i ramaderia amb suport d IA.',
      en: 'Sensors, firmware, field validation, and platform evolution for agriculture and livestock with AI support.',
    },
    href: 'https://agromind.es',
    cta: { es: 'Ver proyecto', ca: 'Veure projecte', en: 'View project' },
  },
  {
    category: { es: 'Automatizacion', ca: 'Automatitzacio', en: 'Automation' },
    title: { es: 'n8n + flujos internos', ca: 'n8n + fluxos interns', en: 'n8n + internal flows' },
    summary: {
      es: 'Automatizacion self-hosted para conectar sistemas, orquestar tareas y acelerar procesos internos.',
      ca: 'Automatitzacio self-hosted per connectar sistemes, orquestrar tasques i accelerar processos interns.',
      en: 'Self-hosted automation to connect systems, orchestrate tasks, and accelerate internal processes.',
    },
    href: 'https://n8n.xavierberga.com',
    cta: { es: 'Ver despliegue', ca: 'Veure desplegament', en: 'View deployment' },
  },
  {
    category: { es: 'Aplicacion web', ca: 'Aplicacio web', en: 'Web app' },
    title: { es: 'TimeManager', ca: 'TimeManager', en: 'TimeManager' },
    summary: {
      es: 'Aplicacion gratuita para control horario y gestion basica de jornadas, vacaciones y documentacion laboral.',
      ca: 'Aplicacio gratuita per al control horari i la gestio basica de jornades, vacances i documentacio laboral.',
      en: 'Free web app for time tracking and basic management of shifts, vacations, and work documents.',
    },
    href: 'https://timemanager.es',
    cta: { es: 'Visitar', ca: 'Visitar', en: 'Visit' },
  },
];
