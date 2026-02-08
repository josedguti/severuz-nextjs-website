import Image from 'next/image'
import clsx from 'clsx'
import logoMark from '@/images/severuz_logo.png'
import logoFull from '@/images/severuz_logo_text.png'

export function Logomark({
  invert = false,
  filled = false,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative transition-opacity duration-300',
        filled ? 'opacity-100' : 'opacity-90 group-hover/logo:opacity-100',
        className,
      )}
      {...props}
    >
      <Image
        src={logoMark}
        alt="Severuz"
        className={clsx('h-12 w-auto', invert && 'brightness-0 invert')}
        unoptimized
      />
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx('relative', fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Image
        src={logoFull}
        alt="Severuz"
        className={clsx(
          'h-20 w-40 transition-opacity duration-300',
          filled ? 'opacity-100' : 'opacity-90 hover:opacity-100',
          invert && 'brightness-0 invert',
        )}
        unoptimized
      />
    </div>
  )
}
