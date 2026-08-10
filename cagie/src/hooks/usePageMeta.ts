import { useEffect } from 'react'
import { SITE } from '@/data/site'

type PageMeta = {
  title?: string
  description?: string
  path?: string
  ogImage?: string
}

export function usePageMeta({ title, description, path = '', ogImage }: PageMeta) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE.name}`
      : `${SITE.name} | ${SITE.fullName}`
    document.title = fullTitle

    const desc =
      description ??
      "Site officiel du CAGIE — formations, admissions et vie académique. Informations provisoires en cours de validation."

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', desc)

    const ogTitle = document.querySelector('meta[property="og:title"]') ?? createOg('og:title')
    ogTitle.setAttribute('content', fullTitle)

    const ogDesc = document.querySelector('meta[property="og:description"]') ?? createOg('og:description')
    ogDesc.setAttribute('content', desc)

    const ogUrl = document.querySelector('meta[property="og:url"]') ?? createOg('og:url')
    ogUrl.setAttribute('content', `${window.location.origin}${path}`)

    const ogImg =
      document.querySelector('meta[property="og:image"]') ?? createOg('og:image')
    ogImg.setAttribute('content', ogImage ?? SITE.defaultOgImage)
  }, [title, description, path, ogImage])
}

function createOg(property: string): HTMLMetaElement {
  const el = document.createElement('meta')
  el.setAttribute('property', property)
  document.head.appendChild(el)
  return el
}
