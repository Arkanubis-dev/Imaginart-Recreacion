import './globals.css';

export const metadata = {
  title: 'Imagin-ART-recreación | Recreación Infantil y Eventos en Bogotá y Sabana',
  description: 'Imagin-ART-recreación: Recreación infantil creativa, eventos para conjuntos residenciales y empresas en Bogotá, Chía, Cota y alrededores. Recreadores uniformados con ARL, inflables certificados, minitecas neón y pintucaritas artístico. WhatsApp: 300 125 0524.',
  keywords: 'Imagin-ART recreacion, recreacion infantil bogota, recreacionistas para fiestas bogota, eventos para conjuntos residenciales bogota, minitecas bogota, inflables bogota',
  authors: [{ name: 'Imagin-ART-recreación S.A.S.' }],
  openGraph: {
    title: 'Imagin-ART-recreación | Eventos y Diversión en Bogotá',
    description: '+7 años de experiencia, recreadores con ARL, puntualidad y diversión garantizada. WhatsApp: 300 125 0524.',
    locale: 'es_CO',
    type: 'website',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD Local SEO Schema para Google (LocalBusiness)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EntertainmentBusiness',
  'name': 'Imagin-ART-recreación S.A.S.',
  'alternateName': 'Imagin-ART-recreación',
  'telephone': '+573001250524',
  'email': 'contacto@imaginartrecreacion.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Carrera 15 # 85-30',
    'addressLocality': 'Bogotá',
    'addressRegion': 'Cundinamarca',
    'postalCode': '110221',
    'addressCountry': 'CO'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 4.6675,
    'longitude': -74.0560
  },
  'areaServed': [
    'Bogotá',
    'Chía',
    'Cajicá',
    'Cota',
    'Soacha',
    'La Calera'
  ],
  'priceRange': '$$'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#FAFBFD] text-slate-800 min-h-screen selection:bg-indigo-500 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
