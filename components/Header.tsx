'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Stays', href: '/stays' },
  { label: 'Destinations', href: '#' },
  { label: 'Offers', href: '#' },
  { label: 'Concierge', href: '#' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: '72px',
          backgroundColor: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid #EFE7DC',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <StayzeeLogo />
          </Link>

          {/* ── Desktop nav (centered) ── */}
          <nav
            className="hidden md:flex"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {navLinks.map((l) => (
              <NavLink key={l.label} href={l.href} label={l.label} />
            ))}
          </nav>

          {/* ── Right actions ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>

            {/* Icon buttons — desktop */}
            <button
              aria-label="Saved stays"
              className="hidden md:flex"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: '#1F1F1F', opacity: 0.5 }}
            >
              <HeartIcon />
            </button>
            <button
              aria-label="My account"
              className="hidden md:flex"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: '#1F1F1F', opacity: 0.5 }}
            >
              <UserIcon />
            </button>

            {/* Sign in — desktop */}
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
                alignItems: 'center',
                transition: 'all 0.2s ease',
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

            {/* Hamburger — mobile only */}
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden"
              onClick={() => setOpen(!open)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1F1F1F', opacity: 0.7 }} />
              <span style={{ display: 'block', width: '14px', height: '1.5px', backgroundColor: '#1F1F1F', opacity: 0.7 }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1F1F1F', opacity: 0.7 }} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer — rendered outside header to avoid z-index traps ── */}
      {open && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            zIndex: 199,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #EFE7DC',
            boxShadow: '0 8px 32px rgba(31,31,31,0.08)',
            padding: '20px 24px 28px',
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#1F1F1F',
                opacity: 0.72,
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid #F8F6F2',
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ paddingTop: '20px' }}>
            <Link
              href="#"
              style={{
                display: 'inline-block',
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
    </>
  )
}

/* ── Nav link ── */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '11.5px',
        fontWeight: 400,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#1F1F1F',
        textDecoration: 'none',
        opacity: 0.6,
        transition: 'opacity 0.2s ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
    >
      {label}
    </Link>
  )
}

/* ── STAYZZEE logo image ── */
function StayzeeLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/stayzzee%20logo%201.png"
      alt="STAYZZEE"
      style={{ height: '36px', width: 'auto', display: 'block' }}
    />
  )
}

function HeartIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
