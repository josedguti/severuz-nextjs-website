import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-gold-500 text-neutral-950 hover:bg-gold-600',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  // Check if it's an external link
  const isExternal = props.href.toString().startsWith('http')

  if (isExternal) {
    return (
      <a
        className={className}
        href={props.href.toString()}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
