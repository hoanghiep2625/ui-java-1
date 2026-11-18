import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import BookCover from '../components/BookCover'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { books } from '../data/books'

const steps = [
  { n: '1', title: 'Chọn sách', text: 'Tìm trong kho hàng trăm đầu sách đủ thể loại.' },
  { n: '2', title: 'Chọn thời hạn', text: 'Thuê 3, 7 hoặc 14 ngày, giá tính theo ngày.' },
  { n: '3', title: 'Nhận & trả sách', text: 'Thủ thư duyệt đơn, bạn đọc xong thì trả lại.' },
]

export default function Home() {
  const featured = books.filter((b) => b.featured)
  return (
    <div className="flex flex-col gap-16">
      <section className="grid items-center gap-8 rounded-brutal border-2 border-ink bg-brand p-6 shadow-brutal md:grid-cols-2 md:p-10">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl leading-tight sm:text-5xl">MƯỢN SÁCH,<br />ĐỌC THẢ GA!</h1>
          <p className="max-w-md text-lg font-medium">Kho sách đủ thể loại, thuê theo ngày với giá rẻ. Không cần mua, đọc xong trả lại.</p>
          <Button as={Link} to="/books" variant="secondary" className="text-lg">Khám phá ngay</Button>
        </div>
        <div className="flex justify-center gap-3">
          {featured.slice(0, 3).map((b, i) => (
            <BookCover key={b.id} book={b} className={`w-24 shadow-brutal sm:w-32 ${i === 1 ? '-translate-y-4' : ''}`} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl">Sách nổi bật</h2>
          <Link to="/books" className="font-bold underline">Xem tất cả →</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((b) => <BookCard key={b.id} book={b} />)}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-3xl">Cách thuê sách</h2>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {steps.map((s) => (
            <Card key={s.n} className="flex flex-col gap-2 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-brutal border-2 border-ink bg-brand text-xl font-bold shadow-brutal-sm">{s.n}</span>
              <h3 className="text-xl">{s.title}</h3>
              <p>{s.text}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
