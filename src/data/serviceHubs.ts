import type { Lang } from '@/i18n';

type Localized<T> = Record<Lang, T>;

export const hubIntro = {
  ai: {
    title: {
      es: 'Ingenieria de Inteligencia Artificial con foco en integracion, calidad y uso real.',
      ca: 'Enginyeria d Intel.ligencia Artificial amb focus en integracio, qualitat i us real.',
      en: 'Artificial Intelligence engineering focused on integration, quality, and real-world use.',
    },
    lead: {
      es: 'Trabajo con vision, prediccion, automatizacion, asistentes y pipelines de datos para que la IA encaje de verdad en un producto o en una operacion.',
      ca: 'Treballo amb visio, prediccio, automatitzacio, assistents i pipelines de dades perque la IA encaixi de veritat en un producte o en una operacio.',
      en: 'I work with vision, prediction, automation, assistants, and data pipelines so AI genuinely fits inside a product or operation.',
    },
    deliverablesTitle: {
      es: 'Que suelo entregar',
      ca: 'Que acostumo a entregar',
      en: 'What I usually deliver',
    },
    deliverables: {
      es: [
        'Auditoria tecnica y roadmap para priorizar datos, arquitectura y riesgos.',
        'PoC orientada a una metrica concreta y preparada para evolucionar.',
        'Integracion con APIs, paneles, procesos internos y flujos de equipo.',
        'Despliegue, observabilidad y criterios claros para mantener el sistema.',
      ],
      ca: [
        'Auditoria tecnica i roadmap per prioritzar dades, arquitectura i riscos.',
        'PoC orientada a una metrica concreta i preparada per evolucionar.',
        'Integracio amb APIs, panells, processos interns i fluxos d equip.',
        'Desplegament, observabilitat i criteris clars per mantenir el sistema.',
      ],
      en: [
        'Technical audit and roadmap to prioritize data, architecture, and risks.',
        'A PoC tied to a concrete metric and ready to evolve.',
        'Integration with APIs, dashboards, internal processes, and team workflows.',
        'Deployment, observability, and clear operating criteria for the system.',
      ],
    },
    sectorsTitle: {
      es: 'Sectores donde encaja especialmente bien',
      ca: 'Sectors on encaixa especialment be',
      en: 'Sectors where this usually fits especially well',
    },
    sectors: {
      es: ['Agroalimentario', 'Industria', 'Operaciones internas', 'Producto digital'],
      ca: ['Agroalimentari', 'Industria', 'Operacions internes', 'Producte digital'],
      en: ['Agri-food', 'Industry', 'Internal operations', 'Digital product'],
    },
    faq: {
      es: [
        {
          question: 'Puedo empezar con una PoC pequena?',
          answer: 'Si. Suelo recomendar un alcance corto cuando hay que validar datos, complejidad o ROI antes de invertir mas.',
        },
        {
          question: 'Trabajas con mis sistemas actuales?',
          answer: 'Ese es precisamente el objetivo. La IA solo tiene sentido cuando encaja con procesos, APIs, herramientas y usuarios reales.',
        },
        {
          question: 'Solo trabajas con LLMs?',
          answer: 'No. Tambien trabajo con prediccion, clasificacion, vision por computador, analitica y automatizacion basada en reglas y modelos.',
        },
      ],
      ca: [
        {
          question: 'Puc comencar amb una PoC petita?',
          answer: 'Si. Acostumo a recomanar un abast curt quan cal validar dades, complexitat o ROI abans d invertir mes.',
        },
        {
          question: 'Treballes amb els meus sistemes actuals?',
          answer: 'Aquest es precisament l objectiu. La IA nomes te sentit quan encaixa amb processos, APIs, eines i usuaris reals.',
        },
        {
          question: 'Nomes treballes amb LLMs?',
          answer: 'No. Tambe treballo amb prediccio, classificacio, visio per computador, analitica i automatitzacio basada en regles i models.',
        },
      ],
      en: [
        {
          question: 'Can we start with a small PoC?',
          answer: 'Yes. I usually recommend a short scope when data quality, complexity, or ROI still needs validation.',
        },
        {
          question: 'Can you work with my current systems?',
          answer: 'That is the point. AI matters when it fits existing processes, APIs, tools, and real users.',
        },
        {
          question: 'Do you only work with LLMs?',
          answer: 'No. I also work with prediction, classification, computer vision, analytics, and automation based on rules and models.',
        },
      ],
    },
  },
  iot: {
    title: {
      es: 'IoT de extremo a extremo: sensado, firmware, conectividad y plataforma.',
      ca: 'IoT d extrem a extrem: sensat, firmware, connectivitat i plataforma.',
      en: 'End-to-end IoT: sensing, firmware, connectivity, and platform.',
    },
    lead: {
      es: 'Diseno sistemas IoT pensando en fiabilidad, seguridad, mantenimiento y lectura util del dato desde el dispositivo hasta el dashboard.',
      ca: 'Dissenyo sistemes IoT pensant en fiabilitat, seguretat, manteniment i lectura util de la dada des del dispositiu fins al dashboard.',
      en: 'I design IoT systems around reliability, security, maintainability, and making data useful from device to dashboard.',
    },
    deliverablesTitle: {
      es: 'Que suelo entregar',
      ca: 'Que acostumo a entregar',
      en: 'What I usually deliver',
    },
    deliverables: {
      es: [
        'Arquitectura de dispositivos, gateways, conectividad y flujos de datos.',
        'Firmware con telemetria, OTA, diagnostico y criterios de consumo.',
        'Backends, APIs, alertas y paneles para operar la flota.',
        'Seguridad, observabilidad y plan de mantenimiento para el ciclo real del sistema.',
      ],
      ca: [
        'Arquitectura de dispositius, gateways, connectivitat i fluxos de dades.',
        'Firmware amb telemetria, OTA, diagnostic i criteris de consum.',
        'Backends, APIs, alertes i panells per operar la flota.',
        'Seguretat, observabilitat i pla de manteniment per al cicle real del sistema.',
      ],
      en: [
        'Architecture for devices, gateways, connectivity, and data flows.',
        'Firmware with telemetry, OTA, diagnostics, and power criteria.',
        'Backends, APIs, alerts, and dashboards to operate the fleet.',
        'Security, observability, and a maintenance plan for the real system lifecycle.',
      ],
    },
    sectorsTitle: {
      es: 'Donde suelo ver mejor encaje',
      ca: 'On acostumo a veure millor encaix',
      en: 'Where I usually see the strongest fit',
    },
    sectors: {
      es: ['Agricultura y ganaderia', 'Industria y mantenimiento', 'Bioseguridad y alimentacion', 'Monitorizacion ambiental'],
      ca: ['Agricultura i ramaderia', 'Industria i manteniment', 'Bioseguretat i alimentacio', 'Monitoritzacio ambiental'],
      en: ['Agriculture and livestock', 'Industry and maintenance', 'Biosecurity and food', 'Environmental monitoring'],
    },
    faq: {
      es: [
        {
          question: 'Puedes ayudar aunque solo exista una idea o un prototipo?',
          answer: 'Si. Puedo entrar desde una fase muy inicial para definir arquitectura, sensores, conectividad y riesgos antes de escalar.',
        },
        {
          question: 'Trabajas solo la parte de firmware?',
          answer: 'Puedo entrar solo en firmware o cubrir tambien plataforma, datos, dashboards y operacion si el proyecto lo necesita.',
        },
        {
          question: 'Te adaptas a entornos duros o conectividad irregular?',
          answer: 'Es una de las situaciones que mas me interesan: campo, industria, despliegues distribuidos y escenarios con restricciones reales.',
        },
      ],
      ca: [
        {
          question: 'Pots ajudar encara que nomes hi hagi una idea o un prototip?',
          answer: 'Si. Puc entrar des d una fase molt inicial per definir arquitectura, sensors, connectivitat i riscos abans d escalar.',
        },
        {
          question: 'Treballes nomes la part de firmware?',
          answer: 'Puc entrar nomes en firmware o cobrir tambe plataforma, dades, dashboards i operacio si el projecte ho necessita.',
        },
        {
          question: 'T adaptes a entorns durs o connectivitat irregular?',
          answer: 'Es una de les situacions que mes m interessen: camp, industria, desplegaments distribuIts i escenaris amb restriccions reals.',
        },
      ],
      en: [
        {
          question: 'Can you help if we only have an idea or prototype?',
          answer: 'Yes. I can join very early to define architecture, sensors, connectivity, and risks before scaling.',
        },
        {
          question: 'Do you only handle firmware?',
          answer: 'I can work only on firmware or cover platform, data, dashboards, and operations if the project needs it.',
        },
        {
          question: 'Can you adapt to harsh environments or unstable connectivity?',
          answer: 'That is one of the contexts I find most valuable: field, industry, distributed deployments, and real constraints.',
        },
      ],
    },
  },
};
