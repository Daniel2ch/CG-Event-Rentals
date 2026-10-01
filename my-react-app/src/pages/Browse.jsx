import React, { useState } from 'react';
import { products, categories, contactInfo, uiTranslations } from '../productsData.js';
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ProductModal from '../../components/ProductModal.jsx';
import './Browse.css';

const Browse = ({ activeTab, setActiveTab, language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Get active translations list
  // This gets the translations for the current language
  // If the current language is not found, it defaults to English
  const t = uiTranslations[language] || uiTranslations['en'];

  // Handle category tab change
  const handleTabChange = (categoryId) => {
    setActiveTab(categoryId);
    // Scroll down to products grid when tab is changed
    const element = document.getElementById('productsSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter products by active tab AND search query
  const filteredProducts = products.filter(product => {
    // Holds boolean whether to true or false keep the product in the filter array
    // Check if all products tab is selected or product category matches the active tab (cat.id from productsData.js)
    const matchesCategory = activeTab === 'all' || product.category === activeTab;

    // Use selected language to display the correct product information
    const name = language === 'es' ? product.nameEs : product.name;
    const shortDesc = language === 'es' ? product.shortDescEs : product.shortDesc;
    const specs = language === 'es' ? product.specsEs : product.specs;

    const matchesSearch =
      // Check if name includes search query anywhere in the name
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      // Check if shortDesc includes search query anywhere in the description
      shortDesc.toLowerCase().includes(searchQuery.toLowerCase())

    // Return true if both conditions are met
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browseContainer">

      {/* Main Catalog Section */}
      <main id="productsSection" className="catalogSection">
        <h2 className="sectionTitle">{t.explore_title}</h2>

        {/* Search and Filter Row */}
        <div className="catalogControls">
          {/* Search bar */}
          <div className="searchBox">
            {/* svg draws the search bar icon and path is instructions of drawing lines*/}
            <svg className="searchIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            {/* text input field for search bar */}
            <input
              type="text"
              placeholder={t.search_placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="searchInput"
            />
            {/* The && operator is used for conditional rendering in JavaScript */}
            {/* If the left of && is true, then the right will be displayed. If the left is false, then the left is displayed and right isn't */}
            {/* &times is the multiplication sign but in HTML it is displayed as a close button */}
            {searchQuery && (
              <button className="clearSearchBtn" onClick={() => setSearchQuery('')}>&times;</button>
            )}
          </div>

          {/* Category Tabs inside Browse page */}
          {/* Tabs in browse are created here and managed when clicked */}
          {/* .map goes through all of the items in categories.length and needs to return something */}
          <div className="categoryTabs">
            {categories.map((cat) => {
              const catTitle = language === 'es' ? cat.titleEs : cat.title;
              return (
                // key is needed for .map to identify each item
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  // If the active tab is the same as the category id, then the activeTab class is applied
                  className={`tabBtn ${activeTab === cat.id ? 'activeTab' : ''}`}
                >
                  {catTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {/* Filtering through products and gather the information needed for each card. This does not create them yet */}
        {filteredProducts.length > 0 ? (
          <div className="productsGrid">
            {filteredProducts.map((product) => {
              const mainImage = product.images && product.images[0]
                ? product.images[0]
                : `https://placehold.co/400x300?text=${encodeURIComponent(t.no_image_text)}`;

              const productName = language === 'es' ? product.nameEs : product.name;
              const productPrice = language === 'es' ? product.priceEs : product.price;
              const productPriceLabel = language === 'es' ? product.priceLabelEs : product.priceLabel;
              const productShortDesc = language === 'es' ? product.shortDescEs : product.shortDesc;

              const catObj = categories.find(c => c.id === product.category);
              const categoryLabel = catObj ? (language === 'es' ? catObj.titleEs : catObj.title) : product.category;

              return (
                <div key={product.id} className="productCard">
                  {/* Photo Container with instructions */}
                  <div className="productImageContainer" onClick={() => setSelectedProduct(product)}>
                    <img src={mainImage} alt={productName} className="productCardImg" />
                  </div>

                  {/* Card Content */}
                  <div className="productCardBody">
                    <span className="productCardCategory">{categoryLabel}</span>
                    <h3 className="productCardTitle">{productName}</h3>

                    {/* Price Placeholder Box */}
                    <div className="priceTagContainer">
                      <span className="priceTag">{productPrice}</span>
                    </div>

                    <p className="productCardDesc">{productShortDesc}</p>

                    {/* View Details CTA Button */}
                    <button
                      className="cardDetailsBtn"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {t.btn_view_details}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="noResultsBox">
            <p>{t.no_results} "{searchQuery}"</p>
            <button className="clearFiltersBtn" onClick={() => { setSearchQuery(''); setActiveTab('all'); }}>
              {t.btn_reset_filters}
            </button>
          </div>
        )}
      </main>

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

      {/* Product Details Modal Component */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          contactInfo={contactInfo}
          language={language}
        />
      )}
    </div>
  );
};

export default Browse;
