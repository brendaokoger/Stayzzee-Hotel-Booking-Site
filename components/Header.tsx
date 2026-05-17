'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Stays', href: '#' },
  { label: 'Destinations', href: '#' },
  { label: 'Offers', href: '#' },
  { label: 'Concierge', href: '#' },
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
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #EFE7DC',
        height: '72px',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 48px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* ── Logo top-left ── */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <StayzeeLogo />
        </Link>

        {/* ── Desktop nav — absolutely centered ── */}
        <nav
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '44px',
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* ── Right side ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
          {/* Heart */}
          <button
            aria-label="Saved"
            className="hidden md:flex"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#1F1F1F', opacity: 0.55, lineHeight: 1 }}
          >
            <HeartIcon />
          </button>

          {/* User */}
          <button
            aria-label="Account"
            className="hidden md:flex"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#1F1F1F', opacity: 0.55, lineHeight: 1 }}
          >
            <UserIcon />
          </button>

          {/* Sign In — gold outlined */}
          <Link
            href="#"
            className="hidden md:inline-flex"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#B8955B',
              border: '1px solid #B8955B',
              padding: '9px 20px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B8955B'
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#B8955B'
            }}
          >
            Sign In
          </Link>

          {/* Hamburger */}
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            <span style={{ display: 'block', width: '22px', height: '1px', backgroundColor: '#1F1F1F', opacity: 0.7 }} />
            <span style={{ display: 'block', width: '15px', height: '1px', backgroundColor: '#1F1F1F', opacity: 0.7 }} />
            <span style={{ display: 'block', width: '22px', height: '1px', backgroundColor: '#1F1F1F', opacity: 0.7 }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #EFE7DC',
            padding: '24px 48px 32px',
            zIndex: 99,
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
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1F1F1F',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid #F8F6F2',
                opacity: 0.75,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px' }}>
            <Link
              href="#"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#B8955B',
                border: '1px solid #B8955B',
                padding: '11px 24px',
                textDecoration: 'none',
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

/* ── Sub-components ── */

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#1F1F1F',
        textDecoration: 'none',
        opacity: 0.65,
        transition: 'opacity 0.2s ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.65')}
    >
      {label}
    </Link>
  )
}

/* ── STAYZZEE logo SVG — matches the uploaded horizontal lockup ── */
function StayzeeLogo() {
  return (
    <svg
      width="168"
      height="44"
      viewBox="0 0 168 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="STAYZZEE"
    >
      {/* Oval badge */}
      <rect x="1" y="1" width="30" height="42" rx="15" fill="none" stroke="#B8955B" strokeWidth="1" />
      {/* S */}
      <text x="16" y="17" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="13" fontWeight="400" fill="#B8955B">S</text>
      {/* Divider line */}
      <line x1="8" y1="22" x2="24" y2="22" stroke="#B8955B" strokeWidth="0.75" />
      {/* z */}
      <text x="16" y="36" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="12" fontWeight="300" fontStyle="italic" fill="#B8955B">z</text>
      {/* STAYZZEE wordmark */}
      <text x="44" y="28" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="17" fontWeight="400" letterSpacing="5" fill="#B8955B">STAYZZEE</text>
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
