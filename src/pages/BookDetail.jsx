import { Link, useParams } from 'react-router-dom'
import BookCover from '../components/BookCover'
import RentPanel from '../components/RentPanel'
import Badge from '../components/ui/Badge'
import { books, formatVnd } from '../data/books'
import NotFound from './NotFound'

export default function BookDetail() {
  const { id } = useParams()
  const book = books.find((b) => b.id === id)
  if (!book) return <NotFound title="Không tìm thấy sách" backTo="/books" backLabel="Về kho sách" />

  return (
    <div className="flex flex-col gap-6">
      <Link to="/books" className="font-bold underline">← Quay lại kho sách</Link>
      <div className="grid gap-8 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr_300px]">
        <BookCover book={book} className="w-48 shadow-brutal md:w-full" />
        <div className="flex min-w-0 flex-col gap-3">
          <Badge tone="white" className="self-start">{book.category}</Badge>
          <h1 className="break-words text-3xl sm:text-4xl">{book.title}</h1>
          <p className="text-lg">Tác giả: <span className="font-bold">{book.author}</span></p>
          <p className="text-xl font-bold">{formatVnd(book.pricePerDay)}<span className="text-base font-medium">/ngày</span></p>
          <p className="break-words leading-relaxed">{book.description}</p>
        </div>
        <div className="md:col-span-2 lg:col-span-1"><RentPanel book={book} /></div>
      </div>
    </div>
  )
}
