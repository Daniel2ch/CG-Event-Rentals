import logoImg from '../images/Logo.jpeg';
import { uiTranslations } from '../src/productsData.js';

const Navbar = ({ activeTab, setActiveTab, language, setLanguage }) => {
  const t = uiTranslations[language] || uiTranslations['en'];

  // handle when the logo is clickled
  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveTab('home');

    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle the browse button clicked
  const handleBrowseClick = (e) => {
    e.preventDefault();
    setActiveTab('all');

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle when contact is clicked
  const handleContactClick = (e) => {
    e.preventDefault();

    // If we're on the About page, switch to home first, then scroll
    if (activeTab === 'about') {
      setActiveTab('all');
      // Small delay to let the Home page render, then scroll
      setTimeout(() => {
        const element = document.getElementById('contactSection');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById('contactSection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handle when about is clicked
  const handleAboutClick = (e) => {
    e.preventDefault();
    setActiveTab('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navBar">
      <a href="/" onClick={handleLogoClick} className="logo">
        <img src={logoImg} alt="Garcia Jumpers Logo" className="logoImg" />
      </a>

      <div className="navLinks">
        {/* Language Alternator Button */}
        <button
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          className="langToggleBtn"
          title={t.nav_lang_title}
        >
        {t.nav_lang_toggle}
        </button>

        {/* Browse Link */}
        <a
          href="#Browse"
          onClick={handleBrowseClick}
          className="browseLink"
        >
        {t.nav_browse}
        </a>

        {/* About Link */}
        <a
          href="#about"
          onClick={handleAboutClick}
          className={`navLinkBtn ${activeTab === 'about' ? 'active' : ''}`}
        >
        {t.nav_about}
        </a>

        {/* Contact Scroll Button */}
        <a
          href="#contact"
          onClick={handleContactClick}
          className="contactNavBtn"
        >
          {t.nav_contact}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
