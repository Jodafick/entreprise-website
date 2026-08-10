import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'
import { usePageMeta } from '@/hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta({
    title: 'Page introuvable',
    description: 'La page demandée n’existe pas.',
  })

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-[4.25rem] text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-brand-900">Page introuvable</h1>
      <p className="mt-3 max-w-md text-muted">Le lien est peut-être incorrect ou la page a été déplacée.</p>
      <Button to="/" className="mt-8">
        Retour à l’accueil
      </Button>
      <Link to="/contact" className="mt-4 text-sm text-brand-800 hover:underline">
        Contact
      </Link>
    </div>
  )
}
