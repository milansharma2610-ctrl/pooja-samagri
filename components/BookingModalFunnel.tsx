'use client';

import React, { useState } from 'react';

// Types
export type PujaMode = 'home' | 'online' | 'temple';

export interface BookingFormData {
  service: string;
  category: string;
  mode: PujaMode;
  city: string;
  preferredDate: string;
  timeSlot: string;
  indicativePrice: string;
  fullName: string;
  phone: string;
  email: string;
  gotra: string;
  language: string;
  samagriOption: 'all_included' | 'self_arranged';
  specialNotes: string;
}

const PUJA_PRICE_CATALOG: Record<string, { range: string; deposit: string; note: string }> = {
  'Rudrabhishek Puja': { range: '₹2,500 – ₹4,500', deposit: '₹0 (Pay after quote confirmation)', note: 'Includes Panchamrit & Shiva ritual guidance' },
  'Diwali Lakshmi Ganesh Puja': { range: '₹3,100 – ₹5,100', deposit: '₹0 (Pay after quote confirmation)', note: 'Includes Shubh Muhurat sankalp & aarti' },
  'Krishna Janmashtami Puja': { range: '₹2,800 – ₹4,500', deposit: '₹0 (Pay after quote confirmation)', note: 'Midnight Laddu Gopal Abhishek & Bhog' },
  'Griha Pravesh & Vastu Puja': { range: '₹4,500 – ₹8,500', deposit: '₹0 (Pay after quote confirmation)', note: 'Complete Navgrah Hawan & Vastu Pujan' },
  'Satyanarayan Katha & Hawan': { range: '₹2,500 – ₹3,800', deposit: '₹0 (Pay after quote confirmation)', note: 'Full katha recitation and Prasad vidhi' },
  'Kaal Sarp Dosh Puja in Ujjain': { range: '₹5,500 – ₹15,000', deposit: '₹0 (Pay after quote confirmation)', note: 'Teerth Purohit sankalp at sacred Ujjain kshetra' },
  'Mahamrityunjaya Jaap Puja': { range: '₹5,100 – ₹11,000+', deposit: '₹0 (Pay after quote confirmation)', note: 'Chanted by Vedic Brahmins according to sankalp count' },
  'Sundarkand Path': { range: '₹3,500 – ₹5,500', deposit: '₹0 (Pay after quote confirmation)', note: 'Musical or Vedic chanting path with Hawan' },
  'Custom Vedic Ritual': { range: 'Quote upon consultation', deposit: '₹0', note: 'Reviewed personally with senior Shastri' }
};

