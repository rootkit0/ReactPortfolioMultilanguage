import type { ServiceCityContent } from '@/data/serviceCityTypes';

export const aiCities: Record<string, ServiceCityContent> = {
  zaragoza: {
    intro: {
      es: 'En Zaragoza suelo ver muy buen encaje para IA aplicada a operaciones, industria, logistica y entornos agroalimentarios donde el dato ya existe pero todavia no se convierte en decisiones utiles.',
      ca: 'A Saragossa acostumo a veure molt bon encaix per a IA aplicada a operacions, industria, logistica i entorns agroalimentaris on la dada ja existeix pero encara no es converteix en decisions utils.',
      en: 'In Zaragoza I usually see a strong fit for AI applied to operations, industry, logistics, and agri-food environments where data already exists but is not yet turned into useful decisions.',
    },
    note: {
      es: 'Trabajo desde Zaragoza y tambien en remoto, asi que puedo moverme con facilidad para discovery, validacion y despliegue.',
      ca: 'Treballo des de Saragossa i tambe en remot, aixi que em puc moure amb facilitat per a discovery, validacio i desplegament.',
      en: 'I work from Zaragoza and remotely, so I can move easily for discovery, validation, and deployment.',
    },
    useCases: {
      es: [
        'Modelos para priorizar incidencias, cuellos de botella o decisiones operativas.',
        'Vision artificial para control de calidad, conteo o deteccion de anomalias.',
        'Asistentes internos y automatizacion documental para equipos tecnicos y de soporte.',
      ],
      ca: [
        'Models per prioritzar incidencies, colls d ampolla o decisions operatives.',
        'Visio artificial per a control de qualitat, comptatge o deteccio d anomalies.',
        'Assistents interns i automatitzacio documental per a equips tecnics i de suport.',
      ],
      en: [
        'Models to prioritize incidents, bottlenecks, or operational decisions.',
        'Computer vision for quality control, counting, or anomaly detection.',
        'Internal assistants and document automation for technical and support teams.',
      ],
    },
    faq: {
      es: [
        {
          question: 'Tiene sentido si ya tenemos BI pero no IA?',
          answer: 'Si. Muchas veces el paso natural es aprovechar esos datos para prediccion, alertas o asistencia operacional.',
        },
        {
          question: 'Puedes trabajar con equipos pequenos?',
          answer: 'Si. Ajusto el alcance para que una primera version util no bloquee al equipo ni cree deuda innecesaria.',
        },
      ],
      ca: [
        {
          question: 'Te sentit si ja tenim BI pero no IA?',
          answer: 'Si. Moltes vegades el pas natural es aprofitar aquestes dades per a prediccio, alertes o assistencia operacional.',
        },
        {
          question: 'Pots treballar amb equips petits?',
          answer: 'Si. Ajusto l abast perque una primera versio util no bloquegi l equip ni crei deute innecessari.',
        },
      ],
      en: [
        {
          question: 'Does it make sense if we already have BI but not AI?',
          answer: 'Yes. Very often the natural next step is to use that data for prediction, alerts, or operational assistance.',
        },
        {
          question: 'Can you work with small teams?',
          answer: 'Yes. I scope the first version so it is useful without overwhelming the team or creating unnecessary debt.',
        },
      ],
    },
  },
  barcelona: {
    intro: {
      es: 'En Barcelona la IA suele encajar especialmente bien cuando hay producto digital, volumen de operaciones o necesidad de integrar modelos en herramientas ya existentes.',
      ca: 'A Barcelona la IA sol encaixar especialment be quan hi ha producte digital, volum d operacions o necessitat d integrar models en eines ja existents.',
      en: 'In Barcelona, AI tends to fit especially well when there is a digital product, operational scale, or a need to integrate models into existing tools.',
    },
    note: {
      es: 'Puedo colaborar tanto con equipos de producto como con operaciones y tecnologia, con trabajo hibrido o remoto.',
      ca: 'Puc col.laborar tant amb equips de producte com amb operacions i tecnologia, amb treball hibrid o remot.',
      en: 'I can collaborate with both product and operations teams, through hybrid or remote work.',
    },
    useCases: {
      es: [
        'Asistentes y buscadores internos sobre documentacion, soporte o procesos.',
        'Automatizacion de operaciones repetitivas conectando APIs, reglas y modelos.',
        'Vision o clasificacion para entornos industriales, retail o producto conectado.',
      ],
      ca: [
        'Assistents i cercadors interns sobre documentacio, suport o processos.',
        'Automatitzacio d operacions repetitives connectant APIs, regles i models.',
        'Visio o classificacio per a entorns industrials, retail o producte connectat.',
      ],
      en: [
        'Internal assistants and search over documentation, support, or processes.',
        'Automation of repetitive operations by connecting APIs, rules, and models.',
        'Vision or classification for industrial, retail, or connected-product contexts.',
      ],
    },
    faq: {
      es: [
        {
          question: 'Puedes integrarte con producto y negocio a la vez?',
          answer: 'Si. Suelo trabajar precisamente en esa frontera entre necesidad operativa, arquitectura y experiencia de usuario.',
        },
        {
          question: 'Ayudas a definir priorizacion y roadmap?',
          answer: 'Si. Una parte importante del trabajo es evitar construir IA donde no aporta suficiente valor.',
        },
      ],
      ca: [
        {
          question: 'Pots integrar-te amb producte i negoci alhora?',
          answer: 'Si. Acostumo a treballar precisament en aquesta frontera entre necessitat operativa, arquitectura i experiencia d usuari.',
        },
        {
          question: 'Ajudes a definir prioritzacio i roadmap?',
          answer: 'Si. Una part important de la feina es evitar construir IA on no aporta prou valor.',
        },
      ],
      en: [
        {
          question: 'Can you work across product and business at the same time?',
          answer: 'Yes. That boundary between operational need, architecture, and user experience is where I often work best.',
        },
        {
          question: 'Do you help define prioritization and roadmap?',
          answer: 'Yes. An important part of the work is avoiding AI initiatives that do not create enough value.',
        },
      ],
    },
  },
  lleida: {
    intro: {
      es: 'En Lleida tiene mucho sentido aplicar IA en agricultura, ganaderia, trazabilidad y control de procesos donde el contexto fisico y la validacion en campo importan tanto como el modelo.',
      ca: 'A Lleida te molt sentit aplicar IA en agricultura, ramaderia, traçabilitat i control de processos on el context fisic i la validacio al camp importen tant com el model.',
      en: 'In Lleida, AI makes a lot of sense in agriculture, livestock, traceability, and process control, where the physical context and field validation matter as much as the model itself.',
    },
    note: {
      es: 'Tengo raiz personal en Lleida y especial afinidad por proyectos donde el dato viene del terreno, de sensores o de procesos productivos reales.',
      ca: 'Tinc arrel personal a Lleida i una afinitat especial per projectes on la dada ve del terreny, de sensors o de processos productius reals.',
      en: 'I have personal roots in Lleida and a strong affinity for projects where data comes from the field, from sensors, or from real production processes.',
    },
    useCases: {
      es: [
        'Prediccion y recomendacion sobre datos agronomicos, climaticos o de explotacion.',
        'Deteccion de anomalias y apoyo a decisiones en granjas e industria alimentaria.',
        'Vision artificial y trazabilidad para control de calidad y seguimiento de producto.',
      ],
      ca: [
        'Prediccio i recomanacio sobre dades agronomiques, climatiques o d explotacio.',
        'Deteccio d anomalies i suport a decisions en granges i industria alimentaria.',
        'Visio artificial i traçabilitat per a control de qualitat i seguiment de producte.',
      ],
      en: [
        'Prediction and recommendation on agronomic, climatic, or operational data.',
        'Anomaly detection and decision support in farms and food industry environments.',
        'Computer vision and traceability for quality control and product monitoring.',
      ],
    },
    faq: {
      es: [
        {
          question: 'Trabajas con proyectos que mezclan IoT e IA?',
          answer: 'Si, de hecho es uno de los escenarios donde mas valor puedo aportar porque puedo cubrir el flujo completo.',
        },
        {
          question: 'Es viable empezar con pocos datos?',
          answer: 'Depende del caso, pero muchas veces se puede plantear un enfoque incremental combinando reglas, sensado y modelo.',
        },
      ],
      ca: [
        {
          question: 'Treballes amb projectes que barregen IoT i IA?',
          answer: 'Si, de fet es un dels escenaris on mes valor puc aportar perque puc cobrir el flux complet.',
        },
        {
          question: 'Es viable començar amb poques dades?',
          answer: 'Depen del cas, pero moltes vegades es pot plantejar un enfocament incremental combinant regles, sensat i model.',
        },
      ],
      en: [
        {
          question: 'Do you work on projects that combine IoT and AI?',
          answer: 'Yes. In fact, that is one of the scenarios where I can add the most value because I can cover the full flow.',
        },
        {
          question: 'Is it viable to start with little data?',
          answer: 'It depends on the case, but in many situations an incremental approach works by combining rules, sensing, and models.',
        },
      ],
    },
  },
  madrid: {
    intro: {
      es: 'En Madrid veo mucho potencial en IA orientada a equipos, procesos y operaciones complejas donde se necesita integrar bien datos, herramientas y usuarios.',
      ca: 'A Madrid veig molt potencial en IA orientada a equips, processos i operacions complexes on cal integrar be dades, eines i usuaris.',
      en: 'In Madrid I see strong potential for AI focused on teams, processes, and complex operations where data, tools, and users need to work together cleanly.',
    },
    note: {
      es: 'Trabajo sin problema con equipos distribuidos y contextos corporativos donde la gobernanza, la seguridad y la integracion pesan mucho.',
      ca: 'Treballo sense problema amb equips distribuIts i contextos corporatius on la governança, la seguretat i la integracio pesen molt.',
      en: 'I work comfortably with distributed teams and corporate contexts where governance, security, and integration matter heavily.',
    },
    useCases: {
      es: [
        'Copilotos internos para operaciones, soporte, documentacion y analisis.',
        'Clasificacion, scoring o priorizacion para equipos con alto volumen de gestion.',
        'Automatizacion documental y conexion entre procesos de negocio y sistemas.',
      ],
      ca: [
        'Copilots interns per a operacions, suport, documentacio i analisi.',
        'Classificacio, scoring o prioritzacio per a equips amb alt volum de gestio.',
        'Automatitzacio documental i connexio entre processos de negoci i sistemes.',
      ],
      en: [
        'Internal copilots for operations, support, documentation, and analysis.',
        'Classification, scoring, or prioritization for teams handling high volumes.',
        'Document automation and connection between business processes and systems.',
      ],
    },
    faq: {
      es: [
        {
          question: 'Te adaptas a entornos con compliance o seguridad exigente?',
          answer: 'Si. Precisamente ahi tiene sentido trabajar con arquitectura, permisos, trazabilidad y despliegue bien pensados.',
        },
        {
          question: 'Puedes colaborar con proveedores o equipo interno?',
          answer: 'Si. Estoy comodo trabajando de forma coordinada con producto, tecnologia, datos y negocio.',
        },
      ],
      ca: [
        {
          question: 'T adaptes a entorns amb compliance o seguretat exigent?',
          answer: 'Si. Precisament aqui te sentit treballar amb arquitectura, permisos, traçabilitat i desplegament ben pensats.',
        },
        {
          question: 'Pots col.laborar amb proveIdors o equip intern?',
          answer: 'Si. Em sento comode treballant de manera coordinada amb producte, tecnologia, dades i negoci.',
        },
      ],
      en: [
        {
          question: 'Can you adapt to environments with strict compliance or security needs?',
          answer: 'Yes. Those are exactly the situations where architecture, permissions, traceability, and deployment discipline matter.',
        },
        {
          question: 'Can you collaborate with vendors or internal teams?',
          answer: 'Yes. I am comfortable working across product, technology, data, and business teams.',
        },
      ],
    },
  },
};
