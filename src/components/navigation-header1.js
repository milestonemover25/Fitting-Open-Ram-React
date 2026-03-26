import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation-header1.css'

const NavigationHeader1 = (props) => {
  return (
    <div className="navigation-header1-container1">
      <div className="navigation-header1-container2">
        <div className="navigation-header1-container3">
          <Script
            html={`<style>
[data-theme="dark"] .theme-icon-light {
  display: none;
}
[data-theme="dark"] .theme-icon-dark {
  display: block;
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav
        id="main-navigation"
        className="navigation-header1-navigation-header"
      >
        <div className="navigation-header1-navigation-header__container">
          <Link to="/">
            <div
              aria-label="Go to homepage"
              className="navigation-header1-navigation-header__logo"
            >
              <div className="navigation-header1-navigation-header__logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle r="2" cx="17" cy="18"></circle>
                    <circle r="2" cx="7" cy="18"></circle>
                  </g>
                </svg>
              </div>
              <span className="section-title">SwiftMove</span>
            </div>
          </Link>
          <ul role="list" className="navigation-header__links">
            <li>
              <Link to="/">
                <div className="navigation-header1-navigation-header__link">
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <a href="Services">
                <div className="navigation-header1-navigation-header__link">
                  <span>Services</span>
                </div>
              </a>
            </li>
            <li>
              <a href="Reviews">
                <div className="navigation-header1-navigation-header__link">
                  <span>Reviews</span>
                </div>
              </a>
            </li>
            <li>
              <a href="Contact">
                <div className="navigation-header1-navigation-header__link">
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-header1-navigation-header__actions">
            <button
              id="themeToggle"
              aria-label="Toggle theme"
              className="navigation-header1-navigation-header__theme-btn"
            >
              <span className="theme-icon-light">
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
                  <circle r="5" cx="12" cy="12"></circle>
                  <line x1="12" x2="12" y1="1" y2="3"></line>
                  <line x1="12" x2="12" y1="21" y2="23"></line>
                  <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
                  <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
                  <line x1="1" x2="3" y1="12" y2="12"></line>
                  <line x1="21" x2="23" y1="12" y2="12"></line>
                  <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
                  <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
                </svg>
              </span>
              <span className="navigation-header1-thq-theme-icon-dark-elm">
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
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </span>
            </button>
            <a href="Track">
              <div className="navigation-header1-navigation-header__cta">
                <span>Track Here</span>
                <div className="navigation-header__cta-pulse"></div>
              </div>
            </a>
            <button
              id="mobileMenuOpen"
              aria-label="Open navigation menu"
              aria-controls="mobileOverlay"
              aria-expanded="false"
              className="navigation-header1-navigation-header__mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        id="mobileOverlay"
        aria-hidden="true"
        className="navigation-header1-navigation-header__overlay"
      >
        <div className="navigation-header1-navigation-header__overlay-header">
          <Link to="/">
            <div className="navigation-header1-navigation-header__logo">
              <div className="navigation-header1-navigation-header__logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle r="2" cx="17" cy="18"></circle>
                    <circle r="2" cx="7" cy="18"></circle>
                  </g>
                </svg>
              </div>
              <span className="section-title">SwiftMove</span>
            </div>
          </Link>
          <button
            id="mobileMenuClose"
            aria-label="Close navigation menu"
            className="navigation-header__mobile-close"
          >
            <svg
              fill="none"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="navigation-header1-navigation-header__overlay-content">
          <ul role="list" className="navigation-header__mobile-links">
            <li className="navigation-header1-li5">
              <Link to="/">
                <div className="navigation-header1-navigation-header__mobile-link">
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li className="navigation-header1-li6">
              <a href="Services">
                <div className="navigation-header1-navigation-header__mobile-link">
                  <span>Services</span>
                </div>
              </a>
            </li>
            <li className="navigation-header1-li7">
              <a href="Reviews">
                <div className="navigation-header1-navigation-header__mobile-link">
                  <span>Reviews</span>
                </div>
              </a>
            </li>
            <li className="navigation-header1-li8">
              <a href="Contact">
                <div className="navigation-header1-navigation-header__mobile-link">
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-header1-thq-navigation-headermobile-footer-elm navigation-header__mobile-footer">
            <a href="Track">
              <div className="navigation-header1-navigation-header__cta navigation-header1-navigation-header__cta--full">
                <span>Track Here</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-header1-container4">
        <div className="navigation-header1-container5">
          <Script
            html={`<style>
        @keyframes cta-pulse {0% {transform: translate(-50%, -50%) scale(0);
opacity: 0.8;}
100% {transform: translate(-50%, -50%) scale(2);
opacity: 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-header1-container6">
        <div className="navigation-header1-container7">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuOpen = document.getElementById("mobileMenuOpen")
    const mobileMenuClose = document.getElementById("mobileMenuClose")
    const mobileOverlay = document.getElementById("mobileOverlay")
    const body = document.body

    const toggleMenu = (isOpen) => {
      mobileOverlay.classList.toggle("is-active", isOpen)
      mobileMenuOpen.setAttribute("aria-expanded", isOpen)
      mobileOverlay.setAttribute("aria-hidden", !isOpen)

      // Prevent body scroll when menu is open
      if (isOpen) {
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = ""
      }
    }

    mobileMenuOpen.addEventListener("click", () => toggleMenu(true))
    mobileMenuClose.addEventListener("click", () => toggleMenu(false))

    // Close menu on link click
    const mobileLinks = mobileOverlay.querySelectorAll(".navigation-header__mobile-link")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false))
    })

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
        toggleMenu(false)
      }
    })

    // Handle subtle scroll effect for header
    let lastScroll = 0
    const nav = document.getElementById("main-navigation")

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset

      if (currentScroll > 50) {
        nav.style.boxShadow = "var(--shadow)"
        nav.style.padding = "0.5rem 0"
      } else {
        nav.style.boxShadow = "none"
        nav.style.padding = "0"
      }

      lastScroll = currentScroll
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

export default NavigationHeader1
