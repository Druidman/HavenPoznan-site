/**
 * Everything the Haven Poznań page renders, in one place.
 *
 * The shape mirrors what the haven/* SvelteKit site stores per city: the copy
 * the organizers wrote (this file) layered over the site-wide defaults for
 * anything a city has not written — nav labels, the steps section, the image
 * manifest — exactly how `resolveSiteData` merges an Airtable row.
 */

export type Marked = { text: string; mark?: boolean }[];
export type Linked = { text: string; href?: string }[];

export interface PerkPhoto {
  src: string;
  alt?: string;
  position?: string;
  href?: string;
  caption?: { title: string; author: string };
}

export interface Perk {
  title: string;
  side: "start" | "end";
  blurb: string[];
  photos: PerkPhoto[];
}

export interface PitchItem {
  align: "start" | "center" | "end";
  body: Marked;
}

export interface PastEvent {
  title: string;
  caption: string;
  image: string;
  alt?: string;
  play: string;
  href: string;
  position?: string;
}

export interface Sponsor {
  name: string;
  image: string;
  href: string;
}

/** The thank-you note shown next to the sponsor logos. */
export interface SponsorThanks {
  title: string;
  body: string[];
}

export interface ScheduleDay {
  day: string;
  items: { time: string; title: string; body?: string }[];
}

export interface FaqItem {
  q: string;
  a: Linked;
}

export type ImageKey = keyof typeof imageDefaults;

export type SiteImages = Record<ImageKey, string>;

/**
 * Every image the site renders, in one place, so a page can swap any of them
 * without a component learning about overrides. Same keys, same paths as the
 * haven/* site's `imageDefaults`.
 */
export const imageDefaults = {
  // Shared
  logo: "/images/logo.webp",
  navBanner: "/images/nav-banner.png",

  // Hero
  heroBackground: "/images/hero/hero-bg-no-sticky-tree.webp",
  heroForeground: "/images/hero-foreground.webp",
  hedgehog: "/images/hedgehog.webp",
  scrollArrow: "/images/triangle-down.svg",

  // The illustrated backdrops the middle of the page sits on (CSS backgrounds).
  stageMiddle: "/images/bg-middle.webp",
  stageMiddleMobile: "/images/middle/mid-phone-bg.webp",
  stagePicnic: "/images/middle/picnic-bg.webp",
  stagePicnicMobile: "/images/middle/picnic-bg-mobile.webp",

  // About
  aboutDaven: "/images/daven.webp",
  aboutSignSide: "/images/about/sign-side.webp",
  aboutSignBack: "/images/about/sign-back.webp",

  // Pitch
  pitchTriangles: "/images/banner-triangles.webp",
  pitchDaven: "/images/pitch/excited-daven.webp",
  pitchBubbleMobile: "/images/pitch/bubble-2.webp",
  pitchPanelMobile: "/images/pitch/rounded-rectangle.webp",
  pitchBubble1: "/images/pitch/bubble-1.webp",
  pitchBubble2: "/images/pitch/bubble-2.webp",
  pitchBubble3: "/images/pitch/bubble-3.webp",

  // Steps
  stepsFlowerBorder: "/images/flower-border.webp",
  stepsFlowersTopLeft: "/images/steps/flowers-top-l.webp",
  stepsFlowersTopRight: "/images/steps/flowers-top-r.webp",
  stepsFlowersBottomLeft: "/images/steps/flowers-bottom-l.webp",
  stepsFlowersBottomRight: "/images/steps/flowers-bottom-r.webp",
  stepsBackground: "/images/steps/step-bg-desktop.webp",
  stepsBackgroundMobile: "/images/steps/step-bg-mobile.webp",

  // Schedule
  scheduleTrail: "/images/schedule/trail-w.webp",
  scheduleTrailSide: "/images/schedule/trail-v.webp",
  schedulePlantsSmall: "/images/schedule/side-plants-1.webp",
  schedulePlantsLarge: "/images/schedule/side-plants-2.webp",
  scheduleSheep: "/images/schedule/sheep.webp",
  scheduleDaven: "/images/schedule/daven-smol.webp",
  schedulePlantLeft: "/images/schedule/plant-l.webp",
  schedulePlantRight: "/images/schedule/plant-r.webp",

  // Sponsors
  sponsorsEdgeTop: "/images/sponsors/map-edge-daven.webp",
  sponsorsEdgeBottom: "/images/sponsors/map-edge.webp",
  sponsorsBushSmall: "/images/sponsors/bushes-1.webp",
  sponsorsBushMedium: "/images/sponsors/bushes-2.webp",
  sponsorsBushLarge: "/images/sponsors/bushes-3.webp",
  sponsorsGrassSmall: "/images/sponsors/grass-1.webp",
  sponsorsGrassLarge: "/images/sponsors/grass-2.webp",
  sponsorsPumpkins: "/images/sponsors/pumpkin-patch.webp",
  sponsorsHouseLeft: "/images/sponsors/houses-1-l.webp",
  sponsorsHouseRight: "/images/sponsors/houses-1-r.webp",
  sponsorsHouseTop: "/images/sponsors/top-house.webp",
  sponsorsBoxXl: "/images/sponsors/brown-box-xl.webp",
  sponsorsBoxTall: "/images/sponsors/brown-box-tall.webp",
  sponsorsBoxShort: "/images/sponsors/brown-box-short.webp",
  sponsorsTrail: "/images/sponsors/lil-brown-trail.webp",

  // FAQ
  faqSky: "/images/faq/sky.webp",
  faqGround: "/images/faq/ground.webp",
  faqBushLeft: "/images/faq/bushes-1.webp",
  faqBushRight: "/images/faq/bushes-2.webp",
  faqBushBack: "/images/faq/bushes-3.webp",
  faqBushFrontRight: "/images/faq/bushes-4.webp",
  faqBushFrontLeft: "/images/faq/bushes-5.webp",
  faqPondLeft: "/images/faq/pond-1.webp",
  faqPondRight: "/images/faq/pond-2.webp",
  faqPondFront: "/images/faq/pond-3.webp",
  faqLeaves: "/images/faq/full-fall.webp",
  faqCard: "/images/faq/big-fall.webp",
  faqChevron: "/images/faq/faq-chevron.webp",
  faqArrow: "/images/footer/arrow.webp",

  // Footer
  footerBushes: "/images/footer/bottom-bushes.webp",
} as const;