interface BookingModalFunnelProps {
  initialService?: string;
  initialCity?: string;
  initialMode?: PujaMode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const BookingModalFunnel: React.FC<BookingModalFunnelProps> = ({
  initialService = 'Rudrabhishek Puja',
  initialCity = 'Noida',
  initialMode = 'home',
  isOpen = true,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<BookingFormData>({
    service: initialService,
    category: 'Shiva Pujas',
    mode: initialMode,
    city: initialCity,
    preferredDate: '',
    timeSlot: 'Morning (06:00 AM - 10:00 AM)',
    indicativePrice: PUJA_PRICE_CATALOG[initialService]?.range || '₹2,500 – ₹4,500',
    fullName: '',
    phone: '',
    email: '',
    gotra: '',
    language: 'Hindi & Sanskrit',
    samagriOption: 'all_included',
    specialNotes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleServiceChange = (serviceName: string) => {
    const pricing = PUJA_PRICE_CATALOG[serviceName] || { range: '₹2,500 – ₹4,500' };
    setFormData(prev => ({
      ...prev,
      service: serviceName,
      indicativePrice: pricing.range
    }));
  };

  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.service) errs.service = 'Please choose a puja service';
      if (!formData.city) errs.city = 'Please select your city or Online';
    } else if (step === 2) {
      if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date';
      if (!formData.timeSlot) errs.timeSlot = 'Please select a convenient time window';
    } else if (step === 3) {
      if (!formData.fullName.trim()) errs.fullName = 'Full name is required for Sankalp';
      if (!formData.phone.trim() || formData.phone.length < 10) {
        errs.phone = 'Valid 10-digit WhatsApp phone number is required for quote confirmation';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
    }
  };

  const currentPriceInfo = PUJA_PRICE_CATALOG[formData.service] || {
    range: '₹2,500 – ₹4,500',
    note: 'Customized based on ritual duration and samagri requirements'
  };

  return (
    <div className="shastriya-booking-modal-overlay" role="dialog" aria-labelledby="booking-modal-title" aria-modal="true">
      <div className="shastriya-booking-card">
        {/* Header */}
        <div className="modal-top-bar">
          <div className="trust-eyebrow">
            <span className="live-dot" aria-hidden="true"></span>
            <span>Manual Availability & Quote Review Desk • No Instant Payment</span>
          </div>
          {onClose && (
            <button onClick={onClose} className="btn-close-modal" aria-label="Close booking modal">
              ✕
            </button>
          )}
        </div>

        <div className="modal-header">
          <h2 id="booking-modal-title">Request Verified Pandit Ji</h2>
          <p className="modal-subtitle">
            Share your preferred date and ritual needs. Our booking team verifies Pandit Ji feasibility and sends a clear samagri checklist and quote before any payment is requested.
          </p>
        </div>

        {/* 4-Step Progress Indicator */}
        <div className="progress-steps-bar" role="tablist" aria-label="Booking progress steps">
          {[
            { num: 1, title: 'Service' },
            { num: 2, title: 'Schedule' },
            { num: 3, title: 'Family' },
            { num: 4, title: 'Review' }
          ].map(s => (
            <div
              key={s.num}
              className={`step-bubble ${currentStep === s.num ? 'active' : ''} ${currentStep > s.num ? 'completed' : ''}`}
              role="tab"
              aria-selected={currentStep === s.num}
            >
              <div className="step-circle">
                {currentStep > s.num ? '✓' : `0${s.num}`}
              </div>
              <span className="step-label">{s.title}</span>
            </div>
          ))}
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} noValidate>
            {/* STEP 1: SERVICE & MODE */}
            {currentStep === 1 && (
              <div className="step-panel" role="tabpanel" aria-labelledby="step-1">
                <div className="field-group">
                  <label htmlFor="service-select" className="input-label">Select Puja Service</label>
                  <select
                    id="service-select"
                    className={`form-input-lg ${errors.service ? 'input-error' : ''}`}
                    value={formData.service}
                    onChange={e => handleServiceChange(e.target.value)}
                  >
                    <optgroup label="Shiva Pujas">
                      <option value="Rudrabhishek Puja">Rudrabhishek Puja (Panchamrit Abhishek & Bilva Archana)</option>
                      <option value="Maha Shivratri Puja">Maha Shivratri Puja (Vedic 4-Prahar Chanting)</option>
                      <option value="Mahamrityunjaya Jaap Puja">Mahamrityunjaya Jaap Puja (Health & Longevity)</option>
                    </optgroup>
                    <optgroup label="Festival Pujas">
                      <option value="Diwali Lakshmi Ganesh Puja">Diwali Lakshmi Ganesh Puja (Shubh Deepawali)</option>
                      <option value="Krishna Janmashtami Puja">Krishna Janmashtami Puja (Bhog, Abhishek & Katha)</option>
                      <option value="Ram Navami Puja">Ram Navami Puja (Ram Janmotsav Pujan)</option>
                      <option value="Tulsi Vivah Puja">Tulsi Vivah Puja (Shaligram-Tulsi Vivah)</option>
                    </optgroup>
                    <optgroup label="Ghar Sanskar & Hawan">
                      <option value="Griha Pravesh & Vastu Puja">Griha Pravesh & Vastu Puja (New Home Shanti)</option>
                      <option value="Satyanarayan Katha & Hawan">Satyanarayan Katha & Hawan (Auspicious Occasion)</option>
                      <option value="Sundarkand Path">Sundarkand Path (Musical/Vedic Hanuman Chanting)</option>
                    </optgroup>
                    <optgroup label="Teerth Kshetra (Ujjain)">
                      <option value="Kaal Sarp Dosh Puja in Ujjain">Kaal Sarp Dosh Puja in Ujjain (Mahakaleshwar Kshetra)</option>
                    </optgroup>
                    <option value="Custom Vedic Ritual">Other / Custom Vedic Ritual</option>
                  </select>
                  {errors.service && <span className="error-text">{errors.service}</span>}
                </div>

                <div className="field-group">
                  <label className="input-label">Attendance Format</label>
                  <div className="mode-toggle-grid">
                    <button
                      type="button"
                      className={`mode-card ${formData.mode === 'home' ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, mode: 'home' })}
                    >
                      <span className="mode-icon">🏡</span>
                      <strong className="mode-title">Puja at Home</strong>
                      <span className="mode-desc">Pandit Ji visits your home in Delhi NCR</span>
                    </button>

                    <button
                      type="button"
                      className={`mode-card ${formData.mode === 'online' ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, mode: 'online' })}
                    >
                      <span className="mode-icon">💻</span>
                      <strong className="mode-title">Online Video Puja</strong>
                      <span className="mode-desc">Worldwide live video ritual guidance</span>
                    </button>

                    <button
                      type="button"
                      className={`mode-card ${formData.mode === 'temple' ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, mode: 'temple' })}
                    >
                      <span className="mode-icon">🛕</span>
                      <strong className="mode-title">At Sacred Temple</strong>
                      <span className="mode-desc">Ujjain or verified pilgrimage center</span>
                    </button>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="city-select" className="input-label">City / Location</label>
                  <select
                    id="city-select"
                    className="form-input-lg"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                  >
                    <option value="Noida">Noida (Sectors 1-168, Expressway, Greater Noida)</option>
                    <option value="Delhi">Delhi (South, Central, West, East, North)</option>
                    <option value="Gurugram">Gurugram (DLF, Golf Course, Cyber City, Sohna Rd)</option>
                    <option value="Ghaziabad">Ghaziabad (Indirapuram, Vaishali, Vasundhara)</option>
                    <option value="Ujjain">Ujjain (Mahakaleshwar, Ramghat, Siddhavat)</option>
                    <option value="Online / NRI">Online / Global (NRI & Remote devotions)</option>
                    <option value="Other">Other City (Upon team verification)</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 2: SCHEDULE & INDICATIVE PRICE */}
            {currentStep === 2 && (
              <div className="step-panel" role="tabpanel" aria-labelledby="step-2">
                <div className="two-col-grid">
                  <div className="field-group">
                    <label htmlFor="preferred-date" className="input-label">Preferred Date</label>
                    <input
                      type="date"
                      id="preferred-date"
                      className={`form-input-lg ${errors.preferredDate ? 'input-error' : ''}`}
                      value={formData.preferredDate}
                      onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.preferredDate && <span className="error-text">{errors.preferredDate}</span>}
                    <span className="field-hint">Book 24-48h in advance for auspicious muhurat alignment</span>
                  </div>

                  <div className="field-group">
                    <label htmlFor="time-slot" className="input-label">Time Window</label>
                    <select
                      id="time-slot"
                      className="form-input-lg"
                      value={formData.timeSlot}
                      onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                    >
                      <option value="Morning (06:00 AM - 10:00 AM)">Pratah Kaal / Morning (06:00 AM - 10:00 AM)</option>
                      <option value="Mid-day (10:00 AM - 02:00 PM)">Madhyahn / Mid-day (10:00 AM - 02:00 PM)</option>
                      <option value="Evening (04:00 PM - 08:00 PM)">Sandhya Kaal / Evening (04:00 PM - 08:00 PM)</option>
                      <option value="Auspicious Shubh Muhurat Only">Consult Pandit Ji for Shubh Muhurat</option>
                    </select>
                  </div>
                </div>

                {/* Live Indicative Pricing Clarity Card */}
                <div className="price-clarity-card">
                  <div className="price-header">
                    <span className="price-badge">Indicative Estimation</span>
                    <span className="price-figure">{currentPriceInfo.range}</span>
                  </div>
                  <p className="price-note">
                    <strong>What this includes:</strong> {currentPriceInfo.note}. Exact dakshina and samagri quote will be reviewed manually with you based on your custom family traditions.
                  </p>
                  <div className="no-deposit-banner">
                    <span className="check-icon">✓</span>
                    <span>Zero upfront payment required. You only confirm after reviewing the Pandit profile and exact inclusions.</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: FAMILY DETAILS & PREFERENCES */}
            {currentStep === 3 && (
              <div className="step-panel" role="tabpanel" aria-labelledby="step-3">
                <div className="two-col-grid">
                  <div className="field-group">
                    <label htmlFor="full-name" className="input-label">Yajman (Primary Devotee) Full Name</label>
                    <input
                      type="text"
                      id="full-name"
                      placeholder="e.g., Rajesh Sharma"
                      className={`form-input-lg ${errors.fullName ? 'input-error' : ''}`}
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    <span className="field-hint">Required for reciting authentic Vedic Sankalp</span>
                  </div>

                  <div className="field-group">
                    <label htmlFor="whatsapp-phone" className="input-label">WhatsApp Mobile Number</label>
                    <input
                      type="tel"
                      id="whatsapp-phone"
                      placeholder="+91 98765 43210"
                      className={`form-input-lg ${errors.phone ? 'input-error' : ''}`}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                    <span className="field-hint">Our booking desk shares pandit details & quote directly on WhatsApp</span>
                  </div>
                </div>

                <div className="two-col-grid">
                  <div className="field-group">
                    <label htmlFor="gotra-input" className="input-label">Family Gotra (Optional)</label>
                    <input
                      type="text"
                      id="gotra-input"
                      placeholder="e.g., Kashyap / Bharadwaj (or leave blank if unsure)"
                      className="form-input-lg"
                      value={formData.gotra}
                      onChange={e => setFormData({ ...formData, gotra: e.target.value })}
                    />
                    <span className="field-hint">Pandit Ji will guide Kashyap Gotra if unknown</span>
                  </div>

                  <div className="field-group">
                    <label htmlFor="language-select" className="input-label">Preferred Pandit Language</label>
                    <select
                      id="language-select"
                      className="form-input-lg"
                      value={formData.language}
                      onChange={e => setFormData({ ...formData, language: e.target.value })}
                    >
                      <option value="Hindi & Sanskrit">Hindi & Sanskrit (Standard Vedic)</option>
                      <option value="English, Hindi & Sanskrit">English, Hindi & Sanskrit (NRI / Youth friendly)</option>
                      <option value="Maithili / Bhojpuri">Maithili / Bhojpuri traditional</option>
                      <option value="Gujarati / Rajasthani">Gujarati / Rajasthani tradition</option>
                      <option value="South Indian (Tamil/Telugu/Kannada)">South Indian Vedic Purohit</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label className="input-label">Samagri Arrangement Preference</label>
                  <div className="radio-selection-card">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="samagri"
                        checked={formData.samagriOption === 'all_included'}
                        onChange={() => setFormData({ ...formData, samagriOption: 'all_included' })}
                      />
                      <div className="radio-content">
                        <strong>Pandit Ji arranges authentic samagri (Recommended)</strong>
                        <span>Pandit Ji brings certified pure dhoop, ghee, hawan samagri, gangajal, janeu, and raw puja materials. You only prepare fresh fruits, flowers, and sweets.</span>
                      </div>
                    </label>

                    <label className="radio-option">
                      <input
                        type="radio"
                        name="samagri"
                        checked={formData.samagriOption === 'self_arranged'}
                        onChange={() => setFormData({ ...formData, samagriOption: 'self_arranged' })}
                      />
                      <div className="radio-content">
                        <strong>I will arrange everything with your verified checklist</strong>
                        <span>We will send you the complete Shastriya checklist PDF on WhatsApp so you can procure items locally.</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW & TRANSPARENT NEXT STEPS */}
            {currentStep === 4 && (
              <div className="step-panel" role="tabpanel" aria-labelledby="step-4">
                <div className="review-summary-card">
                  <div className="summary-header">
                    <h3>Booking Request Summary</h3>
                    <button type="button" onClick={() => setCurrentStep(1)} className="btn-edit-link">Edit Details</button>
                  </div>

                  <div className="summary-grid">
                    <div>
                      <span className="summary-label">Puja Ritual</span>
                      <strong>{formData.service}</strong>
                    </div>
                    <div>
                      <span className="summary-label">Format & Location</span>
                      <strong>{formData.mode === 'home' ? 'Puja at Home' : formData.mode === 'online' ? 'Online Video' : 'Temple'} • {formData.city}</strong>
                    </div>
                    <div>
                      <span className="summary-label">Date & Time</span>
                      <strong>{formData.preferredDate || 'Not specified'} • {formData.timeSlot}</strong>
                    </div>
                    <div>
                      <span className="summary-label">Yajman Name</span>
                      <strong>{formData.fullName} ({formData.language})</strong>
                    </div>
                    <div>
                      <span className="summary-label">WhatsApp Contact</span>
                      <strong>{formData.phone}</strong>
                    </div>
                    <div>
                      <span className="summary-label">Samagri Preference</span>
                      <strong>{formData.samagriOption === 'all_included' ? 'Pandit Ji arranges samagri' : 'Self-arranged via checklist'}</strong>
                    </div>
                  </div>

                  <div className="summary-price-box">
                    <span>Indicative Price Range</span>
                    <span className="price-tag">{formData.indicativePrice}</span>
                  </div>
                </div>

                {/* 4-Step Transparent Status Visual */}
                <div className="transparent-status-tracker">
                  <span className="tracker-title">What happens after you click &quot;Submit Booking Request&quot;?</span>
                  <div className="status-flow-row">
                    <div className="flow-step current">
                      <span className="flow-num">1</span>
                      <strong>Request Received</strong>
                      <span>Instant confirmation SMS/WhatsApp</span>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                      <span className="flow-num">2</span>
                      <strong>Pandit Verification</strong>
                      <span>Schedule & tradition matched in 15-30 mins</span>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                      <span className="flow-num">3</span>
                      <strong>Quote & Samagri Review</strong>
                      <span>Clear breakdown sent on WhatsApp</span>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                      <span className="flow-num">4</span>
                      <strong>Puja Conducted</strong>
                      <span>Peaceful Vedic ceremony with family</span>
                    </div>
                  </div>
                </div>

                <div className="graceful-disclaimer">
                  <span className="shield-icon">🛡️</span>
                  <span>
                    <strong>Shastriya Vidhan Trust Promise:</strong> We believe in authentic Vedic rituals and spiritual devotion. We do not make superstitions or guaranteed astrological claims. No payment is taken until you approve the quote.
                  </span>
                </div>
              </div>
            )}

            {/* Modal Controls */}
            <div className="modal-footer-actions">
              {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="btn-secondary-sacred">
                  ← Back
                </button>
              )}

              {currentStep < 4 ? (
                <button type="button" onClick={nextStep} className="btn-primary-sacred">
                  <span>Continue</span>
                  <span>→</span>
                </button>
              ) : (
                <button type="submit" className="btn-primary-sacred btn-submit-request">
                  <span>Submit Request (Pay Later)</span>
                  <span>✓</span>
                </button>
              )}
            </div>
          </form>
        ) : (
          /* SUCCESS STATE */
          <div className="submission-success-view">
            <div className="success-icon-wrap">🕉️</div>
            <h3>Dhanyawad, {formData.fullName}!</h3>
            <p className="success-lead">
              Your puja request for <strong>{formData.service}</strong> on <strong>{formData.preferredDate}</strong> has been received by our booking desk.
            </p>
            <div className="success-next-box">
              <strong>Next Step:</strong>
              <p>
                Our booking coordinator is verifying Pandit Ji availability in {formData.city}. You will receive a WhatsApp message on <strong>{formData.phone}</strong> within 15–30 minutes with the Pandit profile, samagri details, and exact quote.
              </p>
            </div>
            <div className="success-actions">
              <a
                href={`https://wa.me/917599340430?text=${encodeURIComponent(`Namaste Shastriya Vidhan, I submitted a booking request for ${formData.service} on ${formData.preferredDate}. My name is ${formData.fullName}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-sacred"
              >
                💬 Chat with Booking Desk on WhatsApp
              </a>
              {onClose && (
                <button onClick={onClose} className="btn-secondary-sacred">
                  Close Window
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .shastriya-booking-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          overflow-y: auto;
        }

        .shastriya-booking-card {
          background: var(--surface-white, #FFFFFF);
          border-radius: 20px;
          width: 100%;
          max-width: 740px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          border: 1.5px solid #EFE8DE;
          padding: clamp(24px, 4vw, 40px);
          max-height: 92vh;
          overflow-y: auto;
        }

        .modal-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .trust-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #D35400;
          background: #FDF3E7;
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid #F8D7B0;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background-color: #16A34A;
          border-radius: 50%;
          display: inline-block;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .btn-close-modal {
          background: #F1F5F9;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          cursor: pointer;
          font-size: 14px;
          color: #64748B;
        }

        .modal-header h2 {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          margin: 0 0 6px;
          color: #1E293B;
        }

        .modal-subtitle {
          color: #64748B;
          font-size: 0.92rem;
          line-height: 1.5;
          margin: 0 0 24px;
        }

        /* 4 Steps */
        .progress-steps-bar {
          display: flex;
          justify-content: space-between;
          position: relative;
          margin-bottom: 28px;
          border-bottom: 1px solid #EFE8DE;
          padding-bottom: 16px;
        }

        .step-bubble {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.5;
          transition: all 0.2s ease;
        }

        .step-bubble.active {
          opacity: 1;
        }

        .step-bubble.completed {
          opacity: 1;
        }

        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #E2E8F0;
          color: #475569;
          font-size: 0.85rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-bubble.active .step-circle {
          background: #C8232C;
          color: #FFFFFF;
          box-shadow: 0 0 0 4px #FDF1F2;
        }

        .step-bubble.completed .step-circle {
          background: #15803D;
          color: #FFFFFF;
        }

        .step-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1E293B;
        }

        /* Form Inputs (16px minimum to prevent mobile zoom) */
        .field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
        }

        .input-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1E293B;
        }

        .form-input-lg {
          width: 100%;
          font-size: 16px;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1.5px solid #CBD5E1;
          color: #1E293B;
          background: #FFFFFF;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }

        .form-input-lg:focus {
          border-color: #C8232C;
          box-shadow: 0 0 0 3px #FDF1F2;
        }

        .input-error {
          border-color: #EF4444 !important;
        }

        .error-text {
          font-size: 0.78rem;
          color: #DC2626;
          font-weight: 600;
        }

        .field-hint {
          font-size: 0.78rem;
          color: #64748B;
        }

        .two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .two-col-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Mode Selection Cards */
        .mode-toggle-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        @media (max-width: 600px) {
          .mode-toggle-grid {
            grid-template-columns: 1fr;
          }
        }

        .mode-card {
          background: #FAF7F2;
          border: 1.5px solid #E2D7C8;
          border-radius: 12px;
          padding: 14px 10px;
          text-align: center;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }

        .mode-card.selected {
          border-color: #C8232C;
          background: #FDF1F2;
          box-shadow: 0 4px 12px rgba(200, 35, 44, 0.12);
        }

        .mode-icon {
          font-size: 1.5rem;
        }

        .mode-title {
          font-size: 0.92rem;
          color: #1E293B;
        }

        .mode-desc {
          font-size: 0.75rem;
          color: #64748B;
          line-height: 1.3;
        }

        /* Price Clarity Card */
        .price-clarity-card {
          background: #FCF7E8;
          border: 1.5px solid #E8D595;
          border-radius: 14px;
          padding: 18px 20px;
          margin-top: 16px;
        }

        .price-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .price-badge {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 800;
          color: #B45309;
          letter-spacing: 0.05em;
        }

        .price-figure {
          font-size: 1.3rem;
          font-weight: 800;
          color: #B45309;
        }

        .price-note {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.45;
          margin: 0 0 12px;
        }

        .no-deposit-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #15803D;
          border-top: 1px dashed #D4AF37;
          padding-top: 10px;
        }

        /* Radio Options */
        .radio-selection-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .radio-option {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 16px;
          background: #FAF7F2;
          border: 1.5px solid #E2D7C8;
          border-radius: 12px;
          cursor: pointer;
        }

        .radio-option input {
          margin-top: 4px;
          accent-color: #C8232C;
        }

        .radio-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .radio-content strong {
          font-size: 0.92rem;
          color: #1E293B;
        }

        .radio-content span {
          font-size: 0.8rem;
          color: #64748B;
          line-height: 1.4;
        }

        /* Step 4 Review */
        .review-summary-card {
          background: #FAF7F2;
          border: 1px solid #E2D7C8;
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #EFE8DE;
          padding-bottom: 10px;
          margin-bottom: 14px;
        }

        .summary-header h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .btn-edit-link {
          background: none;
          border: none;
          color: #C8232C;
          font-weight: 700;
          cursor: pointer;
          font-size: 0.85rem;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 18px;
        }

        @media (max-width: 600px) {
          .summary-grid {
            grid-template-columns: 1fr;
          }
        }

        .summary-label {
          display: block;
          font-size: 0.75rem;
          color: #64748B;
          text-transform: uppercase;
          font-weight: 700;
        }

        .summary-price-box {
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px dashed #CBD5E1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
        }

        .price-tag {
          font-size: 1.25rem;
          color: #C8232C;
        }

        /* Status Visual */
        .transparent-status-tracker {
          background: #FFFFFF;
          border: 1px solid #EFE8DE;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 18px;
        }

        .tracker-title {
          display: block;
          font-size: 0.82rem;
          font-weight: 800;
          color: #475569;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .status-flow-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        @media (max-width: 680px) {
          .status-flow-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .flow-arrow {
            display: none;
          }
        }

        .flow-step {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .flow-num {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #E2E8F0;
          color: #475569;
          font-size: 0.75rem;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }

        .flow-step.current .flow-num {
          background: #C8232C;
          color: #FFFFFF;
        }

        .flow-step strong {
          font-size: 0.85rem;
          color: #1E293B;
        }

        .flow-step span {
          font-size: 0.72rem;
          color: #64748B;
        }

        .flow-arrow {
          color: #CBD5E1;
          font-weight: 700;
        }

        .graceful-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 0.8rem;
          color: #475569;
          line-height: 1.45;
        }

        /* Controls */
        .modal-footer-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid #EFE8DE;
        }

        .btn-submit-request {
          background: linear-gradient(135deg, #C8232C, #B91C1C) !important;
          padding: 14px 28px !important;
          font-size: 1.05rem !important;
        }

        /* Success View */
        .submission-success-view {
          text-align: center;
          padding: 30px 16px;
        }

        .success-icon-wrap {
          font-size: 3.5rem;
          margin-bottom: 12px;
        }

        .success-lead {
          font-size: 1.1rem;
          color: #475569;
          max-width: 520px;
          margin: 0 auto 24px;
        }

        .success-next-box {
          background: #F0FDF4;
          border: 1.5px solid #BBF7D0;
          border-radius: 12px;
          padding: 18px;
          max-width: 540px;
          margin: 0 auto 24px;
          text-align: left;
        }

        .success-next-box strong {
          color: #15803D;
          display: block;
          margin-bottom: 4px;
        }

        .success-next-box p {
          margin: 0;
          font-size: 0.92rem;
          color: #166534;
          line-height: 1.5;
        }

        .success-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default BookingModalFunnel;
