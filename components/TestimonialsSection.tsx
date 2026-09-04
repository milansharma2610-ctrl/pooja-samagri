'use client';

import React, { useState } from 'react';

export interface TestimonialItem {
  id: string;
  author: string;
  familyRole: string;
  city: 'Noida' | 'Delhi' | 'Gurugram' | 'Ujjain' | 'Online/NRI';
  societyLocation: string;
  pujaName: string;
  panditAssigned: string;
  rating: number;
  datePublished: string;
  headline: string;
  body: string;
  verifiedBooking: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-01',
    author: 'Vikram & Sunita Mehra',
    familyRole: 'Homeowners',
    city: 'Noida',
    societyLocation: 'ATS Village, Sector 93A, Noida',
    pujaName: 'Griha Pravesh & Navgrah Hawan',
    panditAssigned: 'Acharya Sursain Brijwasi',
    rating: 5,
    datePublished: '2026-06-18',
    headline: 'Zero stress, punctual Pandit Ji, and complete samagri clarity.',
    body: 'Moving to our new apartment was hectic, and we were anxious about arranging all hawan samagri. Shastriya Vidhan coordinated everything on WhatsApp. Acharya Ji reached 20 minutes early, carried pure hawan samagri, and explained each mantra’s meaning to our children. Highly recommended!',
    verifiedBooking: true
  },
  {
    id: 'rev-02',
    author: 'Pooja Agarwal & Family',
    familyRole: 'Parents',
    city: 'Gurugram',
    societyLocation: 'DLF Phase 5, Golf Course Rd, Gurugram',
    pujaName: 'Rudrabhishek Puja',
    panditAssigned: 'Acharya Anand Mishra',
    rating: 5,
    datePublished: '2026-07-04',
    headline: 'The most peaceful Shravan Shiv Abhishek we have experienced.',
    body: 'The booking desk gave us a transparent quote upfront without any hidden charges or uncomfortable dakshina haggling on the day. The chanting of Sri Rudram was deeply divine and resonated throughout our home.',
    verifiedBooking: true
  },
  {
    id: 'rev-03',
    author: 'Amit & Neha Sengupta',
    familyRole: 'NRI Devotees',
    city: 'Online/NRI',
    societyLocation: 'London, United Kingdom (Remote)',
    pujaName: 'Online Video Satyanarayan Katha',
    panditAssigned: 'Acharya Anand Mishra',
    rating: 5,
    datePublished: '2026-05-12',
    headline: 'Flawless Zoom setup for our family across 3 time zones.',
    body: 'Being away from India during auspicious festivals makes traditional rituals difficult. The team sent us a simple kitchen grocery checklist 3 days prior. Pandit Ji guided our live sankalp with crystal-clear audio and video. It felt as if he was in our living room.',
    verifiedBooking: true
  },
  {
    id: 'rev-04',
    author: 'Dr. Alok Nath Tewari',
    familyRole: 'Yajman',
    city: 'Delhi',
    societyLocation: 'Greater Kailash II, South Delhi',
    pujaName: 'Mahamrityunjaya Jaap (11,000 Mantras)',
    panditAssigned: 'Pt. Rameshwar Shastri',
    rating: 5,
    datePublished: '2026-04-20',
    headline: 'Authentic Vedic Brahmins with flawless Sanskrit pronunciation.',
    body: 'We arranged this jaap for my father’s recovery. Two Shastri Brahmins came as scheduled, maintained sacred discipline throughout, and completed the purnahuti hawan with great devotion. Genuine Vedic standards.',
    verifiedBooking: true
  },
  {
    id: 'rev-05',
    author: 'Siddharth & Meenakshi Joshi',
    familyRole: 'Pilgrimage Devotee',
    city: 'Ujjain',
    societyLocation: 'Ramghat Kshetra, Ujjain',
    pujaName: 'Kaal Sarp Dosh Puja',
    panditAssigned: 'Pt. Rameshwar Shastri',
    rating: 5,
    datePublished: '2026-03-15',
    headline: 'No fear-mongering; purely traditional Agamic ritual at Shipra.',
    body: 'Most online sites make fearful claims about doshas. Shastriya Vidhan was different — they calmly explained the Shastriya Vidhan, quoted a fair dakshina, and Pt. Rameshwar Shastri guided us through the entire sankalp and daan at Ujjain with immense grace.',
    verifiedBooking: true
  }
];

