

export const categories = [
  { id: 'all', title: 'All Products', titleEs: 'Todos los Productos' },
  { id: 'jumpers', title: 'Jumpers', titleEs: 'Inflables' },
  { id: 'tents', title: 'Tents', titleEs: 'Carpas' },
  { id: 'tables-chairs', title: 'Tables & Chairs', titleEs: 'Mesas y Sillas' },
  { id: 'decorations', title: 'Decorations', titleEs: 'Decoraciones' },
  { id: 'photobooth', title: 'Digital Photo Booth', titleEs: 'Cabina de Fotos Digital' }
];

export const products = [
  // --- TENTS ---
  {
    id: 'tent-20x20',
    name: '20x20 Tent',
    nameEs: 'Carpa 20x20',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'Spacious 20x20 tent perfect for medium-sized gatherings and backyard events.',
    shortDescEs: 'Espaciosa carpa de 20x20 perfecta para reuniones medianas y eventos de patio trasero.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 20x20 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 20x20.',
    specs: [
      'Dimensions: 20ft x 20ft',
      'Fits approx. 40-50 guests sitting',
      'Add comments or specifics here'
    ],
    specsEs: [
      'Dimensiones: 20 pies x 20 pies',
      'Capacidad aproximada de 40-50 personas sentadas',
      'Agregue comentarios o detalles específicos aquí'
    ],
    images: [
      '../images/tent7.jpeg',
    ]
  },
  {
    id: 'tent-26x16',
    name: '26x26 Tent',
    nameEs: 'Carpa 26x26',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'A larger square canopy tent ideal for weddings, anniversaries, and parties.',
    shortDescEs: 'Una carpa cuadrada más grande ideal para bodas, aniversarios y fiestas.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 26x26 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 26x26.',
    specs: [
      'Dimensions: 26ft x 26ft',
      'Fits approx. 60-70 guests sitting',
      'Add comments or specifics here'
    ],
    specsEs: [
      'Dimensiones: 26 pies x 26 pies',
      'Capacidad aproximada de 60-70 personas sentadas',
      'Agregue comentarios o detalles específicos aquí'
    ],
    images: [
      '../images/tent4.jpeg',
    ]
  },
  {
    id: 'tent-32x16',
    name: '32x16 Tent',
    nameEs: 'Carpa 32x16',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'Rectangular style tent offering great coverage and layout configurations.',
    shortDescEs: 'Carpa rectangular que ofrece gran cobertura y configuraciones de diseño.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 32x16 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 32x16.',
    specs: [
      'Dimensions: 32ft x 16ft',
      'Great for banquet tables configuration',
      'Fits approx. 50 guests sitting'
    ],
    specsEs: [
      'Dimensiones: 32 pies x 16 pies',
      'Ideal para configuración de mesas de banquete',
      'Capacidad aproximada de 50 personas sentadas'
    ],
    images: [
      '../images/tent2.jpeg',
      '../images/tent8.jpeg',
    ]
  },
  {
    id: 'tent-26x20',
    name: '26x20 Tent',
    nameEs: 'Carpa 26x20',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'Versatile rectangular canopy tent designed for medium residential yards.',
    shortDescEs: 'Versátil carpa rectangular diseñada para patios residenciales medianos.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 26x20 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 26x20.',
    specs: [
      'Dimensions: 26ft x 20ft',
      'Comfortably shades up to 50 guests',
      'Optional side walls available'
    ],
    specsEs: [
      'Dimensiones: 26 pies x 20 pies',
      'Sombra cómoda para hasta 50 personas',
      'Paredes laterales opcionales disponibles'
    ],
    images: [
      '../images/tent5.jpeg',
    ]
  },
  {
    id: 'tent-40x20',
    name: '40x20 Tent',
    nameEs: 'Carpa 40x20',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with your price in productsData.js',
    priceLabelEs: 'Reemplace con su precio en productsData.js',
    shortDesc: 'Our largest tent available. Perfect for grand parties, corporate events, and larger spaces.',
    shortDescEs: 'Nuestra carpa más grande disponible. Perfecta para grandes fiestas, eventos corporativos y espacios amplios.',
    detailedDesc: 'This is a detailed description placeholder. Replace this text in productsData.js with information about your 40x20 tent.',
    detailedDescEs: 'Este es un marcador de descripción detallada. Reemplace este texto en productsData.js con información sobre su carpa de 40x20.',
    specs: [
      'Dimensions: 40ft x 20ft',
      'Fits approx. 80-100 guests sitting',
      'Heavy-duty commercial grade material'
    ],
    specsEs: [
      'Dimensiones: 40 pies x 20 pies',
      'Capacidad aproximada de 80-100 personas sentadas',
      'Material de grado comercial de alta resistencia'
    ],
    images: [
      '../images/tent10.jpeg',
      '../images/tent3.jpeg',

    ]
  },
  {
    id: 'tent-string-lights',
    name: 'String Lights (Additional Optional)',
    nameEs: 'Luces de Cadena (Adicional Opcional)',
    category: 'tents',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with light rental fee in productsData.js',
    priceLabelEs: 'Reemplace con tarifa en productsData.js',
    shortDesc: 'Warm, decorative bistro lighting to illuminate tents for evening events.',
    shortDescEs: 'Iluminación decorativa cálida tipo bistró para iluminar carpas en eventos nocturnos.',
    detailedDesc: 'Add high-quality bistro string lighting to any of our tent rentals. Creates a cozy, elegant atmosphere for night-time celebrations.',
    detailedDescEs: 'Agregue luces bistro de alta calidad a cualquiera de nuestros alquileres de carpas. Crea un ambiente acogedor y elegante para celebraciones nocturnas.',
    specs: [
      'Commercial-grade outdoor bulbs',
      'Professionally hung and secured under tents',
      'Pricing varies by tent size'
    ],
    specsEs: [
      'Bombillas de exterior de grado comercial',
      'Colgadas y aseguradas profesionalmente bajo las carpas',
      'El precio varía según el tamaño de la carpa'
    ],
    images: [
      '../images/tent6.jpeg',
    ]
  },

  // --- DECORATIONS ---
  {
    id: 'decor-seat-covers',
    name: 'Seat Covers',
    nameEs: 'Fundas para Sillas',
    category: 'decorations',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with price per cover in productsData.js',
    priceLabelEs: 'Reemplace con precio por funda en productsData.js',
    shortDesc: 'Elegant chair covers available in various colors to elevate your seating appearance.',
    shortDescEs: 'Elegantes fundas para sillas disponibles en varios colores para mejorar el aspecto de sus asientos.',
    detailedDesc: 'Provide a premium look to standard chairs. Perfect for formal dinners, weddings, and special events. Easy to slide on and fits most standard chairs.',
    detailedDescEs: 'Brinde un aspecto premium a las sillas estándar. Perfecto para cenas formales, bodas y eventos especiales. Fácil de colocar y se adapta a la mayoría de las sillas estándar.',
    specs: [
      'Available in white, black, and custom colors',
      'Stretched spandex or polyester material',
      'Includes options for colored sashes/ribbons'
    ],
    specsEs: [
      'Disponible en blanco, negro y colores personalizados',
      'Material de poliéster o elastano elástico',
      'Incluye opciones para lazos/cintas de colores'
    ],
    images: [
      '../images/decorations9.jpeg',
      '../images/decorations12.jpeg',
      '../images/decorations20.jpeg',
      '../images/decorations21.jpeg',
      '../images/decorations22.jpeg',
    ]
  },
  {
    id: 'decor-rect-tablecovers',
    name: 'Rectangular Table Covers',
    nameEs: 'Manteles Rectangulares',
    category: 'decorations',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with price per tablecloth in productsData.js',
    priceLabelEs: 'Reemplace con precio por mantel en productsData.js',
    shortDesc: 'Durable, clean table covers designed specifically for 6ft and 8ft rectangle tables.',
    shortDescEs: 'Manteles duraderos y limpios diseñados específicamente para mesas rectangulares de 6 y 8 pies.',
    detailedDesc: 'High-quality table covers that cover all sides of your rectangular tables for a clean, formal presentation.',
    detailedDescEs: 'Manteles de alta calidad que cubren todos los lados de sus mesas rectangulares para una presentación limpia y formal.',
    specs: [
      'Sized for 6ft & 8ft rectangular tables',
      'Available in black, white, and a range of colors',
      'Spandex snug-fit or elegant drop-skirt styles'
    ],
    specsEs: [
      'Tamaño para mesas rectangulares de 6 y 8 pies',
      'Disponible en negro, blanco y variedad de colores',
      'Ajuste ceñido de spandex o estilos de falda elegante'
    ],
    images: [
      '../images/decorations2.jpeg',
      '../images/decorations3.jpeg',
      '../images/decorations20.jpeg',
    ]
  },
  {
    id: 'decor-round-tablecovers',
    name: 'Round Table Covers',
    nameEs: 'Manteles Redondos',
    category: 'decorations',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with round tablecloth price in productsData.js',
    priceLabelEs: 'Reemplace con precio por mantel en productsData.js',
    shortDesc: 'Floor-length circular table covers to give round tables a sleek, sophisticated style.',
    shortDescEs: 'Manteles circulares hasta el suelo para dar a las mesas redondas un estilo elegante y sofisticado.',
    detailedDesc: 'Elegant draping covers designed for round tables. Wrinkle-resistant and premium look for banquets, dinners, and events.',
    detailedDescEs: 'Elegantes cubiertas con caída diseñadas para mesas redondas. Resistentes a las arrugas y de aspecto premium para banquetes, cenas y eventos.',
    specs: [
      'Sized for 60-inch / 72-inch round tables',
      'Floor-length drape',
      'Various colors available upon request'
    ],
    specsEs: [
      'Tamaño para mesas redondas de 60 pulgadas / 72 pulgadas',
      'Caída hasta el suelo',
      'Varios colores disponibles a pedido'
    ],
    images: [
      '../images/decorations14.jpeg',
      '../images/decorations23.jpeg',
      '../images/decorations25.jpeg',
      '../images/decorations31.jpeg',
    ]
  },

  // --- Backdrops ---
  {
    id: 'back-drop',
    name: 'Backdrop',
    nameEs: 'Fondo',
    category: 'decorations',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with backdrop price in productsData.js',
    priceLabelEs: 'Reemplace con precio de fondo en productsData.js',
    shortDesc: 'Add the perfect backdrop to your party!',
    shortDescEs: '¡Añada el telón de fondo perfecto a su fiesta!',
    detailedDesc: 'Backdrops help complete the atmosphere of any event. Choose from a variety of designs and styles to perfectly match your party theme. Easy to set up and adds a professional touch to your photos and decorations.',
    detailedDescEs: 'Los fondos ayudan a completar la atmósfera de cualquier evento. Elija entre una variedad de diseños y estilos para que coincida perfectamente con el tema de su fiesta. Fácil de instalar y agrega un toque profesional a sus fotos y decoraciones.',
    specs: [
      'Backdrop size: 8ft x 8ft (can vary depending on design)',
      'Easy to transport and assemble',
      'Available in a variety of colors and designs'
    ],
    specsEs: [
      'Luz de anillo con brillo y temperatura ajustables',
      'Compartido digital instantáneo (requiere Wi-Fi)',
      'Plantillas personalizadas para superposiciones y marcos'
    ],
    images: [
      '../images/decorations28.jpeg',
      '../images/decorations8.jpeg',
      '../images/decorations11.jpeg',
      '../images/decorations15.jpeg',
      '../images/decorations27.jpeg',
      '../images/decorations29.jpeg',
      '../images/decorations5.jpeg',
      '../images/decorations7.jpeg',
      '../images/decorations13.jpeg',
      '../images/decorations18.jpeg',
    ]
  },

  // --- CHAIRS AND TABLES ---
  {
    id: 'furniture-chairs',
    name: 'Standard Chairs',
    nameEs: 'Sillas Estándar',
    category: 'tables-chairs',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with standard chair price in productsData.js',
    priceLabelEs: 'Reemplace con precio por silla en productsData.js',
    shortDesc: 'Clean, reliable folding chairs for party seating.',
    shortDescEs: 'Sillas plegables limpias y confiables para asientos de fiesta.',
    detailedDesc: 'Standard commercial folding chairs. Easy to transport, clean, and setup. Perfect for extra seating at any size event.',
    detailedDescEs: 'Sillas plegables comerciales estándar. Fáciles de transportar, limpiar y armar. Perfectas para asientos adicionales en cualquier tipo de evento.',
    specs: [
      'Heavy-duty plastic seating with steel frame',
      'Lightweight and easily stackable',
      'Cleaned and sanitized before every rental'
    ],
    specsEs: [
      'Asiento de plástico resistente con estructura de acero',
      'Ligeras y fácilmente apilables',
      'Limpias y desinfectadas antes de cada alquiler'
    ],
    images: [
      '../images/chairs1.jpeg',
      '../images/chairs2.jpeg',
    ]
  },
  {
    id: 'furniture-rect-tables',
    name: 'Rectangular Tables',
    nameEs: 'Mesas Rectangulares',
    category: 'tables-chairs',
    price: '$XX.XX each',
    priceEs: '$XX.XX c/u',
    priceLabel: 'Replace with table price in productsData.js',
    priceLabelEs: 'Reemplace con precio por mesa en productsData.js',
    shortDesc: '6ft or 8ft rectangular banquet tables. Sturdy and easy to setup.',
    shortDescEs: 'Mesas de banquete rectangulares de 6 u 8 pies. Robustas y fáciles de armar.',
    detailedDesc: 'Sturdy rectangular folding tables. Fits 6 to 8 guests comfortably. Perfect for dining, food setups, gifts, or displays.',
    detailedDescEs: 'Mesas plegables rectangulares resistentes. Acomodan de 6 a 8 invitados cómodamente. Perfectas para cenas, mesas de comida, regalos o exhibiciones.',
    specs: [
      'Available in 6-foot and 8-foot lengths',
      'Heavy-duty plastic top with folding steel legs',
      'Easy to cover with rectangular table covers'
    ],
    specsEs: [
      'Disponibles en longitudes de 6 y 8 pies',
      'Tablero de plástico resistente con patas de acero plegables',
      'Fácil de cubrir con manteles rectangulares'
    ],
    images: [
      '../images/decorations21.jpeg',
      '../images/decorations2.jpeg',
      '../images/decorations3.jpeg',
      '../images/decorations9.jpeg',
      '../images/decorations20.jpeg',
    ]
  },
  {
    id: 'furniture-chiavari',
    name: 'Chiavari Chairs',
    nameEs: 'Sillas Chiavari',
    category: 'tables-chairs',
    price: '$X.XX each',
    priceEs: '$X.XX c/u',
    priceLabel: 'Replace with Chiavari chair price in productsData.js',
    priceLabelEs: 'Reemplace con precio por silla en productsData.js',
    shortDesc: 'Premium, elegant Chiavari chairs to add a touch of luxury to weddings and banquets.',
    shortDescEs: 'Sillas Chiavari premium y elegantes para agregar un toque de lujo a bodas y banquetes.',
    detailedDesc: 'Elegant Chiavari chairs that bring a high-end look to formal dining and celebrations. Popular for weddings, galas, and upscale events.',
    detailedDescEs: 'Elegantes sillas Chiavari que brindan un aspecto de alta gama a cenas y celebraciones formales. Populares para bodas, galas y eventos exclusivos.',
    specs: [
      'Classic, upscale design',
      'Available in standard finishes (Gold, Silver, Wood, or White)',
      'Optional cushions for extra comfort'
    ],
    specsEs: [
      'Diseño clásico y elegante',
      'Disponible en acabados estándar (oro, plata, madera o blanco)',
      'Cojines opcionales para mayor comodidad'
    ],
    images: [
      '../images/decorations36.jpeg',
      '../images/decorations25.jpeg',
      '../images/decorations17.jpeg',
      '../images/decorations24.jpeg',

    ]
  },
  {
    id: 'furniture-round-tables',
    name: 'Round Tables',
    nameEs: 'Mesas Redondas',
    category: 'tables-chairs',
    price: '$XX.XX each',
    priceEs: '$XX.XX c/u',
    priceLabel: 'Replace with round table price in productsData.js',
    priceLabelEs: 'Reemplace con precio por mesa en productsData.js',
    shortDesc: '60-inch circular tables perfect for hosting dinners where guests sit face-to-face.',
    shortDescEs: 'Mesas circulares de 60 pulgadas perfectas para cenas donde los invitados se sientan frente a frente.',
    detailedDesc: 'Round dining tables promote conversation. Fits 8 to 10 guests comfortably. Perfect for dinners, reception halls, and backyard parties.',
    detailedDescEs: 'Las mesas redondas fomentan la conversación. Acomodan de 8 a 10 invitados cómodamente. Perfectas para cenas, salones de recepción y fiestas en el patio trasero.',
    specs: [
      '60-inch (5ft) diameter size',
      'Sturdy heavy-duty plastic folding top',
      'Ideal for use with round table covers'
    ],
    specsEs: [
      'Tamaño de 60 pulgadas (5 pies) de diámetro',
      'Tablero plegable de plástico resistente',
      'Ideal para usar con manteles redondos'
    ],
    images: [
      '../images/decorations14.jpeg',
      '../images/decorations23.jpeg',
      '../images/decorations25.jpeg',
      '../images/decorations31.jpeg',
      '../images/decorations32.jpeg',
      '../images/decorations12.jpeg',
      '../images/decorations19.jpeg',
    ]
  },
  {
    id: 'furniture-throne',
    name: 'Throne Chairs',
    nameEs: 'Sillas de Trono',
    category: 'tables-chairs',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with throne rental rate in productsData.js',
    priceLabelEs: 'Reemplace con tarifa de alquiler de trono en productsData.js',
    shortDesc: 'Stunning luxury throne chairs for the guest of honor, birthday hosts, or parents-to-be.',
    shortDescEs: 'Impresionantes sillas de trono de lujo para el invitado de honor, anfitriones de cumpleaños o futuros padres.',
    detailedDesc: 'Make the guest of honor feel like royalty! These large, ornate high-back throne chairs look amazing in photos and serve as the perfect centerpiece for baby showers, birthdays, and weddings.',
    detailedDescEs: '¡Haga que el invitado de honor se sienta como la realeza! Estas grandes y ornamentadas sillas de trono con respaldo alto se ven increíbles en las fotos y sirven como la pieza central perfecta para baby showers, cumpleaños y bodas.',
    specs: [
      'Ornate gold or silver wood frames',
      'Premium white or custom tufted leather upholstery',
      'Perfect for photoshoot backgrounds and main seating'
    ],
    specsEs: [
      'Estructuras de madera ornamentadas en oro o plata',
      'Tapicería de cuero capitoné blanco premium o personalizado',
      'Perfecto para fondos de sesiones de fotos y asientos principales'
    ],
    images: [
      '../images/decorations18.jpeg',
      '../images/decorations5.jpeg',
      '../images/decorations7.jpeg',
    ]
  },

  // --- JUMPERS ---
  {
    id: 'jumper-bouncey-castle',
    name: 'Bouncy Castle',
    nameEs: 'Castillo Inflable',
    category: 'jumpers',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with bounce house price in productsData.js',
    priceLabelEs: 'Reemplace con precio de inflable en productsData.js',
    shortDesc: 'Classic inflatable bouncy castle for children of all ages to bounce and play.',
    shortDescEs: 'Clásico castillo inflable para que niños de todas las edades reboten y jueguen.',
    detailedDesc: 'Classic inflatable bounce house design. Colorful, clean, and constructed with high-safety standards. Includes heavy-duty blower and safety anchoring.',
    detailedDescEs: 'Diseño clásico de castillo inflable. Colorido, limpio y construido con altos estándares de seguridad. Incluye soplador de alta resistencia y anclajes de seguridad.',
    specs: [
      'Dimensions: Approx. 13ft x 13ft',
      'Features mesh netting on all sides for easy supervision',
      'Requires constant access to 1 standard electric outlet'
    ],
    specsEs: [
      'Dimensiones: Aprox. 13 pies x 13 pies',
      'Cuenta con malla de red en todos los lados para supervisión fácil',
      'Requiere acceso constante a 1 toma de corriente estándar'
    ],
    images: [
      '../images/Jumper3.jpeg',
      '../images/Jumper4.jpeg',
      '../images/Jumper7.jpeg',
      '../images/Jumper8.jpeg',
      '../images/Jumper9.jpeg',
    ]
  },
  {
    id: 'jumper-single-water',
    name: 'Single Water Slide Jumper',
    nameEs: 'Inflable con Tobogán de Agua',
    category: 'jumpers',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with single water slide price in productsData.js',
    priceLabelEs: 'Reemplace con precio de tobogán en productsData.js',
    shortDesc: 'Exciting single-lane water slide jumper. Ideal for hot summer days.',
    shortDescEs: 'Emocionante inflable con tobogán de agua de un carril. Ideal para los calurosos días de verano.',
    detailedDesc: 'Cool down your summer events with a thrilling single-lane water slide. Features a safe ladder climb and a refreshing splash pool at the bottom.',
    detailedDescEs: 'Refrésquese en sus eventos de verano con un emocionante tobogán de agua de un solo carril. Cuenta con una escalera segura y una refrescante piscina de agua al final.',
    specs: [
      'Water access hookup required',
      'Features single slide lane with climbing stairs',
      'Generous splash pool landing zone'
    ],
    specsEs: [
      'Se requiere conexión de agua cercana',
      'Cuenta con un carril de tobogán con escalera de escalada',
      'Generosa zona de piscina de agua al final'
    ],
    images: [
      '../images/jumper2.jpeg'
    ]
  },
  {
    id: 'jumper-double-water',
    name: 'Double Water Slide Jumper',
    nameEs: 'Inflable de Doble Tobogán de Agua',
    category: 'jumpers',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with double slide price in productsData.js',
    priceLabelEs: 'Reemplace con precio en productsData.js',
    shortDesc: 'Two lanes for double the fun! Race friends down this massive water slide.',
    shortDescEs: '¡Dos carriles para el doble de diversión! Compita con amigos en este enorme tobogán.',
    detailedDesc: 'Twice the excitement! Two side-by-side sliding lanes allow friends to race down simultaneously into a large splash pool. Great for high-turnover events and backyard parties.',
    detailedDescEs: '¡El doble de emoción! Dos carriles paralelos permiten que los amigos compitan simultáneamente cayendo en una piscina de agua. Ideal para eventos grandes y fiestas de patio.',
    specs: [
      'Dual lanes for racing action',
      'Requires water hookup and steady power source',
      'Large splash pool landing'
    ],
    specsEs: [
      'Carriles dobles para carreras de velocidad',
      'Requiere conexión de agua y fuente de energía estable',
      'Gran piscina de agua al final'
    ],
    images: [
      '../images/Jumper6.jpeg',
    ]
  },
  {
    id: 'jumper-mech-bull',
    name: 'Mechanical Bull',
    nameEs: 'Toro Mecánico',
    category: 'jumpers',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with mechanical bull price in productsData.js',
    priceLabelEs: 'Reemplace con precio del toro mecánico en productsData.js',
    shortDesc: 'Ultimate crowd-pleaser! Safe, computer-controlled mechanical bull with inflatable ring.',
    shortDescEs: '¡Atracción favorita del público! Toro mecánico seguro controlado por computadora con colchón inflable.',
    detailedDesc: 'Rent a mechanical bull to guarantee an unforgettable experience! Fully operated by trained staff (if applicable) with adjustable speeds suitable for children and brave adults. Features a thick, cushioned inflatable ring surrounding the bull.',
    detailedDescEs: '¡Alquile un toro mecánico para garantizar una experiencia inolvidable! Operado por personal capacitado con velocidades ajustables adecuadas para niños y adultos valientes. Cuenta con un colchón inflable protector alrededor del toro.',
    specs: [
      'Requires separate dedicated power circuits',
      'Includes inflatable safety surround ring',
      'Speed settings range from beginner to pro rider'
    ],
    specsEs: [
      'Requiere circuitos de alimentación eléctrica dedicados por separado',
      'Incluye anillo de seguridad inflable a su alrededor',
      'Ajustes de velocidad desde principiante hasta profesional'
    ],
    images: [
      '../images/bull1.jpeg',
    ]
  },

  // --- PHOTO BOOTH ---
  {
    id: 'booth-digital',
    name: 'Digital Photo Booth',
    nameEs: 'Cabina de Fotos Digital',
    category: 'photobooth',
    price: '$XX.XX',
    priceEs: '$XX.XX',
    priceLabel: 'Replace with photo booth price in productsData.js',
    priceLabelEs: 'Reemplace con precio de cabina en productsData.js',
    shortDesc: 'Modern iPad-based digital photo booth with instant email/text sharing and templates.',
    shortDescEs: 'Moderna cabina de fotos digital basada en iPad con envío instantáneo a correo/texto y plantillas.',
    detailedDesc: 'Let guests capture their memories instantly! Our digital photo booth features high-quality lighting, interactive screens, and the ability to send GIFs, Boomerangs, and Photos directly to guests via Text, Email, or QR Code. Custom branding templates available.',
    detailedDescEs: '¡Deje que los invitados capturen sus recuerdos al instante! Nuestra cabina de fotos digital cuenta con iluminación de alta calidad, pantalla interactiva y envío de GIFs, Boomerangs y fotos a textos, correos o códigos QR. Plantillas personalizadas disponibles.',
    specs: [
      'Ring light with adjustable brightness and warmth',
      'Instant digital sharing (Wi-Fi required)',
      'Customized templates for overlays and frames'
    ],
    specsEs: [
      'Luz de anillo con brillo y temperatura ajustables',
      'Compartido digital instantáneo (requiere Wi-Fi)',
      'Plantillas personalizadas para superposiciones y marcos'
    ],
    images: [
      '../images/photobooth1.jpeg',
      '../images/photobooth2.jpeg',
    ]
  }
];

