export default function Card({ className = '', children, ...props }) {
  return (
    <div className={`rounded-brutal border-2 border-ink bg-white shadow-brutal ${className}`} {...props}>
      {children}
    </div>
  )
}
