import { IconFacebook, IconInstagram } from './icons'
import { site } from './site'

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={['social-links', className].filter(Boolean).join(' ')}>
      <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Cole’s Auto on Instagram">
        <IconInstagram className="icon" />
      </a>
      <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Cole’s Auto on Facebook">
        <IconFacebook className="icon" />
      </a>
    </div>
  )
}
