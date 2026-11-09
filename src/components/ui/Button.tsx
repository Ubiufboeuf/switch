import type { ComponentChildren, HTMLAttributes } from 'preact'

const variants = {
  primary: 'border-transparent bg-[var(--ui-accent)] text-[#101722] hover:bg-[var(--ui-accent-hover)]',
  secondary: 'border-transparent bg-[var(--ui-surface)] text-[var(--ui-text)] hover:bg-[var(--ui-surface-hover)]',
  outline: 'border-[var(--ui-border)] bg-transparent text-[var(--ui-text)] hover:bg-[var(--ui-surface)]',
  ghost: 'border-transparent bg-transparent text-[var(--ui-text)] hover:bg-[var(--ui-surface)]',
  danger: 'border-transparent bg-[var(--ui-danger)] text-white hover:bg-[var(--ui-danger-hover)]'
} as const

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-6 text-base'
} as const

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  fullWidth?: boolean
  selected?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'button'
}

export function Button ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  selected = false,
  loading = false,
  disabled = false,
  type = 'button',
  class: className = '',
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex shrink-0 items-center justify-center gap-2',
    'rounded-xl border font-medium select-none',
    'transition-[background-color,border-color,transform,opacity] duration-150',
    'outline-none',
    'active:scale-[0.97]',
    'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--ui-focus)]',
    'data-[selected=true]:ring-2 data-[selected=true]:ring-[var(--ui-focus)]',
    'disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      {...props as any}
      type={type}
      class={classes}
      disabled={disabled || loading}
      data-selected={selected ? 'true' : undefined}
      aria-busy={loading || undefined}
    >
      {loading && (
        <span
          aria-hidden="true"
          class="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      )}
      {children}
    </button>
  )
}
