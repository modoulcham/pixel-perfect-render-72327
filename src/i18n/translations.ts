// All site text in Finnish (fi) and English (en). Edit freely.
export type Lang = "fi" | "en";

export const categories = ["bathroom", "kitchen", "pipes", "installations", "maintenance"] as const;
export type Category = (typeof categories)[number];

const fi = {
  seo: {
    title: "Momodou's Plumbing Service – Luotettava LVI-palvelu Turussa",
    description:
      "Putkiasennukset, hanat, WC:t, kodinkoneiden liitännät ja korjaukset Turussa ja Varsinais-Suomessa. Yksityis- ja yritysasiakkaille sekä aliurakointiin.",
  },
  nav: { home: "Etusivu", services: "Palvelut", gallery: "Työt", about: "Meistä", contact: "Yhteystiedot" },
  cta: { call: "Soita nyt", quote: "Pyydä tarjous", callNumber: "Soita", contact: "Ota yhteyttä" },
  hero: {
    eyebrow: "LVI-palvelut Turussa",
    title: "Luotettavaa LVI-palvelua Turussa",
    subtitle:
      "Putkityöt, asennukset ja korjaukset huolellisesti ja sovitusti – kotiin, yritykseen ja rakennuskohteisiin.",
    badges: ["Laadukas työnjälki", "Luotettava palvelu", "Nopea reagointi", "Yksityis- ja yritysasiakkaille"],
  },
  services: {
    eyebrow: "Palvelut",
    title: "Mitä teemme",
    subtitle: "Arjen putkityöt ja suuremmat asennukset samalta tekijältä.",
    items: [
      { t: "Putkiasennukset ja -korjaukset", d: "Uudet vesi- ja viemäriputket sekä vuotojen ja vaurioiden korjaukset." },
      { t: "Hana- ja sekoitinasennukset", d: "Keittiö-, kylpyhuone- ja suihkuhanojen asennus ja vaihto." },
      { t: "WC-asennukset", d: "Lattia- ja seinä-WC:iden asennukset sekä vanhan istuimen vaihto." },
      { t: "Pesukone- ja astianpesukoneliitännät", d: "Turvalliset liitännät sulkuventtiileineen ja vesieristys huomioiden." },
      { t: "Kylpyhuone- ja keittiötyöt", d: "LVI-työt remontteihin: kalusteet, viemäröinti ja vesijohdot." },
      { t: "Pienet huolto- ja korjaustyöt", d: "Tippuvat hanat, tukokset, venttiilit ja muut pikkukorjaukset." },
    ],
    more: "Lisäksi saneerauskohteet, uudisrakennusten LVI-työt ja aliurakointi.",
  },
  gallery: {
    eyebrow: "Työmme",
    title: "Valmiita töitä",
    subtitle: "Kurkistus toteutettuihin asennuksiin ja remontteihin.",
    all: "Kaikki",
    cats: { bathroom: "Kylpyhuone", kitchen: "Keittiö", pipes: "Putket", installations: "Asennukset", maintenance: "Huolto" } as Record<Category, string>,
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
    empty: "Asiakirjat lisätään pian.",
  },
  about: {
    eyebrow: "Meistä",
    title: "Momodou Touray – yrittäjä ja putkiasentaja",
    p1: "Olen LVI-koulutettu putkiasentaja, ja minulla on noin kahdeksan vuoden kokemus käytännön putkitöistä. Teen jokaisen työn niin kuin tekisin sen omaan kotiini: siististi, huolellisesti ja sovitussa aikataulussa.",
    p2: "Palvelen yksityisasiakkaita ja yrityksiä Turussa ja koko Varsinais-Suomessa. Toimin myös aliurakoitsijana rakennus-, LVI- ja kiinteistöalan yrityksille.",
    role: "Yrittäjä / Putkiasentaja",
    stats: [
      { v: 8, suffix: "+", l: "vuotta kokemusta" },
      { text: "Turku", l: "& Varsinais-Suomi" },
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
  why: {
    eyebrow: "Miksi me",
    title: "Miksi valita meidät",
    items: [
      { t: "Laadukas työnjälki", d: "Huolellinen ja määräysten mukainen asennus joka kerta." },
      { t: "Luotettava", d: "Sovitut asiat pitävät – aikataulu, hinta ja siisteys." },
      { t: "Nopea reagointi", d: "Vastaan yhteydenottoihin nopeasti ja selkeästi." },
      { t: "Paikallinen palvelu", d: "Turkulainen tekijä, joka tuntee alueen kohteet." },
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
    info: { phone: "Puhelin", email: "Sähköposti", location: "Sijainti", area: "Palvelualue", areaValue: "Turku ja Varsinais-Suomi", id: "Y-tunnus" },
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
      "Pipe installations, faucets, toilets, appliance connections and repairs in Turku and Southwest Finland. For private customers, businesses and subcontracting.",
  },
  nav: { home: "Home", services: "Services", gallery: "Gallery", about: "About", contact: "Contact" },
  cta: { call: "Call now", quote: "Request a quote", callNumber: "Call", contact: "Get in touch" },
  hero: {
    eyebrow: "Plumbing & HVAC in Turku",
    title: "Reliable plumbing services in Turku",
    subtitle:
      "Pipework, installations and repairs done carefully and on schedule – for homes, businesses and construction sites.",
    badges: ["Quality workmanship", "Reliable service", "Fast response", "For private & business customers"],
  },
  services: {
    eyebrow: "Services",
    title: "What we do",
    subtitle: "Everyday plumbing and larger installations from one trusted pro.",
    items: [
      { t: "Pipe installations and repairs", d: "New water and drain lines, plus leak and damage repairs." },
      { t: "Faucet and mixer installations", d: "Kitchen, bathroom and shower faucets installed or replaced." },
      { t: "Toilet (WC) installations", d: "Floor-standing and wall-hung toilets, including replacements." },
      { t: "Washing machine & dishwasher connections", d: "Safe connections with shut-off valves and waterproofing in mind." },
      { t: "Bathroom and kitchen plumbing", d: "Plumbing for renovations: fixtures, drainage and supply lines." },
      { t: "Small maintenance and repairs", d: "Dripping taps, blockages, valves and other quick fixes." },
    ],
    more: "Also renovation projects, new-build plumbing and subcontracting.",
  },
  gallery: {
    eyebrow: "Our work",
    title: "Completed projects",
    subtitle: "A look at finished installations and renovations.",
    all: "All",
    cats: { bathroom: "Bathroom", kitchen: "Kitchen", pipes: "Pipes", installations: "Installations", maintenance: "Maintenance" },
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
    empty: "Documents will be added soon.",
  },
  about: {
    eyebrow: "About",
    title: "Momodou Touray – entrepreneur and pipe fitter",
    p1: "I'm an LVI-trained pipe fitter with about eight years of hands-on plumbing experience. I do every job the way I would in my own home: tidy, careful and on the agreed schedule.",
    p2: "I serve private customers and businesses in Turku and across Southwest Finland, and also work as a subcontractor for construction, HVAC and property companies.",
    role: "Entrepreneur / Pipe fitter",
    stats: [
      { v: 8, suffix: "+", l: "years of experience" },
      { text: "Turku", l: "& Southwest Finland" },
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
  why: {
    eyebrow: "Why us",
    title: "Why choose us",
    items: [
      { t: "Quality workmanship", d: "Careful, code-compliant installations every time." },
      { t: "Reliable", d: "What we agree on holds – schedule, price and tidiness." },
      { t: "Quick response", d: "Fast, clear replies to every enquiry." },
      { t: "Local service", d: "A Turku-based pro who knows the area." },
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
    info: { phone: "Phone", email: "Email", location: "Location", area: "Service area", areaValue: "Turku and Southwest Finland", id: "Business ID" },
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

export const translations = { fi, en };
export type Dict = typeof fi;