/** The site's fonts, mirroring `--font-display` / `--font-body` in globals.css. */
export const fontDefaults = {
  display:
    '"Darumadrop One", "Jua Extras", "Jua", ui-rounded, system-ui, sans-serif',
  body: '"Jua Extras", "Jua", ui-rounded, system-ui, sans-serif',
} as const;

/** Where to find Hack Club: the same links on every page, labels may be reworded. */
export const footerLinks = [
  { key: "hackClub", label: "Hack Club", href: "https://hackclub.com" },
  { key: "slack", label: "Slack", href: "https://hackclub.com/slack/" },
  { key: "clubs", label: "Kluby", href: "https://hackclub.com/clubs/" },
  {
    key: "hackathons",
    label: "Hackathony",
    href: "https://hackathons.hackclub.com",
  },
] as const;

export type FooterLinkKey = (typeof footerLinks)[number]["key"];

const ORGANIZER_EMAIL = "poznan@haven.hackclub.com";

/**
 * Haven Poznań's copy — the JSON the organizers wrote — with the site-wide
 * defaults for the sections a city page does not write (steps, images, nav).
 */
export const havenPoznan = {
  meta: {
    title: "Haven Poznań — game jam dla nastolatków",
    description:
      "Jednodniowy game jam dla młodzieży 13–18 lat. 21 listopada w Poznaniu. Za darmo, bez doświadczenia.",
    image: "https://haven.hackclub.com/images/haven-logo-color.webp",
  },
  // A city page is named after its event, whatever the document says.
  title: ["Haven Poznań"],
  nav: {
    signup: "Zapisy",
    about: "O evencie",
    faq: "FAQ",
  },
  navLinks: [
    { key: "signup", href: "#top" },
    { key: "about", href: "#about" },
    { key: "faq", href: "#faq" },
  ] as { key: "signup" | "about" | "faq"; href: string }[],
  tagline: [
    "Game jam dla młodzieży 13–18",
    "21 listopada · eNstudios, Poznań",
  ],
  hero: {
    // City pages carry a "Contact us:" line to their own inbox.
    contact: "Contact us:",
    contactEmail: ORGANIZER_EMAIL,
    mapLabel: "znajdź event w pobliżu",
    scrollLabel: "więcej info",
    signup: {
      placeholder: "twoj@email.pl",
      button: "zapisz się!",
      lang: "pl",
    },
  },
  about: {
    title: "Czym jest game jam?",
    body: "To wydarzenie, na którym przez cały dzień robisz ze znajomymi własną grę — a jedzenie jest za darmo!",
    perks: [
      {
        title: "Ucz się i twórz",
        side: "start",
        blurb: ["warsztaty albo własne tempo — jak wolisz"],
        photos: [
          {
            src: "/images/projects-1.webp",
            alt: "Return to the Sender, gra zrobiona na jednym z poprzednich eventów",
            href: "https://i1rs7.itch.io/return-to-the-sender",
            caption: {
              title: "return to the sender",
              author: "autor: i1rs7",
            },
          },
          {
            src: "/images/projects-3.webp",
            alt: "Office Click Clack, gra zrobiona na jednym z poprzednich eventów",
            href: "https://theavgeekbee.itch.io/office-click-clack",
            caption: {
              title: "office click clack",
              author: "autorzy: bunnyguy i nathan",
            },
          },
        ],
      },
      {
        title: "Nowi znajomi",
        side: "end",
        blurb: ["poznaj ludzi, z którymi zostaniesz w kontakcie na dłużej"],
        photos: [
          {
            src: "/images/friends-1.webp",
            alt: "Uczestnicy spędzający razem czas",
          },
          {
            src: "/images/friends-2.webp",
            alt: "Grupa nastolatków pracująca przy wspólnym stole",
          },
        ],
      },
      {
        title: "Jedzenie i nagrody",
        side: "start",
        blurb: ["darmowym przekąskom się nie odmawia :)"],
        photos: [
          { src: "/images/food-1.webp", alt: "Stół z przekąskami i gadżetami" },
          {
            src: "/images/food-3.webp",
            alt: "Uczestnicy pokazujący swoje nagrody",
          },
        ],
      },
    ] as Perk[],
  },
  pitch: {
    heading: "Brzmi nieźle, co?",
    items: [
      {
        align: "end",
        body: [
          { text: "W listopadzie " },
          {
            text: "TY możesz wziąć udział w największym game jamie dla nastolatków na świecie.",
            mark: true,
          },
          {
            text: " Tak, ty! Nieważne, czy programujesz od lat, czy słowo „game jam” słyszysz pierwszy raz w życiu.",
          },
        ],
      },
      {
        align: "start",
        body: [
          { text: "Dołączysz do " },
          { text: "tysięcy nastolatków z całego świata", mark: true },
          {
            text: ", którzy w ten sam weekend robią swoje gry. Nie czujesz się game devem? Spokojnie — na miejscu będzie warsztat z Godota i mentorzy, którzy pomogą ci zrobić grę.",
          },
        ],
      },
      {
        align: "center",
        body: [
          { text: "To twoja szansa, żeby " },
          { text: "nauczyć się czegoś nowego,", mark: true },
          { text: " " },
          { text: "poznać nowych ludzi", mark: true },
          { text: " i " },
          { text: "przeżyć razem niezłą przygodę!", mark: true },
        ],
      },
    ] as PitchItem[],
  },
  steps: {
    // As the live haven/poznan page renders it (the stored JSON overrides the
    // site-wide defaults for this section too).
    heading: "Jak dołączyć do game jamu w listopadzie?",
    subheading: "(Spokojnie, przeprowadzimy cię przez każdy krok)",
  },
  schedule: {
    heading: "Jak wygląda wydarzenie?",
    tbd: {
      title: "Już wkrótce!",
      body: "Jeszcze dopinamy harmonogram. Zapisz się, a damy znać, jak tylko będzie gotowy!",
    },
    days: [
      {
        day: "Sobota, 21 listopada",
        items: [
          {
            time: "9:00",
            title: "rejestracja i śniadanie",
            body: "Odbierz identyfikator, poznaj ludzi i znajdź drużynę.",
          },
          { time: "10:00", title: "otwarcie" },
          {
            time: "10:30",
            title: "ice breaking",
            body: "Zabawy integracyjne — idealny moment, żeby znaleźć drużynę.",
          },
          {
            time: "11:00",
            title: "warsztat z Godota",
            body: "Podstawy Godota dla początkujących z Mateuszem Kowalskim.",
          },
          { time: "12:00", title: "start tworzenia gier" },
          { time: "13:00", title: "obiad" },
          { time: "19:00", title: "kolacja" },
          {
            time: "21:00",
            title: "koniec tworzenia",
            body: "Ostatni moment na opublikowanie gry na itch.io.",
          },
          {
            time: "21:30",
            title: "prezentacje i testowanie",
            body: "Chodzimy między stanowiskami i gramy w gry innych drużyn.",
          },
          {
            time: "22:30",
            title: "zakończenie i nagrody",
            body: "Wręczenie nagród zwycięzcom i upominków dla wszystkich, którzy opublikowali grę.",
          },
        ],
      },
    ] as ScheduleDay[],
  },
  pastEvents: {
    heading: [
      "Hack Club pomógł nastolatkom zorganizować setki eventów na całym świecie!",
      "Zobacz kilka z nich ~",
    ],
    items: [
      {
        title: "Scrapyard",
        caption:
          "Buduj dziwne rzeczy, wygrywaj dziwne nagrody! Hackathon stacjonarny w ponad 70 miastach.",
        image: "/images/scrapyard-pic.webp",
        alt: "Nastolatki budujące projekty na Scrapyardzie",
        play: "/images/play-triangle-1.svg",
        href: "https://www.youtube.com/watch?v=8iM1W8kXrQA",
      },
      {
        title: "Daydream",
        caption:
          "Game jamy prowadzone przez uczniów w 200 miastach — od Londynu, przez Nowy Jork, po Penang!",
        image: "/images/daydream-pic.webp",
        alt: "Uczestnicy game jamu Daydream",
        play: "/images/play-triangle-2.svg",
        href: "https://www.youtube.com/watch?v=vvdoW2gh9YU",
      },
      {
        title: "Campfire",
        caption:
          "Nasz największy game jam: 10 tys. nastolatków, jeden weekend, wszyscy robią gry w tym samym czasie!",
        image: "/images/scrapyard-pic-2.webp",
        alt: "Pełna sala nastolatków na Campfire",
        play: "/images/play-triangle-3.svg",
        href: "https://www.youtube.com/watch?v=0aMAHuLxg3s",
        position: "object-bottom",
      },
    ] as PastEvent[],
    safety: [
      {
        text: "Bezpieczeństwo traktujemy serio. Poradnik dla rodziców (po angielsku) jest ",
      },
      {
        text: "tutaj",
        href: "https://docs.google.com/document/d/1NKjI_6sksQOKyrdeE1wEJZYSWEvix8LB74sIF2vokoI/edit?usp=sharing",
      },
      { text: ", a z pytaniami można pisać na " },
      { text: ORGANIZER_EMAIL, href: `mailto:${ORGANIZER_EMAIL}` },
      { text: "." },
    ] as Linked,
  },
  sponsors: {
    heading: "Nasi sponsorzy",
    // A short thank-you note from the team, shown next to the sponsor logos.
    thanks: {
      title: "Dziękujemy!",
      body: [
        "Ten event dzieje się dzięki ludziom, którzy uwierzyli w pomysł zanim cokolwiek się wydarzyło. Bez was nie byłoby tego wszystkiego — dziękujemy z całego serca!",
        "— ekipa Haven Poznań",
      ],
    },
    items: [
      {
        name: "cyberfolks",
        image:
          "https://cdn.hackclub.com/01a178f9-8840-7618-aa62-e951a9c189cf/cyberfolks.svg",
        href: "https://cyberfolks.pl/",
      },
      {
        name: "Bravecourses",
        image:
          "https://cdn.hackclub.com/01a178f9-8928-7994-ac2c-ab046699c039/bravecourses.svg",
        href: "https://www.brave.courses/",
      },
      {
        name: "11 bit studios",
        image:
          "https://cdn.hackclub.com/01a178f9-89f7-7130-b20d-b6638b5f54ff/11bitstudios_logo.png",
        href: "https://11bitstudios.com/pl/",
      },
    ] as Sponsor[],
  },
  faq: {
    heading: "FAQ",
    cta: "Zapisz się!",
    items: [
      {
        q: "Kto może wziąć udział?",
        a: [
          {
            text: "Każdy w wieku 13–18 lat! Nie musisz nic umieć — wystarczą chęci.",
          },
        ],
      },
      {
        q: "Ile to kosztuje?",
        a: [
          {
            text: "Nic. Jedzenie, napoje, nocleg i gadżety są za darmo. Hack Club to organizacja non-profit, a resztę dokładają nasi sponsorzy.",
          },
        ],
      },
      {
        q: "Nigdy nie programowałem/am!",
        a: [
          {
            text: "Idealnie! Game jamy są robione z myślą o początkujących. Na miejscu będzie warsztat z podstaw Godota, mentorzy i drużyna, która ci pomoże.",
          },
        ],
      },
      {
        q: "Gdzie i kiedy?",
        a: [
          {
            text: "21 listopada 2026 w eNstudios, ul. Głogowska 216, Poznań. Event trwa jeden dzień — dokładne godziny znajdziesz w harmonogramie.",
          },
        ],
      },
      {
        q: "Co zabrać?",
        a: [
          {
            text: "Laptop z ładowarką, zmianę ubrań i ewentualne leki. Śpiwór nie jest już potrzebny — event nie trwa przez noc. Resztą zajmujemy się my.",
          },
        ],
      },
      {
        q: "Czy nocujemy na miejscu?",
        a: [
          {
            text: "Nie — po zmianie formatu event kończy się wieczorem tego samego dnia (ok. 23:00). Wszyscy wracamy do domu, a na miejscu cały czas są dorośli opiekunowie.",
          },
        ],
      },
      {
        q: "Jak działają drużyny?",
        a: [
          {
            text: "Grę robisz sam(a) albo w drużynie do 3 osób. Nie masz ekipy? Nic nie szkodzi — znajdziesz ją na miejscu.",
          },
        ],
      },
      {
        q: "Jaką grę mogę zrobić?",
        a: [
          {
            text: "Jaką chcesz, w czym chcesz — Godot, Unity, Scratch, JavaScript, Python… Na koniec publikujesz ją na itch.io, żeby każdy mógł w nią zagrać na swoim komputerze.",
          },
        ],
      },
      {
        q: "Jakie będą warsztaty?",
        a: [
          {
            text: "Podstawy Godota — od zera do pierwszej działającej gry. Prowadzi Mateusz Kowalski, jeden z organizatorów.",
          },
        ],
      },
      {
        q: "Co dostanę za udział?",
        a: [
          {
            text: "Merch Haven dostaje każdy, kto opublikuje grę na itch.io — dlatego tak ważne jest, żeby dokończyć projekt! Dla najlepszych drużyn są też nagrody, m.in. gry od 11 bit studios.",
          },
        ],
      },
      {
        q: "Czy potrzebuję zgody rodziców?",
        a: [
          {
            text: "Tak. Przed eventem wyślemy rodzicom/opiekunom formularz zgody (m.in. RODO i zasady: nie wychodzimy z budynku, zero alkoholu i używek). Bez podpisanej zgody nie możemy cię wpuścić.",
          },
        ],
      },
      {
        q: "Moi rodzice się martwią",
        a: [
          {
            text: "Rozumiemy! Wszyscy dorośli organizatorzy i mentorzy mają sprawdzoną niekaralność, na miejscu jest osoba przeszkolona z pierwszej pomocy, a uczestnicy są ubezpieczeni (NNW). Jest też ",
          },
          {
            text: "poradnik dla rodziców",
            href: "https://docs.google.com/document/d/1f_uFvFP4gD01YhXBmU9jBfEBU9QMvr1L5yJTKWBBhbA/edit?usp=sharing",
          },
          { text: " (po angielsku), a z pytaniami można pisać na " },
          { text: ORGANIZER_EMAIL, href: `mailto:${ORGANIZER_EMAIL}` },
          { text: "." },
        ],
      },
      {
        q: "Jestem dorosły/a — mogę pomóc?",
        a: [
          {
            text: "Jasne! Szukamy mentorów (zwłaszcza z doświadczeniem w gamedevie) i wolontariuszy. Napisz na ",
          },
          { text: ORGANIZER_EMAIL, href: `mailto:${ORGANIZER_EMAIL}` },
          { text: "." },
        ],
      },
      {
        q: "Mam jeszcze pytania!",
        a: [
          { text: "Pisz śmiało na " },
          { text: ORGANIZER_EMAIL, href: `mailto:${ORGANIZER_EMAIL}` },
          { text: " albo na Instagramie " },
          {
            text: "@havenpoznan",
            href: "https://www.instagram.com/havenpoznan/",
          },
          { text: " — odpowiadamy szybko!" },
        ],
      },
    ] as FaqItem[],
  },
  footer: {
    body: [
      [
        {
          text: "Hack Club to organizacja non-profit (501(c)(3)) i społeczność ponad 100 tys. nastolatków, którzy lubią technologię. Wierzymy, że najlepiej uczysz się, budując, więc tworzymy społeczność i dajemy granty na fajne projekty. W ostatnich latach ",
        },
        {
          text: "wysłaliśmy 30 nastoletnich hakerów na szlak Pacific Crest Trail",
          href: "https://www.youtube.com/watch?v=ufMUJ9D1fi8",
        },
        { text: ", " },
        {
          text: "zorganizowaliśmy hackathon na najgorsze pomysły",
          href: "https://www.youtube.com/watch?v=8iM1W8kXrQA",
        },
        { text: " i " },
        {
          text: "zrobiliśmy największy hackathon sprzętowy dla nastolatków w siedzibie GitHuba",
          href: "https://www.youtube.com/watch?v=kaEFv7e49mo",
        },
        { text: "." },
      ],
      [
        { text: "O Hack Clubie pisały " },
        {
          text: "The Wall Street Journal",
          href: "https://www.wsj.com/articles/teen-hackers-try-to-convince-parents-they-are-up-to-good-11569922200",
        },
        { text: ", " },
        {
          text: "CBS News",
          href: "https://www.cbsnews.com/sanfrancisco/news/hack-club-hosts-teen-coders-san-francisco/",
        },
        { text: " i " },
        {
          text: "NASA.gov",
          href: "https://www.nasa.gov/learning-resources/space-out-this-summer-with-variety-of-nasa-stem-activities/",
        },
        { text: ". Możesz też zobaczyć nas " },
        {
          text: "na scenie z CEO AMD Lisą Su na CES",
          href: "https://www.youtube.com/live/UbfAhFxDomE?si=5DiK1_hGqKrB_r50&t=7033",
        },
        { text: "." },
      ],
      [
        { text: "Zrobione z ♥ przez nastolatków dla nastolatków w Hack Clubie" },
      ],
    ] as Linked[],
    links: {
      hackClub: "Hack Club",
      slack: "Slack",
      clubs: "Kluby",
      hackathons: "Hackathony",
    } as Record<FooterLinkKey, string>,
  },
  images: imageDefaults as SiteImages,
  fonts: fontDefaults,
} as const;

/** The attendee signup form, with this event preselected. */
export const SIGNUP_URL = "https://forms.hackclub.com/haven-signup";
export const SIGNUP_EVENT_ID = "recdBBtI9Hw1z8vsH";
/** Two-letter language code forwarded to the signup form. */
export const SIGNUP_LANG = "pl";

/** The one pin on the map: this event. */
export const city = {
  id: SIGNUP_EVENT_ID,
  name: "Poznań",
  lat: 52.4016,
  lng: 16.879,
  href: "/#top",
  organizer: "Haven Poznań",
};

/** A CSS `url()` value that cannot escape its own quotes. */
export function cssUrl(src: string): string {
  return `url("${src.replace(/["'()<>\\`\s]/g, encodeURIComponent)}")`;
}
