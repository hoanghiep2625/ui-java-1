import { Link, useParams } from 'react-router-dom'
import BookCover from '../components/BookCover'
import RentPanel from '../components/RentPanel'
import BookCard from '../components/BookCard'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { books, formatVnd } from '../data/books'
import { policies } from '../data/content'
import NotFound from './NotFound'

export default function BookDetail() {
  const { id } = useParams()
  const book = books.find((b) => b.id === id)
  if (!book) return <NotFound title="Không tìm thấy sách" backTo="/books" backLabel="Về kho sách" />

  const related = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4)
  const info = [
    ['Tác giả', book.author],
    ['Nhà xuất bản', book.publisher],
    ['Năm xuất bản', book.year],
    ['Số trang', book.pages],
    ['Thể loại', book.category],
    ['Tình trạng sách', book.condition],
  ]

  return (
    <div className="flex flex-col gap-6">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-medium">
        <Link to="/" className="underline">Trang chủ</Link><span>/</span>
        <Link to="/books" className="underline">Kho sách</Link><span>/</span>
        <Link to={`/books?category=${encodeURIComponent(book.category)}`} className="underline">{book.category}</Link><span>/</span>
        <span className="line-clamp-1 font-bold">{book.title}</span>
      </nav>
      <div className="grid gap-8 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr_300px]">
        <BookCover book={book} className="w-48 shadow-brutal md:w-full" />
        <div className="flex min-w-0 flex-col gap-3">
          <Badge tone="white" className="self-start">{book.category}</Badge>
          <h1 className="break-words text-3xl sm:text-4xl">{book.title}</h1>
          <p className="text-lg">Tác giả: <span className="font-bold">{book.author}</span></p>
          <p className="text-xl font-bold">{formatVnd(book.pricePerDay)}<span className="text-base font-medium">/ngày</span></p>
          <p className="text-sm font-medium text-ink/70">{book.rating}/5 điểm · {book.rentCount} lượt thuê</p>
          <p className="break-words leading-relaxed">{book.description}</p>
        </div>
        <div className="md:col-span-2 lg:col-span-1 lg:sticky lg:top-36 lg:self-start"><RentPanel book={book} /></div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-5">
          <h2 className="mb-3 text-xl">Thông tin sách</h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
            {info.map(([k, v]) => (<div key={k} className="contents"><dt className="text-ink/70">{k}</dt><dd className="break-words font-bold">{v}</dd></div>))}
          </dl>
        </Card>
        <Card className="bg-brand/20 p-5">
          <h2 className="mb-3 text-xl">Chính sách thuê</h2>
          <ul className="flex flex-col gap-2">
            {policies.map((t) => (<li key={t} className="flex gap-2"><span className="font-bold">+</span>{t}</li>))}
          </ul>
        </Card>
      </div>

      {related.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl">Cùng thể loại</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {related.map((b) => <BookCard key={b.id} book={b} />)}
          </div>
        </section>
      )}
    </div>
  )
}
