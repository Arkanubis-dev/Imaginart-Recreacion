// Catálogo de paquetes recreativos y servicios con valores de referencia en pesos colombianos (COP)

export const PACKAGES = [
  {
    id: "infantil-magico",
    title: "Fiesta Mágica Infantil",
    subtitle: "El paquete favorito para cumpleaños de 4 a 12 años",
    badge: "MÁS POPULAR",
    priceEstimate: 380000,
    priceFormatted: "$380.000 COP",
    duration: "3 Horas de Actividades",
    recommendedCapacity: "Hasta 25 niños",
    color: "from-amber-500 to-orange-500",
    features: [
      "2 Recreadores profesionales uniformados y capacitados",
      "Pintucaritas artístico profesional (maquillaje hipoalergénico)",
      "Globoflexia ilimitada (espadas, flores, coronas, perritos)",
      "Juegos dinámicos, rompehielos y concursos por equipos",
      "Show cómico interactivo y magia divertida",
      "Acompañamiento en piñata, canto de cumpleaños y reparto de ponqué",
      "Cabina de sonido amplificada y micrófono inalámbrico"
    ]
  },
  {
    id: "mega-miniteca",
    title: "Mega Miniteca Neón & Glow",
    subtitle: "Para fiestas llenas de energía, luces y ritmo (7 a 16 años)",
    badge: "TENDENCIA GLOW",
    priceEstimate: 590000,
    priceFormatted: "$590.000 COP",
    duration: "4 Horas de Rumba Sana",
    recommendedCapacity: "Hasta 40 invitados",
    color: "from-purple-600 to-pink-500",
    features: [
      "DJ Animador + Recreador animador de pista",
      "Sonido profesional de alta fidelidad para salón o casa",
      "Estructura con luces LED, luces láser y cabezas móviles",
      "Lámparas UV Neón (luz negra para efecto fluorescente)",
      "Estación de maquillaje neón (pintura glow brilla en la oscuridad)",
      "Máquina de humo controlada y accesorios de hora loca",
      "Coreografías dirigidas, batallas de baile y dinámicas de grupo"
    ]
  },
  {
    id: "feria-inflable",
    title: "Feria de Diversión & Inflable",
    subtitle: "Saltarines temáticos y estaciones de feria kermesse",
    badge: "DIVERSIÓN TOTAL",
    priceEstimate: 720000,
    priceFormatted: "$720.000 COP",
    duration: "4 Horas de Servicio",
    recommendedCapacity: "Hasta 50 participantes",
    color: "from-blue-600 to-cyan-500",
    features: [
      "1 Inflable temático gigante (Castillo, Tobogán o Pista de obstáculos)",
      "Operador técnico de seguridad para control de aforo y turnos",
      "2 Recreacionistas coordinadores de actividades",
      "3 Estaciones de feria (Tiro al blanco, Jenga gigante, Encostalados)",
      "Música ambiental y sonido durante toda la jornada",
      "Premios y reconocimientos simbólicos para los juegos",
      "Certificación técnica del inflable y anclajes de seguridad"
    ]
  },
  {
    id: "baby-estimulacion",
    title: "Baby Party & Primeros Pasos",
    subtitle: "Especialmente diseñado para bebés de 1 a 3 años y bautizos",
    badge: "PRIMERA INFANCIA",
    priceEstimate: 450000,
    priceFormatted: "$450.000 COP",
    duration: "2.5 Horas",
    recommendedCapacity: "Hasta 15 pequeñitos",
    color: "from-teal-500 to-emerald-500",
    features: [
      "2 Especialistas en estimulación temprana y recreación maternal",
      "Piscina de pelotas acolchada y tapetes blandos de seguridad",
      "Show de títeres interactivo con canciones infantiles",
      "Juegos con paracaídas multicolor y burbujas sensoriales gigantes",
      "Pintucaritas suave o tatuajes temporales al agua",
      "Música instrumental y rondas adaptadas al ritmo de los bebés",
      "Ritmo tranquilo, seguro y sin ruidos estridentes"
    ]
  },
  {
    id: "corporativo-integracion",
    title: "Team Building & Días de Familia",
    subtitle: "Para empresas, colegios, conjuntos residenciales y eventos masivos",
    badge: "EMPRESARIAL",
    priceEstimate: 1200000,
    priceFormatted: "Desde $1.200.000 COP",
    duration: "Media jornada o Jornada completa",
    recommendedCapacity: "50 a 500+ personas",
    color: "from-indigo-600 to-violet-600",
    features: [
      "Coordinador general del evento + staff de recreacionistas",
      "Olimpiadas recreativas con estaciones de liderazgo y trabajo en equipo",
      "Pausas activas masivas y rumbaterapia integradora",
      "Sonido lineal profesional para espacios abiertos o salones magnos",
      "Animador profesional y maestro de ceremonias",
      "Logística integral de premiación y dinámicas corporativas",
      "Póliza de cumplimiento y facturación electrónica para empresas"
    ]
  }
];

export const ADDONS = [
  { id: "inflable-extra", name: "Inflable Saltarin Adicional", price: 220000, priceFormatted: "$220.000 COP" },
  { id: "crispetera", name: "Estación de Crispetas Ilimitadas (2 hrs)", price: 150000, priceFormatted: "$150.000 COP" },
  { id: "algodon", name: "Estación de Algodón de Azúcar (2 hrs)", price: 160000, priceFormatted: "$160.000 COP" },
  { id: "burbujas-gigantes", name: "Show de Burbujas Gigantes", price: 120000, priceFormatted: "$120.000 COP" },
  { id: "personaje-tematico", name: "Personaje Temático o Mascota en vivo", price: 140000, priceFormatted: "$140.000 COP" },
  { id: "espuma", name: "Máquina de Espuma para Rumba", price: 250000, priceFormatted: "$250.000 COP" },
  { id: "toro-mecanico", name: "Toro Mecánico con Operador", price: 450000, priceFormatted: "$450.000 COP" }
];

export const CITIES = [
  "Bogotá D.C. y municipios aledaños (Chía, Soacha, Cota, etc.)",
  "Medellín y Valle de Aburrá",
  "Cali y Jamundí",
  "Barranquilla y Soledad",
  "Bucaramanga y Floridablanca",
  "Eje Cafetero (Pereira, Armenia, Manizales)",
  "Cartagena",
  "Ibagué",
  "Villavicencio",
  "Otra ciudad / Cobertura nacional"
];

export const EVENT_TYPES = [
  "Cumpleaños Infantil",
  "Primer Añito / Baby Shower / Bautizo",
  "Miniteca / Fiesta Pre-Adolescente / 15 Años",
  "Día de la Familia / Conjunto Residencial",
  "Evento Corporativo / Fiesta de Fin de Año Empresa",
  "Graduación / Día del Niño Escolar",
  "Feria Recreativa o Bazar Comunitario",
  "Otro Tipo de Celebración"
];
