'use client';

import React, { useState } from 'react';
import BookingModalFunnel from '../components/BookingModalFunnel';
import MobileStickyBar from '../components/MobileStickyBar';

export interface PujaServicePageData {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  canonicalUrl: string;
  deity: string;
  category: string;
  categorySlug: string;
  durationRange: string;
  modesAvailable: string[];
  indicativePrice: string;
  availableCities: string[];
  heroImageUrl: string;
  significance: {
    leadParagraph: string;
    scripturalReference: string;
    benefits: string[];
  };
  vidhiSteps: Array<{
    stepNumber: number;
    title: string;
    sanskritName: string;
    description: string;
    durationMinutes: string;
  }>;
  samagriArrangement: {
    panditJiBrings: string[];
    familyArranges: string[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedGuides: Array<{
    title: string;
    url: string;
    readTime: string;
  }>;
  relatedLocationPages: Array<{
    city: string;
    url: string;
  }>;
}

export const RUDRABHISHEK_SERVICE_DATA: PujaServicePageData = {
  slug: 'book-pandit-ji-for-rudrabhishek-puja-noida',
  title: 'Book Pandit Ji for Rudrabhishek Puja in Noida | Shastriya Vidhan',
  h1: 'Book Verified Pandit Ji for Rudrabhishek Puja in Noida & Delhi NCR',
  metaDescription: 'Book qualified Vedic Pandit Ji for authentic Rudrabhishek Puja at home, temple, or online. Clear Panchamrit vidhi, verified samagri checklist, and quotes confirmed before payment.',
  canonicalUrl: 'https://www.shastriyavidhan.com/book-pandit-ji-for-rudrabhishek-puja-noida',
  deity: 'Lord Shiva (Mahadev)',
  category: 'Shiva Pujas',
  categorySlug: '/puja-services/shiva-pujas',
  durationRange: '90 – 120 Minutes',
  modesAvailable: ['Puja at Home', 'Temple Coordination', 'Online Live Video'],
  indicativePrice: '₹2,500 – ₹4,500',
  availableCities: ['Noida', 'Greater Noida', 'Delhi', 'Gurugram', 'Ghaziabad', 'Ujjain', 'Online Worldwide'],
  heroImageUrl: '/images/rudrabhishek-puja.webp',
  significance: {
    leadParagraph: 'Rudrabhishek is an ancient Vedic ritual dedicated to Lord Shiva, invoking his benevolent Rudra form. The abhishek is performed by chanting the sacred Sri Rudram from the Krishna Yajurveda, accompanied by offerings of Panchamrit (milk, curd, honey, ghee, sugar), Gangajal, bilva patra, and sugarcane juice over the Shiva Lingam.',
    scripturalReference: 'As stated in the Shiva Purana: "Just as watering the root nourishes the entire tree, performing abhishekam to the Shiva Lingam pleases all the deities and brings profound peace, good health, and spiritual upliftment to the family."',
    benefits: [
      'Dissolves negative energies, planetary afflictions, and ancestral doshas.',
      'Promotes family harmony, mental tranquility, and physical vitality.',
      'Removes obstacles in career, business, and spiritual advancement.',
      'Fulfills auspicious sankalpa made during Shravan, Pradosh, or Shivratri.'
    ]
  },
  vidhiSteps: [
    {
      stepNumber: 1,
      title: 'Swasti Vachan & Ganesh-Gauri Pujan',
      sanskritName: 'स्वस्तिवाचन एवं गणेश पूजन',
      description: 'The ceremony begins with purification mantras (Atma Shuddhi, Tilak, and Achaman) followed by invocation of Lord Ganesha and Mata Gauri for an obstacle-free ritual.',
      durationMinutes: '15 Mins'
    },
    {
      stepNumber: 2,
      title: 'Kalash Sthapana & Navgrah Dhyan',
      sanskritName: 'कलश स्थापना एवं नवग्रह पूजन',
      description: 'Sacred water pot (Kalash) is consecrated with mango leaves, coconut, and sacred threads. All nine celestial deities (Navgrahas) and Dikpalas are invoked.',
      durationMinutes: '15 Mins'
    },
    {
      stepNumber: 3,
      title: 'Sacred Family Sankalpa',
      sanskritName: 'सपरिवार संकल्प',
      description: 'Pandit Ji guides the Yajman and family through the Vedic Sankalp, reciting your Gotra, Nakshatra, native place, and specific devotional aspirations.',
      durationMinutes: '10 Mins'
    },
    {
      stepNumber: 4,
      title: 'Sri Rudram Panchamrit Abhishekam',
      sanskritName: 'लघु रुद्राभिषेक एवं पंचामृत स्नान',
      description: 'Continuous offering of sacred Panchamrit, Gangajal, tender coconut water, and sugarcane juice over the Shiva Lingam while chanting the 11 Anuvakas of Namakam and Chamakam.',
      durationMinutes: '45 Mins'
    },
    {
      stepNumber: 5,
      title: 'Bilvapatra & Dhatura Archana',
      sanskritName: 'बिल्वपत्र एवं भस्म अर्चन',
      description: 'Devotional offering of unblemished Bilva leaves, white flowers, sacred Bhasma, Chandan, and Dhatura with 108 names of Lord Shiva (Ashtottara Shatanamavali).',
      durationMinutes: '15 Mins'
    },
    {
      stepNumber: 6,
      title: 'Shiva Hawan & Purnahuti (Optional)',
      sanskritName: 'रुद्र हवन एवं पूर्णाहुति',
      description: 'If requested, a mini sacred fire (Agni Kund) is consecrated with herbal samagri, offering ahutis of ghee and kheer for universal peace and protection.',
      durationMinutes: '20 Mins'
    },
    {
      stepNumber: 7,
      title: 'Maha Mangal Aarti & Brahmin Ashirwad',
      sanskritName: 'महाआरती एवं आशीर्वाद',
      description: 'Concluding Shiva Aarti (Jai Shiv Omkara, Karpura Gauram) with ringing bells, distribution of sanctified charnamrit and prasad, and receiving Brahmin blessings.',
      durationMinutes: '10 Mins'
    }
  ],
  samagriArrangement: {
    panditJiBrings: [
      'Certified Pure Hawan Samagri (herbal mixture)',
      'Desi Cow Ghee (Pure A2 Cow Ghee)',
      'Sacred Gangajal (from Haridwar/Rishikesh)',
      'Janeu (Yajnopavita), Moli, and Raw Cotton',
      'Ashtagandha Chandan, Kumkum, and Abir/Gulal',
      'Camphor (Bhimseni Kapoor) & Cow Dung Cakes',
      'Kusha grass rings, Supari, and Clove-Cardamom packets'
    ],
    familyArranges: [
      'Shiva Lingam with copper/brass plate (Thali)',
      'Fresh raw cow milk (1–2 Litres)',
      'Fresh curd (Dahi), Honey, and Cane Sugar',
      'Fresh unblemished Bilva Patra (Belpatra) & Dhatura',
      'White/yellow fragrant flowers and garland',
      'Seasonal fruits (5 varieties) and home sweets for bhog'
    ]
  },
  faqs: [
    {
      question: 'Which days are most auspicious for performing Rudrabhishek?',
      answer: 'While Rudrabhishek can be performed on any day with pure devotion, the most auspicious occasions are Mondays (Somwar), Pradosh Vrat, Masik Shivratri, Maha Shivratri, and the entire holy month of Shravan.'
    },
    {
      question: 'Can Rudrabhishek be performed at an apartment with smoke detectors?',
      answer: 'Yes! We conduct apartment-friendly Rudrabhishek. The primary abhishek is liquid-based (panchamrit and water) and creates zero smoke. If a concluding hawan is booked, our Shastri uses pure cow camphor and low-smoke dry coconut samagri.'
    },
    {
      question: 'Is the price fixed or will Pandit Ji ask for extra dakshina on the day?',
      answer: 'At Shastriya Vidhan, we maintain complete transparency. The quote confirmed by our booking desk includes the Pandit Ji dakshina and agreed samagri. You will never face awkward haggling on the day of the puja.'
    },
    {
      question: 'How do you assign the Pandit Ji for our family?',
      answer: 'We review your native tradition (North Indian, Maithili, Gujarati, or South Indian), preferred language, and geographical sector. Only verified acharyas with credentials from recognized Sanskrit Vidyapeethas are assigned.'
    }
  ],
  relatedGuides: [
    { title: 'Essential Samagri Checklist for Rudrabhishek at Home', url: '/guides#samagri-guidance', readTime: '3 min read' },
    { title: 'Significance of Sri Rudram Chanting in Shukla Yajurveda', url: '/guides#puja-preparation', readTime: '5 min read' },
    { title: 'How to Prepare Your Home for Shiva Abhishek', url: '/guides#booking-guidance', readTime: '4 min read' }
  ],
  relatedLocationPages: [
    { city: 'Noida (Expressway & Extension)', url: '/locations/noida' },
    { city: 'Delhi (South & Central)', url: '/locations/delhi' },
    { city: 'Gurugram (DLF & Golf Course)', url: '/locations/gurugram' },
    { city: 'Ujjain (Mahakaleshwar Kshetra)', url: '/locations/ujjain' }
  ]
};

export const PujaServiceTemplate: React.FC<{ data?: PujaServicePageData }> = ({
  data = RUDRABHISHEK_SERVICE_DATA
}) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [activeSamagriTab, setActiveSamagriTab] = useState<'pandit' | 'family'>('pandit');

  // Schema.org Graph for Service, BreadcrumbList, and FAQPage
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${data.canonicalUrl}/#service`,
        name: data.h1,
        serviceType: 'Vedic Hindu Puja Service',
        provider: {
          '@type': 'ProfessionalService',
          name: 'Shastriya Vidhan',
          telephone: '+917599340430',
          url: 'https://www.shastriyavidhan.com'
        },
        areaServed: data.availableCities.map(city => ({
          '@type': 'Place',
          name: city
        })),
        description: data.metaDescription,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '2500',
          priceValidUntil: '2026-12-31',
          description: 'Indicative dakshina starting from ₹2,500. Exact quote confirmed manually based on ritual duration and samagri options.'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${data.canonicalUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.shastriyavidhan.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Puja Services',
            item: 'https://www.shastriyavidhan.com/puja-services'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: data.category,
            item: `https://www.shastriyavidhan.com${data.categorySlug}`
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: data.title.split('|')[0].trim(),
            item: data.canonicalUrl
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${data.canonicalUrl}/#faqs`,
        mainEntity: data.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <article className="puja-service-root" itemScope itemType="https://schema.org/Service">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* SEO Breadcrumbs Bar (Visible & Accessible) */}
      <nav className="breadcrumb-nav-shell" aria-label="Breadcrumb navigation">
        <div className="container-inner">
          <ol className="breadcrumb-list">
            <li><a href="/">Home</a></li>
            <li className="sep">/</li>
            <li><a href="/puja-services">Puja Services</a></li>
            <li className="sep">/</li>
            <li><a href={data.categorySlug}>{data.category}</a></li>
            <li className="sep">/</li>
            <li aria-current="page" className="current-crumb">{data.title.split('|')[0].trim()}</li>
          </ol>
        </div>
      </nav>

      {/* SERVICE HERO WITH AUTHORITY BADGES */}
      <header className="service-hero-section">
        <div className="container-inner service-hero-grid">
          <div className="service-hero-copy">
            <div className="service-category-badge">
              <span>🕉️ {data.category}</span>
              <span className="dot">•</span>
              <span>{data.deity}</span>
            </div>

            <h1 className="service-main-h1">{data.h1}</h1>

            <p className="service-lead-intro">
              Experience the divine sanctity of Sri Rudram chanting, panchamrit abhishekam, and Vedic hawan in your home. Guided by qualified Shastri Brahmins with verified credentials.
            </p>

            {/* Quick Specs Authority Bar */}
            <div className="service-specs-strip">
              <div className="spec-card">
                <span className="spec-title">Duration</span>
                <strong className="spec-val">⏱️ {data.durationRange}</strong>
              </div>
              <div className="spec-card">
                <span className="spec-title">Attendance</span>
                <strong className="spec-val">🏡 Home / Video / Temple</strong>
              </div>
              <div className="spec-card">
                <span className="spec-title">Indicative Dakshina</span>
                <strong className="spec-val price-val">💰 {data.indicativePrice}</strong>
              </div>
              <div className="spec-card">
                <span className="spec-title">Booking Terms</span>
                <strong className="spec-val text-green">🛡️ Pay After Quote Review</strong>
              </div>
            </div>

            <div className="service-hero-cta-row">
              <button
                type="button"
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-primary-sacred btn-hero"
              >
                <span>Book Pandit Ji for {data.title.split(' ')[0]}</span>
                <span aria-hidden="true">→</span>
              </button>

              <a
                href={`https://wa.me/917599340430?text=${encodeURIComponent(`Namaste Shastriya Vidhan, I want to book ${data.h1}. Please share Pandit Ji availability and quote.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-sacred"
              >
                <span>WhatsApp Booking Desk</span>
              </a>
            </div>

            <p className="no-obligation-note">
              ✓ No instant payment required. Verified Pandit Ji profile &amp; samagri checklist sent on WhatsApp.
            </p>
          </div>

          <div className="service-hero-visual">
            <div className="hero-img-shell">
              <img
                src={data.heroImageUrl}
                alt={`${data.h1} sacred arrangement`}
                width={600}
                height={450}
                fetchPriority="high"
                className="service-feature-image"
              />
              <div className="image-overlay-card">
                <strong>Vedic Chanting Standard</strong>
                <p>Namakam &amp; Chamakam recited with authentic Swara</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2-COLUMN CONTENT ARCHITECTURE (Content & SEO Coexistence) */}
      <div className="service-body-container">
        <div className="container-inner service-body-layout">
          {/* STICKY SIDEBAR: Table of Contents & Quick Conversion */}
          <aside className="service-sticky-sidebar" aria-label="Table of Contents and quick book">
            <div className="sidebar-card">
              <span className="sidebar-heading">On This Page</span>
              <nav className="toc-nav">
                <a href="#significance">Spiritual Significance</a>
                <a href="#vidhi-steps">Step-by-Step Vidhi (7 Steps)</a>
                <a href="#samagri-matrix">Samagri Responsibility</a>
                <a href="#pandit-standards">Pandit Ji Credentials</a>
                <a href="#faqs">Frequently Asked Questions</a>
                <a href="#booking-funnel">Book Pandit Ji (Pay Later)</a>
              </nav>

              <div className="sidebar-quick-quote-box">
                <span className="quote-tag">Indicative Dakshina</span>
                <div className="quote-figure">{data.indicativePrice}</div>
                <p className="quote-micro-desc">Zero upfront fees. Exact quote confirmed via WhatsApp.</p>
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="btn-primary-sacred w-100"
                >
                  Request Pandit Ji
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN ARTICLE CONTENT STACK (600-800+ Words for SEO) */}
          <section className="service-main-content">
            {/* Section 1: Significance */}
            <section id="significance" className="content-block">
              <span className="section-eyebrow">Puranic Significance</span>
              <h2>Significance of {data.h1.replace('Book Verified Pandit Ji for ', '')}</h2>
              <p className="body-lead">{data.significance.leadParagraph}</p>

