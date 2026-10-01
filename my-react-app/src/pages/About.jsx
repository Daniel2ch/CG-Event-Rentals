import React from 'react';
import { Sparkles, Clock, PhoneCall, Truck, Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo, uiTranslations } from '../productsData.js';
import './About.css';

const About = ({ language }) => {
  const t = uiTranslations[language] || uiTranslations['en'];

  return (
    <div className="aboutContainer">
      {/* Hero Header */}
      <section className="aboutHero">
        <div className="aboutHeroContent">
          <span className="aboutBadge">{t.about_story_badge}</span>
          <h1>{t.about_title}</h1>
          <p className="aboutSubtitle">{t.about_subtitle}</p>
        </div>
      </section>

      {/* Story / Who We Are with Real Photo */}
      <section className="aboutStorySection">
        <div className="aboutStoryGrid">
          <div className="aboutStoryText">
            <h2>{t.about_story_title}</h2>
            <p>{t.about_story_p1}</p>
            <p>{t.about_story_p2}</p>
            <div className="aboutLocationPill">
              <MapPin size={18} />
              <span>{language === 'es' ? contactInfo.serviceAreasEs : contactInfo.serviceAreas}</span>
            </div>
          </div>
          <div className="aboutStoryMedia">
            <img src="../images/tent6.jpeg" alt="Event Tent and Table Setup" className="aboutFeaturedImg" />
          </div>
        </div>
      </section>

      {/* What to Expect / Why Us */}
      <section className="aboutExpectations">
        <h2>{t.about_highlights_title}</h2>
        <div className="expectationsGrid">
          <div className="expectationCard">
            <div className="cardIconWrap">
              <Sparkles size={24} />
            </div>
            <h3>{t.about_val1_title}</h3>
            <p>{t.about_val1_desc}</p>
          </div>

          <div className="expectationCard">
            <div className="cardIconWrap">
              <Clock size={24} />
            </div>
            <h3>{t.about_val2_title}</h3>
            <p>{t.about_val2_desc}</p>
          </div>

          <div className="expectationCard">
            <div className="cardIconWrap">
              <PhoneCall size={24} />
            </div>
            <h3>{t.about_val3_title}</h3>
            <p>{t.about_val3_desc}</p>
          </div>

          <div className="expectationCard">
            <div className="cardIconWrap">
              <Truck size={24} />
            </div>
            <h3>{t.about_val4_title}</h3>
            <p>{t.about_val4_desc}</p>
          </div>
        </div>
      </section>

      {/* Recent Work Photo Strip 
      <section className="aboutGallerySection">
        <h2>{t.about_gallery_title}</h2>
        <div className="aboutPhotoGrid">
          <div className="aboutPhotoItem">
            <img src="../images/Jumper2.jpeg" alt="Bounce House Setup" />
          </div>
          <div className="aboutPhotoItem">
            <img src="../images/decorations16.jpeg" alt="Decorated Tent Celebration" />
          </div>
          <div className="aboutPhotoItem">
            <img src="../images/chairs2.jpeg" alt="Tables and Chairs Setup" />
          </div>
        </div>
      </section>
*/}
      {/* Contact CTA */}
      <section className="aboutCta">
        <h2>{t.about_cta_title}</h2>
        <p>{t.about_cta_text}</p>
        <div className="aboutCtaButtons">
          <a href={`tel:${contactInfo.phone}`} className="aboutCtaBtn aboutCtaPhone">
            <Phone size={18} /> {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="aboutCtaBtn aboutCtaEmail">
            <Mail size={18} /> {contactInfo.email}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
