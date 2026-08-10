import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { CONTACT, FOOTER_SERVICE_LINKS, NAV_LINKS, SITE } from '@/data/site'
import { DEMO_SERVICES } from '@/data/services'

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-950 text-brand-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Logo className="[&_span]:text-white [&_.font-display]:text-white" showSubtitle={false} />
          <p className="mt-2 text-sm text-brand-100/80">{SITE.fullName}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-100/80">{SITE.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {(
              [
                ['Facebook', CONTACT.social.facebook],
                ['LinkedIn', CONTACT.social.linkedin],
                ['Instagram', CONTACT.social.instagram],
                ['YouTube', CONTACT.social.youtube],
              ] as const
            ).map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-brand-100 transition hover:border-accent hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-accent-light">Navigation</h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm text-brand-100/75 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-accent-light">Services (démo)</h3>
          <ul className="mt-4 space-y-2">
            {FOOTER_SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm text-brand-100/75 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            {DEMO_SERVICES.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-sm text-brand-100/75 transition hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-accent-light">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-100/80">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden />
              <a href={CONTACT.phoneHref} className="hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden />
              <a href={CONTACT.emailHref} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden />
              <span>
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </span>
            </li>
          </ul>
          <a
            href={CONTACT.whatsappHref}
            className="mt-4 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-accent hover:bg-white/5"
          >
            WhatsApp : {CONTACT.whatsapp}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-brand-100/50 sm:px-6 lg:px-8">
          {SITE.copyright}
        </p>
      </div>
    </footer>
  )
}
