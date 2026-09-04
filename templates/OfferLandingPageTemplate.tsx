'use client';

import React, { useState, useEffect } from 'react';
import BookingModalFunnel from '../components/BookingModalFunnel';
import MobileStickyBar from '../components/MobileStickyBar';

export interface OfferServiceItem {
  name: string;
  originalPrice: string;
  discountedPrice: string;
  savings: string;
  duration: string;
  modes: string[];
  imageUrl: string;
  badge: string;
}

const OFFER_PUJAS: OfferServiceItem[] = [
  {
    name: 'Rudrabhishek Puja',
    originalPrice: '₹2,500',
    discountedPrice: '₹2,000',
    savings: 'Save ₹500',
    duration: '90 – 120 Mins',
    modes: ['Home', 'Temple', 'Online'],
    imageUrl: './images/rudrabhishek-puja.webp',
    badge: 'Most Popular Shiva Puja'
  },
  {
    name: 'Diwali Lakshmi Ganesh Puja',
    originalPrice: '₹3,100',
    discountedPrice: '₹2,480',
    savings: 'Save ₹620',
    duration: '60 – 100 Mins',
    modes: ['Home', 'Online'],
    imageUrl: './images/diwali-puja.webp',
    badge: 'Festive Season Special'
  },
  {
    name: 'Griha Pravesh & Vastu Shanti',
    originalPrice: '₹4,500',
    discountedPrice: '₹3,600',
    savings: 'Save ₹900',
    duration: '2.5 – 3.5 Hours',
    modes: ['Puja at Home'],
    imageUrl: './images/education-puja.webp',
    badge: 'New Home Shanti'
  },
  {
    name: 'Satyanarayan Katha & Hawan',
    originalPrice: '₹2,500',
    discountedPrice: '₹2,000',
    savings: 'Save ₹500',
    duration: '2 Hours',
    modes: ['Home', 'Online'],
    imageUrl: './images/ram-navami.webp',
    badge: 'Family Auspiciousness'
  },
  {
    name: 'Krishna Janmashtami Puja',
    originalPrice: '₹2,800',
    discountedPrice: '₹2,240',
    savings: 'Save ₹560',
    duration: '90 – 120 Mins',
    modes: ['Home', 'Online'],
    imageUrl: './images/janmashtami-puja.webp',
    badge: 'Bhakti & Fasting Vidhi'
  },
  {
    name: 'Kaal Sarp Dosh Puja in Ujjain',
    originalPrice: '₹5,500',
    discountedPrice: '₹4,400',
    savings: 'Save ₹1,100',
    duration: '2.5 – 3.5 Hours',
    modes: ['Temple Kshetra'],
    imageUrl: './images/kaal-sarp-dosh.webp',
    badge: 'Teerth Remedial Special'
  }
];

