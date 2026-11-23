// Catálogo de paquetes recreativos y servicios teatrales con valores de referencia en pesos colombianos (COP)

export const PACKAGES = [
  {
    id: "plan-basico",
    title: "Plan Lúdico & Pintucaritas (Chiqui Fiesta)",
    subtitle: "Ideal para celebraciones en casa o salón comunal para los más pequeños",
    badge: "FAMILIAR",
    priceEstimate: 290000,
    priceFormatted: "$290.000 COP",
    duration: "2 Horas de recreación continua",
    recommendedCapacity: "Hasta 15-20 niños",
    color: "from-purple-600 to-indigo-600",
    features: [
      "2 Recreadores profesionales uniformados de Imagin-ART con ARL",
      "Pintucaritas artístico hipoalergénico con glitter y escarcha",
      "Globoflexia ilimitada (espadas, coronas, perritos, flores)",
      "Juegos cooperativos, dinámicas rompehielos y concursos divertidos",
      "Acompañamiento en piñata, canto de cumpleaños y reparto de ponqué",
      "Cabina de sonido portátil para música infantil y animación"
    ]
  },
  {
    id: "plan-intermedio",
    title: "Plan Mágico Teatral & Títeres",
    subtitle: "Nuestro paquete estrella. Diversión completa con show escénico de títeres o magia cómica",
    badge: "MÁS POPULAR",
    priceEstimate: 420000,
    priceFormatted: "$420.000 COP",
    duration: "3 Horas de espectáculo y juegos",
    recommendedCapacity: "Hasta 30 niños",
    color: "from-theater to-amber-500",
    features: [
      "2 Recreadores / Actores caracterizados + Coordinador",
      "Show de Magia Cómica interactiva o Show de Títeres con canciones",
      "Pintucaritas artístico temático profesional de alta definición",
      "Globoflexia para todos los niños y juegos con paracaídas gigante",
      "Cabina de sonido profesional amplificada con micrófono inalámbrico",
      "Minifarra / Carnavalito con dinámicas de baile y hora loca",
      "Acompañamiento integral en piñata, ponqué y fotos familiares"
    ]
  },
  {
    id: "plan-premium",
    title: "Mega Show Burbujas Gigantes & Circo",
    subtitle: "El gran espectáculo: 'La Fábrica de las Burbujas', encapsulador de niños y circo",
    badge: "EXPERIENCIA TOTAL",
    priceEstimate: 680000,
    priceFormatted: "$680.000 COP",
    duration: "3.5 Horas de show inolvidable",
    recommendedCapacity: "Hasta 45 niños y familias",
    color: "from-theater via-fuchsia-600 to-sky-500",
    features: [
      "Show Estrella 'La Fábrica de las Burbujas' con humo blanco y fuego seguro",
      "¡El Gran Encapsulador! Cada niño dentro de una burbuja de jabón gigante",
      "Taller y show cómico de circo (malabares, platos chinos, acrobacias)",
      "2 Actores teatrales + Staff de apoyo logístico con ARL",
      "Pintucaritas artístico premium al agua + Globoflexia ilimitada",
      "Sonido envolvente, música temática y animación de protocolo",
      "Tapete antideslizante y fórmula hipoalergénica para máxima seguridad"
    ]
  },
  {
    id: "mega-miniteca",
    title: "Mega Miniteca Neón & Glow Party",
    subtitle: "Rumba sana, luces robóticas y maquillaje neón para niños grandes (7 a 15 años)",
    badge: "TENDENCIA GLOW",
    priceEstimate: 590000,
    priceFormatted: "$590.000 COP",
    duration: "4 Horas de música y baile",
    recommendedCapacity: "Hasta 40 invitados",
    color: "from-fuchsia-600 to-purple-800",
    features: [
      "DJ Animador en vivo + Recreador animador de pista",
      "Estructura de luces LED, cabezas robóticas, luces láser y reflectores UV Neón",
      "Estación de maquillaje neón con pintura corporal glow fluorescente",
      "Máquina de humo controlada y accesorios de hora loca neón",
      "Coreografías dirigidas, batallas de baile TikTok y dinámicas integradoras"
    ]
  },
  {
    id: "corporativo-integracion",
    title: "Eventos para Conjuntos Residenciales & Empresas",
    subtitle: "Día del Niño, Halloween, Novenas navideñas, vacaciones y Family Days",
    badge: "B2B INSTITUCIONAL",
    priceEstimate: 1200000,
    priceFormatted: "Desde $1.200.000 COP",
    duration: "Media jornada o Jornada completa",
    recommendedCapacity: "50 a 600+ personas",
    color: "from-indigo-700 to-purple-900",
    features: [
      "Montaje de obras teatrales masivas y estaciones de feria kermesse",
      "Coordinador general + Staff completo de recreadores con planilla PILA y ARL",
      "Inflables gigantes con certificación técnica y operadores",
      "Sonido lineal para espacios abiertos, auditorios o polideportivos",
      "RUT vigente, Cámara de Comercio y Facturación Electrónica DIAN"
    ]
  }
];

