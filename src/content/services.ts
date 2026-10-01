import type { Locale, RouteKey } from '../i18n';

export type ServiceKey = Exclude<RouteKey, 'home'>;

interface ServiceFaq {
  question: string;
  answer: string;
}

interface ServiceContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  sectionTitle: string;
  sectionIntro: string;
  points: { title: string; description: string }[];
  faqs: ServiceFaq[];
}

export const serviceContent = {
  en: {
    stages: {
      title: 'Football Stages for Players',
      metaTitle: "Football Stages for Players | it's football",
      metaDescription: "Explore international football stages for players and teams, combining training, matches and a new football environment with it's football.",
      answer: "Football stages are international training programmes for players who want to develop their game in a new environment. it's football helps players, families and teams explore stage options shaped around their goals, level and availability, with programme details discussed before any booking is confirmed.",
      sectionTitle: 'A football stage shaped around development',
      sectionIntro: 'A clear plan helps players and families understand what an international stage can involve before deciding whether it is the right fit.',
      points: [
        { title: 'Start with the player', description: 'Share the age group, playing experience and goals so the programme discussion can focus on relevant options.' },
        { title: 'Bring learning into the game', description: 'Training and match experiences can create opportunities to practise decisions, communication and technical skills in context.' },
        { title: 'Confirm the details together', description: 'Dates, location, schedule and availability vary by stage and are confirmed directly before making a commitment.' },
      ],
      faqs: [
        { question: 'Who can take part in a football stage?', answer: 'Stages are intended for football players and groups. Suitable ages, playing levels, dates and availability depend on each programme; share those details in your enquiry.' },
        { question: 'What should I include in a stage enquiry?', answer: 'Include the player or group age, football experience, preferred timing, group size and the development goals you have in mind.' },
        { question: 'Are dates and locations fixed?', answer: 'Each stage has its own availability and arrangements. Confirmed dates, location, schedule and inclusions are shared before booking.' },
      ],
    },
    coaches: {
      title: 'International Football Coach Development',
      metaTitle: "Football Coach Development | it's football",
      metaDescription: "Explore international football coach development through practical learning, exchange and new perspectives on the game.",
      answer: "International coach development gives football coaches the chance to reflect on their practice and exchange ideas in a different football environment. it's football helps coaches explore learning experiences based on their interests, coaching context and availability; format, contributors and programme details are confirmed for each opportunity.",
      sectionTitle: 'Learning that connects coaching ideas to the pitch',
      sectionIntro: 'Coach development is most useful when it relates to real coaching questions and leaves room to compare different approaches to the game.',
      points: [
        { title: 'Bring a coaching question', description: 'Share the age group, team context and topics you want to explore so an enquiry starts with practical needs.' },
        { title: 'Compare perspectives', description: 'A new football setting can prompt reflection on session design, communication, player development and team culture.' },
        { title: 'Check the programme format', description: 'The delivery format, schedule, contributors and availability depend on the specific experience and are confirmed before booking.' },
      ],
      faqs: [
        { question: 'Who are coach development experiences for?', answer: 'They are for football coaches and coaching groups interested in practical learning and exchange. Requirements vary by experience, so include your role and context when enquiring.' },
        { question: 'Do the programmes provide coaching qualifications?', answer: 'Qualification or accreditation is not assumed. Ask about the specific programme outcomes and recognition before booking.' },
        { question: 'Can a club arrange an experience for its coaches?', answer: 'Clubs can enquire with their group size, coaching priorities and preferred dates to discuss a suitable format.' },
      ],
    },
    matches: {
      title: 'International Football Matches',
      metaTitle: "International Football Matches | it's football",
      metaDescription: "Arrange international football matches for teams seeking competitive fixtures, new opponents and a shared playing experience.",
      answer: "International football matches give teams the opportunity to compete against unfamiliar opponents and apply their preparation in a new setting. it's football helps clubs and groups enquire about fixtures that fit their age group, level and travel plans; opponents, dates, venue and match arrangements are confirmed individually.",
      sectionTitle: 'Fixtures designed around the team',
      sectionIntro: 'Good match planning starts with the group and the kind of competition that supports its goals, then confirms the practical details.',
      points: [
        { title: 'Describe your squad', description: 'Share age group, playing level, squad size and any scheduling or accessibility requirements.' },
        { title: 'Set the sporting context', description: 'Explain whether you are looking for friendly preparation, competitive challenge or fixtures within a wider team trip.' },
        { title: 'Confirm the fixture', description: 'Opponent, date, venue, format and availability depend on the arrangements agreed for each enquiry.' },
      ],
      faqs: [
        { question: 'Can a team request an international friendly?', answer: 'Teams can enquire about friendly fixtures by sharing their age group, level, preferred dates and location. Availability is confirmed individually.' },
        { question: 'Are opponents and venues guaranteed?', answer: 'No opponent or venue is assumed until it has been confirmed directly for the fixture.' },
        { question: 'Can matches be part of a wider team trip?', answer: 'Yes. Include the travel dates, group details and other football activities you are considering so the enquiry can be discussed in context.' },
      ],
    },
    tournaments: {
      title: 'International Football Tournaments',
      metaTitle: "International Football Tournaments | it's football",
      metaDescription: "Explore international football tournament opportunities for clubs and teams, with schedules and availability confirmed per event.",
      answer: "International football tournaments bring teams together to compete within an organised event and experience the game alongside new opponents. it's football helps clubs explore tournament opportunities that match their age group, level and travel plans; event dates, venue, format, entry requirements and availability must be confirmed for each tournament.",
      sectionTitle: 'Choose a tournament with the right fit',
      sectionIntro: 'Before entering an event, teams need clear information about competition format, eligibility, schedule and the experience around the matches.',
      points: [
        { title: 'Match the group to the event', description: 'Share age group, playing level, squad size and the kind of competition experience you are looking for.' },
        { title: 'Review event requirements', description: 'Entry criteria, format, schedule, accommodation and travel arrangements vary by tournament.' },
        { title: 'Confirm before committing', description: 'Dates, location, places, costs and availability should be checked directly for the specific event.' },
      ],
      faqs: [
        { question: 'Which teams can enter a tournament?', answer: 'Eligibility depends on the tournament. Check age groups, playing level, squad rules and entry requirements for the specific event before applying.' },
        { question: 'Are tournament dates and venues listed here?', answer: 'No live event calendar is published on this page. Ask the team for current opportunities and confirm dates, venue and availability directly.' },
        { question: 'Can a club enquire about several age groups?', answer: 'Yes. Include the age groups, number of squads, preferred dates and travel needs in one enquiry.' },
      ],
    },
    teams: {
      title: 'International Football Trips for Teams',
      metaTitle: "International Football Trips for Teams | it's football",
      metaDescription: "Plan an international football experience for your club or team around its goals, age groups, dates and preferred activities.",
      answer: "An international football trip gives a club or team a chance to train, play and experience football in a different setting. it's football helps groups explore a programme around their sporting aims, age groups and preferred dates; itinerary, accommodation, activities and availability are discussed and confirmed before booking.",
      sectionTitle: 'A team trip built around your objectives',
      sectionIntro: 'A useful first conversation connects the group’s football goals with the practical constraints that shape travel and scheduling.',
      points: [
        { title: 'Share your team context', description: 'Include club, age groups, squad sizes, preferred dates and the people travelling with the team.' },
        { title: 'Set priorities for the experience', description: 'Let the team know whether training, matches, tournaments, coach learning or cultural activities matter most.' },
        { title: 'Review a proposed plan', description: 'Itinerary, travel dates, accommodation, activities, pricing and availability need to be confirmed for each group.' },
      ],
      faqs: [
        { question: 'Can a football trip be tailored to our club?', answer: 'Clubs can enquire about a programme based on group details, sporting aims and preferred dates. The available options are confirmed individually.' },
        { question: 'What information helps plan a team experience?', answer: 'Share age groups, squad sizes, dates, location preferences, budget range and the football activities you want to prioritise.' },
        { question: 'Does every trip include matches or accommodation?', answer: 'Inclusions vary by programme. Confirm transport, accommodation, training, fixtures, meals and other services in the proposal before booking.' },
      ],
    },
  },
  es: {
    stages: {
      title: 'Stages de fútbol para jugadores',
      metaTitle: "Stages internacionales de fútbol | it's football",
      metaDescription: "Descubre stages internacionales de fútbol para jugadores y equipos, con entrenamiento, partidos y una nueva experiencia futbolística.",
      answer: "Un stage de fútbol es un programa internacional de entrenamiento para jugadores que quieren desarrollar su juego en un entorno diferente. it's football ayuda a jugadores, familias y equipos a valorar opciones según sus objetivos, nivel y disponibilidad; los detalles de cada programa se consultan antes de confirmar una reserva.",
      sectionTitle: 'Un stage pensado para el desarrollo',
      sectionIntro: 'Un plan claro ayuda a jugadores y familias a entender qué puede incluir un stage internacional antes de decidir si encaja con sus objetivos.',
      points: [
        { title: 'Empezar por el jugador', description: 'Comparte edad, experiencia y objetivos para que la conversación se centre en opciones relevantes.' },
        { title: 'Llevar el aprendizaje al juego', description: 'Los entrenamientos y partidos pueden ofrecer situaciones para practicar decisiones, comunicación y habilidades técnicas.' },
        { title: 'Confirmar los detalles', description: 'Las fechas, el lugar, el calendario y la disponibilidad varían según el stage y se confirman antes de asumir un compromiso.' },
      ],
      faqs: [
        { question: '¿Quién puede participar en un stage de fútbol?', answer: 'Los stages están dirigidos a jugadores y grupos de fútbol. La edad, el nivel, las fechas y la disponibilidad dependen de cada programa; indícalos en tu consulta.' },
        { question: '¿Qué datos incluyo en una consulta?', answer: 'Indica la edad del jugador o grupo, su experiencia futbolística, fechas preferidas, tamaño del grupo y objetivos de desarrollo.' },
        { question: '¿Las fechas y ubicaciones son fijas?', answer: 'Cada stage tiene su propia disponibilidad y organización. Las fechas, ubicación, calendario e inclusiones se confirman antes de reservar.' },
      ],
    },
    coaches: {
      title: 'Formación internacional para entrenadores de fútbol',
      metaTitle: "Formación internacional de entrenadores | it's football",
      metaDescription: 'Experiencias internacionales de formación para entrenadores de fútbol con aprendizaje práctico, intercambio y nuevas perspectivas.',
      answer: "La formación internacional permite a los entrenadores reflexionar sobre su práctica e intercambiar ideas en un entorno futbolístico diferente. it's football ayuda a explorar experiencias de aprendizaje según los intereses, el contexto y la disponibilidad del entrenador; el formato, los participantes y el programa se confirman en cada oportunidad.",
      sectionTitle: 'Aprendizaje conectado con el campo',
      sectionIntro: 'La formación es más útil cuando parte de preguntas reales del entrenamiento y permite comparar distintas formas de entender el juego.',
      points: [
        { title: 'Traer una pregunta de entrenamiento', description: 'Comparte categoría, contexto del equipo y temas de interés para partir de necesidades prácticas.' },
        { title: 'Comparar perspectivas', description: 'Un nuevo entorno futbolístico puede invitar a reflexionar sobre sesiones, comunicación, desarrollo y cultura de equipo.' },
        { title: 'Consultar el formato', description: 'El formato, calendario, participantes y disponibilidad dependen de cada experiencia y se confirman antes de reservar.' },
      ],
      faqs: [
        { question: '¿A quién se dirigen estas experiencias?', answer: 'A entrenadores y grupos de entrenamiento interesados en el aprendizaje práctico y el intercambio. Los requisitos dependen de cada experiencia; indica tu función y contexto.' },
        { question: '¿Se obtiene una titulación oficial?', answer: 'No se presupone ninguna titulación ni acreditación. Consulta los resultados y el reconocimiento de cada programa antes de reservar.' },
        { question: '¿Un club puede organizar una experiencia para sus entrenadores?', answer: 'Sí. El club puede compartir el número de participantes, sus prioridades formativas y las fechas preferidas para consultar formatos posibles.' },
      ],
    },
    matches: {
      title: 'Partidos internacionales de fútbol',
      metaTitle: "Partidos internacionales de fútbol | it's football",
      metaDescription: 'Organiza partidos internacionales para equipos que buscan nuevos rivales y una experiencia competitiva en otro entorno.',
      answer: "Los partidos internacionales ofrecen a los equipos la oportunidad de competir contra rivales nuevos y poner en práctica su preparación en otro entorno. it's football ayuda a clubes y grupos a consultar encuentros adecuados a su edad, nivel y viaje; los rivales, fechas, sedes y condiciones se confirman de forma individual.",
      sectionTitle: 'Encuentros adecuados para cada equipo',
      sectionIntro: 'La planificación empieza por el grupo y el tipo de competición que apoya sus objetivos, y continúa con la confirmación de los detalles.',
      points: [
        { title: 'Describir la plantilla', description: 'Comparte edad, nivel, tamaño del grupo y necesidades de calendario o accesibilidad.' },
        { title: 'Definir el objetivo deportivo', description: 'Explica si buscáis preparación amistosa, un reto competitivo o partidos dentro de un viaje de equipo.' },
        { title: 'Confirmar el encuentro', description: 'Rival, fecha, sede, formato y disponibilidad dependen de lo acordado para cada consulta.' },
      ],
      faqs: [
        { question: '¿Se puede consultar un amistoso internacional?', answer: 'Sí. Comparte categoría, nivel, fechas preferidas y ubicación para consultar posibles amistosos. La disponibilidad se confirma de forma individual.' },
        { question: '¿Están garantizados los rivales y las sedes?', answer: 'No se presupone ningún rival ni sede hasta que se confirme directamente para el encuentro.' },
        { question: '¿Puede un partido formar parte de un viaje de equipo?', answer: 'Sí. Incluye fechas del viaje, características del grupo y otras actividades que valoráis para estudiar la consulta en contexto.' },
      ],
    },
    tournaments: {
      title: 'Torneos internacionales de fútbol',
      metaTitle: "Torneos internacionales de fútbol | it's football",
      metaDescription: 'Consulta oportunidades de torneos internacionales para clubes y equipos; fechas, sede y disponibilidad se confirman en cada evento.',
      answer: "Los torneos internacionales reúnen equipos para competir en un evento organizado y compartir el fútbol con nuevos rivales. it's football ayuda a los clubes a consultar oportunidades según la categoría, el nivel y el viaje; las fechas, sede, formato, requisitos y plazas se deben confirmar para cada torneo.",
      sectionTitle: 'Elegir un torneo que encaje',
      sectionIntro: 'Antes de inscribirse, cada equipo necesita conocer el formato, los requisitos de participación, el calendario y la experiencia deportiva.',
      points: [
        { title: 'Valorar el perfil del grupo', description: 'Indica categorías, nivel, tamaño de las plantillas y tipo de competición que buscáis.' },
        { title: 'Revisar los requisitos', description: 'Las edades, el formato, el calendario, el alojamiento y el viaje varían según el torneo.' },
        { title: 'Confirmar antes de comprometerse', description: 'Fechas, sede, plazas, costes y disponibilidad se deben consultar para cada evento concreto.' },
      ],
      faqs: [
        { question: '¿Qué equipos pueden participar?', answer: 'Los requisitos dependen del torneo. Antes de solicitar plaza, consulta las categorías, el nivel, las normas de plantilla y las condiciones de inscripción.' },
        { question: '¿Aquí se publican fechas y sedes?', answer: 'Esta página no muestra un calendario de eventos en directo. Consulta las oportunidades actuales y confirma fechas, sede y disponibilidad directamente.' },
        { question: '¿Un club puede consultar varias categorías?', answer: 'Sí. Incluye las categorías, el número de equipos, las fechas preferidas y las necesidades de viaje en una sola consulta.' },
      ],
    },
    teams: {
      title: 'Viajes internacionales de fútbol para equipos',
      metaTitle: "Viajes internacionales de fútbol para equipos | it's football",
      metaDescription: 'Planifica una experiencia internacional de fútbol para tu club según sus objetivos, categorías, fechas y actividades.',
      answer: "Un viaje internacional de fútbol permite a un club o equipo entrenar, jugar y vivir el deporte en un entorno distinto. it's football ayuda a explorar un programa según los objetivos deportivos, categorías y fechas preferidas; el itinerario, alojamiento, actividades y disponibilidad se consultan y confirman antes de reservar.",
      sectionTitle: 'Un viaje de equipo con objetivos claros',
      sectionIntro: 'Una primera conversación útil conecta los objetivos futbolísticos del grupo con los aspectos prácticos que condicionan el viaje.',
      points: [
        { title: 'Compartir el contexto del equipo', description: 'Indica el club, las categorías, el número de jugadores, las fechas preferidas y quiénes viajarían.' },
        { title: 'Definir prioridades', description: 'Cuéntanos si os interesan especialmente entrenamientos, partidos, torneos, formación de entrenadores o actividades culturales.' },
        { title: 'Revisar una propuesta', description: 'Itinerario, fechas, alojamiento, actividades, precios y disponibilidad se deben confirmar para cada grupo.' },
      ],
      faqs: [
        { question: '¿El viaje puede adaptarse a nuestro club?', answer: 'Los clubes pueden consultar programas según el grupo, los objetivos deportivos y las fechas preferidas. Las opciones se confirman de forma individual.' },
        { question: '¿Qué información ayuda a planificarlo?', answer: 'Comparte categorías, tamaño de los equipos, fechas, destinos preferidos, presupuesto aproximado y actividades futbolísticas prioritarias.' },
        { question: '¿Todos los viajes incluyen partidos o alojamiento?', answer: 'Las inclusiones varían según el programa. Confirma transporte, alojamiento, entrenamientos, partidos, comidas y otros servicios en la propuesta.' },
      ],
    },
  },
} satisfies Record<Locale, Record<ServiceKey, ServiceContent>>;

export function getServiceContent(locale: Locale, service: ServiceKey): ServiceContent {
  return serviceContent[locale][service];
}