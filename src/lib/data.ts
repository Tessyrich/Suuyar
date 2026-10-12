export const PHONE_DISPLAY = "07476 667767";
export const PHONE_TEL = "+447476667767";
export const WHATSAPP = "https://wa.me/447476667767";
export const EMAIL = "info@suuyar.com";
export const THEFORK_WIDGET =
  "https://widget.thefork.com/9855d2b2-dec2-4aba-855b-73e63fb2ef52";

export const SOCIAL = {
  instagram: "https://www.instagram.com/chef_kolawole_ajayi/",
  tiktok: "https://www.tiktok.com/@kolawoleajayi",
  youtube: "https://www.youtube.com/nigeriacuisine",
  facebook: "https://www.facebook.com/nigeriacuisines/",
};

export type Location = {
  slug: string;
  name: string;
  kind: string;
  address: string[];
  postcode: string;
  hours: string;
  note?: string;
  maps: string;
  bookable: boolean;
};

export const LOCATIONS: Location[] = [
  {
    slug: "peckham-rye",
    name: "Peckham Rye",
    kind: "The restaurant",
    address: ["24A Peckham Rye", "London"],
    postcode: "SE15 4JR",
    hours: "Mon to Sun, 3pm to 9pm",
    note: "Weekend buffet Sat & Sun, 1pm to 6pm",
    maps: "https://www.google.com/maps/search/?api=1&query=Suuyar+24A+Peckham+Rye+SE15+4JR",
    bookable: true,
  },
  {
    slug: "rye-lane",
    name: "Rye Lane",
    kind: "The stall",
    address: ["152B Rye Lane", "London"],
    postcode: "SE15 4NB",
    hours: "Mon to Sun, 1pm to 6pm",
    note: "Takeaway. Where it started.",
    maps: "https://www.google.com/maps/search/?api=1&query=Suuyar+152B+Rye+Lane+SE15+4NB",
    bookable: false,
  },
  {
    slug: "catford",
    name: "Catford",
    kind: "The grill",
    address: ["280 Sangley Road", "London"],
    postcode: "SE6 2JT",
    hours: "Mon to Sun, 3pm to 9pm",
    maps: "https://www.google.com/maps/search/?api=1&query=Suuyar+280+Sangley+Road+SE6+2JT",
    bookable: false,
  },
];

export type MenuItem = {
  name: string;
  price: number;
  note?: string;
  tag?: "signature" | "hot" | "veg";
};

export type MenuSection = {
  id: string;
  label: string;
  blurb: string;
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "grill",
    label: "From the grill",
    blurb: "Yaji-crusted, charcoal-finished. Comes with raw onion and tomato.",
    items: [
      {
        name: "Beef suya",
        price: 13,
        note: "Thin-sliced beef, kuli-kuli yaji, open flame",
        tag: "signature",
      },
      {
        name: "Tozo suya",
        price: 13,
        note: "Beef hump. Richer, softer, the regulars' pick",
        tag: "signature",
      },
      {
        name: "Asun",
        price: 13,
        note: "Smoky goat tossed in scotch bonnet and peppers",
        tag: "hot",
      },
      { name: "Chicken wings", price: 13, note: "14 wings, suya-spiced and charred" },
      { name: "BBQ tilapia", price: 15, note: "Whole fish, scored and grilled" },
      { name: "Assorted meat", price: 10, note: "Four pieces of mixed offal" },
    ],
  },
  {
    id: "mains",
    label: "Mains & sides",
    blurb: "Built to go with the grill. Order a protein and a side, or let us combo it.",
    items: [
      { name: "Jollof rice", price: 8, note: "Smoky party-style jollof", tag: "veg" },
      { name: "Fried plantain", price: 8, note: "Ripe, caramelised at the edges", tag: "veg" },
      { name: "Suya fries", price: 8, note: "Potato fries dusted in yaji", tag: "veg" },
      { name: "Indomie", price: 10, note: "Curry-spiced noodles, plantain, egg, beef" },
      { name: "Naija shawarma", price: 10, note: "Suya beef, slaw, pepper sauce, wrapped" },
      { name: "Spaghetti", price: 8, note: "Nigerian-style stir-fried pasta" },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    blurb: "Jollof plus something from the grill. The quickest way in.",
    items: [
      { name: "Jollof + suya", price: 10, note: "Beef or tozo" },
      { name: "Jollof + asun", price: 10, tag: "hot" },
      { name: "Jollof + chicken wings", price: 10, note: "Four wings" },
      { name: "Jollof + any two", price: 15, note: "Pick two proteins" },
    ],
  },
  {
    id: "swallow",
    label: "Swallow",
    blurb: "Served with poundo yam. Eat with your hands.",
    items: [
      { name: "Efo riro & assorted meat", price: 20, note: "Spinach stew, palm oil, locust bean" },
      { name: "Egusi & assorted meat", price: 20, note: "Ground melon seed, bitterleaf" },
    ],
  },
];

export const BUFFET_ITEMS = [
  "Beef suya",
  "Tozo suya",
  "Asun",
  "Turkey suya",
  "BBQ tilapia",
  "Chicken wings",
  "Naija shawarma",
  "Jollof rice",
  "Plantain",
  "Suya fries",
  "Spring rolls",
  "Samosa",
];

export const PRESS = [
  {
    outlet: "Time Out",
    quote: "The best Nigerian barbecue in the area. Come prepared for proper, actual chilli.",
    href: "https://www.timeout.com/london/restaurants/suuyar",
  },
  {
    outlet: "The Infatuation",
    quote: "Sweet, soft, and hard to stop eating.",
    context: "on the gizdodo",
    href: "https://www.theinfatuation.com/london/reviews/suuyar-restaurant",
  },
  {
    outlet: "Baldflavours",
    quote: "A depth charge so satisfying that you can't help chasing one piece with the next.",
    href: "https://baldflavours.com/suuyar/",
  },
];

export const TICKER = [
  "Weekend suya buffet £25",
  "Sat & Sun, 1pm to 6pm",
  "Beef",
  "Tozo",
  "Asun",
  "Wings",
  "Tilapia",
  "Peckham Rye",
  "Rye Lane",
  "Catford",
  "Private hire for 30",
];
