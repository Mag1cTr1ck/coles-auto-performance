type Props = {
  className?: string
}

export function Logo({ className }: Props) {
  return (
    <img
      className={className ? `logo ${className}` : 'logo'}
      src="/media/coles-logo.jpg?v=7"
      alt="Cole's AUTO | MOBILE | TOWING | TIRES"
    />
  )
}
