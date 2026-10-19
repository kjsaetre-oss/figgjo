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
    { tall: "5", tekst: "Serielag" },
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
      dato: "2026-10-18",
      tittel: "Seier til Samuel og storspill av Max i Fjell Cup",
      tekst: "Lørdag var vi i Fyllingsdalen på Fjell Cup, og for en dag det ble!\n\nSamuel vant Herrer D. Han tapte ikke en eneste kamp, og finalen mot Håkon Vollan ble avgjort 3–2 i en skikkelig nervepirrende avslutning. I klassen 1400–1999 tok han i tillegg andreplassen.\n\nMax storspilte hele dagen. I Herrer D vant han alle tre gruppekampene og slo Bjørn Mathias Dahle 3–2 i åttendedelsfinalen, før han røk ut 2–3 i en jevn kvartfinale mot Amund Vollan. I 1400–1999 slo han Håkon Vollan – finalisten i Herrer D – 3–0, og han vant også sin rankingpulje etter 3–2 mot Stig Erik Elliott. Det var gøy å se!\n\nHenning gikk gjennom gruppespillet i Herrer D uten å avgi et eneste sett. Kurt vant også gruppen sin og tok seg helt til kvartfinalen, der det ble et knepent 2–3-tap mot Stig Erik Elliott.\n\nAlle våre spillere vant gruppene sine i Herrer D. Takk til Fjell for et godt arrangement, og takk til alle som var med – dette gir mersmak!",
      bilder: ["bilder/spiller-max-millian-gjerme.jpg"],
    },
    {
      dato: "2026-10-16",
      tittel: "Husk å betale spillerlisens",
      tekst: "Seriesesongen starter 24. oktober, og alle som skal spille kamp må ha betalt spillerlisens for 2026/27 før første kamp.\n\nLisens kreves for alle som spiller seriekamper og turneringer, fra og med 12 år. Den gir deg også forsikring: uten lisens er du ikke forsikret om du skader deg i kamp.\n\nSpiller noen uten lisens, får klubben bot fra Norges Bordtennisforbund. Det er penger vi heller vil bruke på trening, utstyr og turneringer.\n\nLisensen koster 600 kr for barn og 700 kr for voksne, og det tar bare noen minutter å betale på MinIdrett. Under «Spillerlisens» her på siden står det steg for steg hvordan du gjør det. Står du fast, ta kontakt med oss, så hjelper vi deg.",
      bilder: ["bilder/spiller-daniel-mydland.jpg"],
    },
    {
      dato: "2026-10-15",
      tittel: "Lye Ranking 31. oktober – 8 ledige plasser",
      tekst: "Lye IL arrangerer sin første rankingturnering lørdag 31. oktober i Lyehallen, og det er fortsatt 8 ledige plasser. Vi oppfordrer klubbens medlemmer til å bli med – en fin sjanse til å få mange kamper i nærområdet!\n\nDe 40 deltakerne deles i fem grupper à åtte der alle møter alle, så du er garantert 7 kamper. Det blir premie til 1. og 2. plass i hver gruppe.\n\nHallen åpner kl. 10.00, og første kamp starter kl. 11.00. Startkontingenten er 210 kr og faktureres klubben etter turneringen. Du må ha gyldig spillerlisens.\n\nPåmeldingsfrist er 27. oktober, men førstemann til mølla gjelder – så meld deg på så snart som mulig. Påmelding skjer på bordtennislive.no eller på e-post til markus@zeeh.no.",
      bilder: ["bilder/spiller-stian-pedersen.jpg"],
    },
    {
      dato: "2026-10-10",
      tittel: "Seriestart 24. oktober",
      tekst: "Helgen 24.–25. oktober starter seriesesongen 2026/27. Figgjo 1 spiller i 2. divisjon og møter Rakkestad, Fornebu 3, Kobra og Skien i Skien.\n\nFiggjo 2 åpner i 3. divisjon borte mot Rosseland 2 lørdag, og spiller første hjemmekamp søndag kl. 10.00 i Figgjohallen mot Stavanger BTK. Kom gjerne og hei!",
      bilder: ["bilder/serielag-2026-27-tre-spillere.jpg"],
    },
    {
      dato: "2026-10-10",
      tittel: "Ny gruppe: Bordtennis mot Parkinson",
      tekst: "Fra høsten 2026 starter vi en ny gruppe i Figgjohallen. Tirsdager kl. 12–13 er det trening ledet av fysioterapeut Christian Ibenfeld.\n\nDu trenger ikke ha spilt bordtennis før – treningen tilpasses hver enkelt. Egenandel 150 kr per gang, som går på frikortet.",
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
    { navn: "Figgjo 2", divisjon: "3. divisjon", avdeling: "Avd. E", lagtype: "4-mannslag", spillere: ["Jay Impuesto", "Stian Pedersen", "Kurt Rusnak (kaptein)", "Arian Myrbakk", "Max Millian Gjerme"] },
    { navn: "Figgjo 3", divisjon: "4. divisjon", avdeling: "", lagtype: "3-mannslag", spillere: ["Felix Bøe", "Tommy Landro (kaptein)", "Tobias Sunde", "Kenneth Haugland"] },
    { navn: "Figgjo 4", divisjon: "5. divisjon", avdeling: "", lagtype: "3-mannslag", spillere: ["Kjell Roar Bjørnsen (kaptein)", "Alexander Rosnes Jakobsen", "Elias Bøe", "Noah Klev"] },
    { navn: "Figgjo 5", divisjon: "5. divisjon", avdeling: "", lagtype: "3-mannslag", spillere: ["Nikolai Theis Haugland", "Gabriel Helgeland", "Jetmund Vorren", "Lukas Moskvil", "Elias Strømme"], lagleder: "Kenneth Haugland" },
  ],

  // Seriekamper for Figgjo 1 og 2 hentes automatisk fra bordtennislive.no (serie.js).
  // Her legges bare kamper for lag som IKKE ligger der (Figgjo 3 og 4). Dato: "ÅÅÅÅ-MM-DD"
  // Eksempel: { lag: "Figgjo 3", dato: "2026-11-14", kl: "12.00", hjemme: "Figgjo BTK 3", borte: "Sola BTK", sted: "Figgjohallen", resultat: "" }
  kamper: [
    // Figgjo 3, 4. divisjon 2026/27 (fra Fjerde_div_26_27_terminliste-1.csv)
    { lag: "Figgjo 3", dato: "2026-10-24", kl: "11.00", hjemme: "Stavanger 2", borte: "Figgjo 3", sted: "Stavangerhallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2026-11-09", kl: "18.00", hjemme: "Figgjo 3", borte: "Lye", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2026-11-21", kl: "13.30", hjemme: "Figgjo 3", borte: "Haugesund 3", sted: "Stavangerhallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2026-11-29", kl: "11.00", hjemme: "Figgjo 3", borte: "Stord 5", sted: "Stavangerhallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2026-11-29", kl: "13.30", hjemme: "Figgjo 3", borte: "Stord 4", sted: "Stavangerhallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2026-12-05", kl: "11.00", hjemme: "Figgjo 3", borte: "Stord 6", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2027-01-04", kl: "18.00", hjemme: "Figgjo 3", borte: "Stavanger 2", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2027-01-16", kl: "13.30", hjemme: "Randaberg", borte: "Figgjo 3", sted: "Randaberghallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2027-01-30", kl: "11.00", hjemme: "Haugesund 3", borte: "Figgjo 3", sted: "Haugesundhallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2027-01-30", kl: "16.00", hjemme: "Stord 6", borte: "Figgjo 3", sted: "Haugesundhallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2027-02-07", kl: "11.00", hjemme: "Stord 4", borte: "Figgjo 3", sted: "Stordhallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2027-02-07", kl: "13.30", hjemme: "Stord 5", borte: "Figgjo 3", sted: "Stordhallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2027-02-21", kl: "14.00", hjemme: "Lye", borte: "Figgjo 3", sted: "Lyehallen", resultat: "" },
    { lag: "Figgjo 3", dato: "2027-03-15", kl: "18.00", hjemme: "Figgjo 3", borte: "Randaberg", sted: "Figgjohallen", resultat: "" },
    // Figgjo 4, 5. divisjon sørvest 2026/27 (fra 5.div_sørvest_26_27_terminliste.csv)
    { lag: "Figgjo 4", dato: "2026-10-24", kl: "14.00", hjemme: "Figgjo 4", borte: "Haugesund 4", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2026-11-01", kl: "11.00", hjemme: "Figgjo 4", borte: "Skjoldar", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2026-11-14", kl: "11.00", hjemme: "Lye 2", borte: "Figgjo 4", sted: "Lyehallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2026-11-29", kl: "11.00", hjemme: "Figgjo 4", borte: "Dalane", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2026-12-16", kl: "18.00", hjemme: "Figgjo 5", borte: "Figgjo 4", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2027-01-04", kl: "18.00", hjemme: "Figgjo 4", borte: "Lye 2", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2027-01-20", kl: "18.00", hjemme: "Figgjo 4", borte: "Varhaug", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2027-01-31", kl: "11.00", hjemme: "Haugesund 4", borte: "Figgjo 4", sted: "Haugesundhallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2027-01-31", kl: "13.30", hjemme: "Skjoldar", borte: "Figgjo 4", sted: "Haugesundhallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2027-02-20", kl: "11.00", hjemme: "Figgjo 4", borte: "Figgjo 5", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2027-03-02", kl: "18.00", hjemme: "Dalane", borte: "Figgjo 4", sted: "Dalanehallen", resultat: "" },
    { lag: "Figgjo 4", dato: "2027-03-16", kl: "18.00", hjemme: "Varhaug", borte: "Figgjo 4", sted: "Varhaughallen", resultat: "" },
    // Figgjo 5, 5. divisjon sørvest 2026/27 (fra 5.div_sørvest_26_27_terminliste.csv)
    { lag: "Figgjo 5", dato: "2026-10-27", kl: "18.00", hjemme: "Varhaug", borte: "Figgjo 5", sted: "Varhaughallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2026-11-08", kl: "13.30", hjemme: "Figgjo 5", borte: "Haugesund 4", sted: "Varhaughallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2026-11-21", kl: "11.00", hjemme: "Figgjo 5", borte: "Dalane", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2026-11-21", kl: "13.30", hjemme: "Figgjo 5", borte: "Skjoldar", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2026-11-28", kl: "11.00", hjemme: "Lye 2", borte: "Figgjo 5", sted: "Lyehallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2026-12-16", kl: "18.00", hjemme: "Figgjo 5", borte: "Figgjo 4", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2027-01-04", kl: "18.00", hjemme: "Figgjo 5", borte: "Varhaug", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2027-01-14", kl: "18.00", hjemme: "Dalane", borte: "Figgjo 5", sted: "Dalanehallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2027-02-01", kl: "18.00", hjemme: "Figgjo 5", borte: "Lye 2", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2027-02-20", kl: "11.00", hjemme: "Figgjo 4", borte: "Figgjo 5", sted: "Figgjohallen", resultat: "" },
    { lag: "Figgjo 5", dato: "2027-03-07", kl: "11.00", hjemme: "Skjoldar", borte: "Figgjo 5", sted: "Skjoldar", resultat: "" },
    { lag: "Figgjo 5", dato: "2027-03-07", kl: "13.30", hjemme: "Haugesund 4", borte: "Figgjo 5", sted: "Skjoldar", resultat: "" },
  ],


  // Fotograf som vises på alle bilder, med mindre bildet har sin egen: { bilde: "...", fotograf: "Navn" }
  fotograf: "Kjell Roar Bjørnsen",

  // Trenere. bilde er valgfritt (uten bilde vises initialer)
  trenere: [
    { navn: "Kjetil Lindefjell Sætre", rolle: "Hovedtrener – kretstrening ungdom (torsdager)", bilde: "bilder/kjetil-lindefjell-saetre.jpg", tekst: "Kjetil er hovedtrener i klubben. Han har fem års idrettsutdanning fra universitetet og er utdannet personlig trener. Han har også Trener 2-utdanning gjennom Norges Bordtennisforbund. Tidligere jobbet han som bordtennistrener på fulltid i Bergen." },
    { navn: "Arian Myrbakk", rolle: "Trener – åpen trening (mandager)", bilde: "bilder/arian-myrbakk.jpg", tekst: "Arian er en ung og lovende trener som har vært trener i Stavanger i flere år. Nå er han trener i Figgjo, og snart starter han på Trener 1-utdanningen gjennom Norges Bordtennisforbund. Han kan mye bordtennis, er flink med ungdommer og har et godt øye for hva hver enkelt spiller trenger for å utvikle seg.", foto: "Kjell Roar Bjørnsen" },
    {
      navn: "Christian Ibenfeld",
      rolle: "Trener – Bordtennis mot Parkinson",
      bilde: "bilder/trener-christian-ibenfeld.jpg",
      tekst: "Fysioterapeut, utdannet i Montpellier i Frankrike i 1999, og har jobbet på Fysio Forum siden 2000. Med sin idrettsbakgrunn har han særlig fokus på funksjonell og individuelt tilpasset trening. Han driver flere treningsgrupper, blant annet en bordtennisgruppe for Parkinson i Stavanger.",
    },
    { navn: "Egil Klungtveit", rolle: "Trener – gatebordtennis med Frelsesarmeen (tirsdager)", bilde: "bilder/egil-klungtveit.jpg", tekst: "" },
    { navn: "Kenneth Haugland", rolle: "Trener – rekrutter (onsdager)", bilde: "bilder/kenneth-haugland.jpg", tekst: "" },
  ],

  // Styret
  styret: [
    { navn: "Kjetil Lindefjell Sætre", rolle: "Leder", bilde: "bilder/kjetil-lindefjell-saetre.jpg", tekst: "", epost: "kjsaetre@gmail.com", telefon: "949 79 992" },
    { navn: "Henning Pedersen", rolle: "Styremedlem", bilde: "bilder/henning-pedersen.jpg", tekst: "", foto: "Kjell Roar Bjørnsen" },
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
        { bilde: "bilder/spiller-stian-pedersen.jpg", tekst: "Stian Pedersen" },
        { bilde: "bilder/spiller-max-millian-gjerme.jpg", tekst: "Max Millian Gjerme" },
      ],
    },
    {
      tittel: "Serielag",
      dato: "",
      bilder: [
        { bilde: "bilder/seriemestere-3div-2025-26.jpg", tekst: "Serielaget som vant 3. divisjon 2025/26" },
        { bilde: "bilder/serielag-2026-27-tre-spillere.jpg", tekst: "Figgjo 2 – fra venstre: Arian Myrbakk, Kenneth Haugland og Kurt Rusnak" },
      ],
    },
  ],

  // Spillerlisens: egen seksjon på forsiden (#lisens)
  lisens: {
    tekst: "Alle som spiller seriekamper eller turneringer må ha spillerlisens fra Norges Bordtennisforbund. Lisensen koster 600 kr for barn og 700 kr for voksne, gjelder for én sesong og gir deg forsikring om du skader deg. Er du 11 år eller yngre, trenger du ikke lisens.",
    steg: [
      { tittel: "Gå til MinIdrett", tekst: "Åpne lisenssiden på MinIdrett og logg inn." },
      { tittel: "Velg bordtennislisens", tekst: "Velg lisens for sesongen 2026/27. Foresatte kjøper lisens for barna sine." },
      { tittel: "Betal", tekst: "Når lisensen er betalt, er du klar til å spille kamp." },
      { tittel: "Får du det ikke til?", tekst: "Ta kontakt med klubben, så hjelper vi deg." },
    ],
    merknad: "Betal lisensen før første kamp eller turnering. Spiller du uten lisens, får klubben bot.",
    lenke: "https://www.minidrett.no/lisens?sports=201",
    merInfo: "https://bordtennis.no/spillerlisens/",
  },

  priser: [
    { navn: "Medlemsavgift barn", pris: "500 kr", beskrivelse: "Per år – faktura sendes ut i januar" },
    { navn: "Medlemsavgift voksne", pris: "1 000 kr", beskrivelse: "Per år – faktura sendes ut i januar" },
    { navn: "Treningsavgift", pris: "500 kr", beskrivelse: "For alle – faktura sendes ut i oktober" },
  ],
};
