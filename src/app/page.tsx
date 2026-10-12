import { Booking } from "@/components/Booking";
import { Buffet } from "@/components/Buffet";
import { Footer } from "@/components/Footer";
import { Grill } from "@/components/Grill";
import { Hero } from "@/components/Hero";
import { Hire } from "@/components/Hire";
import { Locations } from "@/components/Locations";
import { MenuSection } from "@/components/MenuSection";
import { Nav } from "@/components/Nav";
import { Press } from "@/components/Press";
import { Story } from "@/components/Story";
import { Ticker } from "@/components/Ticker";
import { LOCATIONS, PHONE_TEL, THEFORK_WIDGET } from "@/lib/data";

const peckham = LOCATIONS[0];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Suuyar",
  servesCuisine: ["Nigerian", "West African", "Barbecue"],
  priceRange: "££",
  telephone: PHONE_TEL,
  url: "https://suuyar.com",
  image: "https://suuyar.com/images/grill.jpg",
  acceptsReservations: THEFORK_WIDGET,
  address: {
    "@type": "PostalAddress",
    streetAddress: peckham.address[0],
    addressLocality: "London",
    postalCode: peckham.postcode,
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "15:00",
      closes: "21:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Grill />
        <Buffet />
        <MenuSection />
        <Story />
        <Hire />
        <Press />
        <Locations />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
