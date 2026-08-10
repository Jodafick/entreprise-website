import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { NAV_LINKS } from '@/data/site'
import { cn } from '@/lib/utils'
import { useScrollLock } from '@/hooks/useScrollLock'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useScrollLock(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-border/80 bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo compact={false} showSubtitle />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'text-brand-900 bg-brand-50'
                    : 'text-muted hover:text-brand-900 hover:bg-surface',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button to="/contact" size="sm">
            Nous contacter
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-brand-900 transition hover:bg-brand-50 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'fixed inset-0 top-[4.25rem] z-40 xl:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            'absolute inset-0 bg-ink/40 transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
        />
        <nav
          className={cn(
            'absolute right-0 top-0 flex h-[calc(100vh-4.25rem)] w-full max-w-sm flex-col border-l border-border bg-white p-6 shadow-xl transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-brand-900 hover:bg-brand-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-border pt-6">
            <Button to="/contact" className="w-full" onClick={() => setOpen(false)}>
              Nous contacter
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
