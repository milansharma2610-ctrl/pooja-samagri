import React from 'react';

export interface PanditProfile {
  id: string;
  name: string;
  title: string;
  location: string;
  experienceYears: number;
  education: string;
  languages: string[];
  specializations: string[];
  imageUrl: string;
  imageAlt: string;
  rating: number;
  completedPujas: number;
  verifiedBio: string;
  slug: string;
}

export const PANDIT_ROSTER: PanditProfile[] = [
  {
    id: 'acharya-sursain-brijwasi',
    name: 'Acharya Sursain Brijwasi',
    title: 'Senior Vedic Shastri & Karmakand Expert',
    location: 'Ghaziabad & Noida',
    experienceYears: 18,
    education: 'Sampurnanand Sanskrit Vishwavidyalaya, Varanasi (Acharya in Shukla Yajurveda)',
    languages: ['Hindi', 'Sanskrit', 'Brajbhasha'],
    specializations: ['Rudrabhishek', 'Griha Pravesh', 'Maha Mrityunjaya Jaap', 'Navgrah Shanti Hawan'],
    imageUrl: '/images/acharya-sursain-brijwasi-pandit-ji-ghaziabad-640.webp',
    imageAlt: 'Acharya Sursain Brijwasi - Senior Vedic Shastri of Shastriya Vidhan',
    rating: 4.96,
    completedPujas: 840,
    verifiedBio: 'Over 18 years dedicated to Shukla Yajurveda karmakand. Renowned for authentic Sanskrit pronunciation, patience in explaining vidhi to children and elders, and timely arrival.',
    slug: '/pandit-ji/acharya-sursain-brijwasi-ghaziabad'
  },
  {
    id: 'shastri-ramesh-sharma-ujjain',
    name: 'Pt. Rameshwar Shastri',
    title: 'Teerth Purohit & Remedial Specialist',
    location: 'Ujjain (Mahakaleshwar Kshetra)',
    experienceYears: 22,
    education: 'Maharshi Sandipani Rashtriya Ved Vidya Pratishthan, Ujjain',
    languages: ['Hindi', 'Sanskrit', 'Malwi'],
    specializations: ['Kaal Sarp Dosh Shanti', 'Mangal Dosh Bhaat Puja', 'Pitra Dosh Hawan', 'Rudra Homa'],
    imageUrl: '/images/rudrabhishek-puja.webp',
    imageAlt: 'Pt. Rameshwar Shastri - Teerth Purohit Ujjain',
    rating: 4.98,
    completedPujas: 1200,
    verifiedBio: 'Authorized Teerth Purohit at sacred Shipra Ghat and Mahakal kshetra in Ujjain. Specializes in traditional dosh-nivaran rituals conducted strictly as per Agamic Vidhan.',
    slug: '/pandit-ji/rameshwar-shastri-ujjain'
  },
  {
    id: 'acharya-anand-mishra-delhi',
    name: 'Acharya Anand Mishra',
    title: 'Vedic Purohit & NRI Online Ceremony Lead',
    location: 'South Delhi & Gurugram',
    experienceYears: 14,
    education: 'Lal Bahadur Shastri Rashtriya Sanskrit Vidyapeetha, New Delhi',
    languages: ['Hindi', 'English', 'Sanskrit', 'Maithili'],
    specializations: ['Online Video Puja', 'Diwali Lakshmi Ganesh', 'Satyanarayan Katha', 'Sundarkand Path'],
    imageUrl: '/images/diwali-puja.webp',
    imageAlt: 'Acharya Anand Mishra - Vedic Purohit Delhi NCR',
    rating: 4.94,
    completedPujas: 620,
    verifiedBio: 'Specializes in family-centric pujas and online video rituals for devotees across the USA, UK, and UAE. Bridges modern English explanations with flawless Vedic chanting.',
    slug: '/pandit-ji/acharya-anand-mishra-delhi'
  }
];

interface PanditProfileCardProps {
  pandit: PanditProfile;
  onRequestBooking?: (panditName: string) => void;
}

