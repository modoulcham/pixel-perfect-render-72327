// All site text in English (en), Finnish (fi), French (fr) and Russian (ru). Edit freely.
export type Lang = "en" | "fi" | "fr" | "ru";

export const categories = ["bathroom", "kitchen", "pipes", "installations", "maintenance"] as const;
export type Category = (typeof categories)[number];

const fi = {
  seo: {
    title: "Momodou's Plumbing Service – Luotettava LVI-palvelu Turussa",
    description:
      "Putkiasennukset, hanat, WC:t, kodinkoneiden liitännät ja korjaukset Turussa ja Varsinais-Suomessa – otamme mielellämme vastaan töitä myös muualta. Yksityis- ja yritysasiakkaille sekä aliurakointiin.",
  },
  nav: {
    home: "Etusivu",
    services: "Palvelut",
    gallery: "Työt",
    about: "Meistä",
    contact: "Yhteystiedot",
  },
  cta: { call: "Soita nyt", quote: "Pyydä tarjous", callNumber: "Soita", contact: "Ota yhteyttä" },
  hero: {
    eyebrow: "Turku – töitä myös muualla",
    title: "Luotettavaa LVI-palvelua Turussa",
    subtitle:
      "Putkityöt, asennukset ja korjaukset huolellisesti ja sovitusti – kotiin, yritykseen ja rakennuskohteisiin.",
    badges: [
      "Laadukas työnjälki",
      "Luotettava palvelu",
      "Nopea reagointi",
      "Yksityis- ja yritysasiakkaille",
    ],
  },
  services: {
    eyebrow: "Palvelut",
    title: "Mitä teemme",
    subtitle: "Arjen putkityöt ja suuremmat asennukset samalta tekijältä.",
    items: [
      {
        t: "Putkiasennukset ja -korjaukset",
        d: "Uudet vesi- ja viemäriputket sekä vuotojen ja vaurioiden korjaukset.",
      },
      {
        t: "Hana- ja sekoitinasennukset",
        d: "Keittiö-, kylpyhuone- ja suihkuhanojen asennus ja vaihto.",
      },
      { t: "WC-asennukset", d: "Lattia- ja seinä-WC:iden asennukset sekä vanhan istuimen vaihto." },
      {
        t: "Pesukone- ja astianpesukoneliitännät",
        d: "Turvalliset liitännät sulkuventtiileineen ja vesieristys huomioiden.",
      },
      {
        t: "Kylpyhuone- ja keittiötyöt",
        d: "LVI-työt remontteihin: kalusteet, viemäröinti ja vesijohdot.",
      },
      {
        t: "Pienet huolto- ja korjaustyöt",
        d: "Tippuvat hanat, tukokset, venttiilit ja muut pikkukorjaukset.",
      },
    ],
    more: "Lisäksi saneerauskohteet, uudisrakennusten LVI-työt ja aliurakointi.",
  },
  gallery: {
    eyebrow: "Työmme",
    title: "Valmiita töitä",
    subtitle: "Kurkistus toteutettuihin asennuksiin ja remontteihin.",
    all: "Kaikki",
    viewAll: "Katso kaikki kuvat",
    pageTitle: "Työt – Momodou's Plumbing Service",
    pageDescription:
      "Kuvia toteutetuista putkiasennuksista, kylpyhuoneista ja teknisten tilojen töistä Turussa ja Varsinais-Suomessa.",
    cats: {
      bathroom: "Kylpyhuone",
      kitchen: "Altaat ja keittiö",
      pipes: "Putket",
      installations: "Asennukset",
      maintenance: "Venttiilit ja huolto",
    } as Record<Category, string>,
    empty: "Tässä kategoriassa ei ole vielä kuvia.",
    close: "Sulje",
    prev: "Edellinen",
    next: "Seuraava",
  },
  docs: {
    eyebrow: "Luotettavuus",
    title: "Todistukset ja asiakirjat",
    subtitle: "Koulutus, pätevyydet ja referenssit.",
    view: "Avaa",
    download: "Lataa",
  },
  about: {
    eyebrow: "Meistä",
    title: "Momodou Touray – yrittäjä ja putkiasentaja",
    p1: "Muutin Suomeen maahanmuuttajana vuonna 2015. Opiskelin ensin suomen kieltä 10 kuukautta ja sen jälkeen putkiasentajaksi suomalaisessa ammattikoulussa. Valmistumisen jälkeen olen työskennellyt putkiasentajana. Teen jokaisen työn niin kuin tekisin sen omaan kotiini: siististi, huolellisesti ja sovitussa aikataulussa.",
    p2: "Palvelen yksityisasiakkaita ja yrityksiä Turussa ja koko Varsinais-Suomessa, ja otan mielelläni vastaan töitä myös muilta paikkakunnilta. Toimin myös aliurakoitsijana rakennus-, LVI- ja kiinteistöalan yrityksille.",
    role: "Yrittäjä / Putkiasentaja",
    stats: [
      { v: 8, suffix: "+", l: "vuotta kokemusta" },
      { text: "Turku", l: "+ muut alueet sopimuksen mukaan" },
      { text: "B2C & B2B", l: "yksityis- ja yritysasiakkaat" },
      { text: "Nopea", l: "reagointi yhteydenottoihin" },
    ],
  },
  partners: {
    eyebrow: "Yrityksille",
    title: "Luotettava aliurakoitsija LVI-, rakennus- ja kiinteistöyrityksille",
    text: "Tarvitsetteko lisäkapasiteettia? Tarjoan joustavasti osaavan putkiasentajan yksittäisiin kohteisiin, ruuhkahuippuihin tai pitkäaikaiseen yhteistyöhön.",
    points: ["Yksittäiset projektit", "Ruuhkahuiput", "Pitkäaikainen aliurakointi"],
    cta: "Keskustellaan yhteistyöstä",
  },
  invest: {
    nav: "Sijoita",
    eyebrow: "Sijoita Afrikkaan",
    title: "Sijoitusmahdollisuuksia Afrikan energiaan, sähköön, vesihuoltoon ja maatalouteen",
    subtitle:
      "Yhdistämme sijoittajat käytännön projekteihin ja paikallisiin kumppaneihin – ja huolehdimme teknisestä toteutuksesta suunnittelusta valmiiseen.",
    cta: "Ota yhteyttä",
    sectorsTitle: "Toimialat",
    sectors: [
      {
        t: "Energia",
        d: "Aurinkoenergia ja verkon ulkopuoliset ratkaisut: aurinkopuistot, mikroverkot sekä energia kodeille, yrityksille ja tiloille.",
      },
      {
        t: "Sähkö",
        d: "Sähköasennukset ja verkkoliitännät rakennuksiin, työpajoihin ja yhteisöille.",
      },
      {
        t: "Putkityöt ja vesihuolto",
        d: "Vedenjakelu, porakaivot, pumput, sanitaatio ja putkityöt asuntoihin ja julkisiin rakennuksiin.",
      },
      {
        t: "Maatalous",
        d: "Kastelu, tilojen vesijärjestelmät ja maatalousprojektit, jotka luovat paikallisia työpaikkoja ja ruokaturvaa.",
      },
    ],
    stepsTitle: "Näin se toimii",
    steps: [
      { t: "Kerro kiinnostuksestasi", d: "Toimiala, projektin koko ja aikataulu." },
      { t: "Löydämme ja arvioimme projektit", d: "Yhdessä paikallisten kumppanien kanssa." },
      {
        t: "Sinä päätät ja sijoitat suoraan",
        d: "Sopimukset tehdään suoraan sinun ja projektin välillä.",
      },
      {
        t: "Me toteutamme tekniset työt",
        d: "Suunnittelu, rakentaminen ja valvonta – ja raportoimme edistymisestä.",
      },
    ],
    formTitle: "Sijoitustiedustelu",
    formSubtitle: "Kerro, mikä toimiala kiinnostaa, niin palaamme asiaan pian.",
    messagePlaceholder: "Kerro toimialasta, projektin koosta ja aikataulusta…",
    sector: "Toimiala",
    sectorPlaceholder: "Valitse toimiala",
    submit: "Lähetä tiedustelu",
    disclaimer:
      "Momodou's Plumbing Service ei vastaanota, säilytä tai hallinnoi sijoittajien varoja eikä tarjoa rahoitustuotteita tai sijoitusneuvontaa. Jokaisesta projektista sovitaan erikseen kirjallisesti, ja kaikkiin sijoituksiin liittyy riskejä.",
    teaser: {
      eyebrow: "Sijoita Afrikkaan",
      title: "Haluatko sijoittaa Afrikkaan? Autamme siinäkin.",
      text: "Energia, sähkö, putkityöt ja maatalous – yhdistämme sijoittajat projekteihin ja toteutamme tekniset työt.",
      cta: "Lue lisää",
    },
  },
  why: {
    eyebrow: "Miksi me",
    title: "Miksi valita meidät",
    items: [
      { t: "Laadukas työnjälki", d: "Huolellinen ja määräysten mukainen asennus joka kerta." },
      { t: "Luotettava", d: "Sovitut asiat pitävät – aikataulu, hinta ja siisteys." },
      { t: "Nopea reagointi", d: "Vastaan yhteydenottoihin nopeasti ja selkeästi." },
      { t: "Turusta ja muualle", d: "Turkulainen tekijä – töitä myös muualla sopimuksen mukaan." },
      { t: "Pitkät asiakassuhteet", d: "Tavoitteena asiakas, joka soittaa uudelleen." },
    ],
  },
  contact: {
    eyebrow: "Yhteystiedot",
    title: "Pyydä tarjous",
    subtitle: "Kerro lyhyesti työstä, niin palaan asiaan pian.",
    form: {
      name: "Nimi",
      phone: "Puhelin",
      email: "Sähköposti",
      service: "Palvelu",
      servicePlaceholder: "Valitse palvelu",
      other: "Muu / aliurakointi",
      message: "Viesti",
      messagePlaceholder: "Kuvaile työ, sijainti ja toivottu aikataulu…",
      image: "Liitä kuva (valinnainen)",
      submit: "Lähetä tarjouspyyntö",
      sending: "Lähetetään…",
      success: "Kiitos! Tarjouspyyntösi on vastaanotettu. Otan yhteyttä pian.",
      error: "Lähetys epäonnistui. Yritä uudelleen tai soita.",
      again: "Lähetä uusi pyyntö",
    },
    v: {
      name: "Anna nimesi",
      phone: "Anna toimiva puhelinnumero",
      email: "Anna kelvollinen sähköpostiosoite",
      service: "Valitse palvelu",
      message: "Kirjoita viesti (vähintään 10 merkkiä)",
      image: "Kuvan enimmäiskoko on 10 Mt",
    },
    info: {
      phone: "Puhelin",
      email: "Sähköposti",
      location: "Sijainti",
      area: "Palvelualue",
      areaValue: "Turku, Varsinais-Suomi ja muut alueet sopimuksen mukaan",
      id: "Y-tunnus",
    },
  },
  footer: {
    tagline: "Luotettavaa LVI-palvelua Turussa",
    links: "Pikalinkit",
    contact: "Yhteystiedot",
    privacy:
      "Tämä sivusto tallentaa vain kielivalintasi selaimeesi. Tarjouslomakkeen tietoja käytetään ainoastaan yhteydenottoon.",
    rights: "Kaikki oikeudet pidätetään.",
  },
};

