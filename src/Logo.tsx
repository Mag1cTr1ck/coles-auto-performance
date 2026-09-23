import { features } from './site'

type Props = {
  className?: string
}

export function Logo({ className }: Props) {
  const classes = ['logo', className, features.tires ? '' : 'logo-hide-bar'].filter(Boolean).join(' ')

  return (
    <img
      className={classes}
      src="/media/coles-logo.jpg?v=8"
      alt="Cole's AUTO | MOBILE | TOWING"
    />
  )
}
