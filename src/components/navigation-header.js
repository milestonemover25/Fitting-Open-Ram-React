import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation-header.css'

const NavigationHeader = (props) => {
  return (
    <div className="navigation-header-container1">
      <nav className="navigation-header">
        <div className="navigation-header__container">
          <Link to="/">
            <div
              aria-label="Milestone Moving Home"
              className="navigation-header__logo"
            >
              <img
                alt="Milestone Moving &amp; Storage Logo"
                src="milestone-moving-storage-logo.png"
                className="navigation-header-thq-navigation-headerlogo-img-elm1"
              />
            </div>
          </Link>
          <ul className="navigation-header__menu">
            <li className="navigation-header__item">
              <Link to="/">
                <div className="navigation-header__link">
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li className="navigation-header__item">
              <a href="Services">
                <div className="navigation-header__link">
                  <span>Services</span>
                </div>
              </a>
            </li>
            <li className="navigation-header__item">
              <a href="Reviews">
                <div className="navigation-header__link">
                  <span>Reviews</span>
                </div>
              </a>
            </li>
            <li className="navigation-header__item">
              <a href="Contact">
                <div className="navigation-header__link">
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-header__actions">
            <button
              id="themeToggle"
              aria-label="Toggle theme"
              className="navigation-header__theme-btn"
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
              <span className="theme-icon-dark">
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
              <div className="navigation-header__cta">
                <span>Track Here</span>
              </div>
            </a>
            <button
              aria-label="Open menu"
              aria-expanded="false"
              className="navigation-header__mobile-toggle"
            >
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="navigation-header__overlay">
        <div className="navigation-header__overlay-header">
          <Link to="/">
            <div className="navigation-header__logo">
              <img
                alt="Milestone Moving &amp; Storage Logo"
                src="milestone-moving-storage-logo.png"
                className="navigation-header-thq-navigation-headerlogo-img-elm2"
              />
            </div>
          </Link>
          <button aria-label="Close menu" className="navigation-header__close">
            <svg
              fill="none"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="navigation-header__overlay-content">
          <ul className="navigation-header__mobile-menu">
            <li>
              <Link to="/">
                <div className="navigation-header__mobile-link">
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <a href="Services">
                <div className="navigation-header__mobile-link">
                  <span>Services</span>
                </div>
              </a>
            </li>
            <li>
              <a href="Reviews">
                <div className="navigation-header__mobile-link">
                  <span>Reviews</span>
                </div>
              </a>
            </li>
            <li>
              <a href="Contact">
                <div className="navigation-header__mobile-link">
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-header__overlay-footer">
            <a href="Track">
              <div className="navigation-header__cta navigation-header__cta--full">
                <span>Track Here</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-header-container2">
        <div className="navigation-header-container3">
          <Script
            html={`<style>
[data-theme="dark"] .theme-icon-light {
  display: none;
}
[data-theme="light"] .theme-icon-dark {
  display: none;
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-header-container4">
        <div className="navigation-header-container5">
          <Script
            html={`<script defer data-name="navigation-header-logic">
(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.querySelector(".navigation-header__mobile-toggle")
    const closeBtn = document.querySelector(".navigation-header__close")
    const overlay = document.querySelector(".navigation-header__overlay")
    const mobileLinks = document.querySelectorAll(".navigation-header__mobile-link")

    const toggleMenu = (state) => {
      overlay.classList.toggle("is-active", state)
      document.body.style.overflow = state ? "hidden" : ""
      mobileToggle.setAttribute("aria-expanded", state)
    }

    mobileToggle.addEventListener("click", () => toggleMenu(true))
    closeBtn.addEventListener("click", () => toggleMenu(false))

    // Close menu when clicking links
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false))
    })

    // Handle escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("is-active")) {
        toggleMenu(false)
      }
    })

    // Header shadow on scroll
    const header = document.querySelector(".navigation-header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.style.padding = "0.5rem 0"
        header.style.boxShadow = "0 10px 40px rgba(0,0,0,0.06)"
      } else {
        header.style.padding = "0.75rem 0"
        header.style.boxShadow = "var(--shadow)"
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

export default NavigationHeader
