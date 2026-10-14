import { useEffect } from 'react'
import { site } from './site'

type Props = {
  title?: string
  description: string
  jsonLd?: Record<string, unknown>
}

export function Seo({ title, description, jsonLd }: Props) {
  const fullTitle = title ? `${title} | ${site.brandTitle}` : site.brandTitle

  useEffect(() => {
    document.title = fullTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', fullTitle)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)
  }, [fullTitle, description])

  if (!jsonLd) return null
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  )
}
