'use client';

import React, { useState } from 'react';
import BookingModalFunnel from '../components/BookingModalFunnel';
import PanditProfileCard, { PANDIT_ROSTER } from '../components/PanditProfileCard';
import TestimonialsSection from '../components/TestimonialsSection';
import MobileStickyBar from '../components/MobileStickyBar';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'festivals' | 'shiva' | 'devi' | 'path_jaap' | 'online';
  categoryLabel: string;
  modes: string[];
  duration: string;
  locations: string[];
  indicativePrice: string;
  shortDesc: string;
  samagriHighlights: string;
  imageUrl: string;
  slug: string;
}

const FEATURED_PUJAS: ServiceItem[] = [
  {
    id: 'rudrabhishek',
    name: 'Rudrabhishek Puja',
    category: 'shiva',
    categoryLabel: 'Lord Shiva',
    modes: ['Home', 'Temple', 'Online'],
    duration: '90 – 120 Mins',
    locations: ['Noida', 'Delhi', 'Gurugram', 'Ujjain'],
    indicativePrice: '₹2,500 – ₹4,500',
    shortDesc: 'Vedic Shiva abhishek with panchamrit, bilva patra, sugarcane juice, and authentic Sri Rudram chanting.',
    samagriHighlights: 'Panchamrit, Bilvapatra, Dhatura, Bhasma, Gangajal, Pure Cow Ghee',
    imageUrl: '/images/rudrabhishek-puja.webp',
    slug: '/book-pandit-ji-for-rudrabhishek-puja-noida'
  },
  {
    id: 'diwali-lakshmi',
    name: 'Diwali Lakshmi Ganesh Puja',
    category: 'festivals',
    categoryLabel: 'Festival Pujas',
    modes: ['Home', 'Online'],
    duration: '60 – 100 Mins',
    locations: ['Noida', 'Delhi', 'Gurugram'],
    indicativePrice: '₹3,100 – ₹5,100',
    shortDesc: 'Traditional Deepawali worship with Lakshmi-Ganesh invocation, Navgrah sthapana, Kuber pujan, and aarti.',
    samagriHighlights: 'Lotus flowers, Panchmeva, Kuber Yantra, Silver coins, Kheer bhog',
    imageUrl: '/images/diwali-puja.webp',
    slug: '/book-pandit-ji-online-for-diwali-puja'
  },
  {
    id: 'janmashtami',
    name: 'Krishna Janmashtami Puja',
    category: 'festivals',
    categoryLabel: 'Festival Pujas',
    modes: ['Home', 'Online', 'Temple'],
    duration: '90 – 120 Mins',
    locations: ['Noida', 'Delhi', 'Gurugram'],
    indicativePrice: '₹2,800 – ₹4,500',
    shortDesc: 'Celebrate the divine birth of Laddu Gopal with panchamrit snan, Makhan Mishri bhog, katha, and midnight aarti.',
    samagriHighlights: 'Tulsi dal, Makhan, Mishri, Yellow vastra, Panchamrit, Jhula decoration',
    imageUrl: '/images/janmashtami-puja.webp',
    slug: '/book-pandit-ji-online-for-janmashtami-puja'
  },
  {
    id: 'kaal-sarp-ujjain',
    name: 'Kaal Sarp Dosh Puja in Ujjain',
    category: 'shiva',
    categoryLabel: 'Teerth & Remedial',
    modes: ['Temple / Teerth'],
    duration: '2.5 – 3.5 Hours',
    locations: ['Ujjain (Shipra / Mahakal)'],
    indicativePrice: '₹5,500 – ₹15,000',
    shortDesc: 'Vedic Agamic dosh nivaran conducted by authorized Purohit at the sacred Mahakaleshwar & Shipra River Kshetra.',
    samagriHighlights: 'Silver Nag-Nagin jodi, Rudra hawan samagri, Kusha aasan, Daan vastra',
    imageUrl: '/images/kaal-sarp-dosh.webp',
    slug: '/locations/ujjain'
  },
  {
    id: 'sundarkand-path',
    name: 'Sundarkand Path & Hawan',
    category: 'path_jaap',
    categoryLabel: 'Path & Jaap',
    modes: ['Home', 'Online'],
    duration: '2 – 3 Hours',
    locations: ['Noida', 'Delhi', 'Gurugram'],
    indicativePrice: '₹3,500 – ₹5,500',
    shortDesc: 'Devotional musical recitation of Sri Ramcharitmanas Sundarkand followed by Hanuman Chalisa and sacred hawan.',
    samagriHighlights: 'Sindoor, Chameli oil, Boondi laddu, Betel leaves, Hawan samagri',
    imageUrl: '/images/ram-navami.webp',
    slug: '/puja-services'
  },
  {
    id: 'online-video-puja',
    name: 'Private Online Video Puja',
    category: 'online',
    categoryLabel: 'Online Video',
    modes: ['Online Video Worldwide'],
    duration: '60 – 90 Mins',
    locations: ['Global / USA / UK / UAE / India'],
    indicativePrice: '₹2,100 – ₹3,500',
    shortDesc: 'Personal guided video sankalp and ritual led live by our senior Shastri for NRI and remote working devotees.',
    samagriHighlights: 'Simple household pantry checklist provided 3 days in advance',
    imageUrl: '/images/maha-shivratri.webp',
    slug: '/online-puja'
  }
];

