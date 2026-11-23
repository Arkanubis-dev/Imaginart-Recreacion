// Contenido legal completo adaptado a la legislación de la República de Colombia
// - Ley Estatutaria 1581 de 2012 (Protección de Datos Personales / Habeas Data)
// - Decreto 1377 de 2013 (Reglamentario de Habeas Data)
// - Ley 1480 de 2011 (Estatuto del Consumidor - Derecho de Retracto, Cancelaciones, Reservas)
// - Decreto 587 de 2016 (Reversión de pagos electrónicos)

export const LEGAL_INFO = {
  companyName: "Imagin-ART-recreación S.A.S.",
  commercialName: "Imagin-ART-recreación",
  nit: "901.845.321-4",
  address: "Carrera 15 # 85-30, Oficina 402, Bogotá D.C., Colombia",
  city: "Bogotá D.C. (Cobertura en todas las localidades de Bogotá, Chía, Cajicá, Cota, Soacha y Sabana)",
  emailPQRS: "pqrs@imaginartrecreacion.com",
  emailGeneral: "contacto@imaginartrecreacion.com",
  phone: "+57 (601) 745-8920",
  whatsapp: "+57 300 125 0524",
  superintendenciaWeb: "https://www.sic.gov.co",
  lastUpdated: "Noviembre de 2026",
};

export const PRIVACY_POLICY = {
  title: "Política de Tratamiento y Protección de Datos Personales (Habeas Data)",
  subtitle: "En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia",
  sections: [
    {
      id: "responsable",
      title: "1. Identificación del Responsable del Tratamiento",
      content: `El responsable del tratamiento de sus datos personales es ${LEGAL_INFO.companyName} (${LEGAL_INFO.commercialName}), con NIT ${LEGAL_INFO.nit}, domicilio principal en la ciudad de ${LEGAL_INFO.city}, con correo electrónico de atención ${LEGAL_INFO.emailPQRS} y teléfono/WhatsApp ${LEGAL_INFO.whatsapp}. La presente política rige la recolección, almacenamiento, uso y circulación de datos recopilados a través de nuestro sitio web, cotizadores en línea, canales de WhatsApp y contratos de prestación de servicios recreativos y artísticos.`
    },
    {
      id: "finalidad",
      title: "2. Finalidades de la Recolección de Datos",
      content: `Los datos personales suministrados voluntariamente por el usuario (nombre, teléfono, correo electrónico, fecha y lugar del evento, edad del homenajeado y preferencias de servicios) serán tratados para las siguientes finalidades:
- Elaborar, remitir y dar seguimiento a cotizaciones comerciales solicitadas por el titular.
- Gestionar reservas, formalización contractual y coordinación logística del evento recreativo y artístico.
- Facturación electrónica y cobro de servicios contratados.
- Contactar al cliente mediante WhatsApp, llamada telefónica o correo electrónico antes, durante y después del evento para coordinar detalles técnicos (espacio para inflables, acceso al lugar, sonido, cronograma de actividades lúdicas).
- Evaluar la calidad del servicio prestado mediante encuestas de satisfacción.
- Enviar información sobre promociones, temporadas vacacionales o nuevos shows recreativos, siempre que el usuario haya otorgado su autorización previa, expresa e informada.`
    },
    {
      id: "menores",
      title: "3. Tratamiento Especial de Datos de Niños, Niñas y Adolescentes (NNA)",
      content: `Teniendo en cuenta que nuestra actividad principal involucra la recreación y el arte en eventos infantiles, ${LEGAL_INFO.commercialName} manifiesta su irrestricto compromiso con el interés superior y los derechos prevalentes de los menores de edad (Art. 7 Ley 1581 de 2012 y Art. 12 Decreto 1377 de 2013):
- La información sobre edades de los menores homenajeados o asistentes a las actividades se solicita exclusivamente para calibrar la seguridad de las dinámicas, la dificultad de los talleres de arte y la capacidad de los inflables.
- Dicha información SIEMPRE debe ser provista y autorizada por sus padres, tutores o representantes legales.
- No publicamos fotografías ni videos de menores de edad en redes sociales o material comercial sin la autorización previa, expresa y por escrito de sus progenitores.`
    },
    {
      id: "derechos",
      title: "4. Derechos de los Titulares (Derechos Habeas Data)",
      content: `De conformidad con el artículo 8 de la Ley 1581 de 2012, el titular de los datos personales tiene derecho a:
a) Conocer, actualizar y rectificar sus datos personales frente a los responsables o encargados del tratamiento.
b) Solicitar prueba de la autorización otorgada.
c) Ser informado por el responsable, previa solicitud, respecto del uso que se le ha dado a sus datos.
d) Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la ley.
e) Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.
f) Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.`
    },
    {
      id: "canales",
      title: "5. Canales para Ejercer los Derechos (Consultas y Reclamos PQRS)",
      content: `Para ejercer sus derechos de conocimiento, actualización, rectificación o supresión de datos, el titular puede enviar una comunicación formal al correo ${LEGAL_INFO.emailPQRS} indicando su nombre completo, número de documento de identidad y la solicitud concreta.
Tiempos de respuesta legales:
- Consultas: Máximo diez (10) días hábiles contados a partir de la fecha de recibo.
- Reclamos: Máximo quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo.`
    },
    {
      id: "seguridad",
      title: "6. Medidas de Seguridad y Vigencia de la Base de Datos",
      content: `Adoptamos medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado. Los datos personales permanecerán en nuestras bases de datos únicamente durante el tiempo necesario para cumplir las finalidades descritas o el exigido por normas tributarias y comerciales colombianas.`
    }
  ]
};

