# RALPH WIGGUM ONE-SHOT PROMPT
## jaktilportapottyrentals.site — Austin, TX Porta Potty Rental

---

## HOW TO USE THIS PROMPT

Copy everything below the `---START PROMPT---` line and paste into Claude or your AI tool. This will generate the complete website structure, all pages, schema, and implementation in one shot.

---

---START PROMPT---

# PROJECT: Build jaktilportapottyrentals.site

You are building a complete Next.js 14 lead generation website for **Jaktil Porta Potty Rentals** serving **Austin, TX and Central Texas**.

## BUSINESS CONTEXT

**Domain:** jaktilportapottyrentals.site
**Business Model:** Pay-per-call lead generation ($15-16/qualified call)
**Primary Market:** Austin, TX
**Service Area:** Austin, Round Rock, Cedar Park, Pflugerville, Georgetown, Leander, Kyle, Buda, San Marcos, Lakeway, Dripping Springs
**Phone:** [RINGBA_TRACKING_NUMBER]

## BRAND VOICE

- Confident but not arrogant
- Helpful and informative  
- Professional yet approachable
- Direct, no fluff
- David Ogilvy copywriting: Headlines carry 80% weight, promise benefits, be specific ("$75/day" not "affordable")

## TECH STACK

- Next.js 14 (App Router, static export)
- TypeScript
- Tailwind CSS
- No external dependencies beyond essentials

## DESIGN SYSTEM

**Colors:**
- Primary: Navy Blue #1E3A5F
- Accent: Teal #0D9488
- Background: White #FFFFFF
- Light Gray: #F3F4F6
- Body Text: #374151

**Typography:**
- Font: Inter or system stack
- H1: 36px/bold, H2: 30px/semibold, H3: 24px/semibold
- Body: 16px/regular

**Components Needed:**
- Header with nav (Services dropdown, Locations dropdown, Pricing, Contact)
- Hero section with H1, subhead, trust badges, phone CTA
- Service cards grid
- Pricing tables
- FAQ accordions
- Phone CTA buttons (click-to-call)
- Sticky mobile CTA
- Footer with sitemap links

---

## SITE ARCHITECTURE

```
/                           → Homepage
/austin/                    → Austin city hub
/round-rock/               → Round Rock city page
/cedar-park/               → Cedar Park city page
/pflugerville/             → Pflugerville city page
/georgetown/               → Georgetown city page
/leander/                  → Leander city page
/kyle/                     → Kyle city page
/buda/                     → Buda city page
/san-marcos/               → San Marcos city page
/lakeway/                  → Lakeway city page
/construction-site-rentals/ → Construction service page
/event-porta-potty-rental/  → Event service page
/luxury-restroom-trailers/  → Luxury trailers page
/wedding-restroom-rentals/  → Wedding page
/ada-accessible-units/      → ADA page
/long-term-rentals/        → Long-term rental page
/pricing/                  → Pricing overview
/contact/                  → Contact page
```

**CRITICAL RULE:** Never create city+service combo URLs like `/austin-porta-potty-rental/`. Keep city hubs and service pages separate.

---

## PAGE TEMPLATES

### HOMEPAGE

**Meta Title:** Porta Potty Rental Austin TX | Same-Day Delivery | From $75/Day
**Meta Description:** Professional porta potty rental in Austin, TX. Same-day delivery for events, weddings & construction. Clean units from $75/day. Call now for instant quote.

**H1:** Porta Potty Rental in Austin, TX – Fast, Affordable Portable Toilets

**Hero Copy:**
"Need a porta potty delivered today in Austin? We provide same-day porta potty rental in Austin for outdoor events, construction sites, weddings, and backyard parties. Choose from standard units, deluxe porta potties with sinks, or luxury restroom trailers with clear pricing and no hidden fees."

**Trust Badges:**
- Same-Day & Next-Day Delivery Available
- Event, Wedding & Construction Porta Potties
- Local Austin Permit Knowledge
- Clean, Serviced & Sanitized Units
- Serving All of Greater Austin & Central Texas

**Sections:**
1. Hero with CTA
2. Trust badges
3. Service options (4 cards: Standard, Deluxe, ADA, Luxury)
4. Use cases list
5. Cities served
6. Why choose us
7. FAQ (5 questions)
8. Final CTA