export const OfferLandingPageTemplate: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedPuja, setSelectedPuja] = useState<string>('Rudrabhishek Puja');

  // Live countdown timer state (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 23,
    minutes: 59,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const promoCode = 'VEDIC20';

  const copyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openFunnelWithPuja = (pujaName: string) => {
    setSelectedPuja(pujaName);
    setIsBookingModalOpen(true);
  };

  // Schema.org Offer & Service structured data
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'SpecialAnnouncement',
    name: 'Shastriya Vidhan 20% Off Festive Puja Offer',
    text: 'Claim flat 20% discount on verified Pandit Ji booking and Vedic puja samagri across Delhi NCR and worldwide online using promo code VEDIC20.',
    category: 'https://schema.org/GovernmentService',
    url: 'https://www.shastriyavidhan.com/offer',
    expires: '2026-12-31',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '1680',
      highPrice: '4400',
      offerCount: '14',
      discount: '20%'
    }
  };

  return (
    <div className="offer-landing-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* Top Auspicious Offer Banner */}
      <div className="festive-offer-banner">
        <div className="banner-container">
          <span className="banner-pulse-dot"></span>
          <span><strong>SHUBH MUHURAT OFFER:</strong> Flat 20% Off on all Vedic Pujas with Code: <strong>{promoCode}</strong></span>
          <span className="banner-timer-chip">
            ⏳ Ends in {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="offer-hero-section">
        <div className="offer-container">
          <div className="offer-hero-grid">
            <div className="offer-hero-copy">
              <div className="offer-eyebrow-pill">
                <span>🪔</span>
                <span>Special Auspicious Blessing Offer • Flat 20% Discount</span>
              </div>

              <h1 className="offer-hero-title">
                Experience Authentic Vedic Puja with <span className="text-gold">Flat 20% Off</span>
              </h1>

              <p className="offer-hero-sub">
                Connect with verified, Sanskrit-qualified Pandit Ji for peaceful pujas at home, temple, or online. Zero upfront payment required. Your 20% savings are applied automatically to your manual quote.
              </p>

              {/* Coupon Box */}
              <div className="coupon-card-interactive">
                <div className="coupon-left">
                  <span className="coupon-label">EXCLUSIVE PROMO CODE</span>
                  <strong className="coupon-code-text">{promoCode}</strong>
                  <span className="coupon-sub">Flat 20% Off on Pandit Dakshina &amp; Samagri</span>
                </div>
                <div className="coupon-right">
                  <button type="button" onClick={copyCode} className="btn-copy-code">
                    {copied ? '✓ Copied!' : 'Copy Code'}
                  </button>
                  <span className="coupon-slots">Only 7 booking slots remaining</span>
                </div>
              </div>

              <div className="hero-action-buttons">
                <button
                  type="button"
                  onClick={() => openFunnelWithPuja('Rudrabhishek Puja')}
                  className="btn-claim-offer"
                >
                  Claim 20% Off &amp; Book Pandit Ji →
                </button>

                <a
                  href={`https://wa.me/917599340430?text=${encodeURIComponent(`Namaste Shastriya Vidhan, I want to claim the 20% OFF offer using code ${promoCode}. Please guide me with availability and discounted quote.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-claim"
                >
                  💬 Claim via WhatsApp Desk
                </a>
              </div>

              <div className="offer-trust-points">
                <div><span className="check">✓</span> Zero payment today (Pay after quote confirmation)</div>
                <div><span className="check">✓</span> 100% Identity &amp; Sanskrit Vidhan verified Pandits</div>
                <div><span className="check">✓</span> Clear samagri checklist provided on WhatsApp</div>
              </div>
            </div>

            <div className="offer-hero-visual">
              <div className="offer-visual-frame">
                <img
                  src="./images/diwali-puja.webp"
                  alt="Authentic puja arrangement with traditional lamps"
                  className="offer-hero-img"
                  width={600}
                  height={420}
                />
                <div className="discount-tag-floating">
                  <span className="discount-pct">20%</span>
                  <span className="discount-txt">OFF TODAY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison Matrix (Before vs After 20% Off) */}
      <section className="pricing-matrix-section">
        <div className="offer-container">
          <div className="section-header-center">
            <span className="sacred-eyebrow">Transparent Value</span>
            <h2>Compare 20% Off Festive Pricing</h2>
            <p>Indicative savings across our most requested Vedic rituals. No hidden charges or dakshina haggling.</p>
          </div>

          <div className="offer-cards-grid">
            {OFFER_PUJAS.map((puja, index) => (
              <article key={index} className="offer-service-card">
                <div className="card-media-shell">
                  <img src={puja.imageUrl} alt={puja.name} className="card-thumb" />
                  <span className="card-highlight-tag">{puja.badge}</span>
                  <span className="savings-bubble">{puja.savings}</span>
                </div>

                <div className="card-body-shell">
                  <h3 className="puja-name-heading">{puja.name}</h3>
                  <div className="puja-timing-info">⏱️ Duration: {puja.duration}</div>

                  <div className="price-comparison-box">
                    <div className="old-price">
                      <span>Standard Rate:</span>
                      <del>{puja.originalPrice}</del>
                    </div>
                    <div className="discounted-price">
                      <span>20% Off Price:</span>
                      <strong>{puja.discountedPrice}</strong>
                    </div>
                  </div>

                  <div className="card-bottom-actions">
                    <button
                      type="button"
                      onClick={() => openFunnelWithPuja(puja.name)}
                      className="btn-book-discounted"
                    >
                      Book at 20% Off
                    </button>
                    <a
                      href={`https://wa.me/917599340430?text=${encodeURIComponent(`Namaste Shastriya Vidhan, I want to book ${puja.name} with 20% discount (Code: ${promoCode}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-whatsapp-inquire"
                    >
                      WhatsApp Desk →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How the 20% Offer Works (Request-First Transparency) */}
      <section className="how-discount-works-section">
        <div className="offer-container">
          <div className="section-header-center">
            <span className="sacred-eyebrow">Zero Confusion</span>
            <h2>How Your 20% Discount is Applied</h2>
            <p>We respect traditional reverence. Here is our straightforward 4-step process:</p>
          </div>

          <div className="discount-steps-row">
            <div className="step-card-discount">
              <span className="step-badge-num">1</span>
              <h4>Choose Puja &amp; Apply Code</h4>
              <p>Select your preferred ritual and enter promo code <strong>{promoCode}</strong> during your booking enquiry.</p>
            </div>

            <div className="step-card-discount">
              <span className="step-badge-num">2</span>
              <h4>Pay ₹0 Upfront</h4>
              <p>Zero payment is requested on submission. Our booking desk verifies Pandit Ji schedule and travel feasibility.</p>
            </div>

            <div className="step-card-discount">
              <span className="step-badge-num">3</span>
              <h4>Discounted Quote on WhatsApp</h4>
              <p>Receive your personalized Pandit profile, samagri checklist, and final quote with 20% savings clearly deducted.</p>
            </div>

            <div className="step-card-discount">
              <span className="step-badge-num">4</span>
              <h4>Perform Puja Peacefully</h4>
              <p>Your verified Shastri arrives on time and guides your family through authentic Vedic chanting and aarti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Booking Funnel */}
      <section className="offer-booking-section">
        <div className="offer-container">
          <div className="section-header-center">
            <span className="sacred-eyebrow">Instant Claim</span>
            <h2>Request Your 20% Off Booking</h2>
            <p>Fill in your details below. Your discount code <strong>{promoCode}</strong> is automatically credited to your request.</p>
          </div>

          <div className="funnel-container-shell">
            <BookingModalFunnel
              initialService={selectedPuja}
              isOpen={true}
            />
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar with 20% Discount Tag */}
      <MobileStickyBar
        currentPujaName="Puja (20% Off)"
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        indicativePriceHint="20% Off Code: VEDIC20"
      />

      {isBookingModalOpen && (
        <BookingModalFunnel
          initialService={selectedPuja}
          isOpen={true}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}

      {/* CSS */}
      <style jsx>{`
        .offer-landing-root {
          background-color: #FAF7F2;
          color: #1E293B;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .offer-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Top Announcement Banner */
        .festive-offer-banner {
          background: #7A151C;
          color: #FAF7F2;
          font-size: 0.82rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .banner-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          text-align: center;
        }

        .banner-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22C55E;
          display: inline-block;
          animation: pulseDot 1.5s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        .banner-timer-chip {
          background: #E67E22;
          color: #FFFFFF;
          font-weight: 800;
          font-size: 0.72rem;
          padding: 2px 10px;
          border-radius: 9999px;
        }

        /* Hero */
        .offer-hero-section {
          background: #FFFFFF;
          border-bottom: 1px solid #EFE8DE;
          padding: 56px 0 64px;
        }

        .offer-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 48px;
        }

        @media (max-width: 860px) {
          .offer-hero-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        .offer-eyebrow-pill {
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

        .offer-hero-title {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          line-height: 1.12;
          margin: 0 0 16px;
          color: #1E293B;
        }

        .text-gold {
          background: linear-gradient(135deg, #C8232C, #E67E22);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .offer-hero-sub {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 24px;
        }

        /* Interactive Coupon Box */
        .coupon-card-interactive {
          background: #FAF7F2;
          border: 2px dashed #E67E22;
          border-radius: 16px;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .coupon-left {
          display: flex;
          flex-direction: column;
        }

        .coupon-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          font-weight: 800;
          color: #8C4400;
          letter-spacing: 0.05em;
        }

        .coupon-code-text {
          font-size: 1.6rem;
          font-weight: 800;
          color: #C8232C;
          letter-spacing: 2px;
        }

        .coupon-sub {
          font-size: 0.8rem;
          color: #64748B;
        }

        .coupon-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .btn-copy-code {
          background: #C8232C;
          color: #FFFFFF;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-copy-code:hover {
          background: #A81C24;
        }

        .coupon-slots {
          font-size: 0.72rem;
          color: #B45309;
          font-weight: 600;
        }

        .hero-action-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .btn-claim-offer {
          background: linear-gradient(135deg, #C8232C, #B91C1C);
          color: #FFFFFF;
          border: none;
          font-weight: 800;
          padding: 14px 28px;
          border-radius: 9999px;
          font-size: 1.05rem;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(200, 35, 44, 0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-claim-offer:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(200, 35, 44, 0.4);
        }

        .btn-whatsapp-claim {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #25D366;
          color: #FFFFFF;
          padding: 14px 22px;
          border-radius: 9999px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);
        }

        .offer-trust-points {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.86rem;
          color: #475569;
        }

        .check {
          color: #15803D;
          font-weight: 900;
        }

        .offer-visual-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(30, 41, 59, 0.12);
          border: 1px solid #EFE8DE;
        }

        .offer-hero-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }

        .discount-tag-floating {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #C8232C;
          color: #FFFFFF;
          padding: 12px 18px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          border: 2px solid #FFFFFF;
        }

        .discount-pct {
          font-size: 1.8rem;
          font-weight: 900;
          display: block;
          line-height: 1;
        }

        .discount-txt {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.06em;
        }

        /* Pricing Matrix */
        .pricing-matrix-section {
          padding: 72px 0;
          background: #FAF7F2;
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
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          margin: 0 0 12px;
          color: #1E293B;
        }

        .section-header-center p {
          color: #64748B;
          font-size: 1.05rem;
          margin: 0;
        }

        .offer-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .offer-service-card {
          background: #FFFFFF;
          border: 1.5px solid #EFE8DE;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(30, 41, 59, 0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .offer-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(30, 41, 59, 0.08);
        }

        .card-media-shell {
          position: relative;
          aspect-ratio: 16 / 10;
          background: #FAF7F2;
        }

        .card-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-highlight-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(6px);
          color: #8C4400;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 9999px;
          border: 1px solid #F8D7B0;
        }

        .savings-bubble {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: #15803D;
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .card-body-shell {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .puja-name-heading {
          font-size: 1.25rem;
          margin: 0 0 6px;
          color: #1E293B;
        }

        .puja-timing-info {
          font-size: 0.82rem;
          color: #64748B;
          margin-bottom: 16px;
        }

        .price-comparison-box {
          background: #FCF7E8;
          border: 1px solid #E8D595;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .old-price span, .discounted-price span {
          display: block;
          font-size: 0.72rem;
          color: #64748B;
          text-transform: uppercase;
        }

        .old-price del {
          color: #94A3B8;
          font-size: 0.95rem;
        }

        .discounted-price strong {
          color: #C8232C;
          font-size: 1.35rem;
          font-weight: 800;
        }

        .card-bottom-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #EFE8DE;
          padding-top: 14px;
          margin-top: auto;
        }

        .btn-book-discounted {
          background: #C8232C;
          color: #FFFFFF;
          border: none;
          padding: 9px 18px;
          border-radius: 9999px;
          font-size: 0.86rem;
          font-weight: 700;
          cursor: pointer;
        }

        .btn-book-discounted:hover {
          background: #A81C24;
        }

        .link-whatsapp-inquire {
          color: #166534;
          font-size: 0.84rem;
          font-weight: 700;
          text-decoration: none;
        }

        /* How it works */
        .how-discount-works-section {
          padding: 72px 0;
          background: #FFFFFF;
          border-top: 1px solid #EFE8DE;
          border-bottom: 1px solid #EFE8DE;
        }

        .discount-steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) {
          .discount-steps-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .discount-steps-row {
            grid-template-columns: 1fr;
          }
        }

        .step-card-discount {
          background: #FAF7F2;
          border: 1px solid #EFE8DE;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .step-badge-num {
          background: #C8232C;
          color: #FFFFFF;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          margin-bottom: 14px;
        }

        .step-card-discount h4 {
          font-size: 1.15rem;
          margin: 0 0 8px;
          color: #1E293B;
        }

        .step-card-discount p {
          margin: 0;
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.5;
        }

        /* Funnel block */
        .offer-booking-section {
          padding: 72px 0 90px;
        }

        .funnel-container-shell {
          max-width: 780px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default OfferLandingPageTemplate;
