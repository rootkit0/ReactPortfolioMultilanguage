import type { ServiceCityContent } from '@/data/serviceCityTypes';

export const iotCities: Record<string, ServiceCityContent> = {
  zaragoza: {
    intro: {
      es: 'En Zaragoza el IoT encaja muy bien en industria, logistica, energia y procesos donde hace falta instrumentar, medir y reaccionar sin complicar la operacion.',
      ca: 'A Saragossa l IoT encaixa molt be en industria, logistica, energia i processos on cal instrumentar, mesurar i reaccionar sense complicar l operacio.',
      en: 'In Zaragoza, IoT fits very well in industry, logistics, energy, and operational processes where teams need to instrument, measure, and react without adding friction.',
    },
    note: {
      es: 'Puedo trabajar desde una auditoria tecnica inicial hasta el despliegue de firmware, gateways y visualizacion de datos.',
      ca: 'Puc treballar des d una auditoria tecnica inicial fins al desplegament de firmware, gateways i visualitzacio de dades.',
      en: 'I can work from the initial technical audit all the way to firmware, gateways, and data visualization deployment.',
    },
    useCases: {
      es: [
        'Telemetria industrial y mantenimiento con alertas y diagnostico.',
        'Monitorizacion de activos, energia o condiciones ambientales.',
        'Integracion con plataformas internas, cuadros de mando y automatizacion.',
      ],
      ca: [
        'Telemetria industrial i manteniment amb alertes i diagnostic.',
        'Monitoritzacio d actius, energia o condicions ambientals.',
        'Integracio amb plataformes internes, quadres de comandament i automatitzacio.',
      ],
      en: [
        'Industrial telemetry and maintenance with alerts and diagnostics.',
        'Monitoring of assets, energy, or environmental conditions.',
        'Integration with internal platforms, dashboards, and automation.',
      ],
    },
    faq: {
      es: [
        {
          question: 'Puedes entrar solo a revisar arquitectura o firmware?',
          answer: 'Si. Puedo hacer una intervencion puntual o participar en una fase mas completa de producto.',
        },
        {
          question: 'Trabajas con hardware existente?',
          answer: 'Si. Muchas veces el mejor punto de partida es mejorar fiabilidad y lectura del dato sobre hardware ya instalado.',
        },
      ],
      ca: [
        {
          question: 'Pots entrar nomes a revisar arquitectura o firmware?',
          answer: 'Si. Puc fer una intervencio puntual o participar en una fase mes completa de producte.',
        },
        {
          question: 'Treballes amb hardware existent?',
          answer: 'Si. Moltes vegades el millor punt de partida es millorar fiabilitat i lectura de la dada sobre hardware ja instal.lat.',
        },
      ],
      en: [
        {
          question: 'Can you jump in just to review architecture or firmware?',
          answer: 'Yes. I can do a focused intervention or participate in a broader product phase.',
        },
        {
          question: 'Do you work with existing hardware?',
          answer: 'Yes. Often the best starting point is improving reliability and data readability on hardware already deployed.',
        },
      ],
    },
  },
  barcelona: {
    intro: {
      es: 'En Barcelona suelo ver proyectos IoT ligados a producto conectado, monitorizacion distribuida y necesidad de escalar bien plataforma y operaciones.',
      ca: 'A Barcelona acostumo a veure projectes IoT lligats a producte connectat, monitoritzacio distribuida i necessitat d escalar be plataforma i operacions.',
      en: 'In Barcelona I often see IoT projects tied to connected products, distributed monitoring, and the need to scale both platform and operations cleanly.',
    },
    note: {
      es: 'Puedo colaborar con equipos de producto y hardware para aterrizar una arquitectura que no se rompa al crecer.',
      ca: 'Puc col.laborar amb equips de producte i hardware per aterrar una arquitectura que no es trenqui en creixer.',
      en: 'I can work with product and hardware teams to land an architecture that does not break as the system grows.',
    },
    useCases: {
      es: [
        'Dispositivos conectados con backend, dashboards y gestion de flota.',
        'Sensado y control para entornos industriales o instalaciones complejas.',
        'Edge + cloud para reducir latencia, dependencia de red o coste operativo.',
      ],
      ca: [
        'Dispositius connectats amb backend, dashboards i gestio de flota.',
        'Sensat i control per a entorns industrials o instal.lacions complexes.',
        'Edge + cloud per reduir latencia, dependencia de xarxa o cost operatiu.',
      ],
      en: [
        'Connected devices with backend, dashboards, and fleet management.',
        'Sensing and control for industrial environments or complex facilities.',
        'Edge + cloud architectures to reduce latency, network dependence, or operating cost.',
      ],
    },
    faq: {
      es: [
        {
          question: 'Puedes ayudar a definir la plataforma ademas del dispositivo?',
          answer: 'Si. Para mi tiene sentido pensar hardware, conectividad y operacion como un solo sistema.',
        },
        {
          question: 'Trabajas con despliegues distribuidos?',
          answer: 'Si. Gateways, tolerancia a fallos, observabilidad y mantenimiento remoto forman parte natural del trabajo.',
        },
      ],
      ca: [
        {
          question: 'Pots ajudar a definir la plataforma a mes del dispositiu?',
          answer: 'Si. Per a mi te sentit pensar hardware, connectivitat i operacio com un sol sistema.',
        },
        {
          question: 'Treballes amb desplegaments distribuIts?',
          answer: 'Si. Gateways, tolerancia a fallades, observabilitat i manteniment remot formen part natural de la feina.',
        },
      ],
      en: [
        {
          question: 'Can you help define the platform as well as the device?',
          answer: 'Yes. I see hardware, connectivity, and operations as one system, not isolated pieces.',
        },
        {
          question: 'Do you work with distributed deployments?',
          answer: 'Yes. Gateways, fault tolerance, observability, and remote maintenance are a natural part of the job.',
        },
      ],
    },
  },
  lleida: {
    intro: {
      es: 'En Lleida el IoT tiene un encaje natural en agricultura, ganaderia, industria alimentaria y monitorizacion ambiental, donde la validacion en campo es clave.',
      ca: 'A Lleida l IoT te un encaix natural en agricultura, ramaderia, industria alimentaria i monitoritzacio ambiental, on la validacio al camp es clau.',
      en: 'In Lleida, IoT has a natural fit in agriculture, livestock, food industry, and environmental monitoring, where field validation is essential.',
    },
    note: {
      es: 'Me interesan especialmente los sistemas que tienen que convivir con clima, suciedad, autonomia energetica y conectividad imperfecta.',
      ca: 'M interessen especialment els sistemes que han de conviure amb clima, bruticia, autonomia energetica i connectivitat imperfecta.',
      en: 'I am especially interested in systems that must survive weather, dirt, energy constraints, and imperfect connectivity.',
    },
    useCases: {
      es: [
        'Sensores y gateways para explotaciones agricolas o ganaderas.',
        'Control de parametros criticos y alertas tempranas en campo o industria.',
        'Integracion de telemetria con historicos, paneles y decisiones operativas.',
      ],
      ca: [
        'Sensors i gateways per a explotacions agricoles o ramaderes.',
        'Control de parametres critics i alertes primerenques al camp o industria.',
        'Integracio de telemetria amb historics, panells i decisions operatives.',
      ],
      en: [
        'Sensors and gateways for agricultural or livestock operations.',
        'Control of critical parameters and early alerts in field or industry contexts.',
        'Integration of telemetry with historical data, dashboards, and operational decisions.',
      ],
    },
    faq: {
      es: [
        {
          question: 'Te adaptas a despliegues rurales o de dificil acceso?',
          answer: 'Si. Precisamente ahi la arquitectura, el consumo y la observabilidad importan mas.',
        },
        {
          question: 'Puedes combinar IoT con IA en este tipo de proyectos?',
          answer: 'Si. Cuando el dato merece una capa de analitica o prediccion, puedo cubrir tambien esa parte.',
        },
      ],
      ca: [
        {
          question: 'T adaptes a desplegaments rurals o de dificil acces?',
          answer: 'Si. Precisament aqui l arquitectura, el consum i l observabilitat importen mes.',
        },
        {
          question: 'Pots combinar IoT amb IA en aquest tipus de projectes?',
          answer: 'Si. Quan la dada mereix una capa d analitica o prediccio, puc cobrir tambe aquesta part.',
        },
      ],
      en: [
        {
          question: 'Can you adapt to rural or hard-to-access deployments?',
          answer: 'Yes. That is exactly where architecture, power usage, and observability matter most.',
        },
        {
          question: 'Can you combine IoT with AI in this kind of project?',
          answer: 'Yes. When the data deserves an analytics or prediction layer, I can cover that part too.',
        },
      ],
    },
  },
  madrid: {
    intro: {
      es: 'En Madrid el IoT suele aparecer en operaciones multisede, edificios, energia, industria y proyectos donde la gestion del dato y la seguridad pesan mucho.',
      ca: 'A Madrid l IoT sol apareixer en operacions multisede, edificis, energia, industria i projectes on la gestio de la dada i la seguretat pesen molt.',
      en: 'In Madrid, IoT often appears in multi-site operations, buildings, energy, industry, and projects where data management and security carry a lot of weight.',
    },
    note: {
      es: 'Estoy comodo trabajando en contextos corporativos donde hacen falta integraciones, control de acceso, trazabilidad y una operacion clara.',
      ca: 'Em sento comode treballant en contextos corporatius on calen integracions, control d acces, traçabilitat i una operacio clara.',
      en: 'I am comfortable working in corporate contexts where integrations, access control, traceability, and operational clarity are required.',
    },
    useCases: {
      es: [
        'Monitorizacion de instalaciones, energia y condiciones ambientales en multiples sedes.',
        'Sensado y trazabilidad para procesos criticos o auditorias.',
        'Integracion de dispositivos con plataformas internas y paneles de operacion.',
      ],
      ca: [
        'Monitoritzacio d instal.lacions, energia i condicions ambientals en multiples seus.',
        'Sensat i traçabilitat per a processos critics o auditories.',
        'Integracio de dispositius amb plataformes internes i panells d operacio.',
      ],
      en: [
        'Monitoring of facilities, energy, and environmental conditions across multiple sites.',
        'Sensing and traceability for critical processes or audits.',
        'Integration of devices with internal platforms and operational dashboards.',
      ],
    },
    faq: {
      es: [
        {
          question: 'Puedes coordinarte con IT, operaciones y negocio?',
          answer: 'Si. En este tipo de proyectos la coordinacion entre areas es tan importante como la capa tecnica.',
        },
        {
          question: 'Te ocupas tambien de seguridad y mantenimiento?',
          answer: 'Si. No concibo un despliegue IoT serio sin pensar en permisos, diagnostico, alertas y mantenimiento.',
        },
      ],
      ca: [
        {
          question: 'Pots coordinar-te amb IT, operacions i negoci?',
          answer: 'Si. En aquest tipus de projectes la coordinacio entre arees es tan important com la capa tecnica.',
        },
        {
          question: 'Tambe t ocupes de seguretat i manteniment?',
          answer: 'Si. No concebo un desplegament IoT serios sense pensar en permisos, diagnostic, alertes i manteniment.',
        },
      ],
      en: [
        {
          question: 'Can you coordinate with IT, operations, and business teams?',
          answer: 'Yes. In these projects, cross-team coordination is as important as the technical layer itself.',
        },
        {
          question: 'Do you also handle security and maintenance?',
          answer: 'Yes. I do not consider an IoT deployment serious unless permissions, diagnostics, alerts, and maintenance are part of the plan.',
        },
      ],
    },
  },
};
