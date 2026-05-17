'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Destinations', href: '#' },
  { label: 'Hotels', href: '#' },
  { label: 'Experiences', href: '#' },
  { label: 'Privé', href: '#' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #EFE7DC',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo — top left */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          {/* Replace src with /logo.png once the logo file is added to /public */}
          <StayzzeeWordmark />
        </Link>

        {/* Desktop nav — centered */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1F1F1F',
                textDecoration: 'none',
                opacity: 0.75,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
          <Link
            href="#"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1F1F1F',
              textDecoration: 'none',
              opacity: 0.65,
            }}
            className="hidden md:block"
          >
            Sign In
          </Link>
          <Link
            href="#"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              backgroundColor: '#B8955B',
              padding: '10px 24px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a07d4a')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B8955B')}
          >
            Book Now
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '22px', height: '1px', backgroundColor: '#1F1F1F' }} />
            <span style={{ display: 'block', width: '16px', height: '1px', backgroundColor: '#1F1F1F' }} />
            <span style={{ display: 'block', width: '22px', height: '1px', backgroundColor: '#1F1F1F' }} />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #EFE7DC',
            padding: '24px 40px 32px',
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1F1F1F',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid #F8F6F2',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            style={{
              display: 'block',
              marginTop: '20px',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              backgroundColor: '#B8955B',
              padding: '12px 24px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}

/* Inline SVG wordmark — replace with <Image> once logo file is in /public */
function StayzzeeWordmark() {
  return (
    <svg
      width="130"
      height="22"
      viewBox="0 0 130 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="STAYZZEE"
    >
      <text
        x="0"
        y="17"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="18"
        fontWeight="400"
        letterSpacing="5"
        fill="#1F1F1F"
      >
        STAYZZEE
      </text>
    </svg>
  )
}
