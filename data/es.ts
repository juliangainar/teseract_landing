import { Copy } from "./types";

export const es: Copy = {
  metadata: {
    title: "Teseract - Todo en un solo lugar",
    description:
      "Convierte tus finanzas en un juego que por fin puedes ganar. Controla tu patrimonio, objetivos y gastos diarios, y conecta con un agente de IA que actúa según tus datos.",
  },
  header: {
    tagline: "todo en un solo lugar",
    nav: {
      features: "Funcionalidades",
      goals: "Objetivos",
      aiAgent: "Agente Financiero IA",
      faq: "FAQ",
    },
    cta: {
      full: "Únete a la lista de espera",
      short: "Obtener acceso",
    },
    language: {
      toggle: "EN",
      aria: "Cambiar idioma",
    },
  },
  hero: {
    badges: [
      "Creado para quienes quieren ganar de verdad con su dinero",
      "Impulsado con IA",
    ],
    title: "Convierte tus finanzas en un juego que",
    highlight: "por fin puedes ganar.",
    description:
      "Teseract es tu centro de mando financiero: patrimonio, misiones, gasto diario y objetivos visuales, todo en un solo lugar para que avances sin fricción.",
    cta: "Acceso anticipado",
    bullets: [
      "Un Agente de IA que analiza tus datos y te da recomendaciones accionables",
      "Sigue patrimonio, deudas, flujo de caja, gasto diario y suscripciones",
      "Completa misiones y desbloquea logros",
      "Mide tu progreso con reportes mensuales",
    ],
    dashboard: {
      title: "Dashboard • Teseract",
      character: "Tu personaje",
      classLabel: "Clase: Constructor",
      titleLabel: "Título: Arquitecto de patrimonio",
      xp: "1,240 / 2,000 XP",
      xpChange: "+120 esta semana",
      netWorthLabel: "Patrimonio",
      netWorth: "€ 18,450",
      netWorthChange: "+€1,250 este mes",
      cashflowLabel: "Flujo mensual",
      cashflow: "+€ 420",
      cashflowNote: "Estable • 4 fuentes",
      debtLabel: "Deuda total",
      debt: "€ 14,450",
      debtChange: "-€350 vs mes pasado",
      savingsLabel: "Tasa de ahorro",
      savingsStatus: "En ruta para las metas",
      snapshotLabel: "Resumen",
      missionsTitle: "Misiones • Educación",
      missionSet: "Misiones",
      missions: [
        {
          title: "Ahorrar €500 este mes",
          reward: 'Recompensa: +150 pts • Insignia "Disciplina"',
          progress: "60%",
        },
        {
          title: "Pagar €300 de deuda",
          reward: "Recompensa: +110 pts • Más cerca de cero",
          progress: "80%",
        },
        {
          title: "Terminar un curso de finanzas",
          reward: "Recompensa: +90 pts • Impulso de progreso",
          progress: "40%",
        },
      ],
      snapshot: {
        title: "Resumen",
        change: "+€ 1,670",
        body: "Cambio de patrimonio en los últimos 30 días",
      },
    },
  },
  aiAgent: {
    badge: "Agente Financiero IA",
    title: "Respuestas de un",
    highlight: "Agente de IA",
    suffix: "que te conoce",
    description:
      "No es un chat genérico: el agente solo habla de tus cuentas, flujos y objetivos. Convierte tus datos en acciones claras y medibles con contexto siempre actualizado.",
    liveData: "Datos en vivo conectados",
    youAsked: "Preguntaste",
    agentInsight: "Insight del agente",
    advisorPrefix: "También puede ser tu",
    advisorTag: "asesor financiero",
    chips: [
      "Próxima mejor acción esta semana",
      "Puedes gastar €X con seguridad hoy",
      "Esta suscripción está matando tu flujo de caja",
      "¿Qué debo mejorar el próximo mes?",
    ],
    sampleQuestion: "¿Por qué cayó mi flujo de caja este mes?",
    sampleAnswer:
      "Las suscripciones subieron +€65 y la comida a domicilio +€40 vs el mes pasado. Pausa 2 suscripciones y limita pedidos a 2 veces por semana; tu flujo vuelve a la normalidad en unos 10 días.",
    sampleAction:
      "Siguiente acción: pausa 2 suscripciones y fija 2 pedidos semanales máximo",
  },
  featuresIntro: {
    title: "Todo lo que necesitas para",
    highlight: "dominar tus finanzas",
    subtitle:
      "Funciones potentes diseñadas para que gestionar el dinero sea motivador y gratificante",
    monthlyReport: {
      badge: "Función premium clave",
      liveData: "Datos en vivo",
      monthlyLabel: "Reporte mensual",
      youAsked: "Preguntaste",
      agentAnswer: "Respuesta del agente",
      title: "Reportes mensuales con un agente de IA interactivo",
      description:
        "Al cierre del mes recibes un reporte accionable, sin relleno. Pregunta al instante qué pasó, qué mejorar y si superaste el trimestre anterior.",
      bullets: [
        "Respuestas contextuales sobre tus datos",
        'Ejemplos: "¿Por qué bajó mi flujo de caja?"',
        "Recomendaciones claras: próxima acción y límites seguros",
      ],
      sampleQuestion: "¿Por qué bajó mi flujo de caja este mes?",
      sampleAnswer:
        "Suscripciones +€180 y comida +€120 vs el mes pasado. Si limitas comida a €18/día y cancelas 2 suscripciones, recuperas €210 el próximo mes.",
      sampleAction:
        "Siguiente acción: bloquear suscripciones y ajustar el límite de comida",
    },
  },
  features: [
    {
      id: "assets",
      title: "Controla tus activos",
      description:
        "Monitorea todos tus activos en un solo lugar: efectivo, inversiones, propiedades y más. Ve crecer tu patrimonio en tiempo real con visualizaciones claras.",
      bullets: [
        "Seguimiento en tiempo real",
        "Múltiples categorías de activos",
        "Visualización de patrimonio",
      ],
      image: { src: "/assets/assets.png", alt: "Gestión de activos" },
    },
    {
      id: "debts",
      title: "Gestiona deudas",
      description:
        "Lleva control de tus deudas, calendarios de pago y observa cómo bajan al completar misiones. Ten claridad de tus obligaciones y avances.",
      bullets: [
        "Vista completa de deudas",
        "Seguimiento de cuotas y calendarios",
        "Visualización de progreso",
      ],
      image: { src: "/assets/debts.png", alt: "Gestión de deudas" },
    },
    {
      id: "spending",
      title: "Gasto diario",
      description:
        "Supervisa tus gastos diarios, define presupuestos y obtén insights sobre tus hábitos. Entiende a dónde va tu dinero y decide mejor.",
      bullets: [
        "Registro de gastos en tiempo real",
        "Presupuestos inteligentes",
        "Insights y analítica de gasto",
      ],
      image: { src: "/assets/daily_spending.png", alt: "Gasto diario" },
    },
    {
      id: "income",
      title: "Seguimiento de ingresos",
      description:
        "Controla todas tus fuentes de ingreso, visualiza tendencias de flujo de caja y entiende tu salud financiera. Planea con una visión completa.",
      bullets: [
        "Múltiples fuentes de ingreso",
        "Visualización de flujo de caja",
        "Análisis de tendencias de ingreso",
      ],
      image: { src: "/assets/income.png", alt: "Seguimiento de ingresos" },
    },
    {
      id: "subscriptions",
      title: "Suscripciones bajo control",
      description:
        "Lleva la lista de todas tus suscripciones, evita cargos olvidados y optimiza tus gastos recurrentes. No pierdas de vista lo que pagas.",
      bullets: [
        "Lista completa de suscripciones",
        "Renovaciones a la vista",
        "Optimización de costos",
      ],
      image: {
        src: "/assets/subscriptions.png",
        alt: "Gestión de suscripciones",
      },
    },
    {
      id: "missions",
      title: "Misiones y logros",
      description:
        "Completa misiones financieras, gana XP, desbloquea logros y sube de nivel tu juego financiero. Gestionar dinero se vuelve motivador.",
      bullets: [
        "Objetivos financieros estructurados",
        "Sistema de XP y niveles",
        "Logros desbloqueables",
      ],
      image: {
        src: "/assets/financial_inventory_missions.png",
        alt: "Misiones y logros",
      },
    },
  ],
  goals: {
    badge: "Funcionalidad",
    title: "Visualiza objetivos y hazlos reales",
    description:
      "Lleva tus ambiciones a un plan medible. Ve hitos, mide el impulso y pasa de la idea a la ejecución con confianza.",
    bullets: [
      "Convierte objetivos en hitos con fechas",
      "Motívate con progreso visual y rachas",
      "Baja ideas de crecimiento a pasos semanales",
    ],
    exampleQuestion:
      "¿Cuál es la mejor estrategia para comprar un auto el próximo año?",
    exampleAnswer:
      "Para comprar un auto el próximo año, apunta a $18k: $12k de entrada + $6k de colchón. Redirige $350/mes de gastos no esenciales, agrega $250/mes de un side gig y limita el gasto diario a $25. Llegas en ~12 meses con margen para comisiones.",
    exampleLabel: "Ejemplo de funcionalidad premium",
    agentLabel: "Agente IA",
  },
  faq: {
    title: "Preguntas",
    highlight: "frecuentes",
    subtitle: "Todo lo que necesitas saber sobre Teseract",
    items: [
      {
        q: "¿Por qué Teseract?",
        a: "Creemos que todos deben ser protagonistas de sus finanzas. Teseract nació de una necesidad personal: llevar todo a un solo lugar—sin hojas de cálculo ni apps dispersas—para no estar solo al empezar, al crecer patrimonio o cuando buscas claridad para decidir.",
      },
      {
        q: "¿Qué es Teseract?",
        a: "Teseract es una plataforma de gestión financiera con misiones y niveles que te mantienen constante. Sigue tu patrimonio, completa misiones, define objetivos y cúmplelos, desbloquea logros y mejora tu salud financiera de forma sostenida.",
      },
      {
        q: "¿Qué hace el Agente de IA?",
        a: "El Agente de IA está conectado a tu entorno financiero. Puedes preguntarle cualquier tema de dinero: actúa como asesor y guía, revisa reportes mensuales, analiza tu situación y sugiere mejoras claras, personalizadas a tu caso.",
      },
      {
        q: "¿Cómo funciona la gamificación?",
        a: "Ganas XP al completar misiones financieras como ahorrar, pagar deudas o aprender de finanzas. Al subir de nivel desbloqueas títulos, insignias y logros que reflejan tu avance.",
      },
      {
        q: "¿Mis datos están seguros?",
        a: "Sí. Usamos cifrado de nivel bancario para proteger tus datos, tanto en tránsito como en reposo, y no compartimos tu información con terceros.",
      },
      {
        q: "¿Puedo usar Teseract gratis?",
        a: "Teseract ofrece un plan gratuito con funciones básicas. Los planes premium desbloquean el Agente de IA, analítica avanzada y más. Únete a la lista para obtener acceso anticipado y precios especiales.",
      },
      {
        q: "¿Cuándo estará disponible Teseract?",
        a: "Estamos en beta. Únete a la lista para acceso anticipado y para saber cuándo lanzamos públicamente. Los primeros usuarios recibirán beneficios y descuentos exclusivos.",
      },
    ],
  },
  cta: {
    title: "¿Listo para",
    highlight: "subir de nivel",
    tail: "tus finanzas?",
    subtitle: "Únete: convierte tus finanzas en un juego que puedes ganar.",
    button: "Unirme a la lista",
    signups: "personas ya lo hicieron",
  },
  footer: {
    tagline: "Convierte tus finanzas en un juego que por fin puedes ganar.",
    product: "Producto",
    company: "Compañía",
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Términos",
    security: "Seguridad",
    rights: `© ${new Date().getFullYear()} Teseract. Todos los derechos reservados.`,
  },
  waitlist: {
    title: "Únete a la lista de espera",
    subtitle:
      "Sé de los primeros en probar Teseract. Obtén acceso anticipado y actualizaciones exclusivas.",
    placeholder: "Ingresa tu email",
    consent: {
      prefix: "Acepto los",
      and: "y la",
      suffix: ".",
      terms: "Términos de servicio",
      privacy: "Política de privacidad",
    },
    errors: {
      consent: "Acepta la Política de privacidad y los Términos para unirte.",
      generic: "Algo salió mal. Intenta de nuevo.",
    },
    cta: "Obtener acceso anticipado",
    submitting: "Uniendo...",
    successTitle: "¡Listo!",
    successMessage: "Te avisaremos por email cuando Teseract esté listo.",
  },
  legal: {
    privacy: {
      badge: "Privacidad primero",
      title: "Política de privacidad",
      lead: "Solo recopilamos lo necesario para operar Teseract y mantenerte informado. Nada de vender datos ni trucos ocultos: manejo transparente de tu información.",
      updatedLabel: "Última actualización:",
      contact: "Dudas o solicitudes: privacy@teseract.xyz.",
      sections: [
        {
          title: "1. Qué recopilamos",
          items: [
            "Email al unirte a la lista o registrarte.",
            "Eventos de uso básicos para mantener el servicio estable y seguro.",
          ],
        },
        {
          title: "2. Cómo lo usamos",
          items: [
            "Enviar onboarding, novedades del producto y estado de la lista.",
            "Mejorar confiabilidad, rendimiento y seguridad.",
          ],
        },
        {
          title: "3. Compartir y retención",
          body: "No vendemos tus datos. Usamos procesadores de confianza (como envío de email) bajo acuerdos estrictos. Los datos se conservan solo mientras sean necesarios para operar el servicio o hasta que pidas su eliminación.",
        },
        {
          title: "4. Tus derechos",
          items: [
            "Acceder, corregir o eliminar tus datos.",
            "Cancelar suscripción a comunicaciones cuando quieras.",
            "Escríbenos para cualquier solicitud: privacy@teseract.xyz",
          ],
        },
        {
          title: "5. Contacto",
          body: "Dudas o solicitudes: privacy@teseract.xyz.",
        },
      ],
    },
    terms: {
      badge: "Términos y seguridad",
      title: "Términos de servicio",
      lead: "Reglas claras y sencillas para que sepas qué esperar al usar Teseract.",
      updatedLabel: "Última actualización:",
      contact: "¿Preguntas? support@teseract.com.",
      sections: [
        {
          title: "1. Aceptación",
          body: "Al usar Teseract aceptas estos términos. Si no estás de acuerdo, por favor no uses el servicio.",
        },
        {
          title: "2. Servicio",
          body: "Teseract te ayuda a seguir finanzas, objetivos e insights. Las funciones pueden evolucionar conforme mejoramos el producto.",
        },
        {
          title: "3. Uso",
          items: [
            "Eres responsable de la exactitud de tus datos.",
            "Sin mal uso: nada de spam, abuso o actividades ilegales.",
            "Úsalo solo donde sea legal en tu región.",
          ],
        },
        {
          title: "4. Descargo de responsabilidad",
          body: "Teseract no es un asesor financiero autorizado. Los insights son informativos y no constituyen asesoría financiera.",
        },
        {
          title: "5. Responsabilidad",
          body: "Teseract se ofrece “tal cual”. No somos responsables por pérdidas derivadas del uso del servicio, en la medida máxima permitida por la ley.",
        },
        {
          title: "6. Terminación",
          body: "Podemos suspender o terminar cuentas por mal uso o razones legales. Puedes dejar de usar el servicio en cualquier momento.",
        },
        {
          title: "7. Contacto",
          body: "¿Preguntas? support@teseract.com.",
        },
      ],
    },
    security: {
      badge: "Seguridad",
      title: "Seguridad en Teseract",
      lead: "Protegemos tus datos con mejores prácticas de la industria para que te concentres en tus finanzas.",
      updatedLabel: "Última actualización:",
      contact: "¿Reportes o dudas de seguridad? security@teseract.com.",
      sections: [
        {
          title: "Protección de datos",
          items: [
            "Cifrado en tránsito (HTTPS) para todo el tráfico.",
            "Recolección mínima: email y metadatos necesarios.",
          ],
        },
        {
          title: "Acceso y control",
          items: [
            "Acceso interno con roles.",
            "Eliminación de datos a solicitud; cancela suscripción cuando quieras.",
          ],
        },
        {
          title: "Proveedores",
          body: "Trabajamos con proveedores de confianza (p. ej., envío de email) bajo acuerdos de protección de datos. No vendemos tu información.",
        },
        {
          title: "Contacto",
          body: "¿Reportes o dudas de seguridad? security@teseract.com.",
        },
      ],
    },
  },
};