export const TERMS_AND_CONDITIONS = {
  title: "Términos y Condiciones del Servicio",
  subtitle: "Conforme a la Ley 1480 de 2011 (Estatuto del Consumidor de Colombia)",
  sections: [
    {
      id: "reservas",
      title: "1. Proceso de Cotización, Reservas y Medios de Pago",
      content: `La confirmación y separación de una fecha para servicios recreativos, talleres artísticos, alquiler de inflables o minitecas requiere:
- Anticipo de Reserva: Pago del 50% del valor total de la cotización para apartar en firme la fecha, el horario y el personal asignado. El saldo restante (50%) debe cancelarse el día del evento, antes del inicio del montaje o de la presentación de los recreadores.
- Medios de pago autorizados: Transferencia bancaria (Bancolombia, Davivienda), plataformas digitales (Nequi, Daviplata), pagos en línea mediante PSE / Tarjeta de Crédito, o pago en efectivo contraentrega previa concertación.
- La simple cotización en línea o por WhatsApp no garantiza la reserva de la fecha hasta tanto no se verifique el pago del anticipo correspondiente.`
    },
    {
      id: "retracto",
      title: "2. Derecho de Retracto (Artículo 47 - Ley 1480 de 2011)",
      content: `En concordancia con el Artículo 47 de la Ley 1480 de 2011 (Estatuto del Consumidor colombiano), para contrataciones o compras realizadas mediante canales virtuales, comercio electrónico, página web o ventas a distancia:
- El consumidor cuenta con un término máximo de cinco (5) días hábiles contados a partir de la celebración del contrato o del pago del anticipo para ejercer su derecho de retracto.
- Condición legal: El retracto es procedente siempre y cuando la prestación del servicio recreativo no haya comenzado a ejecutarse con el consentimiento del cliente antes de vencerse dicho término.
- Reembolso: ${LEGAL_INFO.commercialName} reintegrará el 100% del dinero pagado por el cliente, sin retenciones ni descuentos por conceptos administrativos, en un plazo máximo de treinta (30) días calendario contados a partir del momento en que el cliente ejerció su derecho a través del correo ${LEGAL_INFO.emailPQRS}.`
    },
    {
      id: "reversion",
      title: "3. Reversión del Pago (Decreto 587 de 2016)",
      content: `Cuando las ventas de servicios se realicen mediante mecanismos de comercio electrónico y se haya utilizado para realizar el pago una tarjeta de crédito, débito o cualquier otro instrumento de pago electrónico, el cliente podrá solicitar la reversión de los pagos en los siguientes casos:
1. Cuando haya sido objeto de fraude.
2. Cuando corresponda a una operación no solicitada.
3. Cuando el servicio contratado no sea prestado en la fecha y condiciones acordadas.
La queja deberá presentarse dentro de los cinco (5) días hábiles siguientes a la fecha en que el consumidor tuvo noticia de la anomalía.`
    },
    {
      id: "cancelaciones",
      title: "4. Cancelaciones, Modificaciones y Reprogramaciones de Fecha",
      content: `Dado que nuestro modelo de negocio requiere la reserva exclusiva de recreadores profesionales, animadores artísticos y equipos técnicos (los cuales se reservan con antelación y no pueden ser asignados a otros clientes para la misma franja horaria):
- Cancelación con más de 15 días calendario de anticipación: El cliente podrá reprogramar su evento sin penalidad dentro de los siguientes 6 meses calendario (sujeto a disponibilidad de agenda), o solicitar reembolso del anticipo con deducción del 10% por gastos bancarios y operativos.
- Modificación de fecha entre 8 y 14 días calendario antes del evento: Se autoriza un (1) cambio de fecha sin costo administrativo, sujeto a disponibilidad en el cronograma.
- Cancelaciones con menos de 72 horas antes del evento: El anticipo no será reembolsable, toda vez que constituye la indemnización legal por el bloqueo de agenda del personal artístico y técnico que ya fue convocado y remunerado para la fecha.`
    },
    {
      id: "clima",
      title: "5. Condiciones Climáticas y Fuerza Mayor",
      content: `En casos de fuerza mayor o eventos de la naturaleza (lluvias torrenciales, emergencias climáticas o decretos gubernamentales de orden público):
- Para actividades al aire libre: El contratante debe prever una zona cubierta alterna (kiosco, salón comunal, carpa impermeable). Los recreadores adaptarán de inmediato las dinámicas y talleres de arte al nuevo espacio.
- Por seguridad eléctrica y física, los juegos inflables y equipos de sonido no pueden operarse bajo la lluvia directa.
- Si no existe espacio alterno y el evento no puede desarrollarse por motivos climáticos comprobables, se acordará una nueva fecha de realización dentro de los siguientes noventa (90) días calendario sin cobros adicionales.`
    },
    {
      id: "seguridad",
      title: "6. Normas de Seguridad en Juegos Inflables y Eventos",
      content: `La seguridad de los asistentes y especialmente de los niños es nuestra máxima prioridad:
- Espacio y electricidad: El contratante debe garantizar un punto de conexión eléctrica a 110V a no más de 20 metros del inflable y un terreno plano, limpio y libre de objetos cortopunzantes.
- Uso del inflable: Prohibido ingresar con zapatos, alimentos, dulces, bebidas, gafas o juguetes punzantes. Se respetará estrictamente el aforo máximo indicado por el operador técnico.
- Supervisión: Nuestros recreadores lideran las actividades lúdicas, pero los padres o adultos acudientes deben permanecer en las inmediaciones del evento y son corresponsables de la supervisión general de los menores.`
    },
    {
      id: "sic",
      title: "7. Autoridad de Protección al Consumidor (SIC)",
      content: `En caso de cualquier inconformidad no resuelta a través de nuestros canales directos de atención, el consumidor puede acudir ante la Superintendencia de Industria y Comercio de Colombia (SIC), entidad encargada de velar por el cumplimiento del Estatuto del Consumidor (www.sic.gov.co).`
    }
  ]
};