export const PanditProfileCard: React.FC<PanditProfileCardProps> = ({
  pandit,
  onRequestBooking
}) => {
  // Schema.org Person JSON-LD for rich Google Search indexing
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: pandit.name,
    jobTitle: pandit.title,
    worksFor: {
      '@type': 'Organization',
      name: 'Shastriya Vidhan',
      url: 'https://www.shastriyavidhan.com'
    },
    alumniOf: pandit.education,
    knowsLanguage: pandit.languages,
    image: `https://www.shastriyavidhan.com${pandit.imageUrl}`,
    description: pandit.verifiedBio,
    address: {
      '@type': 'PostalAddress',
      addressLocality: pandit.location,
      addressCountry: 'IN'
    }
  };

  return (
    <article className="pandit-trust-card" aria-label={`Pandit Ji profile: ${pandit.name}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="pandit-card-media">
        <picture>
          <source type="image/webp" srcSet={pandit.imageUrl} />
          <img
            src={pandit.imageUrl}
            alt={pandit.imageAlt}
            width={480}
            height={480}
            loading="lazy"
            decoding="async"
            className="pandit-photo"
          />
        </picture>
        <div className="verified-seal">
          <span className="seal-check">✓</span>
          <span>Verified Identity & Vidhan</span>
        </div>
      </div>

      <div className="pandit-card-content">
        <div className="pandit-topline">
          <span className="pandit-location-tag">📍 {pandit.location}</span>
          <span className="pandit-experience-tag">⭐ {pandit.experienceYears}+ Yrs Exp</span>
        </div>

        <h3 className="pandit-name">{pandit.name}</h3>
        <p className="pandit-title">{pandit.title}</p>

        <div className="education-box">
          <span className="edu-label">Vedic Credentials:</span>
          <p className="edu-text">{pandit.education}</p>
        </div>

        <div className="meta-attribute-grid">
          <div>
            <span className="meta-title">Languages Chanted:</span>
            <span className="meta-val">{pandit.languages.join(' • ')}</span>
          </div>
          <div>
            <span className="meta-title">Specialization:</span>
            <span className="meta-val">{pandit.specializations.slice(0, 3).join(', ')}</span>
          </div>
        </div>

        <p className="pandit-bio">{pandit.verifiedBio}</p>

        <div className="pandit-card-actions">
          <button
            type="button"
            onClick={() => onRequestBooking?.(pandit.name)}
            className="btn-request-pandit"
          >
            Request Pt. Ji for Booking
          </button>
          <a href={pandit.slug} className="link-view-profile">
            <span>Full Profile</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .pandit-trust-card {
          background: #FFFFFF;
          border: 1.5px solid #EFE8DE;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(30, 41, 59, 0.06);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .pandit-trust-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(30, 41, 59, 0.12);
          border-color: #F8D7B0;
        }

        .pandit-card-media {
          position: relative;
          aspect-ratio: 16 / 11;
          background: #FAF7F2;
          overflow: hidden;
        }

        .pandit-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .pandit-trust-card:hover .pandit-photo {
          transform: scale(1.03);
        }

        .verified-seal {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          color: #15803D;
          border: 1px solid #BBF7D0;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .seal-check {
          background: #15803D;
          color: #FFFFFF;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
        }

        .pandit-card-content {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .pandit-topline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .pandit-location-tag {
          font-size: 0.78rem;
          color: #64748B;
          font-weight: 600;
        }

        .pandit-experience-tag {
          font-size: 0.78rem;
          font-weight: 800;
          color: #D35400;
          background: #FDF3E7;
          padding: 2px 8px;
          border-radius: 9999px;
        }

        .pandit-name {
          font-size: 1.25rem;
          color: #1E293B;
          margin: 0 0 4px;
          font-weight: 700;
        }

        .pandit-title {
          font-size: 0.85rem;
          color: #C8232C;
          font-weight: 600;
          margin: 0 0 12px;
        }

        .education-box {
          background: #FAF7F2;
          border-left: 3px solid #E67E22;
          padding: 8px 12px;
          border-radius: 0 8px 8px 0;
          margin-bottom: 12px;
        }

        .edu-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #8C4400;
          letter-spacing: 0.04em;
        }

        .edu-text {
          margin: 2px 0 0;
          font-size: 0.82rem;
          color: #475569;
          line-height: 1.4;
        }

        .meta-attribute-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          padding: 10px 0;
          border-top: 1px solid #EFE8DE;
          border-bottom: 1px solid #EFE8DE;
          margin-bottom: 12px;
        }

        .meta-title {
          display: block;
          font-size: 0.7rem;
          color: #64748B;
          text-transform: uppercase;
          font-weight: 700;
        }

        .meta-val {
          font-size: 0.82rem;
          color: #1E293B;
          font-weight: 600;
        }

        .pandit-bio {
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.5;
          margin: 0 0 18px;
          flex: 1;
        }

        .pandit-card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #EFE8DE;
        }

        .btn-request-pandit {
          flex: 1;
          background: #C8232C;
          color: #FFFFFF;
          border: none;
          padding: 9px 14px;
          border-radius: 9999px;
          font-size: 0.84rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-request-pandit:hover {
          background: #A81C24;
        }

        .link-view-profile {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #64748B;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
        }

        .link-view-profile:hover {
          color: #C8232C;
        }
      `}</style>
    </article>
  );
};

export default PanditProfileCard;
