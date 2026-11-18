const palette = ['bg-brand', 'bg-pink-300', 'bg-sky-300', 'bg-green-300', 'bg-orange-300', 'bg-violet-300']

export default function BookCover({ book, className = '' }) {
  const color = palette[Number(book.id) % palette.length]
  return (
    <div className={`flex aspect-[3/4] flex-col justify-between overflow-hidden border-2 border-ink p-3 ${color} ${className}`}>
      <span className="text-5xl font-bold leading-none">{book.title.charAt(0)}</span>
      <span className="line-clamp-3 text-sm font-bold">{book.author}</span>
    </div>
  )
}
