import React from 'react';
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { contactInfo, uiTranslations } from '../productsData.js';
import './Home.css';

const Home = ({ language, setActiveTab }) => {
  const t = uiTranslations[language] || uiTranslations['en'];

  const handleBrowseClick = () => {
    if (setActiveTab) {
      setActiveTab('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="homeContainer">
      <header className="homeHeader">
        <div className="heroOverlay">
          <h1>{t.welcome_title}</h1>
          <p className="heroSubtitle">{t.welcome_desc}</p>
          <div className="quickContactBanner">
            <span><Phone /> <strong>{contactInfo.phone}</strong></span>
            <span className="separator">|</span>
            <span><Mail /> <strong>{contactInfo.email}</strong></span>
          </div>
        </div>
      </header>
      {/*
      <section className="trioSection">
        <div className="trioCard" onClick={handleBrowseClick}>
          <div className="trioCardImgWrap">
            <img src="../images/Jumper6.jpeg" alt="Jumpers" />
            <div className="trioCardLabel">
              <h3>{t.jumpers_title}</h3>
            </div>
          </div>
        </div>
        <div className="trioCard" onClick={handleBrowseClick}>
          <div className="trioCardImgWrap">
            <img src="../images/tent8.jpeg" alt="Tents, Chairs & Tables" />
            <div className="trioCardLabel">
              <h3>{t.tentsChairsTables}</h3>
            </div>
          </div>
        </div>
        <div className="trioCard" onClick={handleBrowseClick}>
          <div className="trioCardImgWrap">
            <img src="../images/decorations19.jpeg" alt="Decorations" />
            <div className="trioCardLabel">
              <h3>{t.decorations}</h3>
            </div>
          </div>
        </div>
      </section>
*/}
      {/* ── Feature Section 1: Jumpers ── */}
      <section className="featureSection">
        <div className="featureText">
          <h2>{t.homeJumperTitle}</h2>
          <p>
            {t.homeJumperDesc}
          </p>
          <button className="featureBtn" onClick={handleBrowseClick}>
            {t.homeJumperBtn}
          </button>
        </div>
        <div className="featureImg">
          <img src="../images/bull1.jpeg" alt="Bouncy Castle" />
        </div>
      </section>

      {/* ── Feature Section 2: Tents & Tables (reversed) ── */}
      <section className="featureSection featureSectionReversed">
        <div className="featureText">
          <h2>{t.homeTentTitle}</h2>
          <p>
            {t.homeTentDesc}
          </p>
          <button className="featureBtn" onClick={handleBrowseClick}>
            {t.homeTentBtn}
          </button>
        </div>
        <div className="featureImg">
          <img src="../images/tent7.jpeg" alt="Tent Setup" />
        </div>
      </section>

      {/* ── Feature Section 3: Decorations ── */}
      <section className="featureSection">
        <div className="featureText">
          <h2>{t.homeDecorationTitle}</h2>
          <p>
            {t.homeDecorationDesc}
          </p>
          <button className="featureBtn" onClick={handleBrowseClick}>
            {t.homeDecorationBtn}
          </button>
        </div>
        <div className="featureImg">
          <img src="../images/decorations25.jpeg" alt="Decorations" />
        </div>
      </section>

{/* Footer / Contact Section — No booking form, just contact info */}
      <footer id="contactSection" className="contactFooter">
        <div className="footerContent">

          {/* Business details */}
          <div className="footerInfo">
            <h2>CG Event Rentals</h2>
            <p className="footerDesc">{t.footer_tagline}</p>
            <hr className="footerDivider" />
            <div className="contactDetailsGrid">
              {/* Phone */}
              <div className="contactItem">
                <span className="contactIcon"><Phone /></span>
                <div>
                  <strong>{t.footer_phone_title}</strong>
                  <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
                </div>
              </div>
              {/* Email */}
              <div className="contactItem">
                <span className="contactIcon"><Mail /></span>
                <div>
                  <strong>{t.footer_email_title}</strong>
                  <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                </div>
              </div>
              {/* Hours */}
              <div className="contactItem">
                <span className="contactIcon"><Clock /></span>
                <div>
                  <strong>{t.footer_hours_title}</strong>
                  <p>{language === 'es' ? contactInfo.workingHoursEs : contactInfo.workingHours}</p>
                </div>
              </div>
              {/* Service Areas */}
              <div className="contactItem">
                <span className="contactIcon"><MapPin /></span>
                <div>
                  <strong>{t.footer_area_title}</strong>
                  <p>{language === 'es' ? contactInfo.serviceAreasEs : contactInfo.serviceAreas}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom copyright banner */}
        <div className="footerBottom">
          <p>&copy; {new Date().getFullYear()} CG Event Rentals. {t.all_rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;