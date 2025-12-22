// Variables globales
let currentLevel = 'intermedio';
let currentGame = null;
let gameStats = {
    score: 0,
    correct: 0,
    incorrect: 0
};

// Datos de juegos generados por IA
const gameData = {
    pasapalabra: {
        // Preguntas que CONTIENEN la letra
        contains: {
            A: [
                'Civilización precolombina famosa por su calendario y pirámides|maya',
                'Sistema político de la antigua Grecia donde gobernaba el pueblo|democracia',
                'Emperador francés que se proclamó a sí mismo emperador en 1804|napoleon',
                'Ruta comercial que unía Asia y Europa durante siglos|ruta de la seda',
                'Proceso de intercambio cultural entre América, Europa y África tras 1492|intercambio colombino',
                'Peste que devastó Europa en el siglo XIV|peste negra',
                'Primera mujer en volar sola sobre el Atlántico|amelia earhart',
                'Antigua capital del Imperio Inca donde capturaron a Atahualpa|cajamarca',
                'Sistema económico basado en la propiedad estatal de los medios de producción|socialismo',
                'Documento inglés de 1215 que limitó el poder del rey|carta magna'
            ],
            B: [
                'Antigua civilización mesopotámica conocida por sus jardines colgantes|babilonia',
                'Capital del Imperio bizantino|constantinopla',
                'Sistema político basado en el control total del Estado por un partido único|bolchevismo',
                'Líder soviético que sucedió a Lenin|brezhnev',
                'Pueblo germánico que se considera genéricamente invasor|barbaros',
                'Revuelta de 1857 contra el dominio británico en India|rebelion de los cipayos',
                'Tratado que puso fin a la guerra entre Alemania y Rusia en 1918|brest-litovsk',
                'Arma principal de infantería en la Edad Moderna|bayoneta',
                'Gran muelle artificial usado en el desembarco de Normandía|mulberry',
                'Imperio europeo que dominó el mar Mediterráneo oriental entre los siglos IV y XV|bizantino'
            ],
            C: [
                'Ruta marítima que los portugueses bordearon para llegar a India|cabo de buena esperanza',
                'Proceso económico-industrial que empezó en Inglaterra en el siglo XVIII|revolucion industrial',
                'Imperio que construyó la Gran Muralla|china',
                'Sistema político que dominó la URSS entre 1922 y 1991|comunismo',
                'Carrera tecnológica entre Estados Unidos y la URSS|carrera espacial',
                'Conquistador español que derrotó al Imperio azteca|cortes',
                'Ciudad italiana donde surgió el Renacimiento|florencia',
                'Epidemia transmitida por agua contaminada|colera',
                'Antigua civilización sudamericana cuyos quipus eran sistemas de registro|inca',
                'Asociación económica europea originada tras la Segunda Guerra Mundial|comunidad economica europea'
            ],
            D: [
                'Político alemán que inició el milagro económico tras la guerra|adenauer',
                'Proceso de separación social por raza en Sudáfrica|apartheid',
                'Emperador romano que dividió el Imperio en 285|diocleciano',
                'Sistema económico medieval basado en donaciones|feudalidad',
                'Naciones que combatieron contra el Eje en la Segunda Guerra Mundial|aliados',
                'Antigua civilización ubicada en Asia Menor con lengua indoeuropea|lidia',
                'Institución jurídica medieval basada en donaciones religiosas|diezmo',
                'Líder de la independencia de la India|gandhi',
                'Primera dinastía unificadora de China|dinastia han',
                'Batalla donde fue derrotado definitivamente Napoleón|waterloo'
            ],
            E: [
                'Primera civilización del valle del Nilo|egipto',
                'Navegante vasco que completó la primera vuelta al mundo|elcano',
                'Movimiento artístico renacentista que buscaba proporción y equilibrio|humanismo',
                'Sistema económico basado en la exportación colonial|mercantilismo',
                'Ciudad donde se firmó la rendición alemana en 1918|compiegne',
                'Doctrina política de igualdad social surgida en Francia|socialismo',
                'Alianza militar creada en 1955 por la URSS|pacto de varsovia',
                'Pueblo germano derrotado por Julio César en la Galia|helvecios',
                'Revolución que industrializó Japón en el siglo XIX|meiji',
                'Primera ciudad destruida por una erupción del Vesubio|estabia'
            ]
        },
        // Preguntas que EMPIEZAN con la letra
        starts: {
            A: [
                'Pueblos antiguos del actual País Vasco mencionados por romanos|aquitani',
                'Primera era geológica del eón Fanerozoico|arcaico',
                'Nombre antiguo de la región correspondiente a Irán y Afganistán|ariana',
                'Política de no confrontación aplicada por Reino Unido antes de la Segunda Guerra Mundial|apaciguamiento',
                'Política de segregación racial aplicada en Sudáfrica durante el siglo XX|apartheid',
                'Antigua civilización mesopotámica conocida por su imperio militar|asiria',
                'Región del antiguo Egipto situada al sur|alto egipto',
                'Civilización que construyó la ciudad de Tenochtitlan|azteca',
                'Documento fundacional de Estados Unidos firmado en 1776|acta de independencia',
                'Filósofo griego discípulo de Platón y maestro de Alejandro Magno|aristoteles'
            ],
            B: [
                'Imperio mesopotámico famoso por sus jardines colgantes|babilonia',
                'Bloque militar liderado por Estados Unidos en la Guerra Fría|bloque occidental',
                'Movimiento artístico del siglo XVIII caracterizado por la ornamentación|barroco',
                'Pueblos nómadas que invadieron Europa y dieron nombre al concepto de invasión|barbaros',
                'El Canciller de Hierro de Alemania|bismarck',
                'Capital actual de Alemania|berlin',
                'Famoso tapiz que narra la llegada de los normandos a Inglaterra en 1066|bayeux',
                'País europeo invadido por Alemania en 1939 tras Polonia|belgica',
                'Explorador portugués que rodeó África y llegó a India|bartolome diaz',
                'Documento de 1689 que estableció derechos y límites al poder real en Inglaterra|bill of rights'
            ],
            C: [
                'Antigua ciudad fenicia que luchó contra Roma|cartago',
                'Emperador romano asesinado en los Idus de marzo|cesar',
                'Isla famosa por batallas en la Segunda Guerra Mundial|ceilan',
                'Ruta marítima que buscó Colón hacia las Indias|camino a las indias',
                'Rey franco coronado emperador en el año 800|carlomagno',
                'Doctrina política de Adam Smith sobre libre mercado|capitalismo',
                'País donde se originó la Revolución Cultural|china',
                'Última reina del Antiguo Egipto|cleopatra',
                'Ideología que defendía la misión civilizadora de las potencias europeas|colonialismo',
                'Congreso que reorganizó Europa tras las guerras napoleónicas|congreso de viena'
            ],
            D: [
                'Operación militar del desembarco aliado en Normandía, 1944|dia d',
                'Sistema político donde gobierna el pueblo|democracia',
                'Rey persa enfrentado a Alejandro Magno|dario iii',
                'Movimiento artístico del siglo XX caracterizado por lo onírico|dadaismo',
                'Explorador portugués que llegó al extremo sur de África en 1488|bartolome diaz',
                'Las diez leyes bíblicas entregadas a Moisés|decalogo',
                'Régimen político implantado por Franco en España|dictadura',
                'Arte clásico griego de los siglos V-IV a.C.|dorico',
                'Pacto firmado en 1939 entre Alemania y la URSS|pacto de no agresion',
                'Antigua civilización del valle del Indo con ciudades como Mohenjo-Daro|dravida'
            ],
            E: [
                'Territorio dominado por faraones|egipto',
                'Primera ciudad destruida por una erupción del Vesubio|estabia',
                'Imperio que conquistó México en el siglo XVI|españa',
                'Filosofía griega fundada por Zenón de Citio|estoicismo',
                'Navegante vasco cuyo apellido da nombre al océano Pacífico|elcano',
                'Periodo histórico japonés de unificación|edo',
                'Primera etapa de la prehistoria|eolitico',
                'Primera forma de escritura conocida|escritura cuneiforme',
                'Pueblo nórdico que atacó Europa en la Alta Edad Media|escandinavos',
                'Arte caracterizado por columnas, frontones y armonía|estilo clasico'
            ]
        },
        F: {
            contains: [
                'Sistema político que sustituyó al Imperio romano de Occidente|feudalismo',
                'Pueblo europeo convertido al cristianismo por Clodoveo|francos',
                'Guerra entre Francia y Alemania en 1870|franco-prusiana',
                'Invento que permitió armar ejércitos masivos|fusil',
                'País donde estalló la revolución de 1789|francia',
                'Derecho de voto en las democracias|sufragio',
                'Rey francés conocido como el Rey Sol|luis xiv',
                'Movimiento político del siglo XX en Italia|fascismo',
                'Sistema de defensa feudal|fortaleza',
                'Conferencia de 1884 que repartió África|conferencia de berlin'
            ],
            starts: [
                'País europeo famoso por su Revolución de 1789|francia',
                'Dictador español que gobernó entre 1939 y 1975|franco',
                'Imperio norteafricano derrotado por Roma en las Guerras Púnicas|fenicio',
                'Filosofía crítica del siglo XIX influida por Marx|filosofia marxista',
                'Capital del antiguo Imperio persa|fars',
                'Primera etapa del feudalismo en Europa|feudo',
                'Fiesta religiosa de los musulmanes|fiesta del sacrificio',
                'Territorio colonial español en Norteamérica|florida',
                'Territorio conflictivo en la Edad Moderna europea|flandes',
                'Famoso rey de Macedonia, padre de Alejandro Magno|filipo ii'
            ]
        },
        G: {
            contains: [
                'Expansión cultural griega tras Alejandro Magno|helenismo',
                'Emperador romano asesinado por una conspiración|gayo julio cesar',
                'Imperio asiático con capital en Karakorum|mongol',
                'Política de exterminio nazi|genocidio',
                'Navegante que demostró la esfericidad de la Tierra|magallanes',
                'Gran conflicto mundial 1914-1918|gran guerra',
                'Proceso científico del siglo XVII|revolucion cientifica',
                'Pueblo germánico que saqueó Roma en 410|godos',
                'Sistema de campos de trabajo forzado soviético|gulag',
                'Mar que define la región de la primera civilización europea|egeo'
            ],
            starts: [
                'Guerra en la que se enfrentaron Estados Unidos y Vietnam|guerra de vietnam',
                'Época de prosperidad española en el siglo XVI|gran siglo',
                'Pueblo alemán aliado de Roma tardía|godos',
                'Arte arquitectónico medieval basado en arcos apuntados|gotico',
                'Territorio que España perdió en 1898|guam',
                'Pintor español autor de Los fusilamientos|goya',
                'Organización política japonesa dirigida por shogunes|gobierno shogunal',
                'Godo que conquistó la península ibérica en el siglo V|genserico',
                'Filósofo griego alumno de Sócrates|glaucon',
                'División militar mongola|gur khan'
            ]
        },
        H: {
            contains: [
                'Civilización mesoamericana que habitó México y Centroamérica|hunos',
                'Antiguo pueblo europeo que invadió el Imperio romano|hunos',
                'Proceso de transición de sociedades nómadas a agrícolas|revolucion hidraulica',
                'Primer imperio unificador de la India|harappa',
                'Regente japonés que gobernaba en nombre del emperador|shogun',
                'Ciudad alemana donde Hitler intentó un golpe en 1923|munich',
                'Formación religiosa medieval considerada desviada|herejia',
                'Armas de guerra medievales|hachas de guerra',
                'País donde se originó la cultura helenística|grecia',
                'Ciudad arrasada por bombas incendiarias en 1945|hiroshima'
            ],
            starts: [
                'Liga comercial medieval del norte de Europa|hansa',
                'Filósofo griego conocido por su teoría del flujo|heraclito',
                'Conquistador español que sometió al Imperio inca|hernan cortes',
                'Reino cristiano de la península ibérica medieval|hungria',
                'Hundimiento que provocó la guerra hispano-estadounidense|hundimiento del maine',
                'Sistema político donde gobierna un monarca absoluto|hegemonia',
                'Región histórica donde se desarrolló la cultura sumeria|hibernia',
                'Nación asiática antigua rival del Imperio persa|hatti',
                'Pueblo precolombino que dominó Honduras|hohokam',
                'Primera era de la prehistoria|hadico'
            ]
        },
        I: {
            contains: [
                'Antigua civilización que construyó Machu Picchu|inca',
                'Pueblo germánico que invadió Italia en 568|lombardos',
                'Sistema económico japonés del periodo Meiji|industrializacion',
                'Política de no intervención de EE.UU. en Europa|doctrina monroe',
                'Pueblos que habitaron la India védica|indoarios',
                'Ciudad donde empezó la Primera Guerra Mundial|sarajevo',
                'Imperio que dominó Anatolia en la Edad del Bronce|hitita',
                'Movimiento artístico que sucedió al Renacimiento|manierismo',
                'Proceso de expulsión de judíos de España en 1492|inquisicion',
                'Ruta comercial marítima portuguesa hacia la India|carreira da india'
            ],
            starts: [
                'Movimiento intelectual europeo del siglo XVIII|ilustracion',
                'Imperio islámico con capital en Bagdad|imperio abasi',
                'Último territorio español en América hasta 1898|islas filipinas',
                'Líder pacifista de la independencia india|indira gandhi',
                'Sistema político basado en igualdad social|igualitarismo',
                'Pueblo precolombino conocido por Chichén Itzá|itza',
                'Archipiélago del Pacífico anexionado por EE.UU.|islas hawai',
                'Cueva prehistórica famosa por pinturas rupestres|isturitz',
                'Religión monoteísta fundada por Mahoma|islam',
                'Primera guerra entre Roma y Cartago|primera guerra punica'
            ]
        },
        J: {
            contains: [
                'Conquistador español que subyugó al Imperio azteca|jeronimo de aguilar',
                'Pueblo prerromano del norte de la península ibérica|judios',
                'Ciudad alemana sede de los juicios contra nazis|nuremberg',
                'Zona de exclusión militar en Palestina tras 1967|cisjordania',
                'Primer rey de Israel según la Biblia|jehu',
                'Religión monoteísta nacida en Oriente Próximo|judaismo',
                'Movimiento intelectual que influyó en Kant|ilustracion',
                'Pueblo nómada de las estepas euroasiáticas|jazaros',
                'Batalla decisiva del desembarco aliado 1944|juno',
                'Cuerpo militar de élite otomano|janizaros'
            ],
            starts: [
                'Corriente artística del siglo XX en EE.UU.|jazz',
                'Rey bíblico famoso por su sabiduría|josias',
                'Capital de Judea en la Antigüedad|jerusalen',
                'Nobleza terrateniente prusiana|junker',
                'Orden religioso-militar de las Cruzadas|joanistas',
                'País europeo invadido por Alemania en 1941|yugoslavia',
                'Dios supremo en el judaísmo|jave',
                'Día sagrado de descanso judío|jueves santo',
                'Famoso filósofo alemán del idealismo|jaspers',
                'Península europea donde se originó la cultura vikinga|jutlandia'
            ]
        },
        K: {
            contains: [
                'Lengua escrita de la antigua Mesopotamia|kurdos',
                'Imperio asiático unificado por Gengis Kan|kanato',
                'Región de Europa oriental famosa por conflictos|kosovo',
                'Sistema de trabajos colectivos soviético|koljoz',
                'Ciudad japonesa bombardeada en 1945|nagasaki',
                'Rey anglosajón famoso por su resistencia a los vikingos|knud',
                'Pueblo de la estepa aliado de los hunos|kiptchak',
                'Estado europeo medieval en torno al Volga|kanato de kazan',
                'Isla del Pacífico usada por EE.UU. en la Segunda Guerra Mundial|kwajalein',
                'Arte de teatro tradicional japonés|kabuki'
            ],
            starts: [
                'Líder soviético durante la Crisis de los Misiles|khrushchev',
                'Emperador mongol nieto de Gengis Kan|kublai',
                'Capital de Ucrania|kiev',
                'Política económica alemana tras 1871|kulturkampf',
                'Región desértica del norte de África|kalahari',
                'Pueblo indígena de Alaska|koniag',
                'Deidad suprema del hinduismo|krishna',
                'Movimiento artístico ruso de inicios del XX|konstruktivismo',
                'Isla japonesa donde se firmó la rendición|kure',
                'Corriente filosófica del siglo XX influida por Heidegger|kierkegaardianismo'
            ]
        },
        L: {
            contains: [
                'Primer emperador romano|julio cesar',
                'Movimiento social inglés contra el maquinismo|ludismo',
                'Sistema económico basado en la propiedad privada|capitalismo',
                'Ruta comercial medieval europea|liga hanseatica',
                'Primera dinastía china|shang',
                'Movimiento artístico que precedió al Renacimiento|realismo',
                'Ciudad española donde los Reyes Católicos se casaron|toledo',
                'Intento de golpe de Hitler en 1923|putsch de munich',
                'Tributo obligatorio medieval|obligacion feudal',
                'Imperio americano conquistado por Pizarro|virreinato'
            ],
            starts: [
                'Último rey de Francia antes de la Revolución|luis xvi',
                'Documento fundacional de Inglaterra en 1215|carta magna',
                'País europeo invadido por Alemania en 1940|luxemburgo',
                'Arte anterior al paleolítico|litico',
                'Ciudad mítica fundada por Eneas en Italia|lavinium',
                'Corriente económica clásica del siglo XVIII|laissez-faire',
                'Pueblo germánico aliado de Roma|langobardos',
                'Nombre antiguo de Leópolis|lemberg',
                'Batalla naval de 1571 contra los turcos|lepanto',
                'Antigua ciudad fenicia en el actual Líbano|lucania'
            ]
        }
    },
    trivia: {
        basico: [
            {
                question: '¿En qué año llegó Cristóbal Colón a América?',
                options: ['1490', '1492', '1494', '1496'],
                correct: 1,
                explanation: 'Cristóbal Colón llegó a América el 12 de octubre de 1492, marcando el inicio de la era de los descubrimientos.'
            },
            {
                question: '¿Quién fue el primer emperador romano?',
                options: ['Julio César', 'Augusto', 'Nerón', 'Trajano'],
                correct: 1,
                explanation: 'Augusto (Octavio) fue el primer emperador romano, gobernando desde el 27 a.C. hasta el 14 d.C.'
            },
            {
                question: '¿En qué país se construyeron las pirámides más famosas?',
                options: ['México', 'Perú', 'Egipto', 'China'],
                correct: 2,
                explanation: 'Las pirámides más famosas del mundo se encuentran en Egipto, especialmente las de Giza.'
            },
            {
                question: '¿Quién pintó la Mona Lisa?',
                options: ['Miguel Ángel', 'Leonardo da Vinci', 'Rafael', 'Donatello'],
                correct: 1,
                explanation: 'Leonardo da Vinci pintó la Mona Lisa entre 1503 y 1519, siendo una de las obras más famosas del Renacimiento.'
            },
            {
                question: '¿En qué año terminó la Segunda Guerra Mundial?',
                options: ['1944', '1945', '1946', '1947'],
                correct: 1,
                explanation: 'La Segunda Guerra Mundial terminó en 1945 con la rendición de Japón tras las bombas atómicas.'
            },
            {
                question: '¿Cuál fue la primera civilización en desarrollar la escritura?',
                options: ['Egipcios', 'Griegos', 'Sumerios', 'Chinos'],
                correct: 2,
                explanation: 'Los sumerios desarrollaron la escritura cuneiforme alrededor del 3200 a.C., siendo el primer sistema de escritura conocido.'
            },
            {
                question: '¿Quién fue el líder de la independencia de la India?',
                options: ['Nehru', 'Gandhi', 'Jinnah', 'Bose'],
                correct: 1,
                explanation: 'Mahatma Gandhi lideró el movimiento de independencia de la India a través de la resistencia no violenta.'
            },
            {
                question: '¿En qué año cayó el Muro de Berlín?',
                options: ['1987', '1988', '1989', '1990'],
                correct: 2,
                explanation: 'El Muro de Berlín cayó el 9 de noviembre de 1989, simbolizando el fin de la Guerra Fría.'
            }
        ],
        intermedio: [
            {
                question: '¿Qué evento marcó el inicio de la Primera Guerra Mundial?',
                options: ['Invasión de Polonia', 'Asesinato del Archiduque Francisco Fernando', 'Hundimiento del Lusitania', 'Revolución Rusa'],
                correct: 1,
                explanation: 'El asesinato del Archiduque Francisco Fernando en Sarajevo el 28 de junio de 1914 desencadenó la Primera Guerra Mundial.'
            },
            {
                question: '¿En qué siglo ocurrió el Renacimiento?',
                options: ['Siglo XIII', 'Siglo XIV-XVI', 'Siglo XVII', 'Siglo XVIII'],
                correct: 1,
                explanation: 'El Renacimiento fue un movimiento cultural que se desarrolló principalmente entre los siglos XIV y XVI, comenzando en Italia.'
            },
            {
                question: '¿Quién escribió "El Príncipe"?',
                options: ['Dante Alighieri', 'Nicolás Maquiavelo', 'Thomas Hobbes', 'John Locke'],
                correct: 1,
                explanation: 'Nicolás Maquiavelo escribió "El Príncipe" en 1513, una obra fundamental sobre teoría política.'
            },
            {
                question: '¿Qué imperio fue conocido como "el imperio donde nunca se pone el sol"?',
                options: ['Imperio Romano', 'Imperio Español', 'Imperio Británico', 'Imperio Otomano'],
                correct: 2,
                explanation: 'El Imperio Británico fue conocido así porque se extendía por todo el mundo, siempre era de día en alguna parte.'
            },
            {
                question: '¿En qué año comenzó la Revolución Francesa?',
                options: ['1787', '1789', '1791', '1793'],
                correct: 1,
                explanation: 'La Revolución Francesa comenzó en 1789 con la toma de la Bastilla el 14 de julio.'
            },
            {
                question: '¿Quién fue el último zar de Rusia?',
                options: ['Alejandro III', 'Nicolás II', 'Pedro el Grande', 'Iván el Terrible'],
                correct: 1,
                explanation: 'Nicolás II fue el último zar de Rusia, abdicó en 1917 durante la Revolución Rusa.'
            },
            {
                question: '¿Qué tratado puso fin a la Guerra de los Cien Años?',
                options: ['Tratado de París', 'Tratado de Picquigny', 'Tratado de Troyes', 'Tratado de Calais'],
                correct: 1,
                explanation: 'El Tratado de Picquigny en 1475 puso fin efectivamente a la Guerra de los Cien Años.'
            },
            {
                question: '¿En qué batalla fue derrotado definitivamente Napoleón?',
                options: ['Austerlitz', 'Waterloo', 'Leipzig', 'Borodino'],
                correct: 1,
                explanation: 'Napoleón fue derrotado definitivamente en la Batalla de Waterloo en 1815.'
            }
        ],
        avanzado: [
            {
                question: '¿Qué tratado estableció el equilibrio de poder en Europa tras las guerras napoleónicas?',
                options: ['Tratado de Versalles', 'Congreso de Viena', 'Paz de Westfalia', 'Tratado de Utrecht'],
                correct: 1,
                explanation: 'El Congreso de Viena (1814-1815) reorganizó Europa tras la derrota de Napoleón, estableciendo un nuevo equilibrio de poder.'
            },
            {
                question: '¿Qué doctrina justificó la expansión estadounidense hacia el oeste?',
                options: ['Doctrina Monroe', 'Destino Manifiesto', 'Doctrina Truman', 'Plan Marshall'],
                correct: 1,
                explanation: 'El Destino Manifiesto fue la creencia de que Estados Unidos tenía el derecho divino de expandirse por todo el continente.'
            },
            {
                question: '¿Qué conferencia dividió África entre las potencias europeas?',
                options: ['Conferencia de París', 'Conferencia de Berlín', 'Conferencia de Viena', 'Conferencia de Londres'],
                correct: 1,
                explanation: 'La Conferencia de Berlín (1884-1885) dividió África entre las potencias coloniales europeas.'
            },
            {
                question: '¿Qué evento precipitó la entrada de Estados Unidos en la Primera Guerra Mundial?',
                options: ['Hundimiento del Lusitania', 'Telegrama Zimmermann', 'Revolución Rusa', 'Batalla de Verdún'],
                correct: 1,
                explanation: 'El Telegrama Zimmermann, interceptado en 1917, propuso una alianza alemana-mexicana contra Estados Unidos.'
            },
            {
                question: '¿Qué plan económico ayudó a reconstruir Europa después de la Segunda Guerra Mundial?',
                options: ['Plan Dawes', 'Plan Marshall', 'Plan Morgenthau', 'Plan Schuman'],
                correct: 1,
                explanation: 'El Plan Marshall (1947-1951) proporcionó ayuda económica masiva para reconstruir Europa occidental.'
            },
            {
                question: '¿Qué doctrina política defendía la "pureza racial" en la Alemania nazi?',
                options: ['Pangermanismo', 'Lebensraum', 'Völkisch', 'Herrenvolk'],
                correct: 3,
                explanation: 'La ideología Herrenvolk (raza superior) justificó las políticas raciales nazis y el Holocausto.'
            }
        ]
    },
    cronologia: {
        basico: [
            { name: 'Caída del Imperio Romano de Occidente', year: 476, description: 'Fin del Imperio Romano en Europa Occidental' },
            { name: 'Descubrimiento de América', year: 1492, description: 'Cristóbal Colón llega al Nuevo Mundo' },
            { name: 'Invención de la imprenta', year: 1440, description: 'Gutenberg revoluciona la comunicación' },
            { name: 'Revolución Francesa', year: 1789, description: 'Inicio de la transformación política de Francia' },
            { name: 'Primera Guerra Mundial', year: 1914, description: 'Comienza el primer conflicto mundial' },
            { name: 'Revolución Industrial', year: 1760, description: 'Transformación económica y social' }
        ],
        intermedio: [
            { name: 'Batalla de Hastings', year: 1066, description: 'Conquista normanda de Inglaterra' },
            { name: 'Peste Negra en Europa', year: 1347, description: 'Pandemia que devastó Europa' },
            { name: 'Toma de Constantinopla', year: 1453, description: 'Fin del Imperio Bizantino' },
            { name: 'Reforma Protestante', year: 1517, description: 'Martín Lutero inicia la Reforma' },
            { name: 'Guerra de los Treinta Años', year: 1618, description: 'Conflicto religioso europeo' },
            { name: 'Revolución Gloriosa', year: 1688, description: 'Cambio político en Inglaterra' },
            { name: 'Independencia de Estados Unidos', year: 1776, description: 'Declaración de Independencia' },
            { name: 'Congreso de Viena', year: 1815, description: 'Reorganización de Europa post-napoleónica' }
        ],
        avanzado: [
            { name: 'Paz de Westfalia', year: 1648, description: 'Fin de la Guerra de los Treinta Años' },
            { name: 'Revolución de 1848', year: 1848, description: 'Ola revolucionaria en Europa' },
            { name: 'Unificación alemana', year: 1871, description: 'Creación del Imperio Alemán' },
            { name: 'Conferencia de Berlín', year: 1884, description: 'Reparto de África' },
            { name: 'Revolución Rusa', year: 1917, description: 'Caída del zarismo' },
            { name: 'Tratado de Versalles', year: 1919, description: 'Fin oficial de la Primera Guerra Mundial' },
            { name: 'Crack del 29', year: 1929, description: 'Gran Depresión económica' },
            { name: 'Conferencia de Yalta', year: 1945, description: 'División del mundo post-guerra' }
        ]
    },
    emparejar: {
        basico: [
            { character: 'Napoleón Bonaparte', achievement: 'Código Napoleónico', description: 'Sistema legal que influyó en todo el mundo' },
            { character: 'Leonardo da Vinci', achievement: 'La Mona Lisa', description: 'Obra maestra del Renacimiento' },
            { character: 'Galileo Galilei', achievement: 'Telescopio', description: 'Revolucionó la astronomía' },
            { character: 'Cleopatra VII', achievement: 'Reina de Egipto', description: 'Última faraona del Antiguo Egipto' },
            { character: 'Cristóbal Colón', achievement: 'Descubrimiento de América', description: 'Unió dos mundos' },
            { character: 'Isaac Newton', achievement: 'Ley de Gravedad', description: 'Fundamentos de la física moderna' }
        ],
        intermedio: [
            { character: 'Martín Lutero', achievement: 'Reforma Protestante', description: 'Transformó el cristianismo europeo' },
            { character: 'Marco Polo', achievement: 'Ruta de la Seda', description: 'Conectó Oriente y Occidente' },
            { character: 'Alejandro Magno', achievement: 'Imperio Macedonio', description: 'Conquistó desde Grecia hasta India' },
            { character: 'Juana de Arco', achievement: 'Liberación de Orleans', description: 'Heroína de la Guerra de los Cien Años' },
            { character: 'Carlomagno', achievement: 'Imperio Carolingio', description: 'Unificó gran parte de Europa occidental' },
            { character: 'Maquiavelo', achievement: 'El Príncipe', description: 'Tratado fundamental de ciencia política' }
        ],
        avanzado: [
            { character: 'Otto von Bismarck', achievement: 'Unificación alemana', description: 'Creó el Imperio Alemán moderno' },
            { character: 'Metternich', achievement: 'Congreso de Viena', description: 'Arquitecto del equilibrio europeo' },
            { character: 'Robespierre', achievement: 'Reino del Terror', description: 'Fase radical de la Revolución Francesa' },
            { character: 'Cavour', achievement: 'Unificación italiana', description: 'Artífice del Risorgimento' },
            { character: 'Talleyrand', achievement: 'Diplomacia europea', description: 'Maestro de la diplomacia napoleónica' },
            { character: 'Clausewitz', achievement: 'Teoría militar', description: 'Definió la guerra como política por otros medios' }
        ]
    }
};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
});