const en: typeof fi = {
  seo: {
    title: "Momodou's Plumbing Service – Reliable plumbing in Turku",
    description:
      "Pipe installations, faucets, toilets, appliance connections and repairs in Turku and Southwest Finland – jobs in other areas are welcome too. For private customers, businesses and subcontracting.",
  },
  nav: {
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
  },
  cta: { call: "Call now", quote: "Request a quote", callNumber: "Call", contact: "Get in touch" },
  hero: {
    eyebrow: "Based in Turku – working in other areas too",
    title: "Reliable plumbing services in Turku",
    subtitle:
      "Pipework, installations and repairs done carefully and on schedule – for homes, businesses and construction sites.",
    badges: [
      "Quality workmanship",
      "Reliable service",
      "Fast response",
      "For private & business customers",
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What we do",
    subtitle: "Everyday plumbing and larger installations from one trusted pro.",
    items: [
      {
        t: "Pipe installations and repairs",
        d: "New water and drain lines, plus leak and damage repairs.",
      },
      {
        t: "Faucet and mixer installations",
        d: "Kitchen, bathroom and shower faucets installed or replaced.",
      },
      {
        t: "Toilet (WC) installations",
        d: "Floor-standing and wall-hung toilets, including replacements.",
      },
      {
        t: "Washing machine & dishwasher connections",
        d: "Safe connections with shut-off valves and waterproofing in mind.",
      },
      {
        t: "Bathroom and kitchen plumbing",
        d: "Plumbing for renovations: fixtures, drainage and supply lines.",
      },
      {
        t: "Small maintenance and repairs",
        d: "Dripping taps, blockages, valves and other quick fixes.",
      },
    ],
    more: "Also renovation projects, new-build plumbing and subcontracting.",
  },
  gallery: {
    eyebrow: "Our work",
    title: "Completed projects",
    subtitle: "A look at finished installations and renovations.",
    all: "All",
    viewAll: "View all photos",
    pageTitle: "Gallery – Momodou's Plumbing Service",
    pageDescription:
      "Photos of completed pipe installations, bathrooms and technical room work in Turku and Southwest Finland.",
    cats: {
      bathroom: "Bathroom",
      kitchen: "Sinks & kitchen",
      pipes: "Pipes",
      installations: "Installations",
      maintenance: "Valves & maintenance",
    },
    empty: "No photos in this category yet.",
    close: "Close",
    prev: "Previous",
    next: "Next",
  },
  docs: {
    eyebrow: "Trust",
    title: "Certificates & Documents",
    subtitle: "Training, qualifications and references.",
    view: "View",
    download: "Download",
  },
  about: {
    eyebrow: "About",
    title: "Momodou Touray – entrepreneur and pipe fitter",
    p1: "I came to Finland as an immigrant in 2015. I first studied Finnish for 10 months, then trained as a plumber at a Finnish vocational school, and I have worked as a plumber ever since I graduated. I do every job the way I would in my own home: tidy, careful and on the agreed schedule.",
    p2: "I serve private customers and businesses in Turku and across Southwest Finland, and gladly take on work in other areas too. I also work as a subcontractor for construction, HVAC and property companies.",
    role: "Entrepreneur / Pipe fitter",
    stats: [
      { v: 8, suffix: "+", l: "years of experience" },
      { text: "Turku", l: "+ other areas by agreement" },
      { text: "B2C & B2B", l: "private & business customers" },
      { text: "Fast", l: "response to enquiries" },
    ],
  },
  partners: {
    eyebrow: "For businesses",
    title: "A reliable subcontractor for HVAC, construction and property companies",
    text: "Need extra capacity? I offer a skilled pipe fitter on flexible terms for single projects, peak periods or long-term cooperation.",
    points: ["Single projects", "Peak periods", "Long-term subcontracting"],
    cta: "Let's discuss cooperation",
  },
  invest: {
    nav: "Invest",
    eyebrow: "Invest in Africa",
    title: "Investment opportunities in African energy, electricity, water and agriculture",
    subtitle:
      "We connect investors with practical projects and local partners – and take care of the technical work from planning to completion.",
    cta: "Get in touch",
    sectorsTitle: "Sectors",
    sectors: [
      {
        t: "Energy",
        d: "Solar and off-grid energy: solar farms, mini-grids and power for homes, businesses and farms.",
      },
      {
        t: "Electricity",
        d: "Electrical installations and grid connections for buildings, workshops and communities.",
      },
      {
        t: "Plumbing & water",
        d: "Water supply, boreholes, pumps, sanitation and plumbing for housing and public buildings.",
      },
      {
        t: "Agriculture",
        d: "Irrigation, farm water systems and agricultural projects that create local jobs and food security.",
      },
    ],
    stepsTitle: "How it works",
    steps: [
      { t: "Tell us your interest", d: "Sector, project size and timeline." },
      { t: "We find and assess projects", d: "Together with local partners." },
      {
        t: "You decide and invest directly",
        d: "Agreements are made directly between you and the project.",
      },
      {
        t: "We deliver the technical work",
        d: "Planning, building and supervision – with progress reports.",
      },
    ],
    formTitle: "Investment enquiry",
    formSubtitle: "Tell us which sector interests you and we'll get back to you soon.",
    messagePlaceholder: "Tell us about the sector, project size and timeline…",
    sector: "Sector",
    sectorPlaceholder: "Choose a sector",
    submit: "Send enquiry",
    disclaimer:
      "Momodou's Plumbing Service does not accept, hold or manage investors' funds and does not offer financial products or investment advice. Every project is agreed separately in writing, and all investments carry risk.",
    teaser: {
      eyebrow: "Invest in Africa",
      title: "Want to invest in Africa? We do that too.",
      text: "Energy, electricity, plumbing and agriculture – we connect investors with projects and deliver the technical work.",
      cta: "Learn more",
    },
  },
  why: {
    eyebrow: "Why us",
    title: "Why choose us",
    items: [
      { t: "Quality workmanship", d: "Careful, code-compliant installations every time." },
      { t: "Reliable", d: "What we agree on holds – schedule, price and tidiness." },
      { t: "Quick response", d: "Fast, clear replies to every enquiry." },
      { t: "Turku and beyond", d: "Turku-based, and happy to take jobs in other areas too." },
      { t: "Long-term relationships", d: "The goal: customers who call again." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Request a quote",
    subtitle: "Tell me briefly about the job and I'll get back to you soon.",
    form: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      service: "Service",
      servicePlaceholder: "Choose a service",
      other: "Other / subcontracting",
      message: "Message",
      messagePlaceholder: "Describe the job, location and preferred timing…",
      image: "Attach a photo (optional)",
      submit: "Send quote request",
      sending: "Sending…",
      success: "Thank you! Your request has been received. I'll be in touch soon.",
      error: "Sending failed. Please try again or call.",
      again: "Send another request",
    },
    v: {
      name: "Please enter your name",
      phone: "Please enter a valid phone number",
      email: "Please enter a valid email address",
      service: "Please choose a service",
      message: "Please write a message (at least 10 characters)",
      image: "Maximum image size is 10 MB",
    },
    info: {
      phone: "Phone",
      email: "Email",
      location: "Location",
      area: "Service area",
      areaValue: "Turku, Southwest Finland and other areas by agreement",
      id: "Business ID",
    },
  },
  footer: {
    tagline: "Reliable plumbing services in Turku",
    links: "Quick links",
    contact: "Contact",
    privacy:
      "This site only stores your language choice in your browser. Quote form details are used solely to contact you.",
    rights: "All rights reserved.",
  },
};

const fr: typeof fi = {
  seo: {
    title: "Momodou's Plumbing Service – Plombier de confiance à Turku",
    description:
      "Installation de tuyauterie, robinets, WC, raccordement d'appareils et réparations à Turku et dans le sud-ouest de la Finlande – les chantiers dans d'autres régions sont aussi les bienvenus. Pour particuliers, entreprises et sous-traitance.",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    gallery: "Galerie",
    about: "À propos",
    contact: "Contact",
  },
  cta: {
    call: "Appeler",
    quote: "Demander un devis",
    callNumber: "Appeler le",
    contact: "Nous contacter",
  },
  hero: {
    eyebrow: "Basé à Turku – interventions ailleurs aussi",
    title: "Un service de plomberie fiable à Turku",
    subtitle:
      "Tuyauterie, installations et réparations réalisées avec soin et dans les délais – pour les particuliers, les entreprises et les chantiers.",
    badges: [
      "Travail de qualité",
      "Service fiable",
      "Réponse rapide",
      "Particuliers et entreprises",
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Ce que nous faisons",
    subtitle:
      "La plomberie du quotidien et les grandes installations, par un seul professionnel de confiance.",
    items: [
      {
        t: "Installation et réparation de tuyauterie",
        d: "Nouvelles conduites d'eau et d'évacuation, réparation des fuites et des dégâts.",
      },
      {
        t: "Pose de robinets et mitigeurs",
        d: "Installation et remplacement de robinets de cuisine, de salle de bain et de douche.",
      },
      {
        t: "Installation de WC",
        d: "WC au sol et suspendus, y compris le remplacement d'anciens modèles.",
      },
      {
        t: "Raccordement de lave-linge et lave-vaisselle",
        d: "Raccordements sûrs avec vannes d'arrêt et étanchéité soignée.",
      },
      {
        t: "Plomberie de salle de bain et de cuisine",
        d: "Plomberie pour rénovations : sanitaires, évacuations et alimentation en eau.",
      },
      {
        t: "Petits travaux d'entretien et de réparation",
        d: "Robinets qui fuient, canalisations bouchées, vannes et autres réparations rapides.",
      },
    ],
    more: "Également : projets de rénovation, plomberie de constructions neuves et sous-traitance.",
  },
  gallery: {
    eyebrow: "Nos réalisations",
    title: "Projets réalisés",
    subtitle: "Un aperçu d'installations et de rénovations terminées.",
    all: "Tout",
    viewAll: "Voir toutes les photos",
    pageTitle: "Galerie – Momodou's Plumbing Service",
    pageDescription:
      "Photos d'installations de tuyauterie, de salles de bain et de locaux techniques à Turku et dans le sud-ouest de la Finlande.",
    cats: {
      bathroom: "Salle de bain",
      kitchen: "Éviers & cuisine",
      pipes: "Tuyauterie",
      installations: "Installations",
      maintenance: "Vannes & entretien",
    },
    empty: "Aucune photo dans cette catégorie pour le moment.",
    close: "Fermer",
    prev: "Précédente",
    next: "Suivante",
  },
  docs: {
    eyebrow: "Confiance",
    title: "Certificats & documents",
    subtitle: "Formation, qualifications et références.",
    view: "Voir",
    download: "Télécharger",
  },
  about: {
    eyebrow: "À propos",
    title: "Momodou Touray – entrepreneur et plombier",
    p1: "Je suis arrivé en Finlande en 2015 en tant qu'immigré. J'ai d'abord étudié le finnois pendant 10 mois, puis suivi une formation de plombier dans une école professionnelle finlandaise. Depuis l'obtention de mon diplôme, je travaille comme plombier. Je réalise chaque chantier comme je le ferais chez moi : proprement, avec soin et dans les délais convenus.",
    p2: "Je travaille pour des particuliers et des entreprises à Turku et dans tout le sud-ouest de la Finlande, et j'accepte volontiers des chantiers dans d'autres régions. Je travaille aussi en sous-traitance pour des entreprises du bâtiment, du génie climatique et de l'immobilier.",
    role: "Entrepreneur / Plombier",
    stats: [
      { v: 8, suffix: "+", l: "ans d'expérience" },
      { text: "Turku", l: "+ autres régions sur demande" },
      { text: "B2C & B2B", l: "particuliers & entreprises" },
      { text: "Rapide", l: "réponse aux demandes" },
    ],
  },
  partners: {
    eyebrow: "Pour les entreprises",
    title:
      "Un sous-traitant fiable pour les entreprises du génie climatique, du bâtiment et de l'immobilier",
    text: "Besoin de renfort ? Je propose un plombier qualifié avec des conditions souples, pour un projet ponctuel, les périodes de pointe ou une collaboration durable.",
    points: ["Projets ponctuels", "Périodes de pointe", "Sous-traitance à long terme"],
    cta: "Parlons collaboration",
  },
  invest: {
    nav: "Investir",
    eyebrow: "Investir en Afrique",
    title: "Opportunités d'investissement en Afrique : énergie, électricité, eau et agriculture",
    subtitle:
      "Nous mettons en relation les investisseurs avec des projets concrets et des partenaires locaux – et nous prenons en charge les travaux techniques, de la conception à la livraison.",
    cta: "Nous contacter",
    sectorsTitle: "Secteurs",
    sectors: [
      {
        t: "Énergie",
        d: "Solaire et énergie hors réseau : centrales solaires, mini-réseaux et électricité pour logements, entreprises et exploitations agricoles.",
      },
      {
        t: "Électricité",
        d: "Installations électriques et raccordements au réseau pour bâtiments, ateliers et communautés.",
      },
      {
        t: "Plomberie & eau",
        d: "Adduction d'eau, forages, pompes, assainissement et plomberie pour logements et bâtiments publics.",
      },
      {
        t: "Agriculture",
        d: "Irrigation, réseaux d'eau agricoles et projets qui créent des emplois locaux et renforcent la sécurité alimentaire.",
      },
    ],
    stepsTitle: "Comment ça marche",
    steps: [
      { t: "Parlez-nous de votre projet", d: "Secteur, taille du projet et calendrier." },
      { t: "Nous trouvons et évaluons les projets", d: "Avec des partenaires locaux." },
      {
        t: "Vous décidez et investissez directement",
        d: "Les accords sont conclus directement entre vous et le projet.",
      },
      {
        t: "Nous réalisons les travaux techniques",
        d: "Conception, construction et supervision – avec des comptes rendus réguliers.",
      },
    ],
    formTitle: "Demande d'investissement",
    formSubtitle:
      "Indiquez-nous le secteur qui vous intéresse et nous vous recontactons rapidement.",
    messagePlaceholder: "Parlez-nous du secteur, de la taille du projet et du calendrier…",
    sector: "Secteur",
    sectorPlaceholder: "Choisissez un secteur",
    submit: "Envoyer la demande",
    disclaimer:
      "Momodou's Plumbing Service n'accepte, ne détient ni ne gère les fonds des investisseurs et ne propose ni produits financiers ni conseil en investissement. Chaque projet fait l'objet d'un accord écrit distinct, et tout investissement comporte des risques.",
    teaser: {
      eyebrow: "Investir en Afrique",
      title: "Vous souhaitez investir en Afrique ? Nous vous accompagnons.",
      text: "Énergie, électricité, plomberie et agriculture – nous mettons en relation investisseurs et projets et réalisons les travaux techniques.",
      cta: "En savoir plus",
    },
  },
  why: {
    eyebrow: "Pourquoi nous",
    title: "Pourquoi nous choisir",
    items: [
      {
        t: "Travail de qualité",
        d: "Des installations soignées et conformes aux normes, à chaque fois.",
      },
      { t: "Fiable", d: "Ce qui est convenu est respecté : délais, prix et propreté." },
      { t: "Réponse rapide", d: "Des réponses rapides et claires à chaque demande." },
      { t: "Turku et au-delà", d: "Basé à Turku, et disponible pour des chantiers dans d'autres régions." },
      { t: "Relations durables", d: "Notre objectif : des clients qui nous rappellent." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Demander un devis",
    subtitle: "Décrivez brièvement les travaux et je vous recontacte rapidement.",
    form: {
      name: "Nom",
      phone: "Téléphone",
      email: "E-mail",
      service: "Service",
      servicePlaceholder: "Choisissez un service",
      other: "Autre / sous-traitance",
      message: "Message",
      messagePlaceholder: "Décrivez les travaux, le lieu et le délai souhaité…",
      image: "Joindre une photo (facultatif)",
      submit: "Envoyer la demande de devis",
      sending: "Envoi…",
      success: "Merci ! Votre demande a bien été reçue. Je vous recontacte rapidement.",
      error: "L'envoi a échoué. Veuillez réessayer ou appeler.",
      again: "Envoyer une autre demande",
    },
    v: {
      name: "Veuillez saisir votre nom",
      phone: "Veuillez saisir un numéro de téléphone valide",
      email: "Veuillez saisir une adresse e-mail valide",
      service: "Veuillez choisir un service",
      message: "Veuillez écrire un message (10 caractères minimum)",
      image: "Taille maximale de l'image : 10 Mo",
    },
    info: {
      phone: "Téléphone",
      email: "E-mail",
      location: "Localisation",
      area: "Zone d'intervention",
      areaValue: "Turku, sud-ouest de la Finlande et autres régions sur demande",
      id: "Numéro d'entreprise",
    },
  },
  footer: {
    tagline: "Un service de plomberie fiable à Turku",
    links: "Liens rapides",
    contact: "Contact",
    privacy:
      "Ce site enregistre uniquement votre choix de langue dans votre navigateur. Les informations du formulaire de devis servent uniquement à vous recontacter.",
    rights: "Tous droits réservés.",
  },
};

const ru: typeof fi = {
  seo: {
    title: "Momodou's Plumbing Service – надёжные сантехнические услуги в Турку",
    description:
      "Монтаж труб, смесителей и унитазов, подключение бытовой техники и ремонт в Турку и Юго-Западной Финляндии – также берём заказы в других регионах. Для частных клиентов, компаний и на субподряде.",
  },
  nav: {
    home: "Главная",
    services: "Услуги",
    gallery: "Галерея",
    about: "О нас",
    contact: "Контакты",
  },
  cta: {
    call: "Позвонить",
    quote: "Запросить расчёт",
    callNumber: "Позвонить",
    contact: "Связаться",
  },
  hero: {
    eyebrow: "Турку – работаем и в других регионах",
    title: "Надёжные сантехнические услуги в Турку",
    subtitle:
      "Монтаж труб, установка и ремонт – аккуратно и в срок, для домов, компаний и строительных объектов.",
    badges: [
      "Качественная работа",
      "Надёжный сервис",
      "Быстрый отклик",
      "Для частных лиц и компаний",
    ],
  },
  services: {
    eyebrow: "Услуги",
    title: "Что мы делаем",
    subtitle: "Повседневная сантехника и крупные монтажные работы от одного надёжного мастера.",
    items: [
      {
        t: "Монтаж и ремонт труб",
        d: "Новые водопроводные и канализационные трубы, устранение протечек и повреждений.",
      },
      {
        t: "Установка смесителей",
        d: "Установка и замена смесителей на кухне, в ванной и в душе.",
      },
      { t: "Установка унитазов", d: "Напольные и подвесные унитазы, в том числе замена старых." },
      {
        t: "Подключение стиральных и посудомоечных машин",
        d: "Безопасное подключение с запорными кранами и защитой от протечек.",
      },
      {
        t: "Сантехника для ванной и кухни",
        d: "Сантехнические работы при ремонте: приборы, канализация и водопровод.",
      },
      {
        t: "Мелкое обслуживание и ремонт",
        d: "Протекающие краны, засоры, вентили и другой быстрый ремонт.",
      },
    ],
    more: "А также капитальный ремонт, сантехника в новостройках и работа на субподряде.",
  },
  gallery: {
    eyebrow: "Наши работы",
    title: "Выполненные проекты",
    subtitle: "Готовые монтажные работы и ремонты.",
    all: "Все",
    viewAll: "Смотреть все фото",
    pageTitle: "Галерея – Momodou's Plumbing Service",
    pageDescription:
      "Фотографии монтажа труб, ванных комнат и работ в технических помещениях в Турку и Юго-Западной Финляндии.",
    cats: {
      bathroom: "Ванная",
      kitchen: "Мойки и кухня",
      pipes: "Трубы",
      installations: "Монтаж",
      maintenance: "Вентили и обслуживание",
    },
    empty: "В этой категории пока нет фотографий.",
    close: "Закрыть",
    prev: "Назад",
    next: "Вперёд",
  },
  docs: {
    eyebrow: "Доверие",
    title: "Сертификаты и документы",
    subtitle: "Обучение, квалификация и рекомендации.",
    view: "Открыть",
    download: "Скачать",
  },
  about: {
    eyebrow: "О нас",
    title: "Момоду Турай – предприниматель и сантехник",
    p1: "Я приехал в Финляндию как иммигрант в 2015 году. Сначала 10 месяцев изучал финский язык, затем выучился на сантехника в финском профессиональном училище и с момента окончания работаю сантехником. Каждую работу я выполняю так, как сделал бы у себя дома: чисто, аккуратно и в оговорённые сроки.",
    p2: "Я работаю с частными клиентами и компаниями в Турку и по всей Юго-Западной Финляндии и с удовольствием беру заказы в других регионах. Также работаю на субподряде у строительных, инженерных и управляющих компаний.",
    role: "Предприниматель / Сантехник",
    stats: [
      { v: 8, suffix: "+", l: "лет опыта" },
      { text: "Турку", l: "+ другие регионы по договорённости" },
      { text: "B2C и B2B", l: "частные клиенты и компании" },
      { text: "Быстро", l: "отвечаем на запросы" },
    ],
  },
  partners: {
    eyebrow: "Для компаний",
    title: "Надёжный субподрядчик для инженерных, строительных и управляющих компаний",
    text: "Не хватает рук? Предлагаю квалифицированного сантехника на гибких условиях – для отдельных проектов, пиковых периодов или долгосрочного сотрудничества.",
    points: ["Отдельные проекты", "Пиковые периоды", "Долгосрочный субподряд"],
    cta: "Обсудить сотрудничество",
  },
  invest: {
    nav: "Инвестиции",
    eyebrow: "Инвестиции в Африку",
    title:
      "Инвестиционные возможности в Африке: энергетика, электричество, водоснабжение и сельское хозяйство",
    subtitle:
      "Мы связываем инвесторов с практическими проектами и местными партнёрами – и берём на себя технические работы от проектирования до сдачи.",
    cta: "Связаться с нами",
    sectorsTitle: "Направления",
    sectors: [
      {
        t: "Энергетика",
        d: "Солнечная и автономная энергетика: солнечные станции, мини-сети и электроснабжение домов, предприятий и ферм.",
      },
      {
        t: "Электричество",
        d: "Электромонтаж и подключение к сети для зданий, мастерских и общин.",
      },
      {
        t: "Сантехника и водоснабжение",
        d: "Водоснабжение, скважины, насосы, канализация и сантехника для жилых и общественных зданий.",
      },
      {
        t: "Сельское хозяйство",
        d: "Орошение, водоснабжение ферм и проекты, создающие местные рабочие места и продовольственную безопасность.",
      },
    ],
    stepsTitle: "Как это работает",
    steps: [
      { t: "Расскажите о своём интересе", d: "Направление, масштаб проекта и сроки." },
      { t: "Мы находим и оцениваем проекты", d: "Вместе с местными партнёрами." },
      {
        t: "Вы принимаете решение и инвестируете напрямую",
        d: "Договоры заключаются напрямую между вами и проектом.",
      },
      {
        t: "Мы выполняем технические работы",
        d: "Проектирование, строительство и надзор – с отчётами о ходе работ.",
      },
    ],
    formTitle: "Запрос об инвестициях",
    formSubtitle: "Расскажите, какое направление вас интересует, и мы скоро с вами свяжемся.",
    messagePlaceholder: "Расскажите о направлении, масштабе проекта и сроках…",
    sector: "Направление",
    sectorPlaceholder: "Выберите направление",
    submit: "Отправить запрос",
    disclaimer:
      "Momodou's Plumbing Service не принимает, не хранит и не управляет средствами инвесторов, а также не предлагает финансовые продукты или инвестиционные консультации. Каждый проект согласуется отдельно в письменной форме; любые инвестиции связаны с риском.",
    teaser: {
      eyebrow: "Инвестиции в Африку",
      title: "Хотите инвестировать в Африку? Мы поможем и в этом.",
      text: "Энергетика, электричество, сантехника и сельское хозяйство – мы связываем инвесторов с проектами и выполняем технические работы.",
      cta: "Подробнее",
    },
  },
  why: {
    eyebrow: "Почему мы",
    title: "Почему выбирают нас",
    items: [
      { t: "Качественная работа", d: "Аккуратный монтаж по нормам – каждый раз." },
      { t: "Надёжность", d: "Договорённости соблюдаются: сроки, цена и чистота." },
      { t: "Быстрый отклик", d: "Быстрые и понятные ответы на каждый запрос." },
      { t: "Турку и не только", d: "Мастер из Турку, работаю и в других регионах." },
      { t: "Долгосрочные отношения", d: "Наша цель – клиенты, которые обращаются снова." },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Запросить расчёт",
    subtitle: "Кратко опишите задачу, и я скоро с вами свяжусь.",
    form: {
      name: "Имя",
      phone: "Телефон",
      email: "Эл. почта",
      service: "Услуга",
      servicePlaceholder: "Выберите услугу",
      other: "Другое / субподряд",
      message: "Сообщение",
      messagePlaceholder: "Опишите работу, адрес и удобные сроки…",
      image: "Прикрепить фото (необязательно)",
      submit: "Отправить запрос",
      sending: "Отправка…",
      success: "Спасибо! Ваш запрос получен. Я скоро с вами свяжусь.",
      error: "Не удалось отправить. Попробуйте ещё раз или позвоните.",
      again: "Отправить ещё один запрос",
    },
    v: {
      name: "Введите ваше имя",
      phone: "Введите корректный номер телефона",
      email: "Введите корректный адрес эл. почты",
      service: "Выберите услугу",
      message: "Напишите сообщение (не менее 10 символов)",
      image: "Максимальный размер изображения – 10 МБ",
    },
    info: {
      phone: "Телефон",
      email: "Эл. почта",
      location: "Местоположение",
      area: "Зона обслуживания",
      areaValue: "Турку, Юго-Западная Финляндия и другие регионы по договорённости",
      id: "Номер предприятия (Y-tunnus)",
    },
  },
  footer: {
    tagline: "Надёжные сантехнические услуги в Турку",
    links: "Быстрые ссылки",
    contact: "Контакты",
    privacy:
      "Этот сайт сохраняет в вашем браузере только выбранный язык. Данные из формы запроса используются только для связи с вами.",
    rights: "Все права защищены.",
  },
};

// Object order is the order shown in the language menu.
export const translations = { en, fi, fr, ru };
export type Dict = typeof fi;
export const languages = Object.keys(translations) as Lang[];
/** Each language named in itself, as shown in the language menu. */
export const languageNames: Record<Lang, string> = {
  en: "English",
  fi: "Suomi",
  fr: "Français",
  ru: "Русский",
};
/** Open Graph locale codes for link previews. */
export const ogLocales: Record<Lang, string> = { en: "en_GB", fi: "fi_FI", fr: "fr_FR", ru: "ru_RU" };
