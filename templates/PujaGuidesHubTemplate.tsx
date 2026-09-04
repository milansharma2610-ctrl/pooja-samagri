'use client';

import React, { useState } from 'react';
import MobileStickyBar from '../components/MobileStickyBar';
import BookingModalFunnel from '../components/BookingModalFunnel';

export interface GuideArticle {
  id: string;
  title: string;
  slug: string;
  category: 'samagri' | 'vidhi' | 'muhurat' | 'nri';
  categoryLabel: string;
  excerpt: string;
  readTime: string;
  authorReviewer: string;
  imageUrl: string;
  hasPdfDownload: boolean;
  relatedPujaName: string;
  relatedPujaSlug: string;
}

export const PUJA_GUIDES_CATALOG: GuideArticle[] = [
  {
    id: 'rudra-samagri-guide',
    title: 'Essential Rudrabhishek Samagri Checklist for Home Pujas',
    slug: '/guides/rudrabhishek-samagri-checklist',
    category: 'samagri',
    categoryLabel: 'Samagri Checklist',
    excerpt: 'Complete checklist of panchamrit liquids, bilva patra, dhatura, pure cow ghee, and sacred hawan herbs. Clarifies what the family arranges vs what Pandit Ji brings.',
    readTime: '4 min read',
    authorReviewer: 'Reviewed by Acharya Sursain Brijwasi',
    imageUrl: '/images/rudrabhishek-puja.webp',
    hasPdfDownload: true,
    relatedPujaName: 'Rudrabhishek Puja',
    relatedPujaSlug: '/book-pandit-ji-for-rudrabhishek-puja-noida'
  },
  {
    id: 'online-puja-setup-nri',
    title: 'How Online Video Puja Works for NRI Families in USA & UK',
    slug: '/guides/how-online-video-puja-works',
    category: 'nri',
    categoryLabel: 'NRI & Remote Guides',
    excerpt: 'A practical walkthrough of joining a live two-way Vedic puja via Zoom. How to arrange common kitchen spices as substitutes, device positioning, and family sankalp.',
    readTime: '5 min read',
    authorReviewer: 'Reviewed by Acharya Anand Mishra',
    imageUrl: '/images/maha-shivratri.webp',
    hasPdfDownload: true,
    relatedPujaName: 'Online Video Puja',
    relatedPujaSlug: '/online-puja'
  },
  {
    id: 'diwali-muhurat-vidhi',
    title: 'Diwali Lakshmi Ganesh Pujan: Shubh Muhurat & Step-by-Step Vidhi',
    slug: '/guides/diwali-lakshmi-ganesh-pujan-vidhi',
    category: 'muhurat',
    categoryLabel: 'Festival Muhurat',
    excerpt: 'Calculate the exact Pradosh Kaal and Nishita Kaal muhurat in Delhi NCR. Full sequence of Navgrah invocation, Kuber dhyan, and Lakshmi aarti at home.',
    readTime: '6 min read',
    authorReviewer: 'Reviewed by Acharya Sursain Brijwasi',
    imageUrl: '/images/diwali-puja.webp',
    hasPdfDownload: true,
    relatedPujaName: 'Diwali Lakshmi Ganesh Puja',
    relatedPujaSlug: '/book-pandit-ji-online-for-diwali-puja'
  },
  {
    id: 'griha-pravesh-preparation',
    title: 'How to Prepare Your High-Rise Flat for Griha Pravesh Hawan',
    slug: '/guides/apartment-griha-pravesh-hawan-preparation',
    category: 'vidhi',
    categoryLabel: 'Puja Vidhi',
    excerpt: 'Safety protocols for apartment fire alarms, ventilation tips, milk boiling ritual (Dudh Ubalna) auspicious timings, and threshold Vastu pujan.',
    readTime: '5 min read',
    authorReviewer: 'Reviewed by Pt. Rameshwar Shastri',
    imageUrl: '/images/education-puja.webp',
    hasPdfDownload: false,
    relatedPujaName: 'Griha Pravesh & Vastu Puja',
    relatedPujaSlug: '/puja-services'
  },
  {
    id: 'kaal-sarp-ujjain-guide',
    title: 'Kaal Sarp Dosh in Ujjain: Vidhi, Shipra Snan & What to Expect',
    slug: '/guides/kaal-sarp-dosh-ujjain-vidhi',
    category: 'vidhi',
    categoryLabel: 'Puja Vidhi',
    excerpt: 'An objective, non-fear explanation of Kaal Sarp Dosh rituals at Ramghat and Mahakaleshwar Kshetra. Ritual duration, attire requirements, and temple guidelines.',
    readTime: '7 min read',
    authorReviewer: 'Reviewed by Pt. Rameshwar Shastri',
    imageUrl: '/images/kaal-sarp-dosh.webp',
    hasPdfDownload: true,
    relatedPujaName: 'Kaal Sarp Dosh Puja',
    relatedPujaSlug: '/locations/ujjain'
  },
  {
    id: 'janmashtami-fast-vidhi',
    title: 'Krishna Janmashtami Vrat Rules, Laddu Gopal Abhishek & Bhog',
    slug: '/guides/janmashtami-vrat-vidhi-bhog',
    category: 'muhurat',
    categoryLabel: 'Festival Muhurat',
    excerpt: 'Auspicious Rohini Nakshatra and Ashtami Tithi calculation, fasting guidelines for working professionals, and midnight panchamrit abhishek vidhi.',
    readTime: '4 min read',
    authorReviewer: 'Reviewed by Acharya Anand Mishra',
    imageUrl: '/images/janmashtami-puja.webp',
    hasPdfDownload: true,
    relatedPujaName: 'Krishna Janmashtami Puja',
    relatedPujaSlug: '/book-pandit-ji-online-for-janmashtami-puja'
  }
];

