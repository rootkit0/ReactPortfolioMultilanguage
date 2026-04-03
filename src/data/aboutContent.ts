import type { Lang } from '@/i18n';

type Localized<T> = Record<Lang, T>;

export const aboutStory: Localized<{
  title: string;
  lead: string;
  timeline: { title: string; text: string }[];
  principles: { title: string; text: string }[];
  hobbies: string[];
}> = {
  es: {
    title: 'Sobre mi',
    lead: 'Me interesa la ingenieria cuando sirve para simplificar decisiones, mejorar operaciones y construir sistemas que la gente pueda usar con confianza.',
    timeline: [
      {
        title: 'Base tecnica y formacion',
        text: 'Ingenieria informatica en la Universitat de Lleida, con interes temprano por sistemas embebidos, producto y software aplicado.',
      },
      {
        title: '5 anos en Microsoft Dynamics 365',
        text: 'Experiencia en software empresarial, procesos, implantacion y trabajo cercano a operaciones y negocio.',
      },
      {
        title: 'AgroMind',
        text: 'Cofundador. Trabajo en firmware, sensado, validacion en campo, plataforma y aplicacion de IA al contexto agricola y ganadero.',
      },
      {
        title: 'InnovaOX',
        text: 'Monitorizacion de datos para bioseguridad e industria, con foco en sensores, fiabilidad, despliegue y lectura util del dato.',
      },
    ],
    principles: [
      {
        title: 'Menos humo, mas sistema',
        text: 'Prefiero una arquitectura clara y una primera version util a una demo llamativa pero fragil.',
      },
      {
        title: 'Tecnologia al servicio del contexto',
        text: 'No todos los proyectos necesitan la misma complejidad. Primero entiendo la restriccion y luego elijo la solucion.',
      },
      {
        title: 'Diseno pensando en mantenimiento',
        text: 'Si algo no se puede operar, diagnosticar o explicar bien, aun no esta resuelto.',
      },
    ],
    hobbies: [
      'Economia y geopolitica',
      'Viajar y explorar ciudades',
      'Montana y naturaleza',
      'Entrenamiento de fuerza',
      'Motor y conduccion',
      'Series y cine',
    ],
  },
  ca: {
    title: 'Sobre mi',
    lead: 'M interessa l enginyeria quan serveix per simplificar decisions, millorar operacions i construir sistemes que la gent pugui fer servir amb confiança.',
    timeline: [
      {
        title: 'Base tecnica i formacio',
        text: 'Enginyeria informatica a la Universitat de Lleida, amb interes primerenc per sistemes encastats, producte i software aplicat.',
      },
      {
        title: '5 anys a Microsoft Dynamics 365',
        text: 'Experiencia en software empresarial, processos, implantacio i treball proper a operacions i negoci.',
      },
      {
        title: 'AgroMind',
        text: 'Cofundador. Treballo en firmware, sensat, validacio al camp, plataforma i aplicacio d IA al context agricol i ramader.',
      },
      {
        title: 'InnovaOX',
        text: 'Monitoritzacio de dades per a bioseguretat i industria, amb focus en sensors, fiabilitat, desplegament i lectura util de la dada.',
      },
    ],
    principles: [
      {
        title: 'Menys fum, mes sistema',
        text: 'Prefereixo una arquitectura clara i una primera versio util a una demo cridanera pero fragil.',
      },
      {
        title: 'Tecnologia al servei del context',
        text: 'No tots els projectes necessiten la mateixa complexitat. Primer entenc la restriccio i despres trio la solucio.',
      },
      {
        title: 'Disseny pensant en manteniment',
        text: 'Si una cosa no es pot operar, diagnosticar o explicar be, encara no esta resolta.',
      },
    ],
    hobbies: [
      'Economia i geopolítica',
      'Viatjar i explorar ciutats',
      'Muntanya i natura',
      'Entrenament de força',
      'Motor i conduccio',
      'Series i cinema',
    ],
  },
  en: {
    title: 'About me',
    lead: 'I care about engineering when it simplifies decisions, improves operations, and creates systems people can trust and actually use.',
    timeline: [
      {
        title: 'Technical foundations',
        text: 'Computer Engineering at the University of Lleida, with early interest in embedded systems, product work, and applied software.',
      },
      {
        title: '5 years in Microsoft Dynamics 365',
        text: 'Enterprise software experience across processes, rollouts, and close collaboration with operations and business teams.',
      },
      {
        title: 'AgroMind',
        text: 'Co-founder. I work on firmware, sensing, field validation, platform evolution, and the application of AI to agriculture and livestock.',
      },
      {
        title: 'InnovaOX',
        text: 'Data monitoring for biosecurity and industry, with focus on sensors, reliability, deployment, and turning data into useful operational signals.',
      },
    ],
    principles: [
      {
        title: 'Less hype, more system',
        text: 'I prefer a clear architecture and a useful first version over a flashy demo that will not survive contact with reality.',
      },
      {
        title: 'Technology shaped by context',
        text: 'Not every project needs the same complexity. I start with the constraint, then choose the solution.',
      },
      {
        title: 'Designed for maintenance',
        text: 'If something cannot be operated, diagnosed, or explained well, it is not solved yet.',
      },
    ],
    hobbies: [
      'Economics and geopolitics',
      'Travel and cities',
      'Mountains and nature',
      'Strength training',
      'Cars and driving',
      'Series and films',
    ],
  },
};
