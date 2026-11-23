import './globals.css';

export const metadata = {
  title: 'Imagin-ART | Recreación Creativa y Shows Infantiles en Bogotá',
  description: 'Agencia de eventos infantiles, shows teatrales, fábrica de burbujas gigantes y recreación para fiestas, conjuntos residenciales y empresas en Bogotá y la Sabana. Personal con ARL y factura electrónica. WhatsApp: 300 125 0524.',
  keywords: 'Imagin-ART recreacion, recreacion infantil bogota, shows infantiles bogota, fabrica de burbujas bogota, eventos para conjuntos residenciales bogota, fiestas infantiles picardias estilo',
  authors: [{ name: 'Imagin-ART-recreación S.A.S.' }],
  openGraph: {
    title: 'Imagin-ART | Experiencias Mágicas para Fiestas Infantiles en Bogotá',
    description: '+7 años creando magia y recuerdos inolvidables con obras teatrales, burbujas y dinamismo profesional.',
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
  'alternateName': 'Imagin-ART Eventos Infantiles',
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
      <body className="antialiased bg-[#FDFBF7] text-[#555560] min-h-screen selection:bg-[#E8DFF5] selection:text-[#242429]">
        {children}
      </body>
    </html>
  );
}