**Primary CTA:** "Call Now for Same-Day Delivery" → tel:+1512XXXXXXX

---

### CITY PAGE TEMPLATE (Use for all 10 cities)

**Structure:**
1. H1: "Porta Potty Rental in [CITY], TX"
2. Intro paragraph (mention local landmarks, I-35/183/130 corridors, local context)
3. Service options available
4. Local uses (events, construction, residential)
5. Areas/neighborhoods served
6. Pricing snapshot table
7. Local FAQ (3-5 questions)
8. CTA

**Austin-specific content to include:**
- South Austin/SoCo, East Austin, Downtown, Mueller, Hyde Park
- Zilker Park, Lady Bird Lake, The Domain, UT campus
- ACL Festival, SXSW, ROT Rally references
- Hill Country wedding mentions
- Texas heat considerations

**Surrounding cities context:**
- Round Rock: Dell Diamond, Old Settlers Park, Williamson County growth
- Cedar Park: H-E-B Center, 183A corridor
- Pflugerville: Lake Pflugerville, 130/45 growth
- Georgetown: Historic downtown square, Sun City, Hill Country weddings
- Leander: Fastest-growing city, Austin FC training facility
- Kyle: I-35 corridor, Plum Creek, "Pie Capital"
- Buda: Main Street, Wiener Dog Races
- San Marcos: Texas State, San Marcos River, outlets
- Lakeway: Lake Travis, luxury events, Hill Country estates

---

### SERVICE PAGE TEMPLATE

**Structure:**
1. H1: "[Service Name] in Austin, TX"
2. Intro with first 100 chars answering the query directly
3. What's included list
4. Pricing table
5. Ideal use cases
6. Coverage area
7. FAQ (4-5 questions)
8. CTA

**Service Pages to Create:**

**1. Construction Site Porta Potty Rental**
- OSHA requirements (1 toilet per 20 workers)
- Weekly servicing included
- Daily/Weekly/Monthly pricing
- Texas heat considerations

**2. Event Porta Potty Rental**
- Guest calculator table (50/100/200/500 guests × 4hr/8hr/alcohol)
- ACL, SXSW, UT tailgate mentions
- Standard vs Deluxe vs Luxury options

**3. Luxury Restroom Trailer Rental**
- AC is the key selling point (Texas heat!)
- 2/4/6 station configurations
- Hill Country wedding focus
- Dripping Springs, Wimberley, Lake Travis venues

**4. Wedding Restroom Rental**
- Budget/Popular/Premium tiers
- Hill Country venue focus
- Heat planning tips
- Planner coordination

**5. ADA Accessible Units**
- Features list (wide door, handrails, spacious)
- Compliance requirements
- Public event requirements

**6. Long-Term Rentals**
- Monthly rates with weekly servicing
- Construction project focus
- Austin's building boom angle

---

## PRICING DATA (Use Consistently)

| Unit Type | Daily | Weekly | Monthly |
|-----------|-------|--------|---------|
| Standard Porta Potty | $75-150 | $250-400 | $400-700 |
| Deluxe w/ Hand Wash | $125-200 | $350-500 | $600-900 |
| ADA Accessible | $150-250 | $400-600 | $700-1,000 |
| Luxury Trailer | $500-1,500 | $2,000-5,000 | Custom |

---

## FAQ CONTENT (Use Across Pages)

**Q: How much does it cost to rent a porta potty in Austin?**
A: Standard porta potty rentals in Austin cost $75-150 per day. Weekly rentals range from $250-400. Luxury restroom trailers start at $500 per day.

**Q: How many porta potties do I need for my event?**
A: General rule: 1 porta potty per 50-75 guests for a 4-hour event. Events serving alcohol should increase to 1 per 40 guests. Texas heat means more bathroom breaks—plan accordingly.

**Q: Can I get same-day porta potty delivery in Austin?**
A: Yes, same-day delivery is available throughout Austin depending on availability. Call before noon for best results.

**Q: Do I need a permit for a porta potty in Austin?**
A: Permits are required if the porta potty is placed on a public street or right-of-way. Private property placement (driveways, backyards) typically doesn't require a permit.