export const PujaGuidesHubTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPuja, setSelectedPuja] = useState<string>('Rudrabhishek Puja');

  const filteredGuides = PUJA_GUIDES_CATALOG.filter(guide => {
    const matchesTab = activeTab === 'all' || guide.category === activeTab;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const guidesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vedic Puja Guides, Samagri Checklists & Muhurat Library',
    url: 'https://www.shastriyavidhan.com/guides',
    description: 'Explore authentic Vedic puja vidhi guides, downloadable samagri checklists, and festival auspicious muhurats verified by qualified Sanskrit Acharyas.',
    publisher: {
      '@type': 'Organization',
      name: 'Shastriya Vidhan',
      url: 'https://www.shastriyavidhan.com'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: PUJA_GUIDES_CATALOG.map((g, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: g.title,
        url: `https://www.shastriyavidhan.com${g.slug}`
      }))
    }
  };

  return (
    <div className="guides-hub-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container-inner">
          <ol className="breadcrumb-nav-list">
            <li><a href="/">Home</a></li>
            <li className="sep">/</li>
            <li aria-current="page">Puja Guides &amp; Samagri</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <header className="guides-hero">
        <div className="container-inner">
          <div className="guides-hero-content">
            <span className="sacred-badge">Vedic Knowledge &amp; Preparation</span>
            <h1>Puja Vidhi, Samagri Checklists &amp; Festival Muhurats</h1>
            <p className="guides-hero-sub">
              Carefully curated, Shastriya-compliant preparation guides written to remove confusion and empower families with authentic Vedic understanding.
            </p>

            {/* Filter Tabs */}
            <div className="guides-filter-tabs" role="tablist">
              {[
                { key: 'all', label: 'All Resources' },
                { key: 'samagri', label: 'Samagri Checklists' },
                { key: 'vidhi', label: 'Step-by-Step Vidhi' },
                { key: 'muhurat', label: 'Festival Muhurats' },
                { key: 'nri', label: 'NRI & Remote Guides' }
              ].map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  className={`guide-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="search-bar-wrap">
              <span className="search-symbol">🔍</span>
              <input
                type="text"
                placeholder="Search guides by puja name, deity, or topic (e.g., Rudrabhishek, Hawan, Zoom setup)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="guide-search-input"
                aria-label="Search guides"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Guides Grid */}
      <main className="guides-grid-section">
        <div className="container-inner">
          <div className="guides-masonry-grid">
            {filteredGuides.map(guide => (
              <article key={guide.id} className="guide-card">
                <div className="guide-media-wrap">
                  <img
                    src={guide.imageUrl}
                    alt={guide.title}
                    width={400}
                    height={250}
                    loading="lazy"
                    className="guide-thumbnail"
                  />
                  <span className="guide-category-badge">{guide.categoryLabel}</span>
                </div>

                <div className="guide-card-content">
                  <div className="guide-meta-row">
                    <span className="read-time-pill">⏱️ {guide.readTime}</span>
                    <span className="author-reviewer-tag">📜 {guide.authorReviewer}</span>
                  </div>

                  <h2 className="guide-card-title">
                    <a href={guide.slug}>{guide.title}</a>
                  </h2>

                  <p className="guide-excerpt">{guide.excerpt}</p>

                  {/* Contextual Booking Interlink Box (SEO & CRO Driver) */}
                  <div className="contextual-booking-box">
                    <div>
                      <span className="box-sub">Planning this ceremony?</span>
                      <strong className="box-title">{guide.relatedPujaName}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPuja(guide.relatedPujaName);
                        setIsModalOpen(true);
                      }}
                      className="btn-primary-sacred btn-mini"
                    >
                      Book Pandit Ji
                    </button>
                  </div>

                  <div className="guide-card-actions">
                    <a href={guide.slug} className="read-guide-link">
                      <span>Read Complete Guide</span>
                      <span aria-hidden="true">→</span>
                    </a>

                    {guide.hasPdfDownload && (
                      <a
                        href="https://wa.me/917599340430?text=Namaste%2C%20please%20send%20me%20the%20Puja%20Samagri%20PDF%20checklist."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-pdf-link"
                      >
                        📄 Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Sticky Mobile Bar */}
      <MobileStickyBar
        currentPujaName="Vedic Puja"
        onOpenBookingModal={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <BookingModalFunnel
          initialService={selectedPuja}
          isOpen={true}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <style jsx>{`
        .guides-hub-root {
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
        .guides-hero {
          background: #FFFFFF;
          border-bottom: 1px solid #EFE8DE;
          padding: 56px 0 48px;
          text-align: center;
        }

        .guides-hero-content {
          max-width: 820px;
          margin: 0 auto;
        }

        .sacred-badge {
          display: inline-block;
          background: #FDF3E7;
          border: 1px solid #F8D7B0;
          color: #D35400;
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 14px;
        }

        .guides-hero h1 {
          font-size: clamp(2rem, 3.8vw, 3.1rem);
          margin: 0 0 14px;
          color: #1E293B;
          line-height: 1.18;
        }

        .guides-hero-sub {
          font-size: 1.08rem;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 32px;
        }

        .guides-filter-tabs {
          display: inline-flex;
          gap: 6px;
          background: #EFE8DE;
          padding: 5px;
          border-radius: 9999px;
          margin-bottom: 24px;
          overflow-x: auto;
          max-width: 100%;
        }

        .guide-tab-btn {
          background: transparent;
          border: none;
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .guide-tab-btn.active {
          background: #C8232C;
          color: #FFFFFF;
          box-shadow: 0 2px 8px rgba(200, 35, 44, 0.25);
        }

        .search-bar-wrap {
          max-width: 580px;
          margin: 0 auto;
          background: #FAF7F2;
          border: 1.5px solid #CBD5E1;
          border-radius: 9999px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .search-symbol {
          color: #94A3B8;
        }

        .guide-search-input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 0.95rem;
          color: #1E293B;
        }

        /* Grid */
        .guides-grid-section {
          padding: 60px 0 80px;
        }

        .guides-masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 26px;
        }

        .guide-card {
          background: #FFFFFF;
          border: 1.5px solid #EFE8DE;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(30, 41, 59, 0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .guide-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(30, 41, 59, 0.09);
        }

        .guide-media-wrap {
          position: relative;
          aspect-ratio: 16 / 10;
          background: #FAF7F2;
        }

        .guide-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .guide-category-badge {
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

        .guide-card-content {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .guide-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          font-size: 0.74rem;
        }

        .read-time-pill {
          color: #64748B;
          font-weight: 600;
        }

        .author-reviewer-tag {
          color: #15803D;
          font-weight: 700;
        }

        .guide-card-title {
          font-size: 1.22rem;
          margin: 0 0 10px;
          line-height: 1.35;
        }

        .guide-card-title a {
          color: #1E293B;
          text-decoration: none;
        }

        .guide-card-title a:hover {
          color: #C8232C;
        }

        .guide-excerpt {
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.55;
          margin: 0 0 18px;
          flex: 1;
        }

        /* Contextual Booking Interlink Box */
        .contextual-booking-box {
          background: #FAF7F2;
          border: 1px solid #E2D7C8;
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 16px;
        }

        .box-sub {
          display: block;
          font-size: 0.7rem;
          color: #64748B;
          text-transform: uppercase;
        }

        .box-title {
          font-size: 0.85rem;
          color: #1E293B;
        }

        .btn-mini {
          padding: 6px 12px !important;
          font-size: 0.78rem !important;
          border-radius: 6px !important;
        }

        .guide-card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #EFE8DE;
          padding-top: 14px;
        }

        .read-guide-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #C8232C;
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
        }

        .download-pdf-link {
          color: #166534;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default PujaGuidesHubTemplate;
