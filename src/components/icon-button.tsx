import type { ComponentProps } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={
        transparent
          ? 'bg-black/10 border-white/10 rounded-md px-1.5 py-1.5'
          : 'bg-white/10 border-white/10 rounded-md px-1.5 py-1.5'
      }
    />
  )
}
