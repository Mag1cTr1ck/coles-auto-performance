import { useEffect } from 'react'
import { site } from './site'

type Props = {
  title?: string
  description: string
}

export function Seo({ title, description }: Props) {
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
  return null
}