function initializePage() {
    // Configurar nivel inicial
    updateLevelSelection();
    
    // Animaciones de entrada
    animateOnScroll();
    
    // Configurar menú móvil
    setupMobileMenu();
}

function setupEventListeners() {
    // Selector de nivel
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentLevel = this.dataset.level;
            updateLevelSelection();
        });
    });
    
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Menú móvil
    document.querySelector('.mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
}

function updateLevelSelection() {
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.level === currentLevel) {
            btn.classList.add('active');
        }
    });
}

function scrollToGames() {
    document.getElementById('juegos').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function startGame(gameType) {
    currentGame = gameType;
    resetGameStats();
    
    const gameArea = document.getElementById('game-area');
    const gameContent = document.getElementById('game-content');
    
    // Mostrar área de juego
    gameArea.classList.remove('hidden');
    
    // Cargar contenido del juego
    switch(gameType) {
        case 'pasapalabra':
            loadPasapalabraGame();
            break;
        case 'trivia':
            loadTriviaGame();
            break;
        case 'cronologia':
            loadCronologiaGame();
            break;
        case 'emparejar':
            loadEmparejarGame();
            break;
        case 'aventura':
            loadAventuraGame();
            break;
    }
    
    updateGameStats();
}

function closeGame() {
    const gameArea = document.getElementById('game-area');
    gameArea.classList.add('hidden');
    currentGame = null;
}

function resetGameStats() {
    gameStats = {
        score: 0,
        correct: 0,
        incorrect: 0
    };
}

function updateGameStats() {
    document.getElementById('score').textContent = gameStats.score;
    document.getElementById('correct').textContent = gameStats.correct;
    document.getElementById('incorrect').textContent = gameStats.incorrect;
}

function addScore(points) {
    gameStats.score += points;
    gameStats.correct++;
    updateGameStats();
    showFeedback(true);
}

function addError() {
    gameStats.incorrect++;
    updateGameStats();
    showFeedback(false);
}

function showFeedback(isCorrect) {
    const feedback = document.createElement('div');
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = isCorrect ? 
        '<i class="fas fa-check"></i> ¡Correcto!' : 
        '<i class="fas fa-times"></i> Incorrecto';
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

// Juego Pasapalabra
function loadPasapalabraGame() {
    const gameContent = document.getElementById('game-content');
    
    // Generar el alfabeto completo
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    gameContent.innerHTML = `
        <div class="pasapalabra-container">
            <h2>Pasapalabra Histórico</h2>
            <div class="game-info">
                <p>Responde preguntas para cada letra del alfabeto. El juego avanza automáticamente.</p>
                <div class="pasapalabra-stats">
                    <span>Letra actual: <strong id="current-letter-display">A</strong></span>
                    <span>Progreso: <strong id="letter-progress">1/26</strong></span>
                </div>
            </div>
            <div class="rosco">
                ${alphabet.map((letter, index) => `
                    <div class="letter-circle" data-letter="${letter}" data-index="${index}">
                        <span class="letter">${letter}</span>
                    </div>
                `).join('')}
            </div>
            <div class="question-area">
                <div class="question-text" id="current-question">
                    Presiona "Comenzar" para empezar con la letra A
                </div>
                <div class="answer-input">
                    <input type="text" id="answer-input" placeholder="Tu respuesta..." disabled>
                    <button id="answer-btn" onclick="checkPasapalabraAnswer()" disabled>Responder</button>
                    <button id="start-btn" onclick="startPasapalabra()">Comenzar</button>
                </div>
            </div>
        </div>
    `;
    
    // Agregar estilos específicos del juego
    addGameStyles('pasapalabra');
    
    // Configurar el juego
    setupPasapalabraGame();
}

function setupPasapalabraGame() {
    // Variables del juego
    window.pasapalabraState = {
        currentLetterIndex: 0,
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        questions: [],
        gameStarted: false,
        completed: false
    };
    
    // Generar preguntas aleatorias para cada letra
    generatePasapalabraQuestions();
    
    // Enter para responder
    document.getElementById('answer-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !this.disabled) {
            checkPasapalabraAnswer();
        }
    });
}

