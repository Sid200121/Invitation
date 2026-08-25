// Edit everything here — no need to touch any component files.

export const event = {
  hostFamily: "The XYZ Family",
  occasion: "Ganpati Darshan",
  dateLabel: "Monday, 14 September 2026",
  timeLabel: "6:00 PM onwards",
  addressLine1: "Sai Sankul Phase 2",
  addressLine2: "Kalyan West",
  hostNote:
    "Come as you are — Bappa's home is open to everyone who walks in with a smile.",
  // Optional: exact coordinates for a precise Google Maps pin.
  // Right-click the exact spot on Google Maps → click the lat/lng that
  // pops up to copy it → paste here. Leave as null to fall back to a
  // text search on the address above (less precise for generic addresses).
  coordinates: null as { lat: 19.25418610491282; lng: 73.14024957955716 } | null,
};

export const giftIdeas = [
  {
    category: "Flowers",
    items: ["Fresh marigold garlands", "Red hibiscus (jaswand)", "Lotus stems"],
  },
  {
    category: "Sweets",
    items: ["Modak", "Motichoor laddoo", "Puran poli"],
  },
  {
    category: "Offerings",
    items: ["Coconut", "Durva grass", "Small brass diya"],
  },
  {
    category: "A Small Extra",
    items: ["Incense sticks", "A potted tulsi or money plant", "Handwritten card"],
  },
];

// Traditional Marathi aarti — public domain devotional text.
export const aarti = {
  title: "सुखकर्ता दुःखहर्ता",
  lines: [
    "सुखकर्ता दुःखहर्ता, वार्ता विघ्नाची |",
    "नुरवी पुरवी प्रेम, कृपा जयाची |",
    "सर्वांगी सुंदर, उटी शेंदुराची |",
    "कंठी झळके माळ, मुक्ताफळांची ||",
    "",
    "जय देव जय देव, जय मंगलमूर्ती |",
    "दर्शनमात्रे मनकामना पुरती || धृ. ||",
    "",
    "रत्नखचित फरा, तुज गौरीकुमरा |",
    "चंदनाची उटी, कुंकुमकेशरा |",
    "हिरेजडित मुकुट, शोभतो बरा |",
    "रुणझुणती नूपुरे, चरणी घागरिया ||",
    "",
    "जय देव जय देव, जय मंगलमूर्ती |",
    "दर्शनमात्रे मनकामना पुरती || २ ||",
    "",
    "लंबोदर पीताम्बर, फणिवरबंधना |",
    "सरळ सोंड वक्रतुंड, त्रिनयना |",
    "दास रामाचा वाट पाहे सदना |",
    "संकटी पावावे, निर्वाणी रक्षावे, सुरवरवंदना ||",
    "",
    "जय देव जय देव, जय जय मंगलमूर्ती |",
    "दर्शनमात्रे मनकामना पुरती || ३ ||",
  ],
};

export const rsvpOptions = [
  { value: "yes", label: "Yes, I'll be there", emoji: "🙏" },
  { value: "maybe", label: "Maybe", emoji: "🙂" },
  { value: "no", label: "Can't make it", emoji: "😔" },
] as const;

export type RsvpValue = (typeof rsvpOptions)[number]["value"];
