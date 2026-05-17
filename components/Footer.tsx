'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Stays', href: '#' },
  { label: 'Destinations', href: '#' },
  { label: 'Experiences', href: '#' },
  { label: 'Offers', href: '#' },
  { label: 'Concierge', href: '#' },
]

const supportLinks = [
  { label: 'Contact', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#F8F6F2',
        borderTop: '1px solid #EFE7DC',
      }}
    >
      {/* ── Main footer body ── */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '72px 80px 64px',
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1.6fr',
          gap: '56px',
          alignItems: 'start',
        }}
      >
        {/* ── Col 1: Logo + mission ── */}
        <div>
          <div style={{ marginBottom: '20px' }}>
            <FooterLogo />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#1F1F1F',
              opacity: 0.55,
              maxWidth: '260px',
              marginBottom: '28px',
            }}
          >
            Curated luxury stays and unforgettable experiences — handpicked for discerning travellers worldwide.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <SocialButton href="#" label="Instagram">
              <InstagramIcon />
            </SocialButton>
            <SocialButton href="#" label="Pinterest">
              <PinterestIcon />
            </SocialButton>
            <SocialButton href="#" label="Twitter / X">
              <XIcon />
            </SocialButton>
            <SocialButton href="#" label="LinkedIn">
              <LinkedInIcon />
            </SocialButton>
          </div>
        </div>

        {/* ── Col 2: Explore nav ── */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B8955B',
              marginBottom: '20px',
            }}
          >
            Explore
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Support ── */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B8955B',
              marginBottom: '20px',
            }}
          >
            Support
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {supportLinks.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 4: Newsletter ── */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B8955B',
              marginBottom: '12px',
            }}
          >
            Stay Inspired
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 300,
              lineHeight: 1.65,
              color: '#1F1F1F',
              opacity: 0.55,
              marginBottom: '24px',
            }}
          >
            Receive curated destinations, exclusive offers, and travel inspiration.
          </p>

          {subscribed ? (
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: '#B8955B',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ fontSize: '16px' }}>✓</span>
              You&rsquo;re on the list. Thank you.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #C8BAA8', paddingBottom: '2px' }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flex: 1,
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: '#1F1F1F',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  padding: '6px 0',
                  letterSpacing: '0.02em',
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 0 6px 12px',
                  color: '#B8955B',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.2s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: '1px solid #EFE7DC',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '20px 80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11.5px',
            fontWeight: 300,
            color: '#1F1F1F',
            opacity: 0.4,
            letterSpacing: '0.04em',
          }}
        >
          &copy; {new Date().getFullYear()} Stayzzee. All rights reserved.
        </p>

        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms', 'Cookies'].map((item) => (
            <Link
              key={item}
              href="#"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11.5px',
                fontWeight: 300,
                color: '#1F1F1F',
                opacity: 0.4,
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.4')}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ── Sub-components ── */

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '13.5px',
        fontWeight: 300,
        color: '#1F1F1F',
        opacity: 0.6,
        textDecoration: 'none',
        letterSpacing: '0.02em',
        transition: 'opacity 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
    >
      {children}
    </Link>
  )
}

function SocialButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '34px',
        height: '34px',
        border: '1px solid #E8E1D8',
        borderRadius: '50%',
        color: '#1F1F1F',
        opacity: 0.55,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1'
        e.currentTarget.style.borderColor = '#B8955B'
        e.currentTarget.style.color = '#B8955B'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '0.55'
        e.currentTarget.style.borderColor = '#E8E1D8'
        e.currentTarget.style.color = '#1F1F1F'
      }}
    >
      {children}
    </a>
  )
}

/* ── Footer logo — same pill badge + wordmark, smaller scale ── */
function FooterLogo() {
  return (
    <svg
      width="144"
      height="38"
      viewBox="0 0 168 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="STAYZZEE"
    >
      <rect x="1" y="1" width="30" height="42" rx="15" fill="none" stroke="#B8955B" strokeWidth="1" />
      <text x="16" y="17" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="13" fontWeight="400" fill="#B8955B">S</text>
      <line x1="8" y1="22" x2="24" y2="22" stroke="#B8955B" strokeWidth="0.75" />
      <text x="16" y="36" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="12" fontWeight="300" fontStyle="italic" fill="#B8955B">z</text>
      <text x="44" y="28" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="17" fontWeight="400" letterSpacing="5" fill="#B8955B">STAYZZEE</text>
    </svg>
  )
}

/* ── Social Icons — thin line SVGs ── */
function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.26-5.33 1.26-5.33s-.32-.64-.32-1.59c0-1.49.86-2.6 1.94-2.6.91 0 1.36.68 1.36 1.5 0 .92-.58 2.28-.89 3.55-.25 1.06.53 1.92 1.57 1.92 1.88 0 3.14-2.4 3.14-5.24 0-2.44-1.66-4.15-4.03-4.15-2.75 0-4.36 2.07-4.36 4.21 0 .83.32 1.73.72 2.22.08.1.09.18.07.28l-.27 1.1c-.04.18-.14.22-.33.13-1.25-.58-2.03-2.42-2.03-3.9 0-3.16 2.3-6.07 6.63-6.07 3.48 0 6.19 2.48 6.19 5.79 0 3.46-2.18 6.24-5.2 6.24-1.02 0-1.97-.53-2.3-1.15l-.62 2.33c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.97.45C17.52 22 22 17.52 22 12S17.52 2 12 2z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
