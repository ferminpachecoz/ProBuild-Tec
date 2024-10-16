let database = [
  {
    id: 1,
    code: "CCL 1660",
    name: "Línea de limpieza de esquinas y Soldadura de PVC",
    description: "Línea de soldadura y limpieza de PVC de cuatro esquinas controlada por CNC que proporciona movimiento en 2 y 4 ejes. Después del proceso de soldadura en DK 540, el marco pasa a la Unidad de Enfriamiento (SA 250) automáticamente. Luego la Unidad Robot (SA 260) automáticamente toma los marcos de la Unidad de Enfriamiento (SA 250) donde se inicia el proceso de limpieza y los transporta girando hacia la Máquina de Limpieza CNC 608 o 610",
    image: ["CCL 1660.png"],
    categoria: "Centro de Corte y Limpieza de Mecanizado"
  },
  {
    id: 2,
    code: "PIM 6508",
    name: "Centro de Procesamiento de Perfiles PVC",
    description: "PIM 6508 es un centro de mecanizado controlado por CNC de 8 ejes que está diseñado específicamente para procesar cualquier tipo de perfiles de PVC en el mercado. La máquina puede realizar todas las operaciones en los cuatro lados de los perfiles de PVC, como fresado, apertura de orificios para llaves, ranuras para agua, orificios para bisagras, orificios para manijas, marcado, corte con hoja de sierra, etc. La PIM 6508 tiene la función de programación que proporciona un desperdicio mínimo y una cantidad máxima de producción. Se pueden colocar 10 piezas de perfiles de PVC en el transportador de alimentación de la máquina y la pinza neumática de 3 ejes los mueve al centro de fresado y corte para las operaciones de fresado y corte. El operador adjunta códigos de barras en los perfiles procesados para prepararlos para la operación de soldadura.",
    image: ["PIM 6508.png", "pim-6508_1.png", "pim-6508_2.png", "pim-6508_3.png"],
    categoria: "Centro de Corte y Limpieza de Mecanizado"
  },
  {
    id: 3,
    code: "PIM 6509",
    name: "Centro de Procesamiento de Perfiles de PVC",
    description: "PIM 6509 es un centro de mecanizado controlado por CNC de 8 ejes que está específicamente diseñado para procesar cualquier tipo de perfiles de PVC en el mercado. La máquina puede realizar todas las operaciones en los cuatro lados de los perfiles de PVC, como fresado, apertura de orificios para llaves, ranuras para agua, orificios para bisagras, orificios para manijas, marcado, corte con hoja de sierra, etc. La PIM 6509 tiene la función de programación que proporciona un desperdicio mínimo y una cantidad máxima de producción. Se pueden colocar 7 piezas de perfiles de PVC en el transportador de alimentación de la máquina y la pinza neumática de 3 ejes los mueve al centro de fresado y corte para las operaciones de fresado y corte. El operador adjunta códigos de barras en los perfiles procesados para prepararlos para la operación de soldadura.",
    image: ["PIM 6509.png", "PIM-6509_1.png", "PIM-6509_2.png", "PIM-6509_3.png", "PIM-6509_4.png", "PIM-6509_5.png", "PIM-6509_6.png", "PIM-6509_7.png", "PIM-6509_8.png"],
    categoria: "Centro de Corte y Limpieza de Mecanizado"
  },
  {
    id: 4,
    code: "TK 503",
    name: "Soldadora de Esquina Única de PVC",
    description: "Se utiliza para unir esquinas de perfiles de PVC en ángulos entre 30°-180°.",
    image: ["TK 503.png"],
    categoria: "Soldadura"
  },
  {
    id: 5,
    code: "FR 226 S",
    name: "Fresadora Automática de Copiado",
    description: "FR 226 S (400V) Se utiliza para labores múltiples de fresado y perforación de agujeros como canales de drenaje de agua, fallebas, bisagras, ranuras y huecos para pomos o cerradura, etc. en perfiles de puertas y ventanas de PVC y aluminio de un grosor de hasta 3 mm",
    image: ["FR 226 S.png", "FR-226-S_2.png"],
    categoria: "Fresas de Corte"
  },
  {
    id: 6,
    code: "FR 225 S",
    name: "Fresadora de Copiado y Perforadora de Agujeros Triples para Pomos",
    description: "Se utiliza para labores múltiples de fresado y perforación de agujeros como canales de drenaje de agua, fallebas, bisagras, ranuras y huecos para pomos o cerradura, etc. en perfiles de puertas y ventanas de PVC y aluminio de un grosor de hasta 3 mm",
    image: ["FR 225 S.png", "FR-225-S-1.webp", "FR-225-S-2.webp", "FR-225-S-3.webp", "FR-225-S-4.webp", "FR-225-S-5.webp", "FR-225-S-6.webp"],
    categoria: "Fresas de Corte"
  },
  {
    id: 7,
    code: "SM 201",
    name: "Atornilladora de Tornillos de Apoyo de Cabezal Único",
    description: "Se utiliza para atornillar acero de refuerzo en los perfiles de puertas y ventanas de PVC de forma rápida y precisa. El perfil de PVC con el acero de refuerzo insertado se introduce manualmente en la mesa de la unidad de atornillado y el proceso de atornillado se inicia con el pedal. El avance del perfil se realiza manualmente hasta completar el proceso de atornillado.",
    image: ["SM 201.png"],
    categoria: "Atornilladora de Láminas de Apoyo"
  },
  {
    id: 8,
    code: "ACK 420 S",
    name: "Cortadora De Descarga Superior",
    description: "ACK 420 es una cortadora con una sierra de Ø 420 mm diseñada para cortar perfiles de anchas dimensiones de PVC y aluminio, en grados o de forma recta",
    image: ["ACK 420 S.png"],
    categoria: "Máquina Cortadora De Un Solo Cabezal"
  },
  {
    id: 9,
    code: "CRM 201S",
    name: "Máquina Fresadora de Copiado y Abridora de Canales de Drenaje de Agua y Agujeros Triples para Pomos",
    description: "Es una fresadora de copiado utilizada para labores múltiples de fresado y perforación de agujeros como canales de drenaje de agua, fallebas, bisagras, ranuras y huecos para pomos o cerradura, etc. en perfiles de puertas y ventanas de PVC y aluminio.CRM 201S puede realizar fresados de copiado y abrir canales de drenaje de agua y agujeros triples para pomos.",
    image: ["CRM 201S.png", "CRM-201_2.png", "CRM-201_3.png", "CRM-201_4.png"],
    categoria: "Fresadora De Copiado"
  },
  {
    id: 10,
    code: "KM 215",
    name: "Máquina Semiautomática Abridora de Rieles",
    description: "Es una muescadora que funciona de forma hidroneumática utilizada para labores de moledura en perfiles de aluminio y PVC con gran precisión.",
    image: ["KM 215.png", "KM-215_2.png", "KM-215-S-1.webp", "KM-215-S-2.webp", "KM-215-S-3.webp", "KM-215-S-4.webp", "KM-215-S-5.webp"],
    categoria: "Máquina Muescadora De Rieles Múltiples"
  },
  {
    id: 11,
    code: "SDT 275",
    name: "Cortadora de Tuberías de Perfil / Láminas de Soporte",
    description: "Es ideal para cortar las láminas de soporte montadas en perfiles de PVC, perfiles y barras",
    image: ["SDT 275.png"],
    categoria: "Máquina Cortadora De Sierra Circular"
  },
  {
    id: 12,
    code: "CA 601",
    name: "Limpiadora Semiautomática de Esquina Única de PVC",
    description: "La Limpiadora Semiautomática de Esquina Única CA 601 es una máquina que limpia rebabas utilizada con el objetivo de limpiar las esquinas externas y las superficies inferiores y superiores de perfiles PVC que han sido soldados en un ángulo de 90°",
    image: ["CA 601.png", "CA-601-1.webp", "CA-601-2.webp", "CA-601-3.webp", "CA-601-4.webp", "CA-601-5.webp"],
    categoria: "Desbarbadora Manual"
  },
  {
    id: 13,
    code: "CK 412",
    name: "Cortadora de Junquillos PVC",
    description: "CK 412 es una cortadora que trabaja automáticamente diseñada para cortar en 45° junquillos para cristal en perfiles PVC",
    image: ["CK 412.png", "CK-412-2.webp", "CK-412-3.webp", "CK-412-4.webp", "CK-412-5.webp", "CK-412-1.webp"],
    categoria: "Máquina Cortadora De Junquillos"
  },
  {
    id: 14,
    code: "VP 1000",
    name: "Carro Transportador De Perfiles Verticales",
    description: "Se utiliza para transportar y almacenar perfiles verticales. Cuenta con 4 ruedas, 2 de ellas con frenos. Cuenta con 20 separadores. Tapa de plástico para prevenir el rayado de las superficies de los materiales. Anchura x Longitud x Altura: 990 x 1500 x 1500 mm. Distancia entre separadores: 105 mm. Longitud de las barras separadoras: 595 mm. Capacidad de carga: 500 kg",
    image: ["VP 1000.png"],
    categoria: "Equipo de Apoyo"
  },
  {
    id: 15,
    code: "WB 4000",
    name: "Mesa De Montaje",
    description: "Mesa de montaje diseñada para ensamblar ventanas y otras labores generales. Se puede ajustar el plástico no resbaladizo, se puede fijar al suelo y se puede ajustar la altura. Placa donde se colocarán los sets de herramientas y accesorios de montaje. Posibilidad de configuración del área de trabajo en ambas direcciones adaptándose a las dimensiones concretas del perfil. Cuenta con una conexión para manguera de aire, rápidamente enchufable. La superficie de trabajo está recubierta de un material de caucho y así se evitan rayaduras en los perfiles que se estén tratando. Se proporciona junto a 6 sets de herramientas. Amplitud de Mesa de Trabajo: 2000 - 4000 mm. Profundidad de la Mesa de Trabajo: 1000 - 2000 mm. Altura de Trabajo: 820 mm. Capacidad de carga: 350 kg",
    image: ["WB 4000.png"],
    categoria: "Equipo de Apoyo"
  },
  {
    id: 16,
    code: "SKN 301",
    name: "Cinta Transportadora Digital de Anclaje Automático",
    description: "Es una cinta transportadora controlada por ordenador que ayuda a que los perfiles de junquillos de ventanas sean cortados con precisión y en las medidas deseadas en las cortadoras.",
    image: ["SKN 301.png"],
    categoria: "Equipo de Apoyo"
  },
  {
    id: 17,
    code: "GPT 1000",
    name: "Carro Transportador De Vidrios Y Ventanas",
    description: "Se utiliza con el propósito de transportar y almacenar marcos y bastidores de ventanas terminadas. 4 ruedas, 2 de ellas con freno. Poleas rotatorias que facilitan el movimiento de los productos que se transportan por el suelo. Con tapa de plástico para prevenir que se rayen las superficies de los materiales. Cuenta con 8 separadores compatibles con las dimensiones máximas y mínimas de los perfiles. Anchura x Longitud x Altura: 990 x 1500 x1300 mm. Distancia entre Separadores: 140 mm. Capacidad de Carga: 300 kg",
    image: ["GPT 1000.png"],
    categoria: "Equipo de Apoyo"
  },
  {
    id: 18,
    code: "PT 1000",
    name: "Carro Transportador De Ventanas",
    description: "Se utiliza para transportar y almacenar perfiles de ventana terminados. Cuenta con 4 ruedas, 2 de ellas con frenos. Con tapa de caucho para prevenir el rayado de las superfícies de los materiales. Anchura x Longitud x Altura: 990 x 1500 x 1580 mm. Capacidad de carga: 500 kg. Capacidad de carga (servicio pesado): 750 kg",
    image: ["PT 1000.png"],
    categoria: "Equipo de Apoyo"
  },
  {
    id: 19,
    code: "HP 1000",
    name: "Carro De Transporte De Perfiles Horizontales",
    description: "Se utiliza para almacenar y transportar perfiles horizontales. Cuenta con 4 ruedas, 2 de ellas con frenos. Está recubierto de caucho por tal de prevenir que se rayen las superficies de los materiales. Anchura x Longitud x Altura: 990 x 1600 x 1600 mm. Longitud de barras separadoras: 430 mm x 2. Capacidad de Carga: 350 kg. Capacidad de Carga (servicio pesado): 500 kg",
    image: ["HP 1000.png"],
    categoria: "Equipo de Apoyo"
  },
  {
    id: 20,
    code: "NSM 352",
    name: "Estación de Ensamblaje de Bastidores",
    description: "Se utiliza con el propósito de facilitar un ensamblaje de calidad, en serie y adecuado a los estándares, sin necesidad de utilizar cintas métricas, lápices, plantillas y moldes, de todos los accesorios que sean extensiones únicas o dobles que se utilizan sobre los perfiles de bastidores de ventanas de series distintas y dimensiones distintas.",
    image: ["NSM 352.png", "NSM-352-1.webp", "NSM-352-2.webp", "NSM-352-3.webp", "NSM-352-4.webp", "NSM-352-5.webp"],
    categoria: "Equipo de Apoyo"
  },
  {
    id: 21,
    code: "DC 421 PBS",
    name: "Cortadora de Doble Cabezal (Totalmente Automática)",
    description: "DC 421 PBS es una máquina de doble cabezal diseñada con el objetivo de cortar perfiles de PVC y aluminio de grandes dimensiones en grados o de forma recta con una sierra de Ø 420 mm.",
    image: ["DC 421 PBS.png", "DC 421 PBS-1.png", "DC 421 PBS-2.png"],
    categoria: "Máquina Cortadora De Doble Cabeza"
  },
  {
    id: 22,
    code: "ST 264",
    name: "Máquina Abridora de Canales de Drenaje en PVC",
    description: "Es una fresadora que se utiliza con el propósito de abrir canales de drenaje de agua en perfiles de PVC, en distintas alturas y ángulos, en dos o tres ejes.",
    image: ["ST 264.png", "ST-264_2.png"],
    categoria: "Fresadora De Copiado"
  },
  {
    id: 23,
    code: "DK 502",
    name: "Soldadora de Esquina Doble de PVC",
    description: "Es una máquina que se utiliza con el objetivo de unir mediante proceso de soldadura dos esquinas de perfiles PVC.",
    image: ["DK 502.png", "DK-502_2.webp", "DK-502_3.webp", "DK-502_4.webp"],
    categoria: "Soldadura De Doble Cabezal"
  },
  {
    id: 24,
    code: "SM 1000",
    name: "Atornilladora Automática de Láminas de Apoyo de Doble Cabezal",
    description: "SM 1000 es una máquina automática que se utiliza con el objetivo de atornillar automáticamente perfiles de PVC que cuentan con láminas de apoyo en su interior.",
    image: ["SM 1000.jpg", "SM 1000 2.jpg", "SM 1000 3.jpg", "SM 1000 4.jpg"],
    categoria: "Atornilladora De Láminas De Apoyo De Doble Cabezal"
  },
  {
    id: 25,
    code: "MEM 128",
    name: "Máquina Semiautomática Abridora de Rieles Múltiples",
    description: "Es una máquina muescadora de perfiles múltiples que opera en serie con un mecanismo de correa de motor, utilizada en labores de moledura de forma precisa en perfiles de aluminio y PVC.",
    image: ["MEM 128.png", "MEM-128_2.png", "MEM-128_3.png", "MEM-128_4.png", "MEM-128_5.png"],
    categoria: "Máquina Muescadora De Rieles Múltiples"
  },
  {
    id: 26,
    code: "SDT 280",
    name: "Cortadora Semiautomática De Perfiles Y Láminas De Apoyo De Varios Tipos",
    description: "Es una cortadora semiautomática de sierra sinfín que proporciona cortes de elevada precisión con su mecanismo de sierras que se mueven linealmente, chasis hecho de materiales de acero duro y columnas portadoras molidas. El corte se realiza hidráulicamente. Para el corte siguiente el material se transporta manualmente hasta el anclaje y se repite el proceso de corte. Es ideal para cortar diversamente barras llenas, perfiles o láminas de apoyo montadas en los perfiles de PVC.",
    image: ["SDT 280.png", "SDT280_1.webp", "SDT280_3.png", "SDT280_4.png", "SDT280_5.png", "SDT280_6.png", "SDT280_7.png", "SDT280_8.png", "SDT280_9.png", "SDT280_10.png", "SDT280_11.png"],
    categoria: "Máquina Cortadora De Sierra De Láminas De Apoyo"
  },
  {
    id: 27,
    code: "NSM 353",
    name: "Estación de Ensamblaje de Bastidores",
    description: "Se utiliza con el propósito de facilitar un ensamblaje de calidad, en serie y adecuado a los estándares, sin necesidad de utilizar cintas métricas, lápices, plantillas y moldes, de todos los accesorios que sean extensiones únicas o dobles que se utilizan sobre los perfiles de bastidores de ventanas de series distintas y dimensiones distintas.",
    image: ["NSM 353.png", "NSM-353-1.webp", "NSM-353-2.webp", "NSM-353-3.webp", "NSM-353-4.webp", "NSM-353-5.webp"],
    categoria: "Banco Para El Montaje De Herrajes"
  }
]
export default database;