function generatePasapalabraQuestions() {
    const state = window.pasapalabraState;
    const contains = gameData.pasapalabra.contains;
    const starts = gameData.pasapalabra.starts;
    
    state.questions = [];
    
    state.alphabet.forEach(letter => {
        const containsQuestions = contains[letter] || [];
        const startsQuestions = starts[letter] || [];
        const allQuestions = [...containsQuestions, ...startsQuestions];
        
        if (allQuestions.length > 0) {
            // Seleccionar una pregunta aleatoria
            const randomQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
            const [question, answer] = randomQuestion.split('|');
            
            // Determinar si contiene o empieza por la letra
            const type = containsQuestions.includes(randomQuestion) ? 'CONTIENE' : 'EMPIEZA POR';
            
            state.questions.push({
                letter: letter,
                question: question,
                answer: answer.toLowerCase(),
                type: type
            });
        } else {
            // Pregunta por defecto si no hay datos
            state.questions.push({
                letter: letter,
                question: `Palabra histórica que ${letter === 'A' ? 'empieza' : 'contiene'} la letra ${letter}`,
                answer: letter.toLowerCase(),
                type: letter === 'A' ? 'EMPIEZA POR' : 'CONTIENE'
            });
        }
    });
}

function startPasapalabra() {
    const state = window.pasapalabraState;
    state.gameStarted = true;
    state.currentLetterIndex = 0;
    
    // Habilitar controles
    document.getElementById('answer-input').disabled = false;
    document.getElementById('answer-btn').disabled = false;
    document.getElementById('start-btn').style.display = 'none';
    
    // Mostrar primera pregunta
    showCurrentPasapalabraQuestion();
}

