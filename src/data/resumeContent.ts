import type { Lang } from '@/i18n';

type Localized<T> = Record<Lang, T>;

export const resumeContent: Localized<{
  title: string;
  lead: string;
  summary: string[];
  experience: { title: string; text: string }[];
  expertise: { title: string; items: string[] }[];
  cta: string;
}> = {
  es: {
    title: 'Experiencia y curriculum',
    lead: 'He trabajado entre software empresarial, producto propio, sensado, firmware, automatizacion e integracion de IA. Esta pagina resume lo mas importante sin depender de un PDF externo.',
    summary: [
      '5 anos en entornos de software empresarial y operaciones.',
      'Cofundador de AgroMind, con trabajo directo sobre sensores, firmware y plataforma.',
      'Colaboracion en entornos de bioseguridad, industria y monitorizacion de datos.',
      'Perfil comodo tanto en discovery y arquitectura como en implementacion.',
    ],
    experience: [
      {
        title: 'Microsoft Dynamics 365 Finance & Operations',
        text: 'Desarrollo e implantacion de soluciones de software orientadas a mejorar procesos empresariales y operativos.',
      },
      {
        title: 'AgroMind',
        text: 'Firmware, sensado, validacion en campo, integracion de plataforma e incorporacion de IA sobre datos del mundo real.',
      },
      {
        title: 'InnovaOX',
        text: 'Sistemas IoT para monitorizacion y refuerzo de bioseguridad en granjas e industria quimica y alimentaria.',
      },
    ],
    expertise: [
      {
        title: 'Areas principales',
        items: ['IoT y firmware', 'Plataformas de datos', 'IA aplicada', 'Automatizacion', 'Integracion API y backend'],
      },
      {
        title: 'Forma de trabajo',
        items: ['Discovery tecnico', 'PoC con criterio', 'Despliegue real', 'Monitorizacion', 'Mejora continua'],
      },
    ],
    cta: 'Si necesitas la version actualizada del CV o quieres valorar un proyecto, escribeme y te la envio.',
  },
  ca: {
    title: 'Experiencia i curriculum',
    lead: 'He treballat entre software empresarial, producte propi, sensat, firmware, automatitzacio i integracio d IA. Aquesta pagina resumeix el mes important sense dependre d un PDF extern.',
    summary: [
      '5 anys en entorns de software empresarial i operacions.',
      'Cofundador d AgroMind, amb feina directa sobre sensors, firmware i plataforma.',
      'Col.laboracio en entorns de bioseguretat, industria i monitoritzacio de dades.',
      'Perfil comode tant en discovery i arquitectura com en implementacio.',
    ],
    experience: [
      {
        title: 'Microsoft Dynamics 365 Finance & Operations',
        text: 'Desenvolupament i implantacio de solucions de software orientades a millorar processos empresarials i operatius.',
      },
      {
        title: 'AgroMind',
        text: 'Firmware, sensat, validacio al camp, integracio de plataforma i incorporacio d IA sobre dades del mon real.',
      },
      {
        title: 'InnovaOX',
        text: 'Sistemes IoT per a monitoritzacio i reforç de bioseguretat en granges i industria quimica i alimentaria.',
      },
    ],
    expertise: [
      {
        title: 'Arees principals',
        items: ['IoT i firmware', 'Plataformes de dades', 'IA aplicada', 'Automatitzacio', 'Integracio API i backend'],
      },
      {
        title: 'Forma de treball',
        items: ['Discovery tecnic', 'PoC amb criteri', 'Desplegament real', 'Monitoritzacio', 'Millora continua'],
      },
    ],
    cta: 'Si necessites la versio actualitzada del CV o vols valorar un projecte, escriu-me i te la envio.',
  },
  en: {
    title: 'Experience and resume',
    lead: 'I have worked across enterprise software, product building, sensing, firmware, automation, and AI integration. This page summarizes the essentials without relying on an external PDF.',
    summary: [
      '5 years in enterprise software and operations contexts.',
      'AgroMind co-founder with direct work on sensors, firmware, and platform.',
      'Collaboration in biosecurity, industry, and data monitoring environments.',
      'Comfortable both in discovery and architecture and in implementation.',
    ],
    experience: [
      {
        title: 'Microsoft Dynamics 365 Finance & Operations',
        text: 'Development and rollout of software solutions aimed at improving business and operational processes.',
      },
      {
        title: 'AgroMind',
        text: 'Firmware, sensing, field validation, platform integration, and AI over real-world operational data.',
      },
      {
        title: 'InnovaOX',
        text: 'IoT systems for monitoring and strengthening biosecurity in farms and chemical and food industry contexts.',
      },
    ],
    expertise: [
      {
        title: 'Main areas',
        items: ['IoT and firmware', 'Data platforms', 'Applied AI', 'Automation', 'API and backend integration'],
      },
      {
        title: 'Way of working',
        items: ['Technical discovery', 'PoC with criteria', 'Real deployment', 'Monitoring', 'Continuous improvement'],
      },
    ],
    cta: 'If you need the latest CV version or want to assess a project, write to me and I will send it over.',
  },
};
