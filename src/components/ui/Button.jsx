const variants = {
  primary: 'bg-brand',
  secondary: 'bg-white',
  ghost: 'bg-transparent border-transparent shadow-none hover:bg-brand/40 hover:translate-x-0 hover:translate-y-0',
}

export default function Button({ variant = 'primary', as: Tag = 'button', className = '', ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-brutal border-2 border-ink px-4 py-2 font-bold text-ink shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