function showCurrentPasapalabraQuestion() {
    const state = window.pasapalabraState;
    const currentQuestion = state.questions[state.currentLetterIndex];
    const currentLetter = state.alphabet[state.currentLetterIndex];
    
    // Actualizar interfaz
    document.getElementById('current-letter-display').textContent = currentLetter;
    document.getElementById('letter-progress').textContent = `${state.currentLetterIndex + 1}/26`;
    
    // Resaltar letra actual en el rosco
    document.querySelectorAll('.letter-circle').forEach(circle => {
        circle.classList.remove('active');
        if (circle.dataset.letter === currentLetter) {
            circle.classList.add('active');
        }
    });
    
    // Mostrar pregunta
    document.getElementById('current-question').innerHTML = `
        <div class="question-header">
            <strong>Letra ${currentLetter}</strong> - ${currentQuestion.type}
        </div>
        <div class="question-content">
            ${currentQuestion.question}
        </div>
    `;
    
    // Limpiar y enfocar input
    document.getElementById('answer-input').value = '';
    document.getElementById('answer-input').focus();
}

function checkPasapalabraAnswer() {
    const state = window.pasapalabraState;
    const userAnswer = document.getElementById('answer-input').value.toLowerCase().trim();
    const currentQuestion = state.questions[state.currentLetterIndex];
    const currentLetter = state.alphabet[state.currentLetterIndex];
    
    if (!userAnswer) {
        showExplanation('¡Escribe una respuesta!');
        return;
    }
    
    const isCorrect = userAnswer === currentQuestion.answer;
    const currentCircle = document.querySelector(`[data-letter="${currentLetter}"]`);
    
    if (isCorrect) {
        addScore(15);
        currentCircle.classList.add('correct');
        
        setTimeout(() => {
            showExplanation(`¡Correcto! La respuesta era: ${currentQuestion.answer}`);
            nextPasapalabraQuestion();
        }, 1000);
    } else {
        addError();
        currentCircle.classList.add('incorrect');
        
        setTimeout(() => {
            showExplanation(`Incorrecto. La respuesta correcta era: ${currentQuestion.answer}`);
            nextPasapalabraQuestion();
        }, 1500);
    }
}

function nextPasapalabraQuestion() {
    const state = window.pasapalabraState;
    state.currentLetterIndex++;
    
    if (state.currentLetterIndex >= state.alphabet.length) {
        // Juego completado
        finishPasapalabra();
    } else {
        // Siguiente pregunta
        setTimeout(() => {
            showCurrentPasapalabraQuestion();
        }, 2000);
    }
}

function finishPasapalabra() {
    const state = window.pasapalabraState;
    state.completed = true;
    
    // Deshabilitar controles
    document.getElementById('answer-input').disabled = true;
    document.getElementById('answer-btn').disabled = true;
    
    // Mostrar resultados
    setTimeout(() => {
        showPasapalabraResults();
    }, 1000);
}

function showPasapalabraResults() {
    const gameContent = document.getElementById('game-content');
    const correctAnswers = gameStats.correct;
    const totalQuestions = 26;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    gameContent.innerHTML = `
        <div class="results-container">
            <h2>¡Pasapalabra Completado!</h2>
            <div class="results-stats">
                <div class="stat-item">
                    <i class="fas fa-star"></i>
                    <span>Puntuación: ${gameStats.score}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-check"></i>
                    <span>Correctas: ${correctAnswers}/${totalQuestions}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-percentage"></i>
                    <span>Precisión: ${percentage}%</span>
                </div>
            </div>
            <div class="alphabet-summary">
                <h3>Resumen del Alfabeto:</h3>
                <div class="alphabet-grid">
                    ${window.pasapalabraState.alphabet.map((letter, index) => {
                        const question = window.pasapalabraState.questions[index];
                        const circle = document.querySelector(`[data-letter="${letter}"]`);
                        const isCorrect = circle && circle.classList.contains('correct');
                        return `
                            <div class="alphabet-item ${isCorrect ? 'correct' : 'incorrect'}">
                                <div class="alphabet-letter">${letter}</div>
                                <div class="alphabet-answer">${question.answer}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <div class="achievement">
                ${getAchievement(percentage)}
            </div>
            <button class="play-again-btn" onclick="startGame('pasapalabra')">Jugar de nuevo</button>
        </div>
    `;
}

// Juego Trivia
function loadTriviaGame() {
    const gameContent = document.getElementById('game-content');
    const questions = gameData.trivia[currentLevel];
    
    gameContent.innerHTML = `
        <div class="trivia-container">
            <h2>Trivia Histórica</h2>
            <div class="progress-bar">
                <div class="progress" id="trivia-progress"></div>
            </div>
            <div class="question-container" id="trivia-question">
                <!-- Las preguntas se cargarán aquí -->
            </div>
        </div>
    `;
    
    addGameStyles('trivia');
    startTriviaGame(questions);
}

function startTriviaGame(questions) {
    let currentQuestionIndex = 0;
    
    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showTriviaResults();
            return;
        }
        
        const question = questions[currentQuestionIndex];
        const questionContainer = document.getElementById('trivia-question');
        
        questionContainer.innerHTML = `
            <div class="question">
                <h3>Pregunta ${currentQuestionIndex + 1} de ${questions.length}</h3>
                <p>${question.question}</p>
            </div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <button class="option-btn" data-index="${index}">
                        ${option}
                    </button>
                `).join('')}
            </div>
        `;
        
        // Agregar event listeners a los botones de opciones
        const optionButtons = questionContainer.querySelectorAll('.option-btn');
        optionButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                selectTriviaAnswer(index, question.correct, question.explanation);
            });
        });
        
        // Actualizar barra de progreso
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        document.getElementById('trivia-progress').style.width = progress + '%';
    }
    
    window.nextTriviaQuestion = () => {
        currentQuestionIndex++;
        setTimeout(showQuestion, 2000);
    };
    
    showQuestion();
}

function selectTriviaAnswer(selectedIndex, correctIndex, explanation) {
    const options = document.querySelectorAll('.option-btn');
    
    // Verificar si ya se ha respondido (prevenir múltiples clics)
    if (options[0].disabled) {
        return;
    }
    
    // Deshabilitar botones y remover event listeners
    options.forEach(btn => {
        btn.disabled = true;
        btn.style.pointerEvents = 'none';
    });
    
    // Mostrar respuesta correcta
    options[correctIndex].classList.add('correct');
    
    if (selectedIndex === correctIndex) {
        addScore(15);
        options[selectedIndex].classList.add('selected-correct');
    } else {
        addError();
        options[selectedIndex].classList.add('selected-incorrect');
    }
    
    // Mostrar explicación
    setTimeout(() => {
        showExplanation(explanation);
        window.nextTriviaQuestion();
    }, 1500);
}

