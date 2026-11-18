const tones = {
  yellow: 'bg-brand text-ink',
  black: 'bg-ink text-white',
  white: 'bg-white text-ink',
  red: 'bg-red-400 text-ink',
  green: 'bg-green-400 text-ink',
}

export default function Badge({ tone = 'yellow', className = '', children }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-brutal border-2 border-ink px-2 py-0.5 text-xs font-bold ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}
