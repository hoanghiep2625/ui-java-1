import { Link } from 'react-router-dom'
import BookCover from './BookCover'
import Card from './ui/Card'
import StatusBadge from './StatusBadge'
import { formatVnd } from '../data/books'

const fmtDate = (d) => (d ? new Date(d).toLocaleDateString('vi-VN') : '—')

export default function RentalItem({ rental, book }) {
  return (
    <Card className="flex gap-4 p-3 sm:p-4">
      <BookCover book={book} className="w-20 shrink-0 sm:w-24" />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <Link to={`/books/${book.id}`} className="line-clamp-2 break-words text-lg font-bold hover:underline">{book.title}</Link>
          <StatusBadge status={rental.status} />
        </div>
        <p className="truncate text-sm text-ink/70">{book.author}</p>
        <dl className="mt-auto grid grid-cols-3 gap-2 pt-2 text-sm">
          <div><dt className="text-ink/60">Thời hạn</dt><dd className="font-bold">{rental.days} ngày</dd></div>
          <div><dt className="text-ink/60">Tổng tiền</dt><dd className="font-bold">{formatVnd(rental.total)}</dd></div>
          <div><dt className="text-ink/60">Hạn trả</dt><dd className="font-bold">{fmtDate(rental.dueDate)}</dd></div>
        </dl>
      </div>
    </Card>
  )
}