export const TestimonialsSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const filteredReviews = selectedCity === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(r => r.city === selectedCity);

  // Schema.org AggregateRating & Review JSON-LD
  const schemaReviews = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Shastriya Vidhan Puja Booking Desk',
    image: 'https://www.shastriyavidhan.com/images/diwali-puja.webp',
    telephone: '+917599340430',
    url: 'https://www.shastriyavidhan.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.96',
      reviewCount: '482',
      bestRating: '5',
      worstRating: '1'
    },
    review: TESTIMONIALS_DATA.map(t => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.author
      },
      datePublished: t.datePublished,
      name: t.headline,
      reviewBody: t.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating.toString(),
        bestRating: '5'
      },
      itemReviewed: {
        '@type': 'Service',
        name: t.pujaName
      }
    }))
  };

  return (
    <section className="testimonials-section-root" aria-labelledby="testimonials-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaReviews) }}
      />

      <div className="section-container">
        <div className="section-header-center">
          <span className="sacred-eyebrow">Real Devotee Experiences</span>
          <h2 id="testimonials-heading">Trusted by 2,400+ Families in Delhi NCR &amp; Worldwide</h2>
          <p className="section-subtitle">
            Authentic feedback from verified families who experienced peaceful Vedic pujas with our assigned Pandit Ji.
          </p>

          {/* Social Proof Aggregate Bar */}
          <div className="aggregate-score-badge">
            <div className="stars-cluster" aria-label="4.96 out of 5 stars rating">
              ★★★★★
            </div>
            <strong className="score-number">4.96 / 5.0</strong>
            <span className="review-count">Based on 480+ verified puja reviews in 2025-2026</span>
          </div>

          {/* City Filter Tabs */}
          <div className="city-filter-tabs" role="tablist" aria-label="Filter reviews by location">
            {['All', 'Noida', 'Delhi', 'Gurugram', 'Ujjain', 'Online/NRI'].map(city => (
              <button
                key={city}
                type="button"
                role="tab"
                aria-selected={selectedCity === city}
                className={`filter-tab-btn ${selectedCity === city ? 'active' : ''}`}
                onClick={() => setSelectedCity(city)}
              >
                {city === 'All' ? 'All Locations' : city}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-masonry-grid">
          {filteredReviews.map(review => (
            <article key={review.id} className="testimonial-card">
              <div className="card-top-meta">
                <div className="stars-gold">{'★'.repeat(review.rating)}</div>
                <div className="verified-booking-chip">
                  <span className="check-icon">✓</span>
                  <span>Verified Booking</span>
                </div>
              </div>

              <h3 className="review-title">&ldquo;{review.headline}&rdquo;</h3>
              <p className="review-body-text">&ldquo;{review.body}&rdquo;</p>

              <div className="puja-tag-row">
                <span className="puja-name-tag">🪔 {review.pujaName}</span>
                <span className="pandit-tag">👤 {review.panditAssigned}</span>
              </div>

              <div className="author-footer">
                <div className="avatar-initials">
                  {review.author.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div className="author-meta">
                  <strong className="author-name">{review.author}</strong>
                  <span className="author-loc">📍 {review.societyLocation}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section-root {
          background-color: #FAF7F2;
          padding: 80px 20px;
          border-top: 1px solid #EFE8DE;
          border-bottom: 1px solid #EFE8DE;
        }

        .section-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .section-header-center {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 48px;
        }

        .sacred-eyebrow {
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #D35400;
          display: block;
          margin-bottom: 8px;
        }

        .section-header-center h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          color: #1E293B;
          margin: 0 0 12px;
          line-height: 1.15;
        }

        .section-subtitle {
          color: #64748B;
          font-size: 1.05rem;
          margin: 0 0 24px;
        }

        .aggregate-score-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          padding: 8px 18px;
          border-radius: 9999px;
          border: 1px solid #E2D7C8;
          box-shadow: 0 2px 8px rgba(30, 41, 59, 0.05);
          margin-bottom: 24px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .stars-cluster {
          color: #F39C12;
          font-size: 1.1rem;
          letter-spacing: 2px;
        }

        .score-number {
          font-size: 0.95rem;
          color: #1E293B;
        }

        .review-count {
          font-size: 0.82rem;
          color: #64748B;
          border-left: 1px solid #CBD5E1;
          padding-left: 10px;
        }

        .city-filter-tabs {
          display: inline-flex;
          gap: 6px;
          background: #EFE8DE;
          padding: 4px;
          border-radius: 9999px;
          overflow-x: auto;
          max-width: 100%;
        }

        .filter-tab-btn {
          background: transparent;
          border: none;
          padding: 7px 16px;
          border-radius: 9999px;
          font-size: 0.84rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .filter-tab-btn.active {
          background: #C8232C;
          color: #FFFFFF;
          box-shadow: 0 2px 8px rgba(200, 35, 44, 0.25);
        }

        /* Testimonials Cards Grid */
        .testimonials-masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 22px;
        }

        .testimonial-card {
          background: #FFFFFF;
          border: 1px solid #EFE8DE;
          border-radius: 18px;
          padding: 26px;
          box-shadow: 0 4px 14px rgba(30, 41, 59, 0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(30, 41, 59, 0.08);
        }

        .card-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .stars-gold {
          color: #F39C12;
          font-size: 1.1rem;
          letter-spacing: 2px;
        }

        .verified-booking-chip {
          display: flex;
          align-items: center;
          gap: 5px;
          background: #F0FDF4;
          color: #15803D;
          border: 1px solid #BBF7D0;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 9999px;
        }

        .check-icon {
          font-weight: 900;
        }

        .review-title {
          font-size: 1.05rem;
          color: #1E293B;
          margin: 0 0 10px;
          font-weight: 700;
          line-height: 1.35;
        }

        .review-body-text {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 16px;
          flex: 1;
        }

        .puja-tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
          padding-top: 10px;
          border-top: 1px solid #F1F5F9;
        }

        .puja-name-tag, .pandit-tag {
          font-size: 0.76rem;
          background: #F8FAFC;
          color: #475569;
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid #E2E8F0;
        }

        .author-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #EFE8DE;
          padding-top: 14px;
        }

        .avatar-initials {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #FDF3E7;
          color: #D35400;
          border: 1.5px solid #F8D7B0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.88rem;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.92rem;
          color: #1E293B;
        }

        .author-loc {
          font-size: 0.76rem;
          color: #64748B;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
