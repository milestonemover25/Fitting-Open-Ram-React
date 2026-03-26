import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home-mile-stone-clone.css'

const HomeMileStoneClone = (props) => {
  return (
    <div className="home-mile-stone-clone-container1">
      <Helmet>
        <title>Home-Mile-Stone-Clone - Fitting Open Ram</title>
        <meta
          property="og:title"
          content="Home-Mile-Stone-Clone - Fitting Open Ram"
        />
        <link
          rel="canonical"
          href="https://fitting-open-ram-ktbft0.teleporthq.site/home-mile-stone-clone"
        />
        <meta
          property="og:url"
          content="https://fitting-open-ram-ktbft0.teleporthq.site/home-mile-stone-clone"
        />
      </Helmet>
      <nav
        data-role="main-navigation"
        className="home-mile-stone-clone-thq-main-nav-elm"
      >
        <div className="home-mile-stone-clone-thq-main-navcontainer-elm">
          <Link
            to="/"
            data-action="nav-logo"
            className="home-mile-stone-clone-navlink1"
          >
            <div className="home-mile-stone-clone-thq-main-navlogo-elm">
              <div className="home-mile-stone-clone-thq-main-navlogo-text-elm">
                <img
                  alt="Mile Stone Moving - Blue Truck with Orange Speed Lines and House Icon"
                  src="https://i.imgur.com/placeholder-truck-logo.png"
                  className="home-mile-stone-clone-thq-nav-logo-elm nav-logo"
                />
                <div className="home-mile-stone-clone-thq-main-navlogo-brand-elm">
                  <span className="home-mile-stone-clone-thq-main-navlogo-top-elm">
                    MILE STONE
                  </span>
                  <span className="home-mile-stone-clone-thq-main-navlogo-bottom-elm">
                    MOVER
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <div
            data-role="nav-links"
            className="home-mile-stone-clone-thq-main-navlinks-elm"
          >
            <Link
              to="/"
              data-action="nav-home"
              className="home-mile-stone-clone-navlink2"
            >
              <div className="main-nav__link main-nav__link--active">
                <span>Home</span>
              </div>
            </Link>
            <a
              href="#services"
              data-action="nav-services"
              className="home-mile-stone-clone-link1"
            >
              <div className="main-nav__link">
                <span>Services</span>
              </div>
            </a>
            <a
              href="#reviews"
              data-action="nav-reviews"
              className="home-mile-stone-clone-link2"
            >
              <div className="main-nav__link">
                <span>Reviews</span>
              </div>
            </a>
            <a
              href="#contact"
              data-action="nav-contact"
              className="home-mile-stone-clone-link3"
            >
              <div className="main-nav__link">
                <span>Contact</span>
              </div>
            </a>
          </div>
          <a
            href="#track"
            data-action="track-btn"
            className="home-mile-stone-clone-link4"
          >
            <div className="main-nav__btn">
              <span>Track Here</span>
            </div>
          </a>
        </div>
      </nav>
      <div className="home-mile-stone-clone-container2">
        <div className="home-mile-stone-clone-container3">
          <Script
            html={`<style>
section {
  padding: 100px 0;
  overflow: hidden;
}
@media (max-width: 991px) {
section {
  padding: 60px 0;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section className="home---mile-stone-clone-hero-section">
        <div className="hero-section__background">
          <img
            alt="Large professional moving truck on highway - U-Haul sized box truck for moving services"
            src="https://images.pexels.com/photos/5696170/pexels-photo-5696170.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-section__img"
          />
          <div className="hero-section__overlay"></div>
        </div>
        <div className="hero-section__container">
          <div className="hero-section__content">
            <h1 className="hero-section__title">
              <span>
                {' '}
                Your Trusted Partner in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-mile-stone-clone-thq-hero-sectionhighlight-elm">
                Every Milestone
              </span>
            </h1>
            <p className="hero-section__subtitle">
              Providing professional, reliable, and stress-free moving services
              across the country. Let us handle the heavy lifting while you
              focus on your new beginning.
            </p>
            <div className="hero-section__actions">
              <a href="#contact">
                <div className="hero-section__btn hero-section__btn--primary">
                  <span>Get a Free Quote</span>
                </div>
              </a>
              <a href="tel:8001234567">
                <div className="hero-section__btn hero-section__btn--secondary">
                  <span className="hero-section__icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <span>
                    {' '}
                    (800) 123-4567
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-section__badge-container">
            <div className="hero-section__badge">
              <span className="hero-section__badge-number">15+</span>
              <span className="hero-section__badge-text">
                Years of Excellence
              </span>
            </div>
            <div className="hero-section__badge">
              <span className="hero-section__badge-number">10k+</span>
              <span className="hero-section__badge-text">Moves Completed</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="home---mile-stone-clone-services-section"
      >
        <div className="services-section__container">
          <div className="services-section__header">
            <h2 className="services-section__title">
              Our Comprehensive Moving Services
            </h2>
            <p className="services-section__lead">
              Tailored solutions for every type of move, ensuring your
              belongings reach their destination safely.
            </p>
          </div>
          <div className="services-section__grid">
            <div className="services-section__card">
              <div className="services-section__card-icon">
                <img
                  alt="Freight shipping truck transporting goods"
                  src="https://images.pexels.com/photos/5696170/pexels-photo-5696170.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  className="home-mile-stone-clone-image1"
                />
              </div>
              <h3 className="services-section__card-title">Freight Shipping</h3>
              <p className="services-section__card-text">
                Reliable freight shipping solutions for businesses and
                individuals, with nationwide coverage and real-time tracking.
              </p>
            </div>
            <div className="services-section__card">
              <div className="services-section__card-icon">
                <img
                  alt="Warehouse storage with organized shelves"
                  src="https://images.pexels.com/photos/5860937/pexels-photo-5860937.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  className="home-mile-stone-clone-image2"
                />
              </div>
              <h3 className="services-section__card-title">
                Warehouse Storage
              </h3>
              <p className="services-section__card-text">
                Secure warehouse storage facilities with climate control, 24/7
                monitoring, and flexible short or long-term options.
              </p>
            </div>
            <div className="services-section__card">
              <div className="services-section__card-icon">
                <img
                  alt="Professional packing fragile glassware"
                  src="https://images.pexels.com/photos/7464231/pexels-photo-7464231.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  className="home-mile-stone-clone-image3"
                />
              </div>
              <h3 className="services-section__card-title">Packing Services</h3>
              <p className="services-section__card-text">
                Our professional packers use high-quality materials to secure
                everything from fragile glassware to heavy furniture.
              </p>
            </div>
            <div className="services-section__card">
              <div className="services-section__card-icon">
                <img
                  alt="Vehicle transport trucks fleet"
                  src="https://images.pexels.com/photos/35996049/pexels-photo-35996049.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  className="home-mile-stone-clone-image4"
                />
              </div>
              <h3 className="services-section__card-title">
                Vehicle Transport
              </h3>
              <p className="services-section__card-text">
                Safe and reliable vehicle transport for cars, motorcycles, and
                specialty vehicles with door-to-door delivery service.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-section__container">
          <div className="about-section__grid">
            <div className="about-section__image-group">
              <div className="about-section__img-wrapper about-section__img-wrapper--main">
                <img
                  alt="Moving Team"
                  src="https://images.pexels.com/photos/59596/pexels-photo-59596.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
                  className="about-section__img"
                />
              </div>
              <div className="about-section__img-wrapper about-section__img-wrapper--sub">
                <img
                  alt="Our Fleet"
                  src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=300"
                  className="about-section__img"
                />
              </div>
              <div className="about-section__experience">
                <p className="about-section__exp-num">15</p>
                <p className="about-section__exp-text">Years of Trust</p>
              </div>
            </div>
            <div className="about-section__content">
              <span className="about-section__label">
                About Milestone Movers
              </span>
              <h2 className="about-section__title">
                Redefining the Moving Experience
              </h2>
              <p className="about-section__text">
                At Milestone Movers, we believe every move is a significant life
                event. Founded on the principles of integrity, reliability, and
                exceptional service, we have spent over 15 years helping
                thousands of families and businesses transition to their next
                chapter.
              </p>
              <p className="about-section__text">
                Our team consists of background-checked, highly trained
                professionals who treat your possessions as if they were their
                own. We don&apos;t just move boxes; we move lives.
              </p>
              <ul className="about-section__list">
                <li className="about-section__list-item">
                  <span className="about-section__list-icon">✓</span>
                  <span>
                    {' '}
                    Fully Licensed &amp; Insured
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="about-section__list-item">
                  <span className="about-section__list-icon">✓</span>
                  <span>
                    {' '}
                    Transparent Upfront Pricing
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="about-section__list-item">
                  <span className="about-section__list-icon">✓</span>
                  <span>
                    {' '}
                    Local &amp; Long Distance Experts
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="about-section__list-item">
                  <span className="about-section__list-icon">✓</span>
                  <span>
                    {' '}
                    24/7 Customer Support
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <a href="#quote">
                <div className="about-section__cta">
                  <span>Learn More About Us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="countries-section">
        <div className="home-mile-stone-clone-thq-countries-sectioncontainer-elm">
          <div className="home-mile-stone-clone-thq-countries-sectionheader-elm">
            <h2 className="home-mile-stone-clone-thq-countries-sectiontitle-elm">
              Countries We Serve
            </h2>
            <p className="home-mile-stone-clone-thq-countries-sectionlead-elm">
              We provide international moving services to these major
              destinations worldwide.
            </p>
          </div>
          <div className="home-mile-stone-clone-thq-countries-sectiongrid-elm">
            <div className="countries-section__card">
              <div className="countries-section__flag">
                <img
                  alt="USA Map"
                  src="us map.png"
                  className="countries-section__flag-img"
                />
              </div>
              <h3 className="countries-section__country-name">USA</h3>
              <div className="countries-section__country-display">
                <span>USA</span>
              </div>
            </div>
            <div className="countries-section__card">
              <div className="countries-section__flag">
                <img
                  alt="UK Map"
                  src="uk map.png"
                  className="countries-section__flag-img"
                />
              </div>
              <h3 className="countries-section__country-name">UK</h3>
              <div className="countries-section__country-display">
                <span>United Kingdom</span>
              </div>
            </div>
            <div className="countries-section__card">
              <div className="countries-section__flag">
                <img
                  alt="Canada Map"
                  src="canada map.png"
                  className="countries-section__flag-img"
                />
              </div>
              <h3 className="countries-section__country-name">Canada</h3>
              <div className="countries-section__country-display">
                <span>Canada</span>
              </div>
            </div>
            <div className="countries-section__card">
              <div className="countries-section__flag">
                <img
                  alt="Australia Map"
                  src="austrailia map.png"
                  className="countries-section__flag-img"
                />
              </div>
              <h3 className="countries-section__country-name">Australia</h3>
              <div className="countries-section__country-display">
                <span>Australia</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="testimonials-section">
        <div className="testimonials-section__container">
          <div className="testimonials-section__header">
            <h2 className="testimonials-section__title">
              What Our Clients Say
            </h2>
            <p className="testimonials-section__lead">
              Real stories from real people who trusted us with their big move.
            </p>
          </div>
          <div className="testimonials-section__grid">
            <div className="testimonials-section__card">
              <div className="testimonials-section__quote-icon">
                <span>&quot;</span>
              </div>
              <p className="testimonials-section__text">
                The crew from Milestone was incredible. They arrived on time,
                were extremely polite, and handled my antique piano with such
                care. Best moving experience I&apos;ve ever had!
              </p>
              <div className="testimonials-section__user">
                <img
                  alt="Sarah Johnson - Professional headshot of a businesswoman"
                  src="https://images.pexels.com/photos/7468194/pexels-photo-7468194.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  className="testimonials-section__avatar"
                />
                <div className="testimonials-section__info">
                  <h4 className="testimonials-section__name">Sarah Johnson</h4>
                  <p className="testimonials-section__location">
                    Residential Move, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-section__card">
              <div className="testimonials-section__quote-icon">
                <span>&quot;</span>
              </div>
              <p className="testimonials-section__text">
                Relocating our entire office of 50 employees was a daunting
                task. Milestone Movers made it look easy. They worked through
                the weekend so we could be open on Monday.
              </p>
              <div className="testimonials-section__user">
                <img
                  alt="David Chen - Professional headshot of a businessman"
                  src="https://images.pexels.com/photos/6572210/pexels-photo-6572210.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  className="testimonials-section__avatar"
                />
                <div className="testimonials-section__info">
                  <h4 className="testimonials-section__name">David Chen</h4>
                  <p className="testimonials-section__location">
                    Office Relocation, Chicago IL
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-section__card">
              <div className="testimonials-section__quote-icon">
                <span>&quot;</span>
              </div>
              <p className="testimonials-section__text">
                Moving across the country is stressful, but their tracking
                system and constant communication kept me at ease. Everything
                arrived on time and without a single scratch.
              </p>
              <div className="testimonials-section__user">
                <img
                  alt="Marcus Thompson - Professional headshot of a businessman"
                  src="https://images.pexels.com/photos/4183527/pexels-photo-4183527.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  className="testimonials-section__avatar"
                />
                <div className="testimonials-section__info">
                  <h4 className="testimonials-section__name">
                    Marcus Thompson
                  </h4>
                  <p className="testimonials-section__location">
                    Long Distance Move, NY to CA
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-section__card">
              <div className="testimonials-section__quote-icon">
                <span>&quot;</span>
              </div>
              <p className="testimonials-section__text">
                As a senior citizen, I was worried about moving after 30 years
                in the same home. The team was patient, respectful, and helped
                me pack everything with care. They even helped set up my new
                place!
              </p>
              <div className="testimonials-section__user">
                <img
                  alt="Elena Rodriguez - Professional headshot of a mature businesswoman"
                  src="https://images.pexels.com/photos/4797690/pexels-photo-4797690.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  className="testimonials-section__avatar"
                />
                <div className="testimonials-section__info">
                  <h4 className="testimonials-section__name">
                    Elena Rodriguez
                  </h4>
                  <p className="testimonials-section__location">
                    Senior Move, Miami FL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="locations-section">
        <div className="locations-section__container">
          <div className="locations-section__grid">
            <div className="home-mile-stone-clone-thq-locations-sectioncontent-elm locations-section__content"></div>
            <div className="locations-section__map-wrapper">
              <div className="locations-section__map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967486.638426976!2d-104.7551689!3d39.828175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  title="Milestone Logistics - USA Headquarters"
                  width="100%"
                  height="500"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  allowFullScreen="true"
                  className="home-mile-stone-clone-thq-locations-sectionmap-iframe-elm"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-section__container">
          <div className="contact-section__card">
            <div className="contact-section__grid">
              <div className="contact-section__info">
                <h2 className="contact-section__title">
                  Get Your Free Estimate
                </h2>
                <p className="contact-section__text">
                  Ready to move? Fill out the form and our logistics experts
                  will provide a customized quote within 24 hours.
                </p>
                <div className="contact-section__contact-links">
                  <div className="contact-section__link-item">
                    <span className="contact-section__link-icon">📞</span>
                    <div>
                      <p className="contact-section__link-label">
                        Call Us Toll-Free
                      </p>
                      <p className="contact-section__link-value">
                        1-800-MILESTONE
                      </p>
                    </div>
                  </div>
                  <div className="contact-section__link-item">
                    <span className="contact-section__link-icon">✉️</span>
                    <div>
                      <p className="contact-section__link-label">
                        Email Support
                      </p>
                      <p className="contact-section__link-value">
                        moves@milestonemover.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <form
                action="https://formspree.io/f/xpqozwvd"
                method="POST"
                data-form-id="ab175d1a-09a3-40ba-8088-1f9193e5b9c2"
                className="contact-section__form"
              >
                <input
                  type="hidden"
                  id="thq__next_bMCI"
                  name="_next"
                  value="/thank-you"
                  data-form-field-id="thq__next_bMCI"
                  className="input"
                />
                <div className="contact-section__form-group">
                  <label htmlFor="full-name" className="contact-section__label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="name"
                    required="true"
                    placeholder="John Doe"
                    data-form-field-id="full-name"
                    className="contact-section__input"
                  />
                </div>
                <div className="contact-section__form-row">
                  <div className="contact-section__form-group">
                    <label htmlFor="email" className="contact-section__label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required="true"
                      placeholder="john@example.com"
                      data-form-field-id="email"
                      className="contact-section__input"
                    />
                  </div>
                  <div className="contact-section__form-group">
                    <label htmlFor="phone" className="contact-section__label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required="true"
                      placeholder="(555) 000-0000"
                      data-form-field-id="phone"
                      className="contact-section__input"
                    />
                  </div>
                </div>
                <div className="contact-section__form-row">
                  <div className="contact-section__form-group">
                    <label
                      htmlFor="move-from"
                      className="contact-section__label"
                    >
                      Moving From (Zip)
                    </label>
                    <input
                      type="text"
                      id="move-from"
                      name="move_from"
                      required="true"
                      placeholder="Origin Zip"
                      data-form-field-id="move-from"
                      className="contact-section__input"
                    />
                  </div>
                  <div className="contact-section__form-group">
                    <label htmlFor="move-to" className="contact-section__label">
                      Moving To (Zip)
                    </label>
                    <input
                      type="text"
                      id="move-to"
                      name="move_to"
                      required="true"
                      placeholder="Destination Zip"
                      data-form-field-id="move-to"
                      className="contact-section__input"
                    />
                  </div>
                </div>
                <div className="contact-section__form-group">
                  <label htmlFor="move-type" className="contact-section__label">
                    Service Type
                  </label>
                  <select
                    id="move-type"
                    name="move_type"
                    data-form-field-id="move-type"
                    className="contact-section__input"
                  >
                    <option value="residential">Residential Move</option>
                    <option value="commercial">Commercial Move</option>
                    <option value="long-distance">Long Distance</option>
                    <option value="packing">Packing Only</option>
                  </select>
                </div>
                <button
                  id="thq_button_XLDH"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_XLDH"
                  className="contact-section__submit"
                >
                  Request My Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="home-mile-stone-clone-container6">
        <div className="home-mile-stone-clone-container7">
          <Script
            html={`<style>
        @keyframes pulse {0% {transform: scale(1);
box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7);}
70% {transform: scale(1.2);
box-shadow: 0 0 0 15px rgba(255, 107, 0, 0);}
100% {transform: scale(1);
box-shadow: 0 0 0 0 rgba(255, 107, 0, 0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-mile-stone-clone-container8">
        <div className="home-mile-stone-clone-container9">
          <Script
            html={`<script defer data-name="milestone-effects">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    // Simple intersection observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Apply initial styles and observe elements
    const revealElements = [...document.querySelectorAll(".services-section__card"), ...document.querySelectorAll(".testimonials-section__card"), document.querySelector(".about-section__content"), document.querySelector(".about-section__image-group")]

    revealElements.forEach((el) => {
      if (el) {
        el.style.opacity = "0"
        el.style.transform = "translateY(30px)"
        el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
        observer.observe(el)
      }
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })

    // Form Submission Mockup
    const contactForm = document.querySelector(".contact-section__form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const submitBtn = contactForm.querySelector("button")
        const originalText = submitBtn.innerText

        submitBtn.innerText = "Sending..."
        submitBtn.disabled = true

        setTimeout(() => {
          submitBtn.innerText = "Quote Request Sent!"
          submitBtn.style.backgroundColor = "#28a745"
          contactForm.reset()

          setTimeout(() => {
            submitBtn.innerText = originalText
            submitBtn.style.backgroundColor = ""
            submitBtn.disabled = false
          }, 3000)
        }, 1500)
      })
    }

    // Parallax effect for hero background
    window.addEventListener("scroll", () => {
      const heroImg = document.querySelector(".hero-section__img")
      if (heroImg) {
        const scrollValue = window.scrollY
        heroImg.style.transform = \`translateY(\${scrollValue * 0.4}px)\`
      }
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

export default HomeMileStoneClone
