import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container10">
      <Helmet>
        <title>Home1 - Fitting Open Ram</title>
        <meta property="og:title" content="Home1 - Fitting Open Ram" />
        <link
          rel="canonical"
          href="https://fitting-open-ram-ktbft0.teleporthq.site/home1"
        />
        <meta
          property="og:url"
          content="https://fitting-open-ram-ktbft0.teleporthq.site/home1"
        />
      </Helmet>
      <div className="home1-container11">
        <div className="home1-container12">
          <Script
            html={`<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
  background: var(--white);
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="nav-bar">
        <div className="nav-container">
          <img
            alt="Milestone Moving &amp; Storage Logo"
            src="https://images.unsplash.com/photo-1560472355-536de3962603&amp;w=200&amp;fit=crop"
            width="200"
            height="60"
            className="nav-logo"
          />
          <div id="navMenu" className="nav-menu">
            <a href="#about">
              <div className="nav-link">
                <span>About Us</span>
              </div>
            </a>
            <a href="#services">
              <div className="nav-link">
                <span>Services</span>
              </div>
            </a>
            <a href="#contact">
              <div className="nav-link">
                <span>Contact</span>
              </div>
            </a>
          </div>
          <div className="nav-actions">
            <a href="tel:9803937794">
              <div className="nav-phone">
                <svg
                  fill="none"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.18-2.18a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>980-393-7794</span>
              </div>
            </a>
            <button className="nav-track-btn">Track Shipment</button>
            <button aria-label="Toggle Menu" className="nav-mobile-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <section className="hero-section">
        <div className="hero-bg">
          <img
            alt="Moving Truck and Warehouse"
            src="https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-headline">
              Your Journey, Our Milestone. Professional Moving Made Simple.
            </h1>
            <p className="hero-subheadline">
              Stress-free residential and commercial moving solutions tailored
              to your schedule. Licensed, insured, and ready to roll.
            </p>
            <div className="hero-ctas">
              <a href="#quote">
                <div className="hero-btn-primary">
                  <span>Get a Free Quote</span>
                </div>
              </a>
              <a href="#services">
                <div className="hero-btn-secondary">
                  <span>Explore Services</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="mouse"></div>
          <span>Scroll to explore</span>
        </div>
      </section>
      <section id="services" className="services-section">
        <div className="section-header">
          <span className="section-tag">Our Expertise</span>
          <h2 className="section-title">Comprehensive Moving Solutions</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-box">
              <svg
                fill="none"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle r="3" cx="12" cy="10"></circle>
              </svg>
            </div>
            <h3 className="service-name">Local Moving</h3>
            <p className="service-desc">
              Efficient and reliable moves within your city. We know every
              street, ensuring a smooth transition to your new neighborhood.
            </p>
            <a href="#">
              <div className="service-link">
                <span>
                  {' '}
                  Learn More
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg
                  fill="none"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon-box">
              <svg
                fill="none"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                  <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4"></path>
                </g>
              </svg>
            </div>
            <h3 className="service-name">Long Distance Moving</h3>
            <p className="service-desc">
              Across states or across the country, we manage the logistics so
              you can focus on the destination. Safe and tracked delivery.
            </p>
            <a href="#">
              <div className="service-link">
                <span>
                  {' '}
                  Learn More
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg
                  fill="none"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon-box">
              <svg
                fill="none"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                <path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
              </svg>
            </div>
            <h3 className="service-name">Storage Solutions</h3>
            <p className="service-desc">
              Secure, climate-controlled storage for your valuables. Short-term
              or long-term options available in our modern facilities.
            </p>
            <a href="#">
              <div className="service-link">
                <span>
                  {' '}
                  Learn More
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg
                  fill="none"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="service-card">
            <div className="service-icon-box">
              <svg
                fill="none"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17"></path>
                  <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8"></path>
                </g>
              </svg>
            </div>
            <h3 className="service-name">Packing Services</h3>
            <p className="service-desc">
              Professional packing using high-quality materials. We handle your
              fragile items with the utmost care and precision.
            </p>
            <a href="#">
              <div className="service-link">
                <span>
                  {' '}
                  Learn More
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg
                  fill="none"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-item">
            <div className="trust-icon">
              <svg
                fill="none"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12l2 2l4-4"></path>
              </svg>
            </div>
            <div className="trust-content">
              <span className="trust-label">Fully Licensed</span>
              <p className="trust-text">
                Operating with all required state and federal moving permits.
              </p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <svg
                fill="none"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="trust-content">
              <span className="trust-label">Fully Insured</span>
              <p className="trust-text">
                Your belongings are protected by comprehensive coverage plans.
              </p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <svg
                fill="none"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle r="10" cx="12" cy="12"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="trust-content">
              <span className="trust-label">Experienced Team</span>
              <p className="trust-text">
                Over a decade of expertise in complex moving logistics.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-preview">
        <div className="about-container">
          <div className="about-visual">
            <div className="visual-wrapper">
              <img
                alt="Professional Moving Crew"
                src="https://images.pexels.com/photos/6169048/pexels-photo-6169048.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1300"
                className="about-img-main"
              />
              <div className="experience-badge">
                <span className="badge-num">15+</span>
                <span className="badge-text">Years of Moving Excellence</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-tag">About Mile Stone</span>
            <h2 className="about-title">
              A Professional Moving Experience You Can Trust
            </h2>
            <p className="about-text">
              At Mile Stone Moving &amp; Storage, we believe every move is a
              significant milestone in your life. Our mission is to handle the
              heavy lifting while you focus on the excitement of your new
              beginning.
            </p>
            <p className="about-text">
              We&apos;ve built our reputation on punctuality, transparency, and
              the meticulous care we give to every item we transport. From
              single-room apartments to corporate headquarters, we bring the
              same level of dedication and professionalism.
            </p>
            <ul className="about-list">
              <li>
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="#FF6B00"
                  viewbox="0 0 24 24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  {' '}
                  No Hidden Fees or Surprise Costs
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="#FF6B00"
                  viewbox="0 0 24 24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  {' '}
                  Modern, Clean Fleet of Trucks
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <svg
                  fill="none"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  stroke="#FF6B00"
                  viewbox="0 0 24 24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  {' '}
                  24/7 Customer Support &amp; Tracking
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
            </ul>
            <a href="#contact">
              <div className="about-cta">
                <span>Meet Our Team</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="quote-section">
        <div className="quote-bg-decor"></div>
        <div className="quote-container">
          <div className="quote-header">
            <h2 className="quote-title">Request Your Free Quote</h2>
            <p className="quote-subtitle">
              Get an accurate estimate for your next move in minutes.
            </p>
          </div>
          <form
            data-form-id="6dc72205-fe42-46a3-982c-56fdf4c740cb"
            className="quote-form"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="textinput"
                  required="true"
                  placeholder="John Doe"
                  data-form-field-id="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="textinput"
                  required="true"
                  placeholder="john@example.com"
                  data-form-field-id="email"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="textinput"
                  required="true"
                  placeholder="980-393-7794"
                  data-form-field-id="phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Type</label>
                <select id="service" name="select" data-form-field-id="service">
                  <option value="local">Local Moving</option>
                  <option value="long">Long Distance</option>
                  <option value="storage">Storage Solutions</option>
                  <option value="packing">Packing Services</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from">Moving From (Zip)</label>
                <input
                  type="text"
                  id="from"
                  name="textinput"
                  placeholder="90210"
                  data-form-field-id="from"
                />
              </div>
              <div className="form-group">
                <label htmlFor="to">Moving To (Zip)</label>
                <input
                  type="text"
                  id="to"
                  name="textinput"
                  placeholder="92602"
                  data-form-field-id="to"
                />
              </div>
            </div>
            <div className="full-width form-group">
              <label htmlFor="message">Additional Details</label>
              <textarea
                id="message"
                name="textarea"
                rows="4"
                placeholder="Tell us more about your move..."
                data-form-field-id="message"
              ></textarea>
            </div>
            <button
              id="thq_button_LxCO"
              name="button"
              type="submit"
              data-form-field-id="thq_button_LxCO"
              className="quote-submit"
            >
              Calculate My Quote
            </button>
          </form>
        </div>
      </section>
      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-container">
            <div className="footer-brand">
              <div className="invert nav-logo">
                <img
                  alt="Milestone Moving &amp; Storage Company Logo"
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa&amp;w=200&amp;fit=crop"
                  className="home1-thq-footer-logo-img-elm"
                />
              </div>
              <p className="footer-bio">
                Making moves manageable since 2008. Your trusted partner for
                local and long-distance relocation.
              </p>
              <div className="footer-socials">
                <a href="#">
                  <div aria-label="Facebook">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                        width="20"
                        height="20"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle r="2" cx="4" cy="4"></circle>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <ul>
                <li>
                  <a href="#about">
                    <div>
                      <span>About Us</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <div>
                      <span>Our Services</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <div>
                      <span>Request a Quote</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <span>Track Shipment</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4 className="footer-title">Contact Us</h4>
              <div className="contact-info">
                <div className="info-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="#FF6B00"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.18-2.18a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>980-393-7794</span>
                </div>
                <div className="info-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="#FF6B00"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>contact@milestonestoragemover.com</span>
                </div>
                <div className="info-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="#FF6B00"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <line x1="2" x2="22" y1="12" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>milestonestoragemover.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-container">
            <p>© 2026 Mile Stone Moving &amp; Storage. All rights reserved.</p>
            <p>Licensed &amp; Insured: DOT# 1234567 | MC# 7654321</p>
          </div>
        </div>
      </footer>
      <div className="home1-container21">
        <div className="home1-container22">
          <Script
            html={`<style>
        @keyframes scrollMouse {0% {opacity: 1;
transform: translate(-50%, 0);}
100% {opacity: 0;
transform: translate(-50%, 15px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home1-container23">
        <div className="home1-container24">
          <Script
            html={`<script defer data-name="milestone-logic">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector(".nav-mobile-toggle")
    const navMenu = document.querySelector(".navMenu") // Assuming ID would be used or class

    // Header background change on scroll
    const navBar = document.querySelector(".nav-bar")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navBar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.1)"
        navBar.style.height = "70px"
      } else {
        navBar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)"
        navBar.style.height = "80px"
      }
    })

    // Simple reveal animation for service cards
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    document.querySelectorAll(".service-card, .trust-item").forEach((el) => {
      el.style.opacity = "0"
      el.target ? null : (el.style.transform = "translateY(30px)")
      el.style.transition = "all 0.6s ease-out"
      observer.observe(el)
    })

    // Form submission handling (Prevent default for demo)
    const quoteForm = document.querySelector(".quote-form")
    if (quoteForm) {
      quoteForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const submitBtn = quoteForm.querySelector(".quote-submit")
        const originalText = submitBtn.innerText

        submitBtn.innerText = "Sending Request..."
        submitBtn.style.opacity = "0.7"
        submitBtn.disabled = true

        // Simulate API call
        setTimeout(() => {
          alert("Thank you! Your quote request has been sent. A Mile Stone representative will contact you shortly.")
          quoteForm.reset()
          submitBtn.innerText = originalText
          submitBtn.style.opacity = "1"
          submitBtn.disabled = false
        }, 1500)
      })
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home1