export const contactInfo = {
  phone: '555-123-4567',
  phoneLabel: 'Replace with your business phone number in productsData.js',
  phoneLabelEs: 'Reemplace con su teléfono en productsData.js',
  email: 'info@garciajumpers.com',
  emailLabel: 'Replace with your business email in productsData.js',
  emailLabelEs: 'Reemplace con su correo en productsData.js',
  workingHours: 'Monday - Sunday: 8:00 AM - 7:00 PM',
  workingHoursEs: 'Lunes - Domingo: 8:00 AM - 7:00 PM',
  serviceAreas: 'Serving the Valley and surrounding areas!',
  serviceAreasEs: 'Sirviendo a el valle y áreas aledañas.',
  socials: {
    facebook: '#',
    instagram: '#',
    yelp: '#'
  }
};

export const uiTranslations = {
  en: {
    // Navigation
    nav_browse: "Browse",
    nav_about: "About",
    nav_contact: "Contact",
    nav_lang_toggle: "Español",
    nav_lang_title: "Cambiar a Español",

    // Home Page
    welcome_title: "Welcome to CG Event Rentals",
    welcome_desc: "We service the valley and surrounding areas! We have bouncy houses, tents, chairs, tables, and decorations to make your event perfect.",
    jumpers_title: "Jumpers",
    tentsChairsTables: "Tents, Chairs & Tables",
    decorations: "Decorations",
    trioCard1: "Jumpers",
    trioCard2: "Tents, Chairs & Tables",
    trioCard3: "Decorations",
    homeJumperTitle: "Bounce Houses for All Ages",
    homeJumperDesc: "From classic bounce castles to thrilling water slides, we have options for every age group and event type.",
    homeJumperBtn: "View Jumpers",
    homeTentTitle: "Tents, Tables & Chairs",
    homeTentDesc: "We offer tents in multiple sizes, rectangular and round tables, standard folding chairs, and elegant Chiavari chairs for any occasion.",
    homeTentBtn: "View Tents & Tables",
    homeDecorationTitle: "Elegant Decorations",
    homeDecorationDesc: "Chair covers, tablecloths, and more to give your event a polished professional touch.",
    homeDecorationBtn: "View Decorations",

    // Catalog & Browse Page
    explore_title: "Explore Our Products",
    search_placeholder: "Search tents, tables, jumpers...",
    btn_view_details: "View Details & Photos",
    no_results: "No products found matching",
    btn_reset_filters: "Reset Filters",

    // Footer
    footer_tagline: "Browse our collection of products and give us a call or email us to reserve your date!",
    footer_phone_title: "Phone Number",
    footer_email_title: "Email Address",
    footer_hours_title: "Working Hours",
    footer_area_title: "Service Area",
    all_rights: "All rights reserved. (No online reservations, call or email to book!)",

    // Product Modal
    modal_photo_badge: "Photo Placeholder",
    modal_photo_of: "of",
    modal_photo_instruction: "How to change photos: Edit the images array inside productsData.js for this product ID:",
    modal_price_label: "Price:",
    modal_desc_label: "Description",
    modal_desc_instruction: "Modify this text in productsData.js",
    modal_specs_label: "Details & Specifications",
    modal_specs_instruction: "Edit these bullets in productsData.js",
    modal_cta_title: "Interested in Renting?",
    modal_cta_desc: "Since we do not support online reservations directly, contact us directly to check availability for your date!",
    modal_cta_call_btn: "Call Us",
    modal_cta_email_btn: "Email Inquiry",
    modal_close_aria: "Close modal",
    modal_prev_aria: "Previous image",
    modal_next_aria: "Next image",
    modal_inquiry_subject: "Inquiry about",
    no_image_text: "No Image Available",

    // About Page
    about_title: "About Us",
    about_subtitle: "Family-owned and proudly serving the Valley and surrounding communities.",
    about_story_badge: "Family Owned & Operated",
    about_story_title: "How We Started",
    about_story_p1: "We are a local, family run party rental business based in the Valley. We started CG Event Rentals with a straightforward goal: give local families and event organizers reliable, fun, and clean equipment for their events.",
    about_story_p2: "Whether you're hosting a backyard birthday, a family reunion, a baby shower, or a church gathering. We treat your event like it's our own. We take care of delivery, setup, and teardown so you can focus on enjoying the day with your family and friends.",
    about_highlights_title: "What You Can Expect From Us",
    about_val1_title: "Clean & Sanitized Always",
    about_val1_desc: "Every jumper, chair, and table is cleaned and wiped down before it arrives at your yard.",
    about_val2_title: "Reliable On-Time Delivery",
    about_val2_desc: "We show up when we say we will, so your setup is ready well before guests arrive.",
    about_val3_title: "Direct, Friendly Service",
    about_val3_desc: "You talk directly with us to plan your event and we ensure you get what you need.",
    about_val4_title: "Complete Setup & Pickup",
    about_val4_desc: "We do the heavy lifting: unloading, securing, and picking everything up after your party ends.",
    about_gallery_title: "A Few Recent Setups",
    about_cta_title: "Have a Date in Mind?",
    about_cta_text: "Give us a call or send an email to check availability and reserve your date.",

    contact_btn: "Contact",
    change_phone_tip: "Change phone in productsData.js",
    change_email_tip: "Change email in productsData.js"
  },
  es: {
    // Navigation
    nav_browse: "Explorar",
    nav_about: "Acerca de",
    nav_contact: "Contacto",
    nav_lang_toggle: "English",
    nav_lang_title: "Switch to English",

    // Home Page
    welcome_title: "Bienvenidos a CG Event Rentals",
    welcome_desc: "¡Su opción local para alquileres de fiestas! Tenemos inflables, carpas, sillas, mesas y decoraciones para hacer que su evento sea perfecto.",
    jumpers_title: "Inflables",
    tentsChairsTables: "Carpas, Sillas y Mesas",
    decorations: "Decoraciones",
    trioCard1: "Inflables",
    trioCard2: "Carpas, Sillas y Mesas",
    trioCard3: "Decoraciones",
    homeJumperTitle: "Castillos Inflables para Todas las Edades",
    homeJumperDesc: "Desde castillos inflables clásicos hasta emocionantes toboganes de agua, tenemos opciones para cada grupo de edad y tipo de evento.",
    homeJumperBtn: "Ver Inflables",
    homeTentTitle: "Carpas, Mesas y Sillas",
    homeTentDesc: "Ofrecemos carpas en múltiples tamaños, mesas rectangulares y redondas, sillas plegables estándar y elegantes sillas Chiavari para cualquier ocasión.",
    homeTentBtn: "Ver Carpas y Mesas",
    homeDecorationTitle: "Decoraciones Elegantes",
    homeDecorationDesc: "Fundas para sillas, manteles y más para darle a su evento un toque pulido y profesional.",
    homeDecorationBtn: "Ver Decoraciones",

    // Catalog & Browse Page
    explore_title: "Explore Nuestros Productos",
    search_placeholder: "Buscar carpas, manteles, inflables...",
    btn_view_details: "Ver Detalles y Fotos",
    no_results: "No se encontraron productos que coincidan con",
    btn_reset_filters: "Restablecer Filtros",

    // Footer
    footer_tagline: "Ofrecemos alquileres de fiestas limpios, seguros y profesionales. ¡Explore nuestra colección y contáctenos para asegurar su equipo hoy mismo!",
    footer_phone_title: "Número de Teléfono",
    footer_email_title: "Correo Electrónico",
    footer_hours_title: "Horario de Trabajo",
    footer_area_title: "Área de Servicio",
    all_rights: "Todos los derechos reservados. (¡Sin reservaciones en línea, llame o envíe un correo para reservar!)",

    // Product Modal
    modal_photo_badge: "Marcador de Foto",
    modal_photo_of: "de",
    modal_photo_instruction: "Cómo cambiar fotos: Edite el arreglo de imágenes dentro de productsData.js para el ID de producto:",
    modal_price_label: "Precio:",
    modal_desc_label: "Descripción",
    modal_desc_instruction: "Modifique este texto en productsData.js",
    modal_specs_label: "Detalles y Especificaciones",
    modal_specs_instruction: "Edite estos puntos en productsData.js",
    modal_cta_title: "¿Interesado en Alquilar?",
    modal_cta_desc: "Dado que no admitimos reservas directas en línea, ¡contáctenos directamente para verificar disponibilidad para su fecha!",
    modal_cta_call_btn: "Llamar",
    modal_cta_email_btn: "Enviar Correo",
    modal_close_aria: "Cerrar ventana",
    modal_prev_aria: "Imagen anterior",
    modal_next_aria: "Siguiente imagen",
    modal_inquiry_subject: "Consulta sobre",
    no_image_text: "Imagen No Disponible",

    // About Page
    about_title: "Acerca de Nosotros",
    about_subtitle: "Negocio familiar sirviendo con orgullo al Valle y comunidades aledañas.",
    about_story_badge: "Negocio Familiar y Local",
    about_story_title: "Nuestra Historia",
    about_story_p1: "Somos un negocio familiar local de alquiler para fiestas en el Valle. Comenzamos Garcia Jumpers con una meta sencilla: ofrecer a las familias y organizadores de eventos equipo limpio y confiable, sin complicaciones ni precios excesivos.",
    about_story_p2: "Ya sea que esté organizando un cumpleaños en su patio, una reunión familiar, un baby shower o un evento comunitario, tratamos su fiesta como si fuera la nuestra. Nos encargamos de la entrega, montaje y recogida para que usted disfrute de su día con sus invitados.",
    about_highlights_title: "Lo Que Puede Esperar de Nosotros",
    about_val1_title: "Equipo Limpio y Desinfectado",
    about_val1_desc: "Cada inflable, mesa y silla se limpia y desinfecta cuidadosamente antes de llegar a su hogar.",
    about_val2_title: "Entregas Puntuales y Confiables",
    about_val2_desc: "Llegamos a tiempo para que todo esté listo mucho antes de que comiencen a llegar sus invitados.",
    about_val3_title: "Trato Directo y Amable",
    about_val3_desc: "Habla directamente con nosotros: sin intermediarios, tarifas ocultas ni contestadoras automáticas.",
    about_val4_title: "Montaje y Recogida Completa",
    about_val4_desc: "Hacemos el trabajo pesado: descargamos, aseguramos y recogemos todo al terminar su evento.",
    about_gallery_title: "Fotos de Nuestros Montajes",
    about_cta_title: "¿Tiene una fecha en mente?",
    about_cta_text: "Llámenos o envíenos un correo para consultar disponibilidad y apartar su fecha.",

    contact_btn: "Contacto",
    change_phone_tip: "Cambie el teléfono en productsData.js",
    change_email_tip: "Cambie el correo en productsData.js"
  }
};