export const HomepageTemplate: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedPujaForBooking, setSelectedPujaForBooking] = useState<string>('Rudrabhishek Puja');
  const [previewPuja, setPreviewPuja] = useState<ServiceItem | null>(null);

  const openBookingFor = (pujaName: string) => {
    setSelectedPujaForBooking(pujaName);
    setIsBookingModalOpen(true);
  };

  const filteredServices = FEATURED_PUJAS.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Schema.org Graph for Homepage
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.shastriyavidhan.com/#organization',
        name: 'Shastriya Vidhan',
        legalName: 'Shastriya Vidhan Vedic Services',
        url: 'https://www.shastriyavidhan.com',
        logo: 'https://www.shastriyavidhan.com/images/shastriya-vidhan-logo.png',
        image: 'https://www.shastriyavidhan.com/images/diwali-puja.webp',
        telephone: '+917599340430',
        priceRange: '₹₹',
        description: 'Arrange authentic Hindu Vedic puja services at home, temple, or online with verified Pandit Ji across Noida, Delhi, Gurugram, Ujjain and globally.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          addressCountry: 'IN'
        },
        areaServed: [
          { '@type': 'City', name: 'Noida' },
          { '@type': 'City', name: 'Delhi' },
          { '@type': 'City', name: 'Gurugram' },
          { '@type': 'City', name: 'Ghaziabad' },
          { '@type': 'City', name: 'Ujjain' },
          { '@type': 'AdministrativeArea', name: 'Global Online' }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.shastriyavidhan.com/#website',
        url: 'https://www.shastriyavidhan.com',
        name: 'Shastriya Vidhan | Puja Made Peaceful'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.shastriyavidhan.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I book a Pandit Ji on Shastriya Vidhan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Choose your desired puja and submit your date and location in the booking form. The Shastriya Vidhan desk manually confirms Pandit Ji availability, provides a clear samagri checklist, and confirms the exact quote on WhatsApp before any payment is requested.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you charge any instant payment during booking?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Shastriya Vidhan operates on a request-first model. Zero payment is taken upfront. Payment is only confirmed after you approve the assigned Pandit Ji profile, samagri responsibility, and exact quote.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can we request a Pandit Ji fluent in our native language or tradition?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our team matches your family preferences with qualified Vedic purohits fluent in Hindi, Sanskrit, English, Maithili, Gujarati, or South Indian traditions.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="shastriya-homepage-root">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* Top Auspicious Announcement Bar */}
      <div className="top-auspicious-ribbon" role="region" aria-label="Booking transparency announcement">
        <div className="container-inner ribbon-content">
          <span className="ribbon-badge">REQUEST-FIRST PUJA BOOKING</span>
          <span>Verified Pandit Ji • Clear Samagri Responsibility • Manual Availability Check Before Payment</span>
          <a href="#booking-section" className="ribbon-link">Request Quote →</a>
        </div>
      </div>

      {/* Primary Header */}
      <header className="shastriya-header" role="banner">
        <div className="container-inner header-layout">
          <a href="/" className="brand-logo-lockup" aria-label="Shastriya Vidhan Homepage">
            <span className="brand-om">🕉️</span>
            <div>
              <span className="brand-title">Shastriya Vidhan</span>
              <span className="brand-tagline">Puja Made Peaceful</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Main Navigation">
            <a href="/puja-services" className="nav-link">Puja Services</a>
            <a href="/puja-at-home" className="nav-link">Puja at Home</a>
            <a href="/online-puja" className="nav-link">Online Puja</a>
            <a href="/locations" className="nav-link">Locations</a>
            <a href="/guides" className="nav-link">Puja Guides</a>
            <a href="/pandit-standards" className="nav-link">Pandit Standards</a>
          </nav>

          <div className="header-actions">
            <a
              href="https://wa.me/917599340430?text=Namaste%20Shastriya%20Vidhan%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20puja."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-compact"
              aria-label="WhatsApp Booking Desk"
            >
              💬 WhatsApp Desk
            </a>
            <button
              type="button"
              onClick={() => openBookingFor('Rudrabhishek Puja')}
              className="btn-primary-sacred"
            >
              Book Pandit Ji
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* HERO SECTION: High Trust Above-The-Fold */}
        <section className="hero-sacred-section" aria-labelledby="hero-main-title">
          <div className="container-inner hero-grid">
            <div className="hero-copy-column">
              {/* Trust Tag */}
              <div className="hero-trust-tag">
                <span className="shield-icon">🛡️</span>
                <span>Manual Verification • Zero Payment Upfront</span>
              </div>

              <h1 id="hero-main-title" className="hero-title">
                Book Verified <span className="highlight-saffron">Pandit Ji</span> for Puja at Home, Temple, or Online.
              </h1>

              <p className="hero-subtitle">
                Authentic Vedic pujas across Noida, Delhi, Gurugram, Ujjain &amp; worldwide. Complete vidhi guidance, certified samagri clarity, and transparent quotes confirmed before any payment.
              </p>

              <div className="hero-cta-group">
                <button
                  type="button"
                  onClick={() => openBookingFor('Rudrabhishek Puja')}
                  className="btn-primary-sacred btn-hero-primary"
                >
                  <span>Book Pandit Ji (Pay Later)</span>
                  <span aria-hidden="true">→</span>
                </button>

                <a
                  href="https://wa.me/917599340430?text=Namaste%20Shastriya%20Vidhan%2C%20I%20need%20help%20booking%20a%20puja."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-sacred btn-hero-secondary"
                >
                  <span>WhatsApp Booking Desk</span>
                </a>
              </div>

              {/* 6 High-Trust Micro Badges */}
              <div className="hero-trust-grid" aria-label="Service guarantees">
                <div className="trust-item">
                  <span className="trust-check">✓</span>
                  <span>100% Identity &amp; Vidhan Verified</span>
                </div>
                <div className="trust-item">
                  <span className="trust-check">✓</span>
                  <span>No Upfront Deposit Required</span>
                </div>
                <div className="trust-item">
                  <span className="trust-check">✓</span>
                  <span>Samagri Checklist Provided</span>
                </div>
                <div className="trust-item">
                  <span className="trust-check">✓</span>
                  <span>Hindi, Sanskrit &amp; English Fluent</span>
                </div>
                <div className="trust-item">
                  <span className="trust-check">✓</span>
                  <span>Home, Temple &amp; Video Formats</span>
                </div>
                <div className="trust-item">
                  <span className="trust-check">✓</span>
                  <span>Zero Superstitions / Fear Claims</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="hero-visual-column">
              <div className="hero-image-card">
                <picture>
                  <source type="image/webp" srcSet="/images/diwali-puja.webp" />
                  <img
                    src="/images/diwali-puja.webp"
                    alt="Authentic Vedic puja setup with brass lamps and flowers"
                    width={640}
                    height={480}
                    fetchPriority="high"
                    className="hero-main-img"
                  />
                </picture>

                <div className="hero-floating-badge">
                  <div className="avatar-group-sample">
                    <span>🕉️</span>
                    <span>🪔</span>
                    <span>🙏</span>
                  </div>
                  <div>
                    <strong>Request-First Assurance</strong>
                    <p>Quotes &amp; Purohit details verified manually in 15–30 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-STEP JOURNEY: Transparent Process */}
        <section className="how-it-works-section" aria-labelledby="hiw-heading">
          <div className="container-inner">
            <div className="section-header-center">
              <span className="sacred-eyebrow">Predictable &amp; Peaceful</span>
              <h2 id="hiw-heading">How Booking Works: 4 Simple Steps</h2>
              <p>Designed to eliminate anxiety around pandit availability, samagri confusion, and pricing.</p>
            </div>

            <div className="four-steps-grid">
              <div className="step-card">
                <span className="step-number-pill">01</span>
                <h3>Choose Puja &amp; Date</h3>
                <p>Select your festival, occasion, or family ritual. Pick your home address in Delhi NCR or choose Online Video Puja.</p>
              </div>

              <div className="step-card">
                <span className="step-number-pill">02</span>
                <h3>Share Family Preferences</h3>
                <p>Tell us your preferred language, gotra, and whether you want Pandit Ji to bring all samagri. No payment is taken.</p>
              </div>

              <div className="step-card">
                <span className="step-number-pill">03</span>
                <h3>Desk Confirms Quote</h3>
                <p>Our senior coordinator verifies Pandit Ji schedule, shares the complete samagri checklist, and confirms the exact quote on WhatsApp.</p>
              </div>

              <div className="step-card">
                <span className="step-number-pill">04</span>
                <h3>Perform Puja Peacefully</h3>
                <p>The assigned Shastri arrives on time and guides your family through authentic sankalp, chanting, hawan, and aarti.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CRAWLER-SAFE PUJA COMPARISON & FINDER */}
        <section className="puja-finder-section" id="puja-services-finder" aria-labelledby="finder-heading">
          <div className="container-inner">
            <div className="section-header-center">
              <span className="sacred-eyebrow">Explore &amp; Compare</span>
              <h2 id="finder-heading">Find the Right Vedic Puja for Your Family</h2>
              <p>Compare rituals, attendance formats, duration estimates, and indicative pricing.</p>

              {/* Accessible Category Switcher */}
              <div className="category-tabs-row" role="tablist" aria-label="Puja categories">
                {[
                  { key: 'all', label: 'All Pujas' },
                  { key: 'festivals', label: 'Festival Pujas' },
                  { key: 'shiva', label: 'Lord Shiva' },
                  { key: 'path_jaap', label: 'Path & Jaap' },
                  { key: 'online', label: 'Online Video' }
                ].map(tab => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === tab.key}
                    className={`category-tab-btn ${activeCategory === tab.key ? 'active' : ''}`}
                    onClick={() => setActiveCategory(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Instant Search Filter */}
              <div className="search-filter-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search by puja name, deity, or occasion (e.g. Rudrabhishek, Diwali, Hawan)..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="search-input-field"
                  aria-label="Filter puja services"
                />
              </div>
            </div>

            {/* Pre-Rendered DOM Cards for Googlebot Indexing */}
            <div className="services-card-grid">
              {filteredServices.map(service => (
                <article key={service.id} className="service-showcase-card">
                  <div className="card-image-wrap">
                    <img
                      src={service.imageUrl}
                      alt={`${service.name} arrangement with sacred items`}
                      width={400}
                      height={260}
                      loading="lazy"
                      className="service-card-thumbnail"
                    />
                    <span className="card-category-tag">{service.categoryLabel}</span>
                  </div>

                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.name}</h3>
                    <p className="service-card-desc">{service.shortDesc}</p>

                    <div className="service-specs-box">
                      <div>
                        <strong>Duration:</strong> {service.duration}
                      </div>
                      <div>
                        <strong>Formats:</strong> {service.modes.join(', ')}
                      </div>
                      <div>
                        <strong>Indicative Dakshina:</strong> <span className="price-bold">{service.indicativePrice}</span>
                      </div>
                    </div>

                    <div className="service-card-footer">
                      <button
                        type="button"
                        onClick={() => openBookingFor(service.name)}
                        className="btn-primary-sacred btn-card-action"
                      >
                        Request Quote
                      </button>

                      <button
                        type="button"
                        onClick={() => setPreviewPuja(service)}
                        className="btn-quick-preview"
                        aria-label={`Quick preview samagri for ${service.name}`}
                      >
                        Quick Samagri Preview
                      </button>

                      <a href={service.slug} className="link-details">
                        <span>Full Vidhi</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PANDIT STANDARDS & FEATURED ACHARYAS */}
        <section className="pandits-section" aria-labelledby="pandits-heading">
          <div className="container-inner">
            <div className="section-header-center">
              <span className="sacred-eyebrow">Verified Vedic Excellence</span>
              <h2 id="pandits-heading">Our Pandit Standards Before Booking Acceptance</h2>
              <p>
                Every Pandit Ji associated with Shastriya Vidhan is vetted for Sanskrit chanting, traditional Gurukul/Vidyapeetha lineage, punctuality, and family-friendly conduct.
              </p>
            </div>

            <div className="pandit-roster-grid">
              {PANDIT_ROSTER.map(pandit => (
                <PanditProfileCard
                  key={pandit.id}
                  pandit={pandit}
                  onRequestBooking={name => openBookingFor(pandit.specializations[0] || 'Rudrabhishek Puja')}
                />
              ))}
            </div>
          </div>
        </section>

        {/* VERIFIED FAMILY TESTIMONIALS */}
        <TestimonialsSection />

        {/* CRAWLER-SAFE FAQ ACCORDION (Indexed by Googlebot) */}
        <section className="faq-section-sacred" aria-labelledby="faq-section-title">
          <div className="container-inner">
            <div className="section-header-center">
              <span className="sacred-eyebrow">Common Inquiries</span>
              <h2 id="faq-section-title">Frequently Asked Questions</h2>
              <p>Everything you need to know about our booking process, samagri, and Pandit Ji assignment.</p>
            </div>

            <div className="faq-accordion-container">
              <details className="faq-details-item" open>
                <summary className="faq-question">
                  <span>How does the request-first booking model work?</span>
                  <span className="faq-toggle-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    Unlike instant-checkout platforms that assign unverified freelancers, Shastriya Vidhan checks the Pandit Ji’s availability, regional tradition match (e.g. North Indian, Maithili, or South Indian), travel feasibility, and samagri requirements before confirming. You pay zero upfront and confirm payment only after receiving a clear, itemized quote and Pandit profile.
                  </p>
                </div>
              </details>

              <details className="faq-details-item">
                <summary className="faq-question">
                  <span>Who arranges the puja samagri?</span>
                  <span className="faq-toggle-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    You have total flexibility! In the booking form, you can choose <strong>&ldquo;Pandit Ji brings all samagri&rdquo;</strong> (pure hawan samagri, ghee, gangajal, dhoop, janeu, etc., and you only keep fresh flowers, fruits, and sweets) or <strong>&ldquo;I will arrange with checklist&rdquo;</strong> (we send you a complete Shastriya checklist PDF on WhatsApp).
                  </p>
                </div>
              </details>

              <details className="faq-details-item">
                <summary className="faq-question">
                  <span>How does Online Video Puja work for families living abroad?</span>
                  <span className="faq-toggle-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    For devotees in the USA, UK, Canada, Australia, and across India, we arrange high-definition two-way video sessions (via Zoom or Google Meet). Pandit Ji guides your Sankalp with your Gotra and family names, recites the full Vedic mantras, and guides you through offerings made at your home altar step-by-step.
                  </p>
                </div>
              </details>

              <details className="faq-details-item">
                <summary className="faq-question">
                  <span>Do you make guaranteed claims or astrological remedies?</span>
                  <span className="faq-toggle-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    No. Vedic pujas are sacred acts of devotion, gratitude, and spiritual peace. Shastriya Vidhan does not make superstitious, medical, legal, financial, or guaranteed material outcome claims. We believe in performing rituals with pure intent, authentic mantras, and complete dignity.
                  </p>
                </div>
              </details>

              <details className="faq-details-item">
                <summary className="faq-question">
                  <span>What is your cancellation and rescheduling policy?</span>
                  <span className="faq-toggle-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>
                    Life happens! If family emergencies or unexpected schedule changes arise, you can reschedule your puja up to 24 hours in advance with zero penalty. Our booking coordinators will coordinate a new date with Pandit Ji.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* EMBEDDED BOOKING SECTION */}
        <section className="homepage-booking-anchor" id="booking-section" aria-labelledby="anchor-booking-title">
          <div className="container-inner">
            <div className="section-header-center">
              <span className="sacred-eyebrow">Priority Booking Desk</span>
              <h2 id="anchor-booking-title">Request Your Pandit Ji Today</h2>
              <p>Submit your puja requirement below. Our booking coordinator connects with you within 15–30 minutes.</p>
            </div>

            <div className="embedded-funnel-shell">
              <BookingModalFunnel
                initialService={selectedPujaForBooking}
                isOpen={true}
              />
            </div>
          </div>
        </section>
      </main>

      {/* QUICK SAMAGRI PREVIEW MODAL */}
      {previewPuja && (
        <div className="quick-preview-overlay" role="dialog" aria-modal="true">
          <div className="quick-preview-modal">
            <div className="preview-modal-header">
              <h3>{previewPuja.name} • Samagri &amp; Scope</h3>
              <button onClick={() => setPreviewPuja(null)} className="btn-close">✕</button>
            </div>
            <div className="preview-modal-body">
              <p><strong>Indicative Duration:</strong> {previewPuja.duration}</p>
              <p><strong>Indicative Dakshina:</strong> {previewPuja.indicativePrice}</p>
              <div className="samagri-tag-box">
                <strong>Key Samagri Items Needed:</strong>
                <p>{previewPuja.samagriHighlights}</p>
              </div>
              <p className="preview-note">
                Full checklist PDF is shared on WhatsApp after you submit your booking request.
              </p>
            </div>
            <div className="preview-modal-footer">
              <button
                type="button"
                onClick={() => {
                  const pName = previewPuja.name;
                  setPreviewPuja(null);
                  openBookingFor(pName);
                }}
                className="btn-primary-sacred"
              >
                Proceed to Book {previewPuja.name}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE STICKY CTA BAR */}
      <MobileStickyBar
        currentPujaName={selectedPujaForBooking}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* POPUP MODAL (If triggered from buttons) */}
      {isBookingModalOpen && (
        <BookingModalFunnel
          initialService={selectedPujaForBooking}
          isOpen={true}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}

      {/* STYLES */}
      <style jsx>{`
        .shastriya-homepage-root {
          background-color: #FAF7F2;
          color: #1E293B;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .container-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Top Announcement Ribbon */
        .top-auspicious-ribbon {
          background: #7A151C;
          color: #FAF7F2;
          font-size: 0.8rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ribbon-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          text-align: center;
        }

        .ribbon-badge {
          background: #E67E22;
          color: #FFFFFF;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 9999px;
        }

        .ribbon-link {
          color: #F8D7B0;
          font-weight: 700;
          text-decoration: underline;
        }

        /* Header */
        .shastriya-header {
          background: #FFFFFF;
          border-bottom: 1px solid #EFE8DE;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(30, 41, 59, 0.04);
        }

        .header-layout {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 72px;
        }

        .brand-logo-lockup {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-om {
          font-size: 1.8rem;
        }

        .brand-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #1E293B;
          display: block;
          line-height: 1.1;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: #C8232C;
          font-weight: 600;
          display: block;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        @media (max-width: 960px) {
          .desktop-nav {
            display: none;
          }
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: #C8232C;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-whatsapp-compact {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #166534;
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          padding: 8px 14px;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 680px) {
          .btn-whatsapp-compact {
            display: none;
          }
        }

        /* Hero */
        .hero-sacred-section {
          background: #FAF7F2;
          padding: 60px 0 70px;
          border-bottom: 1px solid #EFE8DE;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 48px;
        }

        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        .hero-trust-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FCF7E8;
          border: 1px solid #E8D595;
          color: #B45309;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 9999px;
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: clamp(2.1rem, 4vw, 3.4rem);
          font-weight: 800;
          color: #1E293B;
          margin: 0 0 16px;
          line-height: 1.12;
        }

        .highlight-saffron {
          color: #C8232C;
          background: linear-gradient(135deg, #C8232C, #E67E22);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.12rem;
          color: #475569;
          margin: 0 0 28px;
          line-height: 1.6;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .btn-hero-primary {
          padding: 14px 28px !important;
          font-size: 1.05rem !important;
        }

        .btn-hero-secondary {
          padding: 14px 24px !important;
          font-size: 1rem !important;
        }

        .hero-trust-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 18px;
          border-top: 1px solid #EFE8DE;
          padding-top: 24px;
        }

        @media (max-width: 540px) {
          .hero-trust-grid {
            grid-template-columns: 1fr;
          }
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: #334155;
          font-weight: 600;
        }

        .trust-check {
          color: #15803D;
          font-weight: 900;
        }

        .hero-visual-column {
          position: relative;
        }

        .hero-image-card {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(30, 41, 59, 0.12);
          border: 1px solid #EFE8DE;
          position: relative;
        }

        .hero-main-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
        }

        .hero-floating-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          border-radius: 14px;
          padding: 14px 18px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .avatar-group-sample {
          display: flex;
          font-size: 1.2rem;
          gap: 2px;
        }

        .hero-floating-badge strong {
          display: block;
          font-size: 0.92rem;
          color: #1E293B;
        }

        .hero-floating-badge p {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: #64748B;
        }

        /* 4 Steps Section */
        .how-it-works-section {
          padding: 80px 0;
          background: #FFFFFF;
          border-bottom: 1px solid #EFE8DE;
        }

        .four-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) {
          .four-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .four-steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .step-card {
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 16px;
          padding: 24px;
        }

        .step-number-pill {
          display: inline-block;
          background: #C8232C;
          color: #FFFFFF;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 9999px;
          margin-bottom: 14px;
        }

        .step-card h3 {
          font-size: 1.15rem;
          margin: 0 0 8px;
          color: #1E293B;
        }

        .step-card p {
          font-size: 0.9rem;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        /* Puja Finder */
        .puja-finder-section {
          padding: 80px 0;
        }

        .category-tabs-row {
          display: inline-flex;
          gap: 6px;
          background: #EFE8DE;
          padding: 5px;
          border-radius: 9999px;
          margin-bottom: 24px;
          overflow-x: auto;
          max-width: 100%;
        }

        .category-tab-btn {
          background: transparent;
          border: none;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .category-tab-btn.active {
          background: #C8232C;
          color: #FFFFFF;
          box-shadow: 0 2px 8px rgba(200, 35, 44, 0.25);
        }

        .search-filter-box {
          max-width: 520px;
          margin: 0 auto 40px;
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1.5px solid #CBD5E1;
          border-radius: 9999px;
          padding: 8px 18px;
          box-shadow: 0 2px 8px rgba(30, 41, 59, 0.04);
        }

        .search-icon {
          margin-right: 10px;
          color: #94A3B8;
        }

        .search-input-field {
          flex: 1;
          border: none;
          outline: none;
          font-size: 0.95rem;
          color: #1E293B;
          background: transparent;
        }

        .services-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
        }

        .service-showcase-card {
          background: #FFFFFF;
          border: 1.5px solid #EFE8DE;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(30, 41, 59, 0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .service-showcase-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(30, 41, 59, 0.1);
        }

        .card-image-wrap {
          position: relative;
          aspect-ratio: 16 / 10;
          background: #FAF7F2;
        }

        .service-card-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-category-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(6px);
          color: #8C4400;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 9999px;
          border: 1px solid #F8D7B0;
        }

        .service-card-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .service-card-title {
          font-size: 1.3rem;
          margin: 0 0 8px;
          color: #1E293B;
        }

        .service-card-desc {
          font-size: 0.9rem;
          color: #64748B;
          line-height: 1.5;
          margin: 0 0 16px;
          flex: 1;
        }

        .service-specs-box {
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.82rem;
          color: #475569;
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 18px;
        }

        .price-bold {
          color: #C8232C;
          font-weight: 800;
        }

        .service-card-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          border-top: 1px solid #EFE8DE;
          padding-top: 14px;
        }

        .btn-card-action {
          padding: 8px 18px !important;
          font-size: 0.88rem !important;
        }

        .btn-quick-preview {
          background: #FAF7F2;
          border: 1px solid #CBD5E1;
          color: #475569;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 7px 12px;
          border-radius: 9999px;
          cursor: pointer;
        }

        .btn-quick-preview:hover {
          border-color: #C8232C;
          color: #C8232C;
        }

        .link-details {
          margin-left: auto;
          color: #64748B;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
        }

        .link-details:hover {
          color: #C8232C;
        }

        /* Pandits Section */
        .pandits-section {
          padding: 80px 0;
          background: #FFFFFF;
          border-top: 1px solid #EFE8DE;
          border-bottom: 1px solid #EFE8DE;
        }

        .pandit-roster-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        /* FAQ Accordion */
        .faq-section-sacred {
          padding: 80px 0;
          background: #FAF7F2;
        }

        .faq-accordion-container {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-details-item {
          background: #FFFFFF;
          border: 1.5px solid #EFE8DE;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .faq-details-item[open] {
          border-color: #E2D7C8;
          box-shadow: 0 4px 12px rgba(30, 41, 59, 0.04);
        }

        .faq-question {
          padding: 18px 22px;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.05rem;
          color: #1E293B;
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style: none;
        }

        .faq-question::-webkit-details-marker {
          display: none;
        }

        .faq-toggle-icon {
          font-size: 1.4rem;
          color: #64748B;
        }

        .faq-details-item[open] .faq-toggle-icon {
          transform: rotate(45deg);
        }

        .faq-answer {
          padding: 0 22px 20px;
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Embedded Funnel Shell */
        .homepage-booking-anchor {
          padding: 80px 0 100px;
          background: #FFFFFF;
          border-top: 1px solid #EFE8DE;
        }

        .embedded-funnel-shell {
          max-width: 780px;
          margin: 0 auto;
        }

        /* Quick Preview Modal */
        .quick-preview-overlay {
          position: fixed;
          inset: 0;
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(4px);
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .quick-preview-modal {
          background: #FFFFFF;
          border-radius: 18px;
          max-width: 520px;
          width: 100%;
          padding: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border: 1.5px solid #EFE8DE;
        }

        .preview-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .preview-modal-header h3 {
          margin: 0;
          font-size: 1.2rem;
          color: #1E293B;
        }

        .btn-close {
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .samagri-tag-box {
          background: #FCF7E8;
          border: 1px solid #E8D595;
          padding: 12px;
          border-radius: 10px;
          margin: 14px 0;
        }

        .preview-note {
          font-size: 0.8rem;
          color: #64748B;
        }

        .preview-modal-footer {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid #EFE8DE;
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
};

export default HomepageTemplate;