**Q: What about the Texas heat?**
A: We recommend shaded placement for standard units. Our luxury restroom trailers include AC—essential for Texas weddings and events.

---

## SCHEMA MARKUP (Include on Every Page)

**LocalBusiness (Homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jaktil Porta Potty Rentals",
  "url": "https://jaktilportapottyrentals.site",
  "telephone": "+1-512-XXX-XXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "areaServed": ["Austin TX", "Round Rock TX", "Cedar Park TX", "Pflugerville TX", "Georgetown TX", "Leander TX", "Kyle TX", "Buda TX", "San Marcos TX", "Lakeway TX"],
  "description": "Fast, affordable porta potty rental in Austin, TX with same-day delivery for events, weddings, construction sites, and parties."
}
```

**FAQPage Schema** on every page with FAQ section.

**Service Schema** on service pages.

**BreadcrumbList Schema** on all interior pages.

---

## INTERNAL LINKING RULES

**Formula: 1 UP + 2-3 ACROSS**

- Every city page links UP to homepage
- Every city page links ACROSS to 2-3 service pages
- Every service page links to Austin city page + 1-2 related services
- Links in FIRST 100 words of content
- Use natural anchor text variations, not exact match spam

**Anchor Text Examples:**
- ✅ "porta potty rental in Austin"
- ✅ "our Austin portable toilet service"
- ✅ "same-day delivery available"
- ❌ "click here"
- ❌ "learn more"

---

## CTA REQUIREMENTS

**Primary CTA (appears on every page):**
```html
<a href="tel:+1512XXXXXXX" class="btn-primary">
  📞 Call Now for Same-Day Delivery
</a>
```

**Sticky Mobile CTA:**
Fixed bottom bar on mobile with click-to-call button.

**CTA Frequency:**
- Hero section
- After services section
- After FAQ
- Bottom of page
- Sticky on mobile

---

## SEO REQUIREMENTS

**Every page must have:**
1. Unique meta title (<60 chars) with primary keyword + location
2. Unique meta description (<155 chars) with CTA
3. Single H1 with primary keyword
4. First 100 characters directly answer the search query
5. Proper heading hierarchy (H1 → H2 → H3)
6. Internal links in first 100 words
7. FAQ section with schema
8. Pricing table where relevant
9. Phone number CTA

**Image Requirements:**
- WebP format
- Lazy loading
- Alt text with keyword + location
- Max 100KB per image

---

## PERFORMANCE REQUIREMENTS

- Lighthouse score: 90+ all categories
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Total page size: <200KB
- No layout shift (CLS <0.1)

---

## FILE STRUCTURE TO CREATE

```
/app
  /page.tsx                    (Homepage)
  /austin/page.tsx
  /round-rock/page.tsx
  /cedar-park/page.tsx
  /pflugerville/page.tsx
  /georgetown/page.tsx
  /leander/page.tsx
  /kyle/page.tsx
  /buda/page.tsx
  /san-marcos/page.tsx
  /lakeway/page.tsx
  /construction-site-rentals/page.tsx
  /event-porta-potty-rental/page.tsx
  /luxury-restroom-trailers/page.tsx
  /wedding-restroom-rentals/page.tsx
  /ada-accessible-units/page.tsx
  /long-term-rentals/page.tsx
  /pricing/page.tsx
  /contact/page.tsx
  /layout.tsx
  /globals.css
/components
  /Header.tsx
  /Footer.tsx
  /Hero.tsx
  /ServiceCard.tsx
  /PricingTable.tsx
  /FAQ.tsx
  /PhoneCTA.tsx
  /StickyMobileCTA.tsx
  /SchemaMarkup.tsx
/lib
  /constants.ts               (Phone number, cities, services data)
/public
  /images/
```

---

## OUTPUT INSTRUCTIONS

1. Create complete, production-ready code
2. All content written out fully (no placeholders like "[content here]")
3. All Austin-specific references included
4. All pricing tables populated
5. All FAQs written out
6. Schema markup in place
7. Mobile responsive
8. Click-to-call working
9. Internal links implemented

Start by creating the project structure, then build out each page fully. Begin with the homepage, then service pages, then city pages.

---END PROMPT---
