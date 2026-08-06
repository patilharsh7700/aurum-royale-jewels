export const NAV = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "Craftsmanship", to: "/craftsmanship" },
  { label: "Maison", to: "/about" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
] as const;

export const COLLECTIONS = [
  {
    slug: "bridal",
    name: "Vivaha Bridal",
    tagline: "Heirlooms for the day you become forever",
    pieces: 46,
    from: "₹3,84,000",
    note: "Uncut polki, Burmese rubies and 22K hand-drawn gold.",
  },
  {
    slug: "diamond",
    name: "Lumière Solitaire",
    tagline: "IGI & GIA certified brilliance, set by hand",
    pieces: 62,
    from: "₹1,26,500",
    note: "Triple Excellent cut grade, D–F colour, VVS clarity.",
  },
  {
    slug: "gold",
    name: "Aurea 22K Heritage",
    tagline: "Temple motifs re-drawn for the modern wardrobe",
    pieces: 88,
    from: "₹72,900",
    note: "BIS 916 hallmarked, hand-engraved in Coimbatore.",
  },
] as const;

export const PRODUCTS = [
  {
    name: "Anantha Polki Choker",
    house: "Vivaha Bridal",
    price: "₹8,45,000",
    emi: "₹23,472/mo · 36 mo",
    spec: "22K Gold · 18.4ct Polki · Zambian Emerald",
    cert: "BIS 916 · IGI 2411-DX",
  },
  {
    name: "Aurore Solitaire Ring",
    house: "Lumière",
    price: "₹4,18,000",
    emi: "₹11,611/mo · 36 mo",
    spec: "18K Rose Gold · 1.52ct · E VVS1",
    cert: "GIA 6472118093",
  },
  {
    name: "Meenakshi Temple Haram",
    house: "Aurea Heritage",
    price: "₹12,90,000",
    emi: "₹35,833/mo · 36 mo",
    spec: "22K Gold · Kemp Stones · 148g",
    cert: "BIS 916 · Hallmark HUID",
  },
  {
    name: "Étoile Diamond Drops",
    house: "Lumière",
    price: "₹2,36,500",
    emi: "₹6,569/mo · 36 mo",
    spec: "18K White Gold · 2.10ct total · F VS1",
    cert: "IGI 622398471",
  },
] as const;

export const SERVICES = [
  {
    title: "Private Atelier Appointment",
    body: "A closed-door showroom hour with a master gemmologist, champagne and a curated tray built around you.",
  },
  {
    title: "Bespoke Commission",
    body: "From hand sketch to CAD to wax to setting — your piece, drawn in 14 days, delivered in 60.",
  },
  {
    title: "Lifetime Care",
    body: "Complimentary polishing, rhodium renewal, re-stringing and annual certification for life.",
  },
  {
    title: "Certified Buyback",
    body: "100% gold value and 90% diamond value assured, in writing, on every invoice we issue.",
  },
] as const;

export const STATS = [
  { value: 74, suffix: "", label: "Years of the Maison" },
  { value: 118, suffix: "K", label: "Families served" },
  { value: 42, suffix: "", label: "Master artisans" },
  { value: 100, suffix: "%", label: "Certified & hallmarked" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ananya Rathore",
    city: "Udaipur",
    piece: "Anantha Polki Choker",
    rating: 5,
    quote:
      "They redrew my grandmother's 1954 choker from a single photograph. When my mother saw it, she cried. That is not retail — that is memory work.",
  },
  {
    name: "Kabir & Meher Sethi",
    city: "London",
    piece: "Aurore Solitaire Ring",
    rating: 5,
    quote:
      "Three houses on Bond Street could not match the cut grade for the price. The GIA papers arrived before the ring did.",
  },
  {
    name: "Dr. Lakshmi Iyer",
    city: "Chennai",
    piece: "Meenakshi Temple Haram",
    rating: 5,
    quote:
      "148 grams of 22K, hand-engraved over eleven weeks. I was sent photographs from the bench every Friday. Extraordinary.",
  },
] as const;