export const ADDONS = [
  { 
    id: "fabrica-burbujas", 
    name: "La Fábrica de Burbujas Gigantes + Encapsulador", 
    price: 150000, 
    priceFormatted: "$150.000 COP",
    desc: "Burbujas gigantes, humo blanco, fuego seguro y niño dentro de la burbuja"
  },
  { 
    id: "show-titeres", 
    name: "Show de Títeres de Gran Formato con Canciones", 
    price: 120000, 
    priceFormatted: "$120.000 COP",
    desc: "Retablo artesanal, historias pedagógicas y canciones en vivo"
  },
  { 
    id: "show-magia", 
    name: "Show de Magia Cómica e Ilusiones Interactivas", 
    price: 110000, 
    priceFormatted: "$110.000 COP",
    desc: "35 minutos de comedia mágica que hace reír a niños y adultos"
  },
  { 
    id: "inflable-saltarin", 
    name: "Alquiler de Inflable Saltarín con Operador Certificado", 
    price: 220000, 
    priceFormatted: "$220.000 COP",
    desc: "Castillo o tobogán inflable temático por 4 horas con control de aforo"
  },
  { 
    id: "estacion-crispetas", 
    name: "Estación Vintage de Crispetas Recién Hechas (2 hrs)", 
    price: 150000, 
    priceFormatted: "$150.000 COP",
    desc: "Crispetera clásica con crispetas dulces o saladas ilimitadas"
  },
  { 
    id: "estacion-algodon", 
    name: "Estación de Algodón de Azúcar de Colores (2 hrs)", 
    price: 160000, 
    priceFormatted: "$160.000 COP",
    desc: "Algodón dulce preparado en vivo frente a los invitados"
  },
  { 
    id: "luces-humo", 
    name: "Montaje de Luces Robóticas, Láser y Máquina de Humo", 
    price: 140000, 
    priceFormatted: "$140.000 COP",
    desc: "Iluminación festiva profesional y efectos para salón o casa"
  }
];

export const BOGOTA_ZONES = [
  "Usaquén / Cedritos / Santa Bárbara",
  "Suba / Colina Campestre / Pontevedra",
  "Salitre / Teusaquillo / Quinta Paredes",
  "Chapinero / Chicó / Rosales",
  "Engativá / Álamos / Villas de Granada",
  "Fontibón / Hayuelos / Modelia",
  "Kennedy / Castilla / Américas",
  "Bosa / Tunjuelito / Antonio Nariño",
  "Chía / Cajicá / Cota",
  "Soacha / Madrid / Mosquera / Funza",
  "Otra zona de Bogotá o Sabana"
];

export const EVENT_TYPES = [
  "Cumpleaños Infantil (1 a 12 años)",
  "Primera Comunión o Bautizo",
  "Miniteca Neón / Fiesta Pre-Adolescente",
  "Día del Niño / Conjunto Residencial",
  "Halloween Infantil / Conjunto o Colegio",
  "Novenas Navideñas / Pesebre en Vivo",
  "Evento Corporativo / Family Day Empresa",
  "Clausura Escolar / Jardín Infantil",
  "Otro Tipo de Evento"
];
