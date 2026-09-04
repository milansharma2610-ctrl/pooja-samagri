# Puja Samagri & Vedic Booking Redesign — Shastriya Vidhan

A comprehensive, production-ready Senior UI/UX Redesign and Technical SEO Architecture for **[Shastriya Vidhan](https://www.shastriyavidhan.com/)** (*Puja Made Peaceful*), a request-first Hindu puja booking platform connecting families with verified Pandit Ji across Noida, Delhi, Gurugram, Ujjain, and worldwide online.

---

## 🌟 Key Highlights

- **Warm Sacred Modern Aesthetic:** Replaced cold dark tech styling with culturally authentic, high-trust visual cues (Warm Sacred Ivory `#FAF7F2`, Kumkum Vermillion `#C8232C`, Saffron `#E67E22`, and Temple Gold `#C5A059`) with full WCAG AAA contrast (`12.8:1`).
- **Frictionless Multi-Step Booking Funnel:** 4-step progressive disclosure (*Service & Attendance Mode → Schedule & Live Price Hint → Family Details & Language → Review & 4-Step Transparent Status Visual*).
- **Zero Payment Upfront Architecture:** Designed for request-first business models—clear indicative price brackets (`₹2,500 – ₹4,500`) prevent sticker shock while manual verification over WhatsApp guarantees availability before payment.
- **Aggressive, Crawler-Safe Technical SEO:** All 14+ puja service cards and FAQ accordions exist in the initial semantic HTML DOM. Zero content is hidden behind client-side rendering locks.
- **Rich Schema.org Graph:** Complete JSON-LD structured data for `Organization`, `WebSite`, `ProfessionalService`, `Service`, `LocalBusiness`, `Person`, `AggregateRating`, `Review`, `BreadcrumbList`, and `FAQPage`.
- **Thumb-Zone Mobile Sticky Dock:** Mobile sticky bar featuring 1-tap `Book Now`, high-conversion `WhatsApp Desk`, `Call Desk`, and a continuous reassurance micro-ribbon.
- **Authentic Asset Library:** Complete set of 18 high-resolution WebP and PNG visual assets downloaded directly from `shastriyavidhan.com`.

---

## 📁 Repository Structure

```text
pooja-samagri/
├── components/
│   ├── BookingModalFunnel.tsx     # 4-step interactive booking funnel with price hints
│   ├── MobileStickyBar.tsx        # Ergonomic mobile bottom CTA dock
│   ├── PanditProfileCard.tsx      # Pandit card with Schema.org Person JSON-LD
│   └── TestimonialsSection.tsx    # Filterable reviews with AggregateRating schema
├── design-system/
│   └── tokens.css                 # Warm Sacred Modern CSS tokens, WCAG AA/AAA variables
├── images/                        # Authentic visual assets from shastriyavidhan.com
│   ├── shastriya-vidhan-logo.png
│   ├── diwali-puja.webp
│   ├── rudrabhishek-puja.webp
│   ├── janmashtami-puja.webp
│   ├── education-puja.webp
│   ├── holika-dahan.webp
│   ├── ram-navami.webp
│   ├── tulsi-vivah.webp
│   ├── kaal-sarp-dosh.webp
│   ├── maha-shivratri.webp
│   └── acharya-sursain-brijwasi-*.webp (responsive breakpoints)
├── templates/
│   ├── HomepageTemplate.tsx       # Revised homepage wireframe and layout
│   ├── PujaServiceTemplate.tsx    # 600-800+ words SEO-ready service template (Rudrabhishek)
│   ├── LocationPageTemplate.tsx   # Localized city landing template (Noida / NCR)
│   ├── PujaGuidesHubTemplate.tsx  # Dedicated SEO content hub for guides & checklists
│   └── OfferLandingPageTemplate.tsx # High-converting 20% Off festive offer landing page
├── offer.html                     # Standalone 20% OFF festive offer landing page (Code: VEDIC20)
├── SEO_AND_UX_RATIONALE.md        # Exhaustive design rationale (CRO vs SEO mapping)
├── index.html                     # Fully interactive live browser prototype
├── .gitignore
└── README.md
```

---

## 🚀 How to Run & Preview

You can test the complete redesign immediately without running a build server:

1. **Direct Browser Preview:**
   - Open `index.html` directly in any modern web browser to test all 5 integrated template views.
   - Open `offer.html` directly to experience the dedicated 20% OFF campaign landing page with live countdown timer and interactive coupon code box (`VEDIC20`).
2. **Top Showcase Switcher:**
   - **1. Homepage:** Explore the hero trust stack, category switcher, bento cards, Pandit showcase, and FAQ accordion.
   - **2. Puja Service Page:** Test the sticky Table of Contents, 7-step authentic vidhi timeline, and samagri responsibility matrix.
   - **3. Location Page:** Review apartment fire-safety hawan guidelines and neighborhood sector coverage for Noida.
   - **4. Guides Hub:** Test category filtering, search, and contextual "Book Pandit Ji" mini-cards.
   - **5. 🎁 20% Off Offer:** Test the festive promotional landing page, live countdown timer, interactive coupon copy (`VEDIC20`), and before/after pricing cards.
   - **⚡ Test Booking Funnel:** Click any *Book Pandit Ji* button to interact with the 4-step modal form, live price calculator, and transparent status visual.

---

## 📄 License & Attribution

Designed for **Shastriya Vidhan** (*Puja Made Peaceful*). Preserves all existing URLs and brand standards with modern digital trust architecture.