export const JOURNAL = [
  {
    slug: "reading-a-diamond-certificate",
    tag: "Gemmology",
    title: "Reading a diamond certificate like a gemmologist",
    read: "6 min",
    date: "12 July 2026",
    excerpt:
      "Cut grade, fluorescence, table percentage — the four numbers on a GIA report that decide whether a stone sings or sleeps.",
    body: [
      "Most buyers read a certificate from the top down: carat, colour, clarity, and then stop. A gemmologist reads it from the middle out — beginning with the proportions diagram, because cut is the only one of the four Cs that is entirely the work of human hands.",
      "A table percentage between 54 and 57, a depth of 61 to 62.3, and a crown angle near 34.5 degrees are the quiet indicators of a stone that will return light rather than leak it. Two diamonds with identical colour and clarity grades can differ by thirty percent in brilliance on these numbers alone.",
      "Fluorescence is the most misread line on the page. Faint to medium blue fluorescence in a J or K colour stone often improves its face-up appearance and costs materially less. Strong fluorescence in a D to F stone is where caution belongs.",
      "Finally, check that the girdle inscription matches the report number under a loupe. Every Aurum Royale diamond above 0.30ct is inscribed, photographed at the bench, and delivered with its original laboratory report issued in your name.",
    ],
  },
  {
    slug: "nakashi-repousse-temple-gold",
    tag: "Heritage",
    title: "Nakashi: the vanishing art of repoussé temple gold",
    read: "9 min",
    date: "28 June 2026",
    excerpt:
      "Eleven weeks, a bed of lac, and a hundred blunt punches: how a flat sheet of 22K becomes a goddess in relief.",
    body: [
      "Nakashi is the craft of raising a figure out of a flat sheet of gold by striking it from behind. The sheet is laid on a warm bed of lac — a resin that yields under the punch and holds the form when it cools — and worked from both sides over many weeks.",
      "Our senior nakashi artisans in Coimbatore begin with a charcoal drawing taken from temple gopuram sculpture, then raise the volume in four passes: the mass, the limbs, the drapery, and finally the face, which is always struck last and always by the same hand.",
      "A single Meenakshi pendant of the kind that anchors our temple harams takes between nine and twelve weeks. Nothing is cast, nothing is CNC-cut, and no two are identical — the tool marks on the reverse are effectively a signature.",
      "Fewer than two hundred artisans in India still work at this level. Every haram we sell funds an apprentice year at the bench, because a craft that is not taught is a craft that is already gone.",
    ],
  },
  {
    slug: "building-a-trousseau-in-four-acts",
    tag: "Bridal",
    title: "Building a trousseau in four acts, not four days",
    read: "7 min",
    date: "05 June 2026",
    excerpt:
      "A bridal wardrobe assembled over twelve months costs less, fits better, and carries further than one bought in a panic.",
    body: [
      "The first act is the anchor: one ceremonial piece — a polki choker or a temple haram — chosen twelve to fourteen months out, because uncut polki of matched colour takes that long to source honestly.",
      "The second act is the everyday: a solitaire, a pair of studs, a slim bangle stack. These are worn for decades, so they are bought on cut and comfort rather than on carat.",
      "The third act is the ritual set — mangalsutra, kamarbandh, jhumkas — commissioned once the outfits are finalised, so metal tone and stone colour answer the fabric rather than fight it.",
      "The fourth act is the inheritance: a single unhurried commission made after the wedding, from stones already in the family. It is the piece your daughter will describe to a jeweller from a photograph one day.",
    ],
  },
] as const;

export const FAQS = [
  {
    q: "Is every piece hallmarked and certified?",
    a: "Yes. Every gold piece carries a BIS 916 hallmark with a unique HUID, and every diamond above 0.30ct ships with an original GIA or IGI certificate in your name.",
  },
  {
    q: "What is your buyback and exchange policy?",
    a: "100% of prevailing gold value and 90% of invoiced diamond value, lifetime, at any Aurum Royale boutique — printed on the invoice, no fine print.",
  },
  {
    q: "How long does a bespoke commission take?",
    a: "Hand sketches within 7 days, approved CAD renders within 14, and delivery in 45–60 days depending on stone sourcing and engraving complexity.",
  },
  {
    q: "Do you offer EMI and international shipping?",
    a: "Zero-cost EMI up to 36 months across major cards, and fully insured white-glove shipping to 42 countries with customs handled by us.",
  },
  {
    q: "Can I book a private viewing at home?",
    a: "Within Mumbai, Delhi, Chennai and Bengaluru our concierge will bring a secured, curated tray to your residence for a two-hour private viewing.",
  },
] as const;

export const AWARDS = [
  "Retail Jeweller India — House of the Year 2025",
  "De Beers Forevermark Craft Honour 2024",
  "IGI Excellence in Certification 2024",
  "Condé Nast Traveller — Boutique Experience 2023",
] as const;