function showTriviaResults() {
    const gameContent = document.getElementById('game-content');
    const percentage = Math.round((gameStats.correct / (gameStats.correct + gameStats.incorrect)) * 100);
    
    gameContent.innerHTML = `
        <div class="results-container">
            <h2>¡Juego Completado!</h2>
            <div class="results-stats">
                <div class="stat-item">
                    <i class="fas fa-star"></i>
                    <span>Puntuación: ${gameStats.score}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-check"></i>
                    <span>Correctas: ${gameStats.correct}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-times"></i>
                    <span>Incorrectas: ${gameStats.incorrect}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-percentage"></i>
                    <span>Precisión: ${percentage}%</span>
                </div>
            </div>
            <div class="achievement">
                ${getAchievement(percentage)}
            </div>
            <button class="play-again-btn" onclick="startGame('trivia')">Jugar de nuevo</button>
        </div>
    `;
}

// Juego Cronología
function loadCronologiaGame() {
    const gameContent = document.getElementById('game-content');
    const events = gameData.cronologia[currentLevel];
    
    gameContent.innerHTML = `
        <div class="cronologia-container">
            <h2>Cronología Interactiva</h2>
            <p>Arrastra los eventos al lugar correcto en la línea de tiempo</p>
            <div class="game-instructions">
                <i class="fas fa-info-circle"></i>
                <span>Ordena los eventos de más antiguo a más reciente</span>
            </div>
            <div class="timeline-container">
                <div class="timeline">
                    <div class="timeline-line"></div>
                    <div class="timeline-slots" id="timeline-slots">
                        <!-- Slots para eventos se generarán aquí -->
                    </div>
                </div>
            </div>
            <div class="events-to-sort">
                <h3>Eventos para ordenar:</h3>
                <div class="draggable-events" id="draggable-events">
                    <!-- Eventos arrastrables aquí -->
                </div>
            </div>
            <div class="cronologia-controls">
                <button class="check-order-btn" onclick="checkCronologiaOrder()">
                    <i class="fas fa-check"></i>
                    Verificar Orden
                </button>
                <button class="reset-cronologia-btn" onclick="resetCronologia()">
                    <i class="fas fa-redo"></i>
                    Reiniciar
                </button>
            </div>
        </div>
    `;
    
    addGameStyles('cronologia');
    setupCronologiaEvents(events);
}

function loadEmparejarGame() {
    const gameContent = document.getElementById('game-content');
    const pairs = gameData.emparejar[currentLevel];
    
    gameContent.innerHTML = `
        <div class="emparejar-container">
            <h2>Emparejar Personajes y Hechos</h2>
            <p>Haz clic en un personaje y luego en su logro correspondiente</p>
            <div class="game-instructions">
                <i class="fas fa-info-circle"></i>
                <span>Conecta cada personaje histórico con su logro más importante</span>
            </div>
            <div class="matching-game">
                <div class="characters-column">
                    <h3><i class="fas fa-user"></i> Personajes</h3>
                    <div class="matching-items" id="characters">
                        <!-- Personajes aquí -->
                    </div>
                </div>
                <div class="achievements-column">
                    <h3><i class="fas fa-trophy"></i> Logros</h3>
                    <div class="matching-items" id="achievements">
                        <!-- Logros aquí -->
                    </div>
                </div>
            </div>
            <div class="emparejar-controls">
                <div class="matches-counter">
                    <span>Parejas encontradas: <strong id="matches-count">0</strong>/${pairs.length}</span>
                </div>
                <button class="reset-emparejar-btn" onclick="resetEmparejar()">
                    <i class="fas fa-redo"></i>
                    Reiniciar
                </button>
            </div>
        </div>
    `;
    
    addGameStyles('emparejar');
    setupEmparejarEvents(pairs);
}

function loadAventuraGame() {
    const gameContent = document.getElementById('game-content');
    
    gameContent.innerHTML = `
        <div class="aventura-container">
            <h2>Elige tu Aventura Histórica</h2>
            <div class="adventure-progress">
                <div class="progress-bar">
                    <div class="progress" id="adventure-progress"></div>
                </div>
                <span class="progress-text">Capítulo <span id="chapter-number">1</span> de 5</span>
            </div>
            <div class="story-content" id="story-content">
                <!-- El contenido se cargará dinámicamente -->
            </div>
        </div>
    `;
    
    addGameStyles('aventura');
    startAdventure();
}

// Funciones auxiliares
function setupCronologiaEvents(events) {
    // Mezclar eventos
    const shuffledEvents = [...events].sort(() => Math.random() - 0.5);
    
    // Limpiar contenedores existentes ANTES de crear nuevos elementos
    const timelineSlots = document.getElementById('timeline-slots');
    const draggableContainer = document.getElementById('draggable-events');
    
    // Limpiar completamente los contenedores
    timelineSlots.innerHTML = '';
    draggableContainer.innerHTML = '';
    
    // Crear slots en la línea de tiempo
    events.forEach((_, index) => {
        const slot = document.createElement('div');
        slot.className = 'timeline-slot';
        slot.dataset.position = index;
        slot.innerHTML = `<div class="slot-number">${index + 1}</div>`;
        timelineSlots.appendChild(slot);
    });
    
    // Crear eventos arrastrables
    shuffledEvents.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = 'draggable-event';
        eventElement.draggable = true;
        eventElement.innerHTML = `
            <div class="event-name">${event.name}</div>
            <div class="event-description">${event.description}</div>
        `;
        eventElement.dataset.year = event.year;
        eventElement.dataset.name = event.name;
        
        // Eventos de arrastrar
        eventElement.addEventListener('dragstart', handleDragStart);
        eventElement.addEventListener('dragend', handleDragEnd);
        
        draggableContainer.appendChild(eventElement);
    });
    
    // Configurar slots como zonas de drop
    document.querySelectorAll('.timeline-slot').forEach(slot => {
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('drop', handleDrop);
        slot.addEventListener('dragenter', handleDragEnter);
        slot.addEventListener('dragleave', handleDragLeave);
    });
    
    // Guardar eventos originales para verificación
    window.cronologiaEvents = events.sort((a, b) => a.year - b.year);
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.name);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.target.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    const eventName = e.dataTransfer.getData('text/plain');
    const draggedElement = document.querySelector(`[data-name="${eventName}"]`);
    
    if (draggedElement && !e.target.querySelector('.draggable-event')) {
        // Mover el elemento al slot
        const eventClone = draggedElement.cloneNode(true);
        eventClone.classList.add('placed');
        eventClone.draggable = false;
        
        e.target.appendChild(eventClone);
        draggedElement.remove();
    }
}

function checkCronologiaOrder() {
    const slots = document.querySelectorAll('.timeline-slot');
    const placedEvents = [];
    let allSlotsFilled = true;
    
    slots.forEach((slot, index) => {
        const eventInSlot = slot.querySelector('.draggable-event');
        if (eventInSlot) {
            placedEvents.push({
                position: index,
                year: parseInt(eventInSlot.dataset.year),
                name: eventInSlot.dataset.name
            });
        } else {
            allSlotsFilled = false;
        }
    });
    
    if (!allSlotsFilled) {
        showExplanation('¡Coloca todos los eventos en la línea de tiempo antes de verificar!');
        return;
    }
    
    // Verificar orden
    let correctOrder = true;
    let correctCount = 0;
    
    for (let i = 0; i < placedEvents.length - 1; i++) {
        if (placedEvents[i].year > placedEvents[i + 1].year) {
            correctOrder = false;
            break;
        }
    }
    
    // Marcar eventos correctos/incorrectos
    slots.forEach((slot, index) => {
        const eventInSlot = slot.querySelector('.draggable-event');
        const correctEvent = window.cronologiaEvents[index];
        
        if (eventInSlot && eventInSlot.dataset.name === correctEvent.name) {
            eventInSlot.classList.add('correct-position');
            correctCount++;
        } else if (eventInSlot) {
            eventInSlot.classList.add('incorrect-position');
        }
    });
    
    // Calcular puntuación
    const score = Math.round((correctCount / window.cronologiaEvents.length) * 100);
    gameStats.score += score;
    gameStats.correct += correctCount;
    gameStats.incorrect += (window.cronologiaEvents.length - correctCount);
    updateGameStats();
    
    // Mostrar resultados
    setTimeout(() => {
        showCronologiaResults(correctCount, window.cronologiaEvents.length, score);
    }, 1000);
}

function resetCronologia() {
    // Limpiar cualquier estado visual previo
    document.querySelectorAll('.timeline-slot').forEach(slot => {
        slot.classList.remove('drag-over');
        const event = slot.querySelector('.draggable-event');
        if (event) {
            event.remove();
        }
    });
    
    // Limpiar clases de estado de los eventos arrastrables
    document.querySelectorAll('.draggable-event').forEach(event => {
        event.classList.remove('dragging', 'correct-position', 'incorrect-position');
    });
    
    // Recargar eventos completamente
    const events = gameData.cronologia[currentLevel];
    setupCronologiaEvents(events);
}

