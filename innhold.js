/* Innholdet på nettsiden. Claude oppdaterer denne fila når du ber om endringer. */
const INNHOLD = {
  klubbnavn: "Figgjo Bordtennisklubb",
  kortnavn: "Figgjo BTK",   // brukes i menyen og nederst på siden
  slagord: "En klubb for alle",
  stiftet: "2021",
  heltebilde: "bilder/seriemestere-3div-2025-26.jpg",
  heltebildeTekst: "Serielaget som vant 3. divisjon 2025/26",
  utmerkelse: ["Seriemester", "3. divisjon 2025/26"],

  // Tallene i den hvite stripa under toppen
  nokkeltall: [
    { tall: "2021", tekst: "Stiftet" },
    { tall: "60", prefiks: "≈", tekst: "Medlemmer" },
    { tall: "4", tekst: "Serielag" },
    { tall: "3", tekst: "Tilbud for alle" },
  ],

  // Kortene under «Om klubben»
  tilbud: [
    { ikon: "gate", tittel: "Gatebordtennis", tekst: "I samarbeid med Frelsesarmeen. Et lavterskeltilbud der bordtennis er en sosial møteplass for mennesker som trenger fellesskap og et trygt miljø." },
    { ikon: "hjerte", tittel: "Bordtennis mot Parkinson", tekst: "Meningsfull aktivitet for bevegelse, koordinasjon, balanse og reaksjon – i et sosialt fellesskap. Tirsdager i Figgjohallen.", lenke: "#trening" },
    { ikon: "barn", tittel: "Barn og unge", tekst: "Et positivt miljø der barn og unge kan utvikle seg både sportslig og sosialt." },
  ],
  farge: "#c8102e",
  logo: "",            // f.eks. "bilder/logo.png"
  toppbilde: "",       // f.eks. "bilder/hallen.jpg"
  omKlubben: "Figgjo Bordtennisklubb ble startet i 2021 og har på kort tid vokst til en aktiv klubb med rundt 60 medlemmer. Vi ønsker å være en klubb for alle – uansett alder, nivå, bakgrunn eller livssituasjon.\n\nHos oss handler bordtennis om mer enn trening og konkurranse. Vi jobber for et trygt, inkluderende og sosialt miljø der man kan oppleve mestring, fellesskap og glede gjennom aktivitet.",
  omMedlemskap: "Medlemsavgiften betales til Figgjo Idrettslag. Meld deg inn via skjemaet under.",
  innmeldingslenke: "https://club.spond.com/landing/signup/figgjoil/form/B6CD09B6BB8141B884905AD1E364E34E",
  epost: "kjsaetre@gmail.com",
  telefon: "949 79 992",
  adresse: "Figgjohallen, Figgjo, Sandnes",
  facebook: "",
  instagram: "",

  // Nyeste vises først uansett rekkefølge her. Dato: "ÅÅÅÅ-MM-DD"
  nyheter: [
    {
      dato: "2026-10-10",
      tittel: "Seriestart 24. oktober",
      tekst: "Helgen 24.–25. oktober starter seriesesongen 2026/27. Figgjo 1 spiller i 2. divisjon og møter Rakkestad, Fornebu 3, Kobra og Skien i Skien.\n\nFiggjo 2 åpner i 3. divisjon borte mot Rosseland 2 lørdag, og spiller første hjemmekamp søndag kl. 10.00 i Figgjohallen mot Stavanger BTK. Kom gjerne og hei!",
      bilder: [],
    },
    {
      dato: "2026-10-10",
      tittel: "Ny gruppe: Bordtennis mot Parkinson",
      tekst: "Fra høsten 2026 starter vi en ny gruppe i Figgjohallen. Tirsdager kl. 12–13 er det trening ledet av fysioterapeut Christian Ibenfeld, og kl. 13–14 er det sosialt samvær.\n\nDu trenger ikke ha spilt bordtennis før – treningen tilpasses hver enkelt. Egenandel 150 kr per gang, som går på frikortet.",
      bilder: ["bilder/trener-christian-ibenfeld.jpg"],
    },
    {
      dato: "",
      tittel: "Seriemestere i 3. divisjon!",
      tekst: "Serielaget vårt vant 3. divisjon sesongen 2025/26. Stor gratulasjon til gutta!",
      bilder: ["bilder/seriemestere-3div-2025-26.jpg"],
    },
  ],

  treningstider: [
    { Dag: "Mandag", Tid: "17:00–19:00", Gruppe: "Åpen trening", Trener: "Arian Myrbakk", Sted: "Figgjohallen" },
    { Dag: "Tirsdag", Tid: "12:00–13:00", Gruppe: "Bordtennis mot Parkinson", Trener: "Christian Ibenfeld", Sted: "Figgjohallen" },
    { Dag: "Tirsdag", Tid: "17:00–19:00", Gruppe: "Gatebordtennis med Frelsesarmeen", Trener: "Egil Klungtveit", Sted: "" },
    { Dag: "Tirsdag", Tid: "19:00–21:00", Gruppe: "Trening for voksne", Trener: "", Sted: "Figgjohallen" },
    { Dag: "Onsdag", Tid: "17:00–19:00", Gruppe: "Trening for rekrutter", Trener: "Kenneth Haugland", Sted: "Figgjohallen" },
    { Dag: "Torsdag", Tid: "17:00–19:00", Gruppe: "Kretstrening ungdom", Trener: "Kjetil Lindefjell Sætre", Sted: "Figgjohallen" },
    { Dag: "Søndag", Tid: "17:00–19:00", Gruppe: "Åpen hall for alle", Trener: "", Sted: "Figgjohallen" },
  ],
  treningsnotat: "",

  // Serielagene. Legg til spillere: spillere: ["Navn 1", "Navn 2"]
  serielag: [
    { navn: "Figgjo 1", divisjon: "2. divisjon", avdeling: "Avd. A", lagtype: "4-mannslag", spillere: ["Kjetil Lindefjell Sætre (kaptein)", "Adam Kornizki", "Kasper Lundel Pedersen", "Henning Pedersen", "Samuel Lindefjell Sætre"] },
    { navn: "Figgjo 2", divisjon: "3. divisjon", avdeling: "Avd. E", lagtype: "4-mannslag", spillere: ["Jay Impuesto", "Stian Pedersen", "Kurt Rusnak (kaptein)", "Arian Myrbakk", "Kenneth Haugland"] },
    { navn: "Figgjo 3", divisjon: "4. divisjon", avdeling: "", lagtype: "3-mannslag", spillere: ["Max Millian Gjerme", "Felix Bøe", "Tommy Landro (kaptein)", "Tobias Sunde"] },
    { navn: "Figgjo 4", divisjon: "5. divisjon", avdeling: "", lagtype: "3-mannslag", spillere: ["Kjell Roar Bjørnsen (kaptein)", "Alexander Rosnes Jakobsen", "Elias Bøe", "Noah Klev"] },
  ],

  // Seriekamper for Figgjo 1 og 2 hentes automatisk fra bordtennislive.no (serie.js).
  // Her legges bare kamper for lag som IKKE ligger der (Figgjo 3 og 4). Dato: "ÅÅÅÅ-MM-DD"
  // Eksempel: { lag: "Figgjo 3", dato: "2026-11-14", kl: "12.00", hjemme: "Figgjo BTK 3", borte: "Sola BTK", sted: "Figgjohallen", resultat: "" }
  kamper: [],


  // Fotograf som vises på alle bilder, med mindre bildet har sin egen: { bilde: "...", fotograf: "Navn" }
  fotograf: "Kjell Roar Bjørnsen",

  // Trenere. bilde er valgfritt (uten bilde vises initialer)
  trenere: [
    { navn: "Arian Myrbakk", rolle: "Trener – åpen trening (mandager)", bilde: "", tekst: "" },
    {
      navn: "Christian Ibenfeld",
      rolle: "Trener – Bordtennis mot Parkinson",
      bilde: "bilder/trener-christian-ibenfeld.jpg",
      tekst: "Fysioterapeut, utdannet i Montpellier i Frankrike i 1999, og har jobbet på Fysio Forum siden 2000. Med sin idrettsbakgrunn har han særlig fokus på funksjonell og individuelt tilpasset trening. Han driver flere treningsgrupper, blant annet en bordtennisgruppe for Parkinson i Stavanger.",
    },
    { navn: "Egil Klungtveit", rolle: "Trener – gatebordtennis med Frelsesarmeen (tirsdager)", bilde: "bilder/egil-klungtveit.jpg", tekst: "" },
    { navn: "Kenneth Haugland", rolle: "Trener – rekrutter (onsdager)", bilde: "", tekst: "" },
    { navn: "Kjetil Lindefjell Sætre", rolle: "Trener – kretstrening ungdom (torsdager)", bilde: "bilder/kjetil-lindefjell-saetre.jpg", tekst: "" },
  ],

  // Styret
  styret: [
    { navn: "Kjetil Lindefjell Sætre", rolle: "Leder", bilde: "bilder/kjetil-lindefjell-saetre.jpg", tekst: "", epost: "kjsaetre@gmail.com", telefon: "949 79 992" },
    { navn: "Henning Pedersen", rolle: "Styremedlem", bilde: "bilder/henning-pedersen.jpg", tekst: "" },
    { navn: "Egil Klungtveit", rolle: "Styremedlem", bilde: "bilder/egil-klungtveit.jpg", tekst: "" },
  ],

  // Sponsorer. lenke er valgfri
  sponsorer: [
    { navn: "Kongeparken Camping", logo: "bilder/sponsorer/kongeparken.png", lenke: "" },
    { navn: "Metabolsktesting.no", logo: "bilder/sponsorer/metabolsktesting.png", lenke: "https://metabolsktesting.no" },
    { navn: "HEAD Energy", logo: "bilder/sponsorer/head-energy.png", lenke: "" },
    { navn: "Grude & Klingsheim Eiendom", logo: "bilder/sponsorer/grude-klingsheim.png", lenke: "" },
  ],
  forbund: { navn: "Norges Bordtennisforbund", logo: "bilder/sponsorer/nbtf.png", lenke: "" },

  // Bildegalleri. Album med tittel, dato og bilder (bilde + valgfri tekst)
  // Eksempel: { tittel: "Klubbmesterskap", dato: "2026-10-05", bilder: [{ bilde: "bilder/km-1.jpg", tekst: "Finalen" }] }
  galleri: [
    {
      tittel: "Spillere",
      dato: "",
      bilder: [
        { bilde: "bilder/spiller-tobias-sunde.jpg", tekst: "Tobias Sunde" },
        { bilde: "bilder/spiller-daniel-mydland.jpg", tekst: "Daniel Mydland" },
      ],
    },
    {
      tittel: "Serielag",
      dato: "",
      bilder: [
        { bilde: "bilder/seriemestere-3div-2025-26.jpg", tekst: "Serielaget som vant 3. divisjon 2025/26" },
      ],
    },
  ],

  priser: [
    { navn: "Medlemsavgift barn", pris: "500 kr", beskrivelse: "Per år – faktura sendes ut i januar" },
    { navn: "Medlemsavgift voksne", pris: "1 000 kr", beskrivelse: "Per år – faktura sendes ut i januar" },
    { navn: "Treningsavgift", pris: "500 kr", beskrivelse: "For alle – faktura sendes ut i oktober" },
  ],
};
