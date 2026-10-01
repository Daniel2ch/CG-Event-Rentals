import React, { useState, useEffect, useCallback } from 'react';
import { uiTranslations, categories } from '../src/productsData.js';

const ProductModal = ({ product, onClose, contactInfo, language }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const t = uiTranslations[language] || uiTranslations['en'];

  // Safeguard in case there are no images
  const images = product.images && product.images.length > 0
    ? product.images
    : [`https://placehold.co/600x400?text=${encodeURIComponent(t.no_image_text)}`];

  const hasMultipleImages = images.length > 1;

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modalOverlay') {
      onClose();
    }
  };

  // Arrow navigation handlers
  const prevImage = useCallback(() => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Language based product fields
  const productName = language === 'es' ? product.nameEs : product.name;
  const productPrice = language === 'es' ? product.priceEs : product.price;
  const productDesc = language === 'es' ? product.detailedDescEs : product.detailedDesc;
  const productSpecs = language === 'es' ? product.specsEs : product.specs;

  const catObj = categories.find(c => c.id === product.category);
  const categoryLabel = catObj ? (language === 'es' ? catObj.titleEs : catObj.title) : product.category;

  return (
    <div className="modalOverlay" onClick={handleOverlayClick}>
      <div className="modalContent">
        {/* Close Button */}
        <button className="modalCloseBtn" onClick={onClose} aria-label={t.modal_close_aria}>
          &times;
        </button>

        {/* Modal Grid */}
        <div className="modalGrid">

          {/* Left Panel: Full-bleed Image with Arrows */}
          <div className="modalGallery">
            <div className="modalMainImageContainer">
              <img
                src={images[activeImageIndex]}
                alt={`${productName} - ${activeImageIndex + 1}`}
                className="modalMainImage"
              />

              {/* Prev / Next arrow buttons */}
              {hasMultipleImages && (
                <>
                  <button className="modalArrow modalArrowLeft" onClick={prevImage} aria-label={t.modal_prev_aria}>
                    &#8249;
                  </button>
                  <button className="modalArrow modalArrowRight" onClick={nextImage} aria-label={t.modal_next_aria}>
                    &#8250;
                  </button>

                  {/* Dot indicators */}
                  <div className="modalDots">
                    {images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`modalDot ${idx === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(idx)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Panel: Product Details */}
          <div className="modalDetails">
            <div className="modalHeaderSection">
              <span className="modalCategoryBadge">{categoryLabel.toUpperCase()}</span>
              <h2 className="modalProductTitle">{productName}</h2>

              {/* Price Area */}
              <div className="modalPriceBox">
                <span className="priceLabel">{t.modal_price_label}</span>
                <span className="priceValue">{productPrice}</span>
              </div>
            </div>

            {/* Description Area */}
            <div className="modalInfoBlock">
              <h3>{t.modal_desc_label}</h3>
              <p className="modalDescription">{productDesc}</p>
            </div>

            {/* Specifications Area */}
            {productSpecs && productSpecs.length > 0 && (
              <div className="modalInfoBlock">
                <h3>{t.modal_specs_label}</h3>
                <ul className="modalSpecsList">
                  {productSpecs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Section */}
            <div className="modalCtaBox">
              <h3>{t.modal_cta_title}</h3>
              <p>{t.modal_cta_desc}</p>

              <div className="modalCtaButtons">
                {/* Phone Call Link */}
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="modalActionBtn phoneBtn"
                >
                  <svg className="ctaIcon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  {t.modal_cta_call_btn}: {contactInfo.phone}
                </a>

                {/* Email Mailto Link */}
                <a
                  href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(`${t.modal_inquiry_subject} ${productName}`)}`}
                  className="modalActionBtn emailBtn"
                >
                  <svg className="ctaIcon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  {t.modal_cta_email_btn}
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