              <blockquote className="scripture-quote">
                <p>{data.significance.scripturalReference}</p>
              </blockquote>

              <div className="benefits-grid">
                <h3>Spiritual &amp; Material Blessings:</h3>
                <ul>
                  {data.significance.benefits.map((b, i) => (
                    <li key={i}>
                      <span className="check-bullet">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2: Comprehensive 7-Step Vidhi */}
            <section id="vidhi-steps" className="content-block">
              <span className="section-eyebrow">Vedic Ritual Sequence</span>
              <h2>Authentic Step-by-Step Puja Vidhi</h2>
              <p>
                Our assigned Shastri guides your family through each ritual with patience, explaining the sacred meaning of the mantras in Hindi, Sanskrit, or English.
              </p>

              <div className="vidhi-timeline">
                {data.vidhiSteps.map(step => (
                  <div key={step.stepNumber} className="vidhi-step-card">
                    <div className="step-badge-col">
                      <span className="step-num-circle">{step.stepNumber}</span>
                      <span className="step-time">{step.durationMinutes}</span>
                    </div>

                    <div className="step-details-col">
                      <div className="step-header">
                        <h3>{step.title}</h3>
                        <span className="sanskrit-title">{step.sanskritName}</span>
                      </div>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Samagri Responsibility Matrix */}
            <section id="samagri-matrix" className="content-block">
              <span className="section-eyebrow">Clear Coordination</span>
              <h2>Puja Samagri: Who Arranges What?</h2>
              <p>
                To eliminate confusion and anxiety on the day of the puja, we clearly delineate materials brought by Pandit Ji versus items arranged by your family.
              </p>

              {/* Toggle Tabs */}
              <div className="samagri-toggle-tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSamagriTab === 'pandit'}
                  className={`samagri-tab-btn ${activeSamagriTab === 'pandit' ? 'active' : ''}`}
                  onClick={() => setActiveSamagriTab('pandit')}
                >
                  Brought by Pandit Ji (Pure &amp; Certified)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSamagriTab === 'family'}
                  className={`samagri-tab-btn ${activeSamagriTab === 'family' ? 'active' : ''}`}
                  onClick={() => setActiveSamagriTab('family')}
                >
                  Arranged by Family (Fresh Household Items)
                </button>
              </div>

              <div className="samagri-display-card">
                {activeSamagriTab === 'pandit' ? (
                  <div>
                    <h4 className="samagri-list-title">Materials Pandit Ji Carries in His Puja Kit:</h4>
                    <ul className="samagri-item-list">
                      {data.samagriArrangement.panditJiBrings.map((item, idx) => (
                        <li key={idx}>
                          <span className="badge-pandit">Pandit Ji</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <h4 className="samagri-list-title">Fresh Items to Keep Ready at Home:</h4>
                    <ul className="samagri-item-list">
                      {data.samagriArrangement.familyArranges.map((item, idx) => (
                        <li key={idx}>
                          <span className="badge-family">Home Prep</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="samagri-download-row">
                  <span>Need this checklist on WhatsApp?</span>
                  <a
                    href="https://wa.me/917599340430?text=Namaste%2C%20please%20send%20me%20the%20complete%20Rudrabhishek%20samagri%20checklist%20PDF."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-whatsapp-checklist"
                  >
                    Download WhatsApp Checklist PDF →
                  </a>
                </div>
              </div>
            </section>

            {/* Section 4: Pandit Ji Standards */}
            <section id="pandit-standards" className="content-block">
              <span className="section-eyebrow">Trust &amp; Credentials</span>
              <h2>How Shastriya Vidhan Vets Your Pandit Ji</h2>
              <div className="standards-grid-3">
                <div className="standard-card">
                  <span className="standard-icon">📜</span>
                  <h4>Vedic Lineage</h4>
                  <p>Qualified from recognized Sanskrit Universities (Sampurnanand, Varanasi or Tirupati). Authentic mantra chanting with correct Swara.</p>
                </div>
                <div className="standard-card">
                  <span className="standard-icon">🛡️</span>
                  <h4>Identity &amp; Background</h4>
                  <p>Full Aadhaar and identity verified. Committed to punctual arrival and respectful family etiquette in your home.</p>
                </div>
                <div className="standard-card">
                  <span className="standard-icon">🗣️</span>
                  <h4>Language Matching</h4>
                  <p>Available in Hindi, Sanskrit, English, Maithili, Gujarati, or South Indian traditions based on your preference.</p>
                </div>
              </div>
            </section>

            {/* Section 5: FAQs */}
            <section id="faqs" className="content-block">
              <span className="section-eyebrow">Help &amp; Clarity</span>
              <h2>Frequently Asked Questions About {data.h1.replace('Book Verified Pandit Ji for ', '')}</h2>

              <div className="faq-accordion-stack">
                {data.faqs.map((faq, index) => (
                  <details key={index} className="service-faq-item">
                    <summary className="service-faq-question">
                      <span>{faq.question}</span>
                      <span className="chevron">+</span>
                    </summary>
                    <div className="service-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 6: Embedded Booking Funnel Anchor */}
            <section id="booking-funnel" className="content-block booking-anchor-block">
              <span className="section-eyebrow">Priority Desk</span>
              <h2>Submit Booking Request for {data.h1.replace('Book Verified Pandit Ji for ', '')}</h2>
              <p>Zero payment required today. Our booking coordinator verifies availability and sends exact quote within 30 minutes.</p>

              <div className="embedded-service-funnel">
                <BookingModalFunnel
                  initialService={data.title.split('|')[0].replace('Book Pandit Ji for ', '').trim()}
                  isOpen={true}
                />
              </div>
            </section>

            {/* Section 7: Contextual Internal Links (SEO Strength) */}
            <section className="internal-links-hub">
              <div className="links-col">
                <h4>Related Puja Guides &amp; Checklists</h4>
                <ul>
                  {data.relatedGuides.map((guide, idx) => (
                    <li key={idx}>
                      <a href={guide.url}>{guide.title}</a>
                      <span className="read-badge">{guide.readTime}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="links-col">
                <h4>Available Locations &amp; Cities</h4>
                <ul>
                  {data.relatedLocationPages.map((loc, idx) => (
                    <li key={idx}>
                      <a href={loc.url}>Book Pandit Ji in {loc.city} →</a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </section>
        </div>
      </div>

      {/* MOBILE STICKY CTA */}
      <MobileStickyBar
        currentPujaName={data.h1.replace('Book Verified Pandit Ji for ', '')}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        indicativePriceHint={data.indicativePrice}
      />

      {/* POPUP MODAL (If triggered) */}
      {isBookingModalOpen && (
        <BookingModalFunnel
          initialService={data.title.split('|')[0].replace('Book Pandit Ji for ', '').trim()}
          isOpen={true}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}

      {/* STYLES */}
      <style jsx>{`
        .puja-service-root {
          background-color: #FAF7F2;
          color: #1E293B;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .container-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Breadcrumbs */
        .breadcrumb-nav-shell {
          background: #FFFFFF;
          border-bottom: 1px solid #EFE8DE;
          padding: 10px 0;
          font-size: 0.82rem;
        }

        .breadcrumb-list {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: wrap;
        }

        .breadcrumb-list a {
          color: #64748B;
          text-decoration: none;
        }

        .breadcrumb-list a:hover {
          color: #C8232C;
          text-decoration: underline;
        }

        .sep {
          color: #CBD5E1;
        }

        .current-crumb {
          color: #1E293B;
          font-weight: 700;
        }

        /* Hero */
        .service-hero-section {
          background: #FFFFFF;
          border-bottom: 1px solid #EFE8DE;
          padding: 48px 0 56px;
        }

        .service-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 40px;
        }

        @media (max-width: 860px) {
          .service-hero-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FDF3E7;
          border: 1px solid #F8D7B0;
          color: #D35400;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .service-main-h1 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #1E293B;
          line-height: 1.15;
          margin: 0 0 16px;
        }

        .service-lead-intro {
          font-size: 1.08rem;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 24px;
        }

        .service-specs-strip {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 14px;
          background: #FAF7F2;
          border: 1.5px solid #E2D7C8;
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 24px;
        }

        @media (min-width: 600px) {
          .service-specs-strip {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .spec-card {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .spec-title {
          font-size: 0.72rem;
          color: #64748B;
          text-transform: uppercase;
          font-weight: 700;
        }

        .spec-val {
          font-size: 0.88rem;
          color: #1E293B;
        }

        .price-val {
          color: #C8232C;
          font-weight: 800;
        }

        .text-green {
          color: #15803D;
        }

        .service-hero-cta-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .no-obligation-note {
          font-size: 0.8rem;
          color: #15803D;
          font-weight: 600;
          margin: 0;
        }

        .hero-img-shell {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(30, 41, 59, 0.1);
          border: 1px solid #EFE8DE;
          position: relative;
        }

        .service-feature-image {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }

        .image-overlay-card {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 12px 16px;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .image-overlay-card strong {
          display: block;
          font-size: 0.9rem;
          color: #1E293B;
        }

        .image-overlay-card p {
          margin: 2px 0 0;
          font-size: 0.78rem;
          color: #64748B;
        }

        /* 2-Column Body Layout */
        .service-body-container {
          padding: 56px 0 80px;
        }

        .service-body-layout {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 900px) {
          .service-body-layout {
            grid-template-columns: 1fr;
          }
          .service-sticky-sidebar {
            display: none;
          }
        }

        /* Sticky Sidebar */
        .service-sticky-sidebar {
          position: sticky;
          top: 90px;
        }

        .sidebar-card {
          background: #FFFFFF;
          border: 1px solid #EFE8DE;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 14px rgba(30, 41, 59, 0.04);
        }

        .sidebar-heading {
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #64748B;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 12px;
        }

        .toc-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-bottom: 1px solid #EFE8DE;
          padding-bottom: 18px;
          margin-bottom: 18px;
        }

        .toc-nav a {
          font-size: 0.88rem;
          color: #475569;
          text-decoration: none;
          line-height: 1.4;
          transition: color 0.15s;
        }

        .toc-nav a:hover {
          color: #C8232C;
          font-weight: 600;
        }

        .sidebar-quick-quote-box {
          background: #FCF7E8;
          border: 1px solid #E8D595;
          border-radius: 12px;
          padding: 14px;
          text-align: center;
        }

        .quote-tag {
          font-size: 0.72rem;
          text-transform: uppercase;
          font-weight: 800;
          color: #B45309;
        }

        .quote-figure {
          font-size: 1.35rem;
          font-weight: 800;
          color: #C8232C;
          margin: 2px 0 6px;
        }

        .quote-micro-desc {
          font-size: 0.75rem;
          color: #64748B;
          margin: 0 0 12px;
        }

        .w-100 {
          width: 100%;
        }

        /* Content Blocks */
        .content-block {
          background: #FFFFFF;
          border: 1px solid #EFE8DE;
          border-radius: 18px;
          padding: 36px;
          margin-bottom: 36px;
          box-shadow: 0 4px 14px rgba(30, 41, 59, 0.03);
        }

        @media (max-width: 600px) {
          .content-block {
            padding: 24px 18px;
          }
        }

        .section-eyebrow {
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #D35400;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 8px;
        }

        .content-block h2 {
          font-size: clamp(1.45rem, 2.5vw, 2rem);
          margin: 0 0 16px;
          color: #1E293B;
        }

        .body-lead {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.65;
          margin: 0 0 20px;
        }

        .scripture-quote {
          background: #FAF7F2;
          border-left: 4px solid #C8232C;
          border-radius: 0 12px 12px 0;
          padding: 18px 24px;
          margin: 20px 0;
          font-style: italic;
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .benefits-grid h3 {
          font-size: 1.05rem;
          margin: 16px 0 10px;
        }

        .benefits-grid ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 10px 20px;
        }

        .benefits-grid li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.92rem;
          color: #475569;
        }

        .check-bullet {
          color: #15803D;
          font-weight: 900;
        }

        /* Vidhi Timeline */
        .vidhi-timeline {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }

        .vidhi-step-card {
          display: grid;
          grid-template-columns: 70px minmax(0, 1fr);
          gap: 16px;
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 14px;
          padding: 18px;
        }

        .step-badge-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .step-num-circle {
          width: 36px;
          height: 36px;
          background: #C8232C;
          color: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.95rem;
        }

        .step-time {
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748B;
        }

        .step-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 6px;
        }

        .step-header h3 {
          font-size: 1.1rem;
          margin: 0;
          color: #1E293B;
        }

        .sanskrit-title {
          font-size: 0.82rem;
          color: #8C4400;
          font-weight: 600;
        }

        .step-details-col p {
          margin: 0;
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.55;
        }

        /* Samagri Toggle */
        .samagri-toggle-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .samagri-tab-btn {
          background: #FAF7F2;
          border: 1.5px solid #E2D7C8;
          border-radius: 9999px;
          padding: 8px 18px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
        }

        .samagri-tab-btn.active {
          background: #C8232C;
          color: #FFFFFF;
          border-color: #C8232C;
        }

        .samagri-display-card {
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 14px;
          padding: 24px;
        }

        .samagri-list-title {
          font-size: 1rem;
          margin: 0 0 14px;
          color: #1E293B;
        }

        .samagri-item-list {
          list-style: none;
          padding: 0;
          margin: 0 0 18px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 10px 16px;
        }

        .samagri-item-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #334155;
        }

        .badge-pandit {
          background: #FDF1F2;
          color: #C8232C;
          border: 1px solid #F7B8BC;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          flex: none;
        }

        .badge-family {
          background: #FCF7E8;
          color: #B45309;
          border: 1px solid #E8D595;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          flex: none;
        }

        .samagri-download-row {
          border-top: 1px dashed #CBD5E1;
          padding-top: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 0.85rem;
        }

        .link-whatsapp-checklist {
          color: #166534;
          font-weight: 700;
          text-decoration: underline;
        }

        /* Standards Grid */
        .standards-grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-top: 18px;
        }

        .standard-card {
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 12px;
          padding: 20px;
        }

        .standard-icon {
          font-size: 1.8rem;
          margin-bottom: 10px;
          display: inline-block;
        }

        .standard-card h4 {
          font-size: 1.05rem;
          margin: 0 0 6px;
          color: #1E293B;
        }

        .standard-card p {
          margin: 0;
          font-size: 0.86rem;
          color: #64748B;
          line-height: 1.5;
        }

        /* FAQs */
        .faq-accordion-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }

        .service-faq-item {
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 12px;
          overflow: hidden;
        }

        .service-faq-question {
          padding: 16px 20px;
          cursor: pointer;
          font-weight: 700;
          font-size: 1rem;
          color: #1E293B;
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style: none;
        }

        .service-faq-question::-webkit-details-marker {
          display: none;
        }

        .chevron {
          font-size: 1.3rem;
          color: #64748B;
        }

        .service-faq-item[open] .chevron {
          transform: rotate(45deg);
        }

        .service-faq-answer {
          padding: 0 20px 18px;
          color: #475569;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        /* Internal Hub */
        .internal-links-hub {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 16px;
          padding: 24px;
        }

        @media (max-width: 680px) {
          .internal-links-hub {
            grid-template-columns: 1fr;
          }
        }

        .links-col h4 {
          font-size: 0.95rem;
          margin: 0 0 12px;
          color: #1E293B;
        }

        .links-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .links-col a {
          color: #C8232C;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
        }

        .links-col a:hover {
          text-decoration: underline;
        }

        .read-badge {
          font-size: 0.72rem;
          color: #64748B;
          margin-left: 8px;
        }
      `}</style>
    </article>
  );
};

export default PujaServiceTemplate;
