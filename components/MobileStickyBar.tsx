'use client';

import React, { useState, useEffect } from 'react';

interface MobileStickyBarProps {
  currentPujaName?: string;
  onOpenBookingModal?: () => void;
  indicativePriceHint?: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  currentPujaName = 'Vedic Puja',
  onOpenBookingModal,
  indicativePriceHint = 'Pay after quote review'
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  // Subtle auto-hide on fast downward scroll, reveal on upward scroll or near bottom
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 150) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const whatsappMessage = encodeURIComponent(
    `Namaste Shastriya Vidhan, I am interested in booking ${currentPujaName}. Please guide me with availability, samagri, and quote.`
  );

  return (
    <aside
      className={`mobile-sticky-dock ${isVisible ? 'visible' : 'hidden'}`}
      aria-label="Quick mobile booking actions"
    >
      {/* Micro-Reassurance Ribbon */}
      <div className="mobile-dock-ribbon">
        <span className="reassurance-pulse" aria-hidden="true"></span>
        <span className="reassurance-text">
          Zero upfront payment • Manual quote &amp; samagri review
        </span>
        {indicativePriceHint && (
          <span className="price-tag-micro">{indicativePriceHint}</span>
        )}
      </div>

      {/* Main Thumb-Target Action Row */}
      <div className="mobile-dock-action-row">
        {/* Direct Call Button (Compact) */}
        <a
          href="tel:+917599340430"
          className="dock-btn-call"
          aria-label="Call booking coordinator at +91 7599340430"
        >
          <span className="dock-icon">📞</span>
          <span className="dock-btn-label">Call</span>
        </a>

        {/* Direct WhatsApp Desk (High Engagement) */}
        <a
          href={`https://wa.me/917599340430?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-btn-whatsapp"
          aria-label="Chat with Pandit Booking Desk on WhatsApp"
        >
          <span className="dock-icon">💬</span>
          <span className="dock-btn-label">WhatsApp</span>
        </a>

        {/* Primary Booking Funnel Trigger */}
        <button
          type="button"
          onClick={onOpenBookingModal}
          className="dock-btn-primary"
          aria-label="Open 4-step puja booking form"
        >
          <span className="dock-btn-primary-text">Book Pandit Ji</span>
          <span className="dock-btn-arrow" aria-hidden="true">→</span>
        </button>
      </div>

      <style jsx>{`
        .mobile-sticky-dock {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1.5px solid #EFE8DE;
          box-shadow: 0 -4px 20px rgba(30, 41, 59, 0.12);
          padding: 6px 12px calc(8px + env(safe-area-inset-bottom, 0px));
          display: none;
          transition: transform 0.25s ease-in-out;
        }

        @media (max-width: 899px) {
          .mobile-sticky-dock {
            display: block;
          }
        }

        .mobile-sticky-dock.hidden {
          transform: translateY(100%);
        }

        .mobile-sticky-dock.visible {
          transform: translateY(0);
        }

        .mobile-dock-ribbon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 6px;
          font-size: 0.72rem;
          color: #475569;
          font-weight: 600;
        }

        .reassurance-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #16A34A;
          display: inline-block;
        }

        .price-tag-micro {
          background: #FCF7E8;
          color: #B45309;
          border: 1px solid #E8D595;
          padding: 1px 6px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.68rem;
        }

        .mobile-dock-action-row {
          display: flex;
          align-items: center;
          gap: 8px;
          max-width: 540px;
          margin: 0 auto;
        }

        .dock-btn-call {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 52px;
          height: 48px;
          border-radius: 12px;
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          color: #1E293B;
          text-decoration: none;
          flex: none;
          transition: background 0.15s;
        }

        .dock-btn-call:active {
          background: #E2E8F0;
        }

        .dock-btn-whatsapp {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          height: 48px;
          padding: 0 14px;
          border-radius: 12px;
          background: #25D366;
          color: #FFFFFF !important;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          flex: 1;
          box-shadow: 0 2px 8px rgba(37, 211, 102, 0.25);
        }

        .dock-btn-whatsapp:active {
          background: #20BA5A;
        }

        .dock-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          height: 48px;
          padding: 0 16px;
          border-radius: 12px;
          background: linear-gradient(135deg, #C8232C, #B91C1C);
          color: #FFFFFF;
          border: none;
          font-weight: 800;
          font-size: 0.94rem;
          flex: 1.4;
          box-shadow: 0 3px 12px rgba(200, 35, 44, 0.3);
          cursor: pointer;
        }

        .dock-btn-primary:active {
          transform: scale(0.98);
        }

        .dock-icon {
          font-size: 1rem;
          line-height: 1;
        }

        .dock-btn-label {
          font-size: 0.72rem;
          font-weight: 700;
          margin-top: 2px;
        }

        .dock-btn-arrow {
          font-size: 1.1rem;
          line-height: 1;
        }
      `}</style>
    </aside>
  );
};

export default MobileStickyBar;
