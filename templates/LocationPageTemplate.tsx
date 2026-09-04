'use client';

import React, { useState } from 'react';
import BookingModalFunnel from '../components/BookingModalFunnel';
import MobileStickyBar from '../components/MobileStickyBar';

export interface LocationPageData {
  cityKey: string;
  cityName: string;
  stateName: string;
  h1: string;
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  sectorsCovered: string[];
  travelHubNote: string;
  apartmentSafetyNotice: string;
  popularPujasInCity: Array<{
    name: string;
    slug: string;
    duration: string;
    priceHint: string;
  }>;
  localTestimonials: Array<{
    name: string;
    society: string;
    puja: string;
    review: string;
  }>;
  localFaqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const NOIDA_LOCATION_DATA: LocationPageData = {
  cityKey: 'noida',
  cityName: 'Noida',
  stateName: 'Uttar Pradesh',
  h1: 'Book Verified Pandit Ji in Noida & Greater Noida for Vedic Puja',
  title: 'Book Pandit Ji in Noida & Greater Noida | Shastriya Vidhan',
  metaDescription: 'Connect with verified Pandit Ji in Noida & Greater Noida for Griha Pravesh, Rudrabhishek, Hawan, and Festival Pujas. Punctual home visits, clear samagri, and no upfront fees.',
  canonicalUrl: 'https://www.shastriyavidhan.com/locations/noida',
  sectorsCovered: [
    'Noida Expressway (Sectors 93, 128, 137, 143, 168)',
    'Central Noida (Sectors 50, 62, 74, 75, 76, 78, 79)',
    'Greater Noida West / Noida Extension',
    'Pari Chowk & Greater Noida Alpha/Beta',
    'Sector 18, 27, 37, Botanical Garden Area'
  ],
  travelHubNote: 'Our verified Acharyas are locally based across Sector 62, Sector 137, and Indirapuram. Typical arrival lead time is 30–45 minutes with advance booking.',
  apartmentSafetyNotice: 'High-Rise Apartment Friendly: Our Pandits specialize in society-friendly havans using pure dry cow dung samagri, brass hawan kunds with fire-safe insulation mats, and low-smoke camphor so smoke alarms are never triggered.',
  popularPujasInCity: [
    { name: 'Griha Pravesh & Vastu Shanti', slug: '/puja-services', duration: '2.5 – 3.5 Hours', priceHint: '₹4,500 – ₹8,500' },
    { name: 'Rudrabhishek Puja', slug: '/book-pandit-ji-for-rudrabhishek-puja-noida', duration: '90 – 120 Mins', priceHint: '₹2,500 – ₹4,500' },
    { name: 'Satyanarayan Katha & Hawan', slug: '/puja-services', duration: '2 Hours', priceHint: '₹2,500 – ₹3,800' },
    { name: 'Diwali Lakshmi Ganesh Pujan', slug: '/book-pandit-ji-online-for-diwali-puja', duration: '60 – 90 Mins', priceHint: '₹3,100 – ₹5,100' }
  ],
  localTestimonials: [
    {
      name: 'Sunil & Rashmi Saxena',
      society: 'Sector 78 (Zodiac Society), Noida',
      puja: 'Griha Pravesh & Hawan',
      review: 'Acharya Ji reached right at 6:30 AM before our auspicious muhurat. The hawan was completely manageable inside our 3BHK flat without excessive smoke. Very polite and knowledgeable.'
    },
    {
      name: 'Nitin Kapoor',
      society: 'Sector 137 (Paras Tierea), Noida Expressway',
      puja: 'Rudrabhishek Puja',
      review: 'Booking on WhatsApp was seamless. Got Pandit Ji’s profile 2 hours after submitting my request. No surprise costs on the day.'
    }
  ],
  localFaqs: [
    {
      question: 'How quickly can a Pandit Ji arrive in Noida for emergency rituals?',
      answer: 'For planned pujas, we recommend 24-48 hours notice for muhurat alignment. For urgent rituals (such as Antim Sanskar or immediate Shanti pujas), our booking desk can coordinate a local Noida purohit within 3 to 4 hours.'
    },
    {
      question: 'Do your Pandits travel to Greater Noida West (Noida Extension)?',
      answer: 'Yes! We actively serve all residential high-rises in Greater Noida West (Gaur City, Techzone, Cherry County, etc.) with dedicated local Shastri Brahmins.'
    },
    {
      question: 'Will Pandit Ji bring the Hawan Kund and samagri to our Noida society?',
      answer: 'Yes. If you select the all-inclusive samagri option, Pandit Ji brings a portable brass hawan kund, protective tile/mat to prevent floor staining, pure desi cow ghee, and certified hawan herbal herbs.'
    }
  ]
};

export const LocationPageTemplate: React.FC<{ locationData?: LocationPageData }> = ({
  locationData = NOIDA_LOCATION_DATA
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPuja, setSelectedPuja] = useState<string>('Griha Pravesh & Vastu Puja');

  // Schema.org LocalBusiness / ProfessionalService
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${locationData.canonicalUrl}/#localbusiness`,
    name: `Shastriya Vidhan Pandit Booking - ${locationData.cityName}`,
    url: locationData.canonicalUrl,
    telephone: '+917599340430',
    priceRange: '₹₹',
    image: 'https://www.shastriyavidhan.com/images/diwali-puja.webp',
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationData.cityName,
      addressRegion: locationData.stateName,
      addressCountry: 'IN'
    },
    areaServed: locationData.sectorsCovered.map(sec => ({
      '@type': 'Place',
      name: sec
    })),
    description: locationData.metaDescription
  };

  return (
    <div className="location-page-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="breadcrumb-bar" aria-label="Breadcrumbs">
        <div className="container-inner">
          <ol className="breadcrumb-nav-list">
            <li><a href="/">Home</a></li>
            <li className="sep">/</li>
            <li><a href="/locations">Locations</a></li>
            <li className="sep">/</li>
            <li aria-current="page">{locationData.cityName}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="location-hero">
        <div className="container-inner">
          <div className="location-hero-content">
            <div className="city-pill">
              <span>📍 Verified Purohits in {locationData.cityName}</span>
            </div>

            <h1>{locationData.h1}</h1>

            <p className="location-intro">
              Connecting families across {locationData.cityName} and {locationData.stateName} with authentic Vedic Brahmins for peaceful pujas at home. Clear samagri coordination, punctual arrival, and quotes confirmed before payment.
            </p>

            <div className="location-actions">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-primary-sacred"
              >
                Book Pandit Ji in {locationData.cityName}
              </button>

              <a
                href={`https://wa.me/917599340430?text=${encodeURIComponent(`Namaste Shastriya Vidhan, I want to book a Pandit Ji in ${locationData.cityName}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-sacred"
              >
                WhatsApp Local Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Logistics & Apartment Safety Strip */}
      <section className="local-safety-section">
        <div className="container-inner">
          <div className="two-column-safety-grid">
            <div className="safety-card">
              <span className="card-icon">🏢</span>
              <h3>High-Rise &amp; Apartment Friendly</h3>
              <p>{locationData.apartmentSafetyNotice}</p>
            </div>

            <div className="safety-card">
              <span className="card-icon">🚗</span>
              <h3>Transit Feasibility &amp; Punctuality</h3>
              <p>{locationData.travelHubNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Coverage */}
      <section className="sectors-section">
        <div className="container-inner">
          <div className="section-header-left">
            <span className="eyebrow">Local Presence</span>
            <h2>Areas &amp; Sectors We Cover in {locationData.cityName}</h2>
            <p>Our Acharyas provide prompt home visits across all residential sectors and townships:</p>
          </div>

          <div className="sectors-grid">
            {locationData.sectorsCovered.map((sector, idx) => (
              <div key={idx} className="sector-chip">
                <span className="pin-icon">📍</span>
                <span>{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Pujas in this City */}
      <section className="popular-pujas-section">
        <div className="container-inner">
          <div className="section-header-left">
            <span className="eyebrow">Most Requested Rituals</span>
            <h2>Popular Pujas Booked in {locationData.cityName}</h2>
          </div>

          <div className="city-pujas-grid">
            {locationData.popularPujasInCity.map((puja, index) => (
              <div key={index} className="city-puja-card">
                <h3>{puja.name}</h3>
                <div className="puja-meta-info">
                  <span><strong>Duration:</strong> {puja.duration}</span>
                  <span><strong>Indicative Dakshina:</strong> {puja.priceHint}</span>
                </div>
                <div className="city-puja-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPuja(puja.name);
                      setIsModalOpen(true);
                    }}
                    className="btn-primary-sacred btn-sm"
                  >
                    Request Pandit Ji
                  </button>
                  <a href={puja.slug} className="view-details-link">
                    View Vidhi →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Reviews */}
      <section className="local-reviews-section">
        <div className="container-inner">
          <div className="section-header-left">
            <span className="eyebrow">Local Families</span>
            <h2>Recent Reviews from {locationData.cityName} Devotees</h2>
          </div>

          <div className="local-reviews-grid">
            {locationData.localTestimonials.map((item, idx) => (
              <div key={idx} className="local-review-card">
                <div className="stars">★★★★★</div>
                <p className="local-quote">&ldquo;{item.review}&rdquo;</p>
                <div className="local-author">
                  <strong>{item.name}</strong>
                  <span>{item.society} • {item.puja}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="local-faqs-section">
        <div className="container-inner">
          <div className="section-header-left">
            <span className="eyebrow">City Guide</span>
            <h2>Frequently Asked Questions in {locationData.cityName}</h2>
          </div>

          <div className="local-faq-stack">
            {locationData.localFaqs.map((faq, idx) => (
              <details key={idx} className="faq-box">
                <summary className="faq-q">
                  <span>{faq.question}</span>
                  <span className="icon">+</span>
                </summary>
                <div className="faq-a">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Booking Funnel */}
      <section className="bottom-booking-section">
        <div className="container-inner">
          <BookingModalFunnel
            initialCity={locationData.cityName}
            initialService={selectedPuja}
            isOpen={true}
          />
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <MobileStickyBar
        currentPujaName={`Puja in ${locationData.cityName}`}
        onOpenBookingModal={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <BookingModalFunnel
          initialCity={locationData.cityName}
          initialService={selectedPuja}
          isOpen={true}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <style jsx>{`
        .location-page-root {
          background: #FAF7F2;
          color: #1E293B;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .container-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .breadcrumb-bar {
          background: #FFFFFF;
          border-bottom: 1px solid #EFE8DE;
          padding: 10px 0;
          font-size: 0.82rem;
        }

        .breadcrumb-nav-list {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .breadcrumb-nav-list a {
          color: #64748B;
          text-decoration: none;
        }

        .sep {
          color: #CBD5E1;
        }

        /* Hero */
        .location-hero {
          background: #FFFFFF;
          border-bottom: 1px solid #EFE8DE;
          padding: 60px 0 68px;
        }

        .location-hero-content {
          max-width: 820px;
        }

        .city-pill {
          display: inline-block;
          background: #FDF3E7;
          border: 1px solid #F8D7B0;
          color: #D35400;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 16px;
        }

        .location-hero h1 {
          font-size: clamp(2.1rem, 4vw, 3.2rem);
          color: #1E293B;
          line-height: 1.15;
          margin: 0 0 16px;
        }

        .location-intro {
          font-size: 1.12rem;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 28px;
        }

        .location-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Safety & Logistics */
        .local-safety-section {
          padding: 48px 0;
          background: #FAF7F2;
        }

        .two-column-safety-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .two-column-safety-grid {
            grid-template-columns: 1fr;
          }
        }

        .safety-card {
          background: #FFFFFF;
          border: 1px solid #EFE8DE;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(30, 41, 59, 0.04);
        }

        .card-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 10px;
        }

        .safety-card h3 {
          font-size: 1.15rem;
          margin: 0 0 8px;
          color: #1E293B;
        }

        .safety-card p {
          margin: 0;
          font-size: 0.92rem;
          color: #64748B;
          line-height: 1.55;
        }

        /* Sectors */
        .sectors-section {
          padding: 56px 0;
          background: #FFFFFF;
          border-top: 1px solid #EFE8DE;
          border-bottom: 1px solid #EFE8DE;
        }

        .section-header-left {
          margin-bottom: 28px;
        }

        .eyebrow {
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #D35400;
          display: block;
          margin-bottom: 6px;
        }

        .section-header-left h2 {
          font-size: 1.8rem;
          color: #1E293B;
          margin: 0 0 8px;
        }

        .section-header-left p {
          color: #64748B;
          font-size: 0.95rem;
          margin: 0;
        }

        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
        }

        .sector-chip {
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 10px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #334155;
          font-weight: 600;
        }

        /* Pujas Grid */
        .popular-pujas-section {
          padding: 60px 0;
        }

        .city-pujas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 20px;
        }

        .city-puja-card {
          background: #FFFFFF;
          border: 1.5px solid #EFE8DE;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(30, 41, 59, 0.04);
          display: flex;
          flex-direction: column;
        }

        .city-puja-card h3 {
          font-size: 1.2rem;
          margin: 0 0 12px;
          color: #1E293B;
        }

        .puja-meta-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.85rem;
          color: #64748B;
          background: #FAF7F2;
          padding: 10px 12px;
          border-radius: 8px;
          margin-bottom: 18px;
        }

        .city-puja-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          gap: 10px;
        }

        .btn-sm {
          padding: 8px 16px !important;
          font-size: 0.82rem !important;
        }

        .view-details-link {
          font-size: 0.82rem;
          font-weight: 700;
          color: #C8232C;
          text-decoration: none;
        }

        /* Local Reviews */
        .local-reviews-section {
          padding: 60px 0;
          background: #FFFFFF;
          border-top: 1px solid #EFE8DE;
          border-bottom: 1px solid #EFE8DE;
        }

        .local-reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }

        .local-review-card {
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 14px;
          padding: 22px;
        }

        .stars {
          color: #F39C12;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .local-quote {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.55;
          margin: 0 0 14px;
        }

        .local-author strong {
          display: block;
          font-size: 0.9rem;
          color: #1E293B;
        }

        .local-author span {
          font-size: 0.78rem;
          color: #64748B;
        }

        /* Local FAQs */
        .local-faqs-section {
          padding: 60px 0;
        }

        .local-faq-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-box {
          background: #FFFFFF;
          border: 1px solid #EFE8DE;
          border-radius: 12px;
          overflow: hidden;
        }

        .faq-q {
          padding: 16px 20px;
          cursor: pointer;
          font-weight: 700;
          color: #1E293B;
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style: none;
        }

        .faq-q::-webkit-details-marker {
          display: none;
        }

        .icon {
          font-size: 1.2rem;
          color: #64748B;
        }

        .faq-box[open] .icon {
          transform: rotate(45deg);
        }

        .faq-a {
          padding: 0 20px 16px;
          color: #475569;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .bottom-booking-section {
          padding: 60px 0 80px;
          background: #FFFFFF;
          border-top: 1px solid #EFE8DE;
        }
      `}</style>
    </div>
  );
};

export default LocationPageTemplate;
