# Suuyar – current site audit (12 Oct 2026)

## Who they are
- Nigerian suya restaurant group, founder/face: Chef Kolawole Ajayi (ex-soldier, Master's, ex social care; YouTube "Nigeria Cuisine" since 2012, ~93k YT subs, 200k+ followers across platforms, 30M+ views).
- Started as a street stall on Choumert Rd / Rye Lane (~2018), queue of an hour, people travel from outside London.
- Locations: 152B Rye Ln SE15 4NB (stall/takeaway, 13–18), 24A Peckham Rye SE15 4JR (restaurant, 15–21, ~28–30 covers), 280 Sangley Rd Catford SE6 2JT (15–21). Site also claims Leeds and Manchester with no addresses.
- Phone 07476 667767, info@suuyar.com.
- Press: Time Out ("best Nigerian barbecue in the area"), The Infatuation 7.7 (Apr 2025), Baldflavours, Business Day, Vittles mention.
- Signature offer: £25 weekend suya buffet (Sat/Sun 1–6pm, 2 hours, £40 with drink + takeaway). Birthday space hire: 30 capacity, £100/hour, 3–5 hours.
- Menu (Peckham Rye): Jollof £8, Indomie £10, Spaghetti £8, Fried plantain £8, Naija shawarma £10, Suya fries £8; Asun £13, Wings £13, Beef suya £13, Tozo suya £13, Tilapia £15, Assorted meat £10; Efo riro / Egusi + assorted meat w/ poundo £20; Jollof combos £10, any-2 combo £15.
- Social handles are the chef's, not the brand: facebook.com/nigeriacuisines, tiktok @kolawoleajayi, youtube nigeriacuisine, x @Nigeriacuisine. Instagram link on site goes to a single reel, not a profile.

## Current site: suuyar.com
Stack: WordPress 6.8 + Beaver Builder (bb-theme, bb-plugin, PowerPack, Ultimate Addon) + WooCommerce + Memberships + WP Rocket + Smush. GoDaddy Web Design badge in footer. Launched ~Mar 2025.

Measured: home 3.2 MB / 63 requests / ~5.4 s to load event; booking page 7.8 MB / 114 requests. Raw curl took 20 s on first hit (cold cache). 21 scripts, 21 stylesheets on home.

Booking: TheFork iframe (widget.thefork.com/9855d2b2-...) on /book-a-table/, dropped in under a heading with no context, no location selector, no buffet explanation, no party-size or hire info.

### Problems to show
1. Hero shows no suya and no grill. Stock-style flat lay; alt text literally says "Indian dishes". The chef and the fire, the thing people queue an hour for, are absent.
2. No real menu page. "MENU" button on mobile links to Book a Table. /menus-and-locations/ is a 404. The only menu is JPG flyers on /locations/, unreadable on mobile, not searchable, not accessible. "Catford" label sits under a flyer that says Peckham.
3. The buffet, their most viral product, is not mentioned anywhere on the home page.
4. Reviews page has zero reviews. Headline reads "Book a Table and Subscribe Influencers" with four "Click Here" links.
5. Shop has one product with no price. Subscription page has no prices, no plans, no delivery area.
6. Hours conflict: footer says 9–5 daily, locations say 13–18 / 15–21. Listings across TheFork, Yelp, Tripadvisor, EatOkra all disagree on address and hours.
7. Cart icon and "No products in the basket" on a restaurant site; "Applications" (jobs) in main nav.
8. Three locations with identical generic copy; no map-first, no "which one should I go to".
9. Social links point to the chef's personal/other-brand handles; Instagram link is a single reel.
10. Logo is a 1x1 placeholder in markup (loaded by JS). Duplicate header markup. Cookie bar overlaps content.
11. No structured data for restaurant/menu, no per-location pages, so Google shows aggregators instead of them.

### What works and should be kept
- Dark + orange palette is right for a grill brand.
- TheFork booking exists and takes bookings; keep it (or embed it better) rather than replace on day one.
- Real photography exists for some dishes (asun, plantain and beans) and of the chef on the flyers.

## Reviews pattern (TheFork, Tripadvisor, aggregators)
- Praise: suya spice, asun "10/10", tozo, staff named as friendly.
- Complaints: small/cramped at buffet peak, forced buffet at weekends, WhatsApp bookings missed, buffet trays empty for long stretches, started late waiting for previous table.
- Implication: site should set expectations (buffet rules, 90 min slots, book ahead) and pull bookings off WhatsApp.
