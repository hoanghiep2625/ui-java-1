import { Link } from 'react-router-dom'
import BookCover from './BookCover'
import Badge from './ui/Badge'
import { formatVnd } from '../data/books'

export default function BookCard({ book }) {
  return (
    <Link
      to={`/books/${book.id}`}
      className="group flex flex-col overflow-hidden rounded-brutal border-2 border-ink bg-white shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm"
    >
      <BookCover book={book} className="border-0 border-b-2" />
      <div className="flex flex-1 flex-col gap-1 p-3">
        <Badge tone="white" className="self-start">{book.category}</Badge>
        <h3 className="line-clamp-2 break-words text-base">{book.title}</h3>
        <p className="truncate text-sm text-ink/70">{book.author}</p>
        <p className="mt-auto pt-2 font-bold">{formatVnd(book.pricePerDay)}<span className="text-sm font-medium">/ngày</span></p>
      </div>
    </Link>
  )
}