function showCronologiaResults(correct, total, score) {
    const gameContent = document.getElementById('game-content');
    const percentage = Math.round((correct / total) * 100);
    
    gameContent.innerHTML = `
        <div class="results-container">
            <h2>¡Cronología Completada!</h2>
            <div class="results-stats">
                <div class="stat-item">
                    <i class="fas fa-star"></i>
                    <span>Puntuación: ${score}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-check"></i>
                    <span>Correctos: ${correct}/${total}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-percentage"></i>
                    <span>Precisión: ${percentage}%</span>
                </div>
            </div>
            <div class="timeline-summary">
                <h3>Orden Correcto:</h3>
                <div class="correct-timeline">
                    ${window.cronologiaEvents.map((event, index) => `
                        <div class="timeline-item">
                            <div class="timeline-year">${event.year}</div>
                            <div class="timeline-event">
                                <strong>${event.name}</strong>
                                <p>${event.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="achievement">
                ${getAchievement(percentage)}
            </div>
            <button class="play-again-btn" onclick="startGame('cronologia')">Jugar de nuevo</button>
        </div>
    `;
}

function setupEmparejarEvents(pairs) {
    const charactersContainer = document.getElementById('characters');
    const achievementsContainer = document.getElementById('achievements');
    
    // Mezclar logros para mayor dificultad
    const shuffledAchievements = [...pairs].sort(() => Math.random() - 0.5);
    
    // Crear elementos de personajes
    pairs.forEach((pair, index) => {
        const charElement = document.createElement('div');
        charElement.className = 'matching-item character';
        charElement.innerHTML = `
            <div class="item-content">
                <i class="fas fa-user-circle"></i>
                <span class="item-text">${pair.character}</span>
            </div>
        `;
        charElement.dataset.id = index;
        charElement.addEventListener('click', () => selectMatchingItem(charElement, 'character'));
        charactersContainer.appendChild(charElement);
    });
    
    // Crear elementos de logros (mezclados)
    shuffledAchievements.forEach((pair, shuffledIndex) => {
        const originalIndex = pairs.findIndex(p => p.character === pair.character);
        const achElement = document.createElement('div');
        achElement.className = 'matching-item achievement';
        achElement.innerHTML = `
            <div class="item-content">
                <i class="fas fa-medal"></i>
                <div class="achievement-info">
                    <span class="item-text">${pair.achievement}</span>
                    <small class="achievement-desc">${pair.description}</small>
                </div>
            </div>
        `;
        achElement.dataset.id = originalIndex;
        achElement.addEventListener('click', () => selectMatchingItem(achElement, 'achievement'));
        achievementsContainer.appendChild(achElement);
    });
    
    // Variables del juego
    window.emparejarState = {
        selectedCharacter: null,
        selectedAchievement: null,
        matches: 0,
        totalPairs: pairs.length,
        pairs: pairs
    };
}

function selectMatchingItem(element, type) {
    const state = window.emparejarState;
    
    // Si el elemento ya está emparejado, no hacer nada
    if (element.classList.contains('matched')) {
        return;
    }
    
    if (type === 'character') {
        // Deseleccionar personaje anterior si existe
        if (state.selectedCharacter) {
            state.selectedCharacter.classList.remove('selected');
        }
        
        state.selectedCharacter = element;
        element.classList.add('selected');
        
        // Si ya hay un logro seleccionado, intentar emparejar
        if (state.selectedAchievement) {
            checkMatch();
        }
    } else if (type === 'achievement') {
        // Deseleccionar logro anterior si existe
        if (state.selectedAchievement) {
            state.selectedAchievement.classList.remove('selected');
        }
        
        state.selectedAchievement = element;
        element.classList.add('selected');
        
        // Si ya hay un personaje seleccionado, intentar emparejar
        if (state.selectedCharacter) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const state = window.emparejarState;
    const charId = parseInt(state.selectedCharacter.dataset.id);
    const achId = parseInt(state.selectedAchievement.dataset.id);
    
    if (charId === achId) {
        // ¡Pareja correcta!
        state.selectedCharacter.classList.remove('selected');
        state.selectedAchievement.classList.remove('selected');
        state.selectedCharacter.classList.add('matched');
        state.selectedAchievement.classList.add('matched');
        
        // Mostrar conexión visual
        showMatchConnection(state.selectedCharacter, state.selectedAchievement);
        
        state.matches++;
        addScore(20);
        
        // Actualizar contador
        document.getElementById('matches-count').textContent = state.matches;
        
        // Mostrar información del emparejamiento
        const pair = state.pairs[charId];
        setTimeout(() => {
            showExplanation(`¡Correcto! ${pair.character} es famoso por ${pair.achievement}. ${pair.description}`);
        }, 500);
        
        // Verificar si el juego está completo
        if (state.matches === state.totalPairs) {
            setTimeout(() => {
                showEmparejarResults();
            }, 2000);
        }
    } else {
        // Pareja incorrecta
        state.selectedCharacter.classList.add('incorrect');
        state.selectedAchievement.classList.add('incorrect');
        
        addError();
        
        setTimeout(() => {
            state.selectedCharacter.classList.remove('incorrect');
            state.selectedAchievement.classList.remove('incorrect');
        }, 1000);
    }
    
    // Limpiar selecciones
    state.selectedCharacter.classList.remove('selected');
    state.selectedAchievement.classList.remove('selected');
    state.selectedCharacter = null;
    state.selectedAchievement = null;
}

function showMatchConnection(char, ach) {
    // Crear línea de conexión visual
    const connection = document.createElement('div');
    connection.className = 'match-connection';
    connection.innerHTML = '<i class="fas fa-check"></i>';
    
    const charRect = char.getBoundingClientRect();
    const achRect = ach.getBoundingClientRect();
    
    connection.style.position = 'fixed';
    connection.style.left = (charRect.right + achRect.left) / 2 + 'px';
    connection.style.top = (charRect.top + achRect.top) / 2 + 'px';
    connection.style.zIndex = '1000';
    
    document.body.appendChild(connection);
    
    setTimeout(() => {
        connection.remove();
    }, 2000);
}

function resetEmparejar() {
    // Limpiar elementos
    document.getElementById('characters').innerHTML = '';
    document.getElementById('achievements').innerHTML = '';
    
    // Reiniciar juego
    const pairs = gameData.emparejar[currentLevel];
    setupEmparejarEvents(pairs);
    
    // Resetear contador
    document.getElementById('matches-count').textContent = '0';
}

function showEmparejarResults() {
    const gameContent = document.getElementById('game-content');
    const state = window.emparejarState;
    const percentage = Math.round((gameStats.correct / (gameStats.correct + gameStats.incorrect)) * 100);
    
    gameContent.innerHTML = `
        <div class="results-container">
            <h2>¡Emparejamiento Completado!</h2>
            <div class="results-stats">
                <div class="stat-item">
                    <i class="fas fa-star"></i>
                    <span>Puntuación: ${gameStats.score}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-link"></i>
                    <span>Parejas: ${state.matches}/${state.totalPairs}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-percentage"></i>
                    <span>Precisión: ${percentage}%</span>
                </div>
            </div>
            <div class="pairs-summary">
                <h3>Parejas Correctas:</h3>
                <div class="pairs-list">
                    ${state.pairs.map(pair => `
                        <div class="pair-item">
                            <div class="pair-character">
                                <i class="fas fa-user"></i>
                                <strong>${pair.character}</strong>
                            </div>
                            <div class="pair-arrow">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="pair-achievement">
                                <i class="fas fa-trophy"></i>
                                <div>
                                    <strong>${pair.achievement}</strong>
                                    <small>${pair.description}</small>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="achievement">
                ${getAchievement(percentage)}
            </div>
            <button class="play-again-btn" onclick="startGame('emparejar')">Jugar de nuevo</button>
        </div>
    `;
}

// Datos de aventuras por nivel
const adventureData = {
    basico: {
        title: "El Descubrimiento de América",
        chapters: [
            {
                title: "El Primer Encuentro",
                text: "Eres Cristóbal Colón en 1492. Has llegado a una tierra desconocida. Los nativos se acercan a tu barco con curiosidad.",
                image: "🚢",
                choices: [
                    { text: "Acercarte pacíficamente con regalos", points: 20, next: 1 },
                    { text: "Mantener distancia y observar", points: 15, next: 1 },
                    { text: "Regresar inmediatamente al barco", points: 5, next: 1 }
                ]
            },
            {
                title: "Estableciendo Contacto",
                text: "Los nativos muestran interés en tus objetos. Tienes la oportunidad de intercambiar bienes y conocimientos.",
                image: "🤝",
                choices: [
                    { text: "Intercambiar espejos por oro", points: 10, next: 2 },
                    { text: "Enseñarles sobre tu cultura", points: 25, next: 2 },
                    { text: "Tomar lo que necesites por la fuerza", points: -10, next: 2 }
                ]
            },
            {
                title: "Explorando la Isla",
                text: "Los nativos te ofrecen guiarte por su territorio. Debes decidir cómo proceder con la exploración.",
                image: "🗺️",
                choices: [
                    { text: "Aceptar su guía y aprender de ellos", points: 30, next: 3 },
                    { text: "Explorar por tu cuenta", points: 15, next: 3 },
                    { text: "Quedarte en la playa", points: 5, next: 3 }
                ]
            },
            {
                title: "Documentando el Descubrimiento",
                text: "Es momento de registrar tus hallazgos para la historia. ¿Cómo describirás este nuevo mundo?",
                image: "📜",
                choices: [
                    { text: "Documentar con respeto hacia los nativos", points: 25, next: 4 },
                    { text: "Enfocarte en las riquezas encontradas", points: 15, next: 4 },
                    { text: "Exagerar los peligros del lugar", points: 5, next: 4 }
                ]
            },
            {
                title: "El Regreso",
                text: "Ha llegado el momento de regresar a España. ¿Qué legado dejarás en este primer encuentro entre mundos?",
                image: "⛵",
                choices: [
                    { text: "Prometer regresar como amigo", points: 30, next: -1 },
                    { text: "Llevarte algunos nativos como prueba", points: 10, next: -1 },
                    { text: "Reclamar la tierra para España", points: 20, next: -1 }
                ]
            }
        ]
    },
    intermedio: {
        title: "La Revolución Francesa",
        chapters: [
            {
                title: "Los Estados Generales",
                text: "Eres un diputado del Tercer Estado en 1789. El rey ha convocado los Estados Generales por primera vez en 175 años.",
                image: "🏛️",
                choices: [
                    { text: "Proponer el voto por cabeza", points: 25, next: 1 },
                    { text: "Mantener el sistema tradicional", points: 10, next: 1 },
                    { text: "Abandonar la asamblea en protesta", points: 15, next: 1 }
                ]
            },
            {
                title: "El Juramento del Juego de Pelota",
                text: "El Tercer Estado ha sido excluido de la sala. Tus compañeros proponen jurar no separarse hasta dar una constitución a Francia.",
                image: "✊",
                choices: [
                    { text: "Firmar el juramento con convicción", points: 30, next: 2 },
                    { text: "Firmar con reservas", points: 15, next: 2 },
                    { text: "Negarte a firmar", points: 5, next: 2 }
                ]
            },
            {
                title: "La Toma de la Bastilla",
                text: "El pueblo de París se ha alzado. La Bastilla, símbolo del despotismo, está siendo atacada. ¿Cuál es tu posición?",
                image: "🏰",
                choices: [
                    { text: "Unirte al pueblo en las calles", points: 25, next: 3 },
                    { text: "Apoyar desde la Asamblea", points: 20, next: 3 },
                    { text: "Intentar mediar con el rey", points: 10, next: 3 }
                ]
            },
            {
                title: "La Declaración de Derechos",
                text: "La Asamblea debate la Declaración de los Derechos del Hombre y del Ciudadano. Tu voto es crucial.",
                image: "📋",
                choices: [
                    { text: "Votar a favor de todos los artículos", points: 30, next: 4 },
                    { text: "Proponer modificaciones moderadas", points: 20, next: 4 },
                    { text: "Oponerte a algunos derechos", points: 5, next: 4 }
                ]
            },
            {
                title: "El Destino del Rey",
                text: "Luis XVI ha sido juzgado por traición. Como diputado, debes decidir sobre su destino.",
                image: "⚖️",
                choices: [
                    { text: "Votar por el exilio", points: 15, next: -1 },
                    { text: "Votar por la ejecución", points: 20, next: -1 },
                    { text: "Abstenerte de votar", points: 5, next: -1 }
                ]
            }
        ]
    },
    avanzado: {
        title: "La Crisis de los Misiles de Cuba",
        chapters: [
            {
                title: "El Descubrimiento",
                text: "Eres asesor del presidente Kennedy. Los aviones espía U-2 han fotografiado misiles soviéticos en Cuba. El mundo está al borde de la guerra nuclear.",
                image: "🛩️",
                choices: [
                    { text: "Recomendar un ataque aéreo inmediato", points: 10, next: 1 },
                    { text: "Proponer un bloqueo naval", points: 25, next: 1 },
                    { text: "Buscar una solución diplomática secreta", points: 20, next: 1 }
                ]
            },
            {
                title: "La Respuesta Soviética",
                text: "Khrushchev ha respondido agresivamente al bloqueo. Los barcos soviéticos se acercan a la línea de cuarentena.",
                image: "🚢",
                choices: [
                    { text: "Ordenar interceptar los barcos", points: 15, next: 2 },
                    { text: "Esperar a ver si se detienen", points: 25, next: 2 },
                    { text: "Ofrecer concesiones inmediatas", points: 10, next: 2 }
                ]
            },
            {
                title: "El Momento Crítico",
                text: "Un avión U-2 ha sido derribado sobre Cuba. Los militares presionan por una respuesta militar. La tensión es máxima.",
                image: "💥",
                choices: [
                    { text: "Autorizar represalias militares", points: 5, next: 3 },
                    { text: "Mantener la calma y buscar diálogo", points: 30, next: 3 },
                    { text: "Aumentar la presión diplomática", points: 20, next: 3 }
                ]
            },
            {
                title: "La Propuesta Secreta",
                text: "Los soviéticos proponen retirar los misiles de Cuba a cambio de no invadir la isla y retirar los misiles de Turquía.",
                image: "🤝",
                choices: [
                    { text: "Aceptar públicamente ambas condiciones", points: 15, next: 4 },
                    { text: "Aceptar Cuba, negociar Turquía en secreto", points: 30, next: 4 },
                    { text: "Rechazar cualquier concesión", points: 5, next: 4 }
                ]
            },
            {
                title: "La Resolución",
                text: "Las negociaciones han llegado a su punto final. Tu decisión determinará si el mundo evita una guerra nuclear.",
                image: "🕊️",
                choices: [
                    { text: "Firmar el acuerdo secreto", points: 35, next: -1 },
                    { text: "Buscar más concesiones", points: 10, next: -1 },
                    { text: "Prepararse para lo peor", points: 5, next: -1 }
                ]
            }
        ]
    }
};

function startAdventure() {
    window.adventureState = {
        currentChapter: 0,
        totalScore: 0,
        decisions: [],
        adventure: adventureData[currentLevel]
    };
    
    showChapter(0);
}

function showChapter(chapterIndex) {
    const state = window.adventureState;
    const chapter = state.adventure.chapters[chapterIndex];
    const storyContent = document.getElementById('story-content');
    
    // Actualizar progreso
    const progress = ((chapterIndex + 1) / state.adventure.chapters.length) * 100;
    document.getElementById('adventure-progress').style.width = progress + '%';
    document.getElementById('chapter-number').textContent = chapterIndex + 1;
    
    storyContent.innerHTML = `
        <div class="story-chapter">
            <div class="chapter-header">
                <div class="chapter-icon">${chapter.image}</div>
                <h3>${chapter.title}</h3>
            </div>
            <div class="story-text">
                <p>${chapter.text}</p>
            </div>
            <div class="story-choices">
                ${chapter.choices.map((choice, index) => `
                    <button class="choice-btn" onclick="makeAdventureChoice(${index})">
                        <span class="choice-text">${choice.text}</span>
                        <span class="choice-points">+${choice.points > 0 ? choice.points : choice.points} pts</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function makeAdventureChoice(choiceIndex) {
    const state = window.adventureState;
    const currentChapter = state.adventure.chapters[state.currentChapter];
    const choice = currentChapter.choices[choiceIndex];
    
    // Registrar decisión
    state.decisions.push({
        chapter: state.currentChapter,
        choice: choiceIndex,
        text: choice.text,
        points: choice.points
    });
    
    // Añadir puntos
    state.totalScore += choice.points;
    addScore(choice.points);
    
    // Mostrar resultado de la decisión
    showChoiceResult(choice, () => {
        if (choice.next === -1) {
            // Fin de la aventura
            showAdventureResults();
        } else {
            // Siguiente capítulo
            state.currentChapter++;
            showChapter(state.currentChapter);
        }
    });
}

function showChoiceResult(choice, callback) {
    const storyContent = document.getElementById('story-content');
    
    let resultClass = 'neutral';
    let resultIcon = 'fas fa-info-circle';
    let resultMessage = 'Decisión registrada';
    
    if (choice.points > 20) {
        resultClass = 'excellent';
        resultIcon = 'fas fa-star';
        resultMessage = '¡Excelente decisión!';
    } else if (choice.points > 10) {
        resultClass = 'good';
        resultIcon = 'fas fa-check';
        resultMessage = 'Buena decisión';
    } else if (choice.points < 0) {
        resultClass = 'poor';
        resultIcon = 'fas fa-exclamation-triangle';
        resultMessage = 'Decisión arriesgada';
    }
    
    storyContent.innerHTML = `
        <div class="choice-result">
            <div class="result-icon ${resultClass}">
                <i class="${resultIcon}"></i>
            </div>
            <div class="result-content">
                <h3>${resultMessage}</h3>
                <p>Has elegido: "${choice.text}"</p>
                <div class="points-earned">
                    <i class="fas fa-coins"></i>
                    <span>${choice.points > 0 ? '+' : ''}${choice.points} puntos</span>
                </div>
            </div>
            <button class="continue-btn" onclick="continueAdventure()">
                <i class="fas fa-arrow-right"></i>
                Continuar
            </button>
        </div>
    `;
    
    window.adventureContinueCallback = callback;
}

function continueAdventure() {
    if (window.adventureContinueCallback) {
        window.adventureContinueCallback();
    }
}

function showAdventureResults() {
    const state = window.adventureState;
    const gameContent = document.getElementById('game-content');
    const averageScore = state.totalScore / state.decisions.length;
    
    let rating = 'Aprendiz';
    let ratingIcon = 'fas fa-certificate';
    let ratingClass = 'bronze';
    
    if (averageScore >= 25) {
        rating = 'Maestro Estratega';
        ratingIcon = 'fas fa-crown';
        ratingClass = 'gold';
    } else if (averageScore >= 20) {
        rating = 'Líder Competente';
        ratingIcon = 'fas fa-medal';
        ratingClass = 'silver';
    } else if (averageScore >= 15) {
        rating = 'Diplomático Hábil';
        ratingIcon = 'fas fa-award';
        ratingClass = 'bronze';
    }
    
    gameContent.innerHTML = `
        <div class="adventure-results">
            <h2>¡Aventura Completada!</h2>
            <div class="adventure-title">
                <h3>${state.adventure.title}</h3>
            </div>
            
            <div class="final-rating">
                <div class="rating-badge ${ratingClass}">
                    <i class="${ratingIcon}"></i>
                    <span>${rating}</span>
                </div>
                <div class="rating-score">
                    Puntuación Total: ${state.totalScore}
                </div>
            </div>
            
            <div class="decisions-summary">
                <h4>Resumen de tus decisiones:</h4>
                <div class="decisions-list">
                    ${state.decisions.map((decision, index) => `
                        <div class="decision-item">
                            <div class="decision-chapter">Capítulo ${decision.chapter + 1}</div>
                            <div class="decision-text">${decision.text}</div>
                            <div class="decision-points ${decision.points > 15 ? 'high' : decision.points > 5 ? 'medium' : 'low'}">
                                ${decision.points > 0 ? '+' : ''}${decision.points} pts
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="historical-context">
                <h4>Contexto Histórico:</h4>
                <p>${getHistoricalContext(currentLevel)}</p>
            </div>
            
            <div class="adventure-actions">
                <button class="play-again-btn" onclick="startGame('aventura')">
                    <i class="fas fa-redo"></i>
                    Jugar de nuevo
                </button>
                <button class="try-other-btn" onclick="closeGame()">
                    <i class="fas fa-gamepad"></i>
                    Otros juegos
                </button>
            </div>
        </div>
    `;
}

function getHistoricalContext(level) {
    const contexts = {
        basico: "El descubrimiento de América en 1492 cambió para siempre la historia mundial, iniciando un intercambio cultural, económico y biológico sin precedentes entre el Viejo y el Nuevo Mundo.",
        intermedio: "La Revolución Francesa (1789-1799) transformó no solo Francia, sino que inspiró movimientos democráticos en todo el mundo, estableciendo principios de libertad, igualdad y fraternidad.",
        avanzado: "La Crisis de los Misiles de Cuba (1962) fue el momento más cercano que el mundo ha estado de una guerra nuclear, demostrando la importancia de la diplomacia en la era nuclear."
    };
    
    return contexts[level] || "Un momento crucial en la historia que cambió el curso de los acontecimientos.";
}

function showExplanation(text) {
    const explanation = document.createElement('div');
    explanation.className = 'explanation-popup';
    explanation.innerHTML = `
        <div class="explanation-content">
            <i class="fas fa-info-circle"></i>
            <p>${text}</p>
        </div>
    `;
    
    document.body.appendChild(explanation);
    
    setTimeout(() => {
        explanation.remove();
    }, 4000);
}

function getAchievement(percentage) {
    if (percentage >= 90) {
        return `
            <div class="medal gold">
                <i class="fas fa-medal"></i>
                <span>¡Maestro de la Historia!</span>
            </div>
        `;
    } else if (percentage >= 70) {
        return `
            <div class="medal silver">
                <i class="fas fa-medal"></i>
                <span>¡Explorador Histórico!</span>
            </div>
        `;
    } else if (percentage >= 50) {
        return `
            <div class="medal bronze">
                <i class="fas fa-medal"></i>
                <span>¡Aprendiz de Historia!</span>
            </div>
        `;
    } else {
        return `
            <div class="medal participation">
                <i class="fas fa-certificate"></i>
                <span>¡Sigue practicando!</span>
            </div>
        `;
    }
}

function addGameStyles(gameType) {
    // Agregar estilos específicos para cada juego
    const existingStyles = document.getElementById('game-specific-styles');
    if (existingStyles) {
        existingStyles.remove();
    }
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'game-specific-styles';
    
    switch(gameType) {
        case 'pasapalabra':
            styleSheet.textContent = `
                .pasapalabra-container { 
                    text-align: center; 
                    max-width: 1000px; 
                    margin: 0 auto; 
                }
                .game-info {
                    background: var(--sepia-dark);
                    padding: 1rem;
                    border-radius: 10px;
                    margin-bottom: 2rem;
                    border-left: 4px solid var(--gold);
                }
                .pasapalabra-stats {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin-top: 1rem;
                    font-weight: bold;
                    color: var(--navy);
                }
                .rosco { 
                    display: grid; 
                    grid-template-columns: repeat(13, 1fr); 
                    gap: 0.5rem; 
                    margin: 2rem auto; 
                    max-width: 800px;
                    background: var(--white);
                    padding: 2rem;
                    border-radius: 20px;
                    box-shadow: 0 5px 20px var(--shadow);
                }
                .letter-circle { 
                    width: 50px; 
                    height: 50px; 
                    border: 3px solid var(--gold); 
                    border-radius: 50%; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    transition: all 0.3s ease; 
                    background: var(--sepia-dark);
                    position: relative;
                }
                .letter-circle.active { 
                    background: var(--gold); 
                    color: var(--navy); 
                    transform: scale(1.2);
                    box-shadow: 0 0 20px var(--gold);
                    animation: pulse 1s infinite;
                }
                .letter-circle.correct { 
                    background: #28a745; 
                    color: white; 
                    border-color: #28a745;
                }
                .letter-circle.correct::after {
                    content: '✓';
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background: #28a745;
                    color: white;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    font-weight: bold;
                }
                .letter-circle.incorrect { 
                    background: #dc3545; 
                    color: white; 
                    border-color: #dc3545;
                }
                .letter-circle.incorrect::after {
                    content: '✗';
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background: #dc3545;
                    color: white;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    font-weight: bold;
                }
                .letter { 
                    font-weight: bold; 
                    font-size: 1.1rem; 
                    font-family: 'Cinzel', serif;
                }
                .question-area { 
                    margin-top: 2rem; 
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .question-text { 
                    background: var(--white); 
                    padding: 2rem; 
                    border-radius: 15px; 
                    margin-bottom: 2rem; 
                    font-size: 1.1rem;
                    box-shadow: 0 5px 15px var(--shadow);
                    border-left: 4px solid var(--gold);
                }
                .question-header {
                    color: var(--navy);
                    font-weight: bold;
                    margin-bottom: 1rem;
                    font-size: 1.2rem;
                }
                .question-content {
                    color: var(--brown);
                    line-height: 1.6;
                }
                .answer-input { 
                    display: flex; 
                    gap: 1rem; 
                    justify-content: center; 
                    flex-wrap: wrap;
                }
                .answer-input input { 
                    padding: 1rem; 
                    border: 2px solid var(--gold); 
                    border-radius: 10px; 
                    font-size: 1.1rem; 
                    min-width: 250px;
                    text-align: center;
                    font-weight: bold;
                }
                .answer-input input:focus {
                    outline: none;
                    border-color: var(--navy);
                    box-shadow: 0 0 10px rgba(30, 58, 95, 0.3);
                }
                .answer-input button { 
                    padding: 1rem 2rem; 
                    background: var(--navy); 
                    color: white; 
                    border: none; 
                    border-radius: 10px; 
                    cursor: pointer; 
                    font-weight: bold;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }
                .answer-input button:hover:not(:disabled) {
                    background: var(--gold);
                    color: var(--navy);
                    transform: translateY(-2px);
                }
                .answer-input button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                #start-btn {
                    background: var(--gold) !important;
                    color: var(--navy) !important;
                    font-size: 1.2rem !important;
                    padding: 1.2rem 2.5rem !important;
                }
                #start-btn:hover {
                    background: var(--gold-dark) !important;
                    transform: scale(1.05) !important;
                }
                .alphabet-summary {
                    margin: 2rem 0;
                    background: var(--sepia-dark);
                    padding: 2rem;
                    border-radius: 15px;
                }
                .alphabet-summary h3 {
                    color: var(--navy);
                    margin-bottom: 1.5rem;
                }
                .alphabet-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 1rem;
                }
                .alphabet-item {
                    background: var(--white);
                    padding: 1rem;
                    border-radius: 10px;
                    text-align: center;
                    border-left: 4px solid var(--gold);
                }
                .alphabet-item.correct {
                    border-left-color: #28a745;
                    background: #f8fff9;
                }
                .alphabet-item.incorrect {
                    border-left-color: #dc3545;
                    background: #fff8f8;
                }
                .alphabet-letter {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: var(--navy);
                    margin-bottom: 0.5rem;
                    font-family: 'Cinzel', serif;
                }
                .alphabet-answer {
                    font-size: 0.9rem;
                    color: var(--brown);
                    text-transform: capitalize;
                }
                @keyframes pulse {
                    0% { box-shadow: 0 0 20px var(--gold); }
                    50% { box-shadow: 0 0 30px var(--gold), 0 0 40px var(--gold); }
                    100% { box-shadow: 0 0 20px var(--gold); }
                }
                @media (max-width: 768px) {
                    .rosco {
                        grid-template-columns: repeat(7, 1fr);
                        gap: 0.3rem;
                        padding: 1rem;
                    }
                    .letter-circle {
                        width: 40px;
                        height: 40px;
                    }
                    .letter {
                        font-size: 0.9rem;
                    }
                    .pasapalabra-stats {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    .answer-input {
                        flex-direction: column;
                        align-items: center;
                    }
                    .answer-input input {
                        min-width: 200px;
                    }
                }
            `;
            break;
        case 'trivia':
            styleSheet.textContent = `
                .trivia-container { max-width: 800px; margin: 0 auto; }
                .progress-bar { 
                    width: 100%; 
                    height: 10px; 
                    background: var(--sepia-dark); 
                    border-radius: 5px; 
                    margin-bottom: 2rem; 
                }
                .progress { 
                    height: 100%; 
                    background: var(--gold); 
                    border-radius: 5px; 
                    transition: width 0.3s ease; 
                }
                .question-container { text-align: center; }
                .question { 
                    background: var(--white); 
                    padding: 2rem; 
                    border-radius: 15px; 
                    margin-bottom: 2rem; 
                    box-shadow: 0 5px 15px var(--shadow);
                }
                .question h3 { color: var(--navy); margin-bottom: 1rem; }
                .question p { font-size: 1.2rem; color: var(--brown); }
                .options { display: grid; gap: 1rem; }
                .option-btn { 
                    padding: 1rem; 
                    background: var(--sepia-dark); 
                    border: 2px solid var(--gold); 
                    border-radius: 10px; 
                    cursor: pointer; 
                    transition: all 0.3s ease; 
                    font-size: 1rem;
                }
                .option-btn:hover { background: var(--gold); color: var(--navy); }
                .option-btn.correct { background: #28a745; color: white; border-color: #28a745; }
                .option-btn.selected-correct { background: #28a745; color: white; }
                .option-btn.selected-incorrect { background: #dc3545; color: white; }
                .results-container { text-align: center; }
                .results-stats { 
                    display: grid; 
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
                    gap: 1rem; 
                    margin: 2rem 0; 
                }
                .stat-item { 
                    background: var(--white); 
                    padding: 1.5rem; 
                    border-radius: 10px; 
                    box-shadow: 0 3px 10px var(--shadow);
                }
                .stat-item i { color: var(--gold); margin-right: 0.5rem; }
                .achievement { margin: 2rem 0; }
                .medal { 
                    display: inline-flex; 
                    align-items: center; 
                    gap: 1rem; 
                    padding: 1rem 2rem; 
                    border-radius: 25px; 
                    font-weight: bold; 
                    font-size: 1.2rem;
                }
                .medal.gold { background: linear-gradient(135deg, #ffd700, #ffed4e); color: var(--navy); }
                .medal.silver { background: linear-gradient(135deg, #c0c0c0, #e8e8e8); color: var(--navy); }
                .medal.bronze { background: linear-gradient(135deg, #cd7f32, #daa520); color: white; }
                .medal.participation { background: var(--sepia-dark); color: var(--brown); }
                .play-again-btn { 
                    background: var(--navy); 
                    color: white; 
                    border: none; 
                    padding: 1rem 2rem; 
                    border-radius: 25px; 
                    cursor: pointer; 
                    font-size: 1.1rem; 
                    margin-top: 1rem;
                }
            `;
            break;
    }
    
    document.head.appendChild(styleSheet);
}

function setupMobileMenu() {
    // Implementación básica del menú móvil
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-active');
}

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });
    
    document.querySelectorAll('.game-card, .level-card').forEach(card => {
        observer.observe(card);
    });
}

// Estilos adicionales para feedback y animaciones
const additionalStyles = `
    .feedback {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--white);
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px var(--shadow-dark);
        z-index: 3000;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: feedbackPop 0.5s ease-out;
    }
    
    .feedback.correct {
        border-left: 5px solid #28a745;
        color: #28a745;
    }
    
    .feedback.incorrect {
        border-left: 5px solid #dc3545;
        color: #dc3545;
    }
    
    .explanation-popup {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--navy);
        color: var(--white);
        padding: 1rem;
        border-radius: 10px;
        max-width: 300px;
        box-shadow: 0 5px 20px var(--shadow-dark);
        z-index: 3000;
        animation: slideInRight 0.5s ease-out;
    }
    
    .explanation-content {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .explanation-content i {
        color: var(--gold);
        margin-top: 0.2rem;
    }
    
    @keyframes feedbackPop {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    @keyframes slideInRight {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }
    
    .nav.mobile-active {
        display: block !important;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--navy);
        padding: 1rem 0;
    }
    
    .nav.mobile-active ul {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    @media (max-width: 768px) {
        .nav {
            display: none;
        }
    }
`;

// Agregar estilos adicionales
const styleElement = document.createElement('style');
styleElement.textContent = additionalStyles;
document.head.appendChild(styleElement);
// Funciones para Política y Privacidad
function showPrivacyPolicy() {
    const privacySection = document.getElementById('politica-privacidad');
    privacySection.classList.remove('hidden');
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    // Cerrar con tecla Escape
    document.addEventListener('keydown', handlePrivacyEscape);
    
    // Cerrar al hacer clic fuera del contenido
    privacySection.addEventListener('click', handlePrivacyOutsideClick);
}

function hidePrivacyPolicy() {
    const privacySection = document.getElementById('politica-privacidad');
    privacySection.classList.add('hidden');
    
    // Restaurar scroll del body
    document.body.style.overflow = '';
    
    // Remover event listeners
    document.removeEventListener('keydown', handlePrivacyEscape);
    privacySection.removeEventListener('click', handlePrivacyOutsideClick);
}

function handlePrivacyEscape(e) {
    if (e.key === 'Escape') {
        hidePrivacyPolicy();
    }
}

function handlePrivacyOutsideClick(e) {
    const privacyContent = document.querySelector('.privacy-content');
    if (!privacyContent.contains(e.target)) {
        hidePrivacyPolicy();
    }
}

// Inicializar la sección de privacidad al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Asegurar que la sección esté oculta al inicio
    const privacySection = document.getElementById('politica-privacidad');
    if (privacySection) {
        privacySection.classList.add('hidden');
    }
});