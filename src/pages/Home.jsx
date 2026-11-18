import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import BookCover from '../components/BookCover'
import SearchBar from '../components/SearchBar'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { books, categories, formatVnd, hotBooks, newBooks } from '../data/books'
import { faqs, plans, reviews, stats, ticker } from '../data/content'

const steps = [
  { n: '1', title: 'Chọn sách', text: 'Tìm trong kho hàng trăm đầu sách đủ thể loại.' },
  { n: '2', title: 'Chọn thời hạn', text: 'Thuê 3, 7 hoặc 14 ngày, giá tính theo ngày.' },
  { n: '3', title: 'Nhận & trả sách', text: 'Thủ thư duyệt đơn, bạn đọc xong thì trả lại.' },
]
const catColors = ['bg-brand', 'bg-pink-300', 'bg-sky-300', 'bg-green-300', 'bg-orange-300', 'bg-violet-300']
const grid = 'grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4'

function Section({ title, sub, to, children }) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl">{title}</h2>
          {sub && <p className="mt-1 text-ink/70">{sub}</p>}
        </div>
        {to && <Link to={to} className="shrink-0 font-bold underline">Xem tất cả →</Link>}
      </div>
      {children}
    </section>
  )
}

export default function Home() {
  const featured = books.filter((b) => b.featured)
  const spotlight = hotBooks[0]
  const top = hotBooks.slice(0, 5)
  const popularPrice = 4000

  return (
    <div className="flex flex-col gap-16">
      {/* Ticker */}
      <div className="-mt-8 overflow-hidden border-2 border-ink bg-ink py-2 text-white" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-bold">
          {[...ticker, ...ticker].map((t, i) => <span key={i}>{t} <span className="text-brand">/</span></span>)}
        </div>
      </div>

      {/* Hero */}
      <section className="grid items-center gap-8 rounded-brutal border-2 border-ink bg-brand p-6 shadow-brutal md:grid-cols-2 md:p-10">
        <div className="flex flex-col items-start gap-4">
          <Badge tone="black">Thuê sách theo ngày</Badge>
          <h1 className="text-4xl leading-tight sm:text-5xl">MƯỢN SÁCH,<br />ĐỌC THẢ GA!</h1>
          <p className="max-w-md text-lg font-medium">Kho sách đủ thể loại, thuê theo ngày với giá rẻ. Không cần mua, đọc xong trả lại.</p>
          <SearchBar size="lg" className="w-full max-w-md" />
          <p className="text-sm font-medium">Gợi ý: {['Nhà giả kim', 'Harari', 'Hawking'].map((k) => <Link key={k} to={`/books?q=${encodeURIComponent(k)}`} className="mr-2 font-bold underline">{k}</Link>)}</p>
        </div>
        <div className="flex justify-center gap-3">
          {featured.slice(0, 3).map((b, i) => (
            <BookCover key={b.id} book={b} className={`w-24 shadow-brutal sm:w-32 ${i === 1 ? '-translate-y-4' : ''}`} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-4 text-center">
            <p className="text-3xl font-bold sm:text-4xl">{s.value}</p>
            <p className="font-medium text-ink/70">{s.label}</p>
          </Card>
        ))}
      </section>

      <Section title="Thể loại" sub="Chọn theo sở thích của bạn">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c, i) => (
            <Link
              key={c}
              to={`/books?category=${encodeURIComponent(c)}`}
              className={`flex flex-col gap-1 rounded-brutal border-2 border-ink p-4 shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm ${catColors[i % catColors.length]}`}
            >
              <span className="font-bold">{c}</span>
              <span className="text-sm">{books.filter((b) => b.category === c).length} cuốn</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Spotlight + ranking */}
      <Section title="Sách của tuần" sub="Được thuê nhiều nhất và bảng xếp hạng top 5" to="/books?sort=hot">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="grid gap-5 bg-brand/30 p-5 sm:grid-cols-[160px_1fr]">
            <BookCover book={spotlight} className="w-36 shadow-brutal sm:w-full" />
            <div className="flex min-w-0 flex-col gap-2">
              <Badge tone="red" className="self-start">SÁCH CỦA TUẦN</Badge>
              <h3 className="break-words text-2xl">{spotlight.title}</h3>
              <p className="font-medium">{spotlight.author} · {spotlight.publisher}, {spotlight.year}</p>
              <p className="line-clamp-3">{spotlight.description}</p>
              <p className="text-sm font-medium text-ink/70">{spotlight.pages} trang · {spotlight.rentCount} lượt thuê · điểm {spotlight.rating}/5</p>
              <Button as={Link} to={`/books/${spotlight.id}`} className="mt-auto self-start">Thuê {formatVnd(spotlight.pricePerDay)}/ngày</Button>
            </div>
          </Card>
          <Card className="p-5">
            <h3 className="mb-3 text-xl">Top 5 thuê nhiều</h3>
            <ol className="flex flex-col gap-2">
              {top.map((b, i) => (
                <li key={b.id}>
                  <Link to={`/books/${b.id}`} className="flex items-center gap-3 rounded-brutal border-2 border-transparent p-1 hover:border-ink hover:bg-brand/40">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-brutal border-2 border-ink bg-brand font-bold">{i + 1}</span>
                    <span className="min-w-0 flex-1"><span className="line-clamp-1 font-bold">{b.title}</span><span className="block truncate text-sm text-ink/70">{b.author}</span></span>
                    <span className="shrink-0 text-sm font-bold">{b.rentCount} lượt</span>
                  </Link>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Section>

      <Section title="Sách hot" sub="Những cuốn đang được thuê nhiều nhất" to="/books?sort=hot">
        <div className={grid}>{hotBooks.slice(0, 8).map((b, i) => <BookCard key={b.id} book={b} tag={i < 3 ? 'HOT' : undefined} />)}</div>
      </Section>

      <Section title="Sách mới" sub="Vừa lên kệ trong tháng này" to="/books?sort=new">
        <div className={grid}>{newBooks.slice(0, 4).map((b) => <BookCard key={b.id} book={b} tag="NEW" />)}</div>
      </Section>

      <Section title="Cách thuê sách">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {steps.map((s) => (
            <Card key={s.n} className="flex flex-col gap-2 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-brutal border-2 border-ink bg-brand text-xl font-bold shadow-brutal-sm">{s.n}</span>
              <h3 className="text-xl">{s.title}</h3>
              <p>{s.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section title="Bảng giá thuê" sub={`Ví dụ với một cuốn giá ${formatVnd(popularPrice)}/ngày`}>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {plans.map((p) => (
            <Card key={p.days} className={`relative flex flex-col gap-2 p-5 ${p.popular ? 'bg-brand' : ''}`}>
              {p.popular && <Badge tone="black" className="absolute -top-3 right-4">Phổ biến nhất</Badge>}
              <p className="font-bold">{p.name}</p>
              <p className="text-4xl font-bold">{p.days} ngày</p>
              <p className="text-2xl font-bold">{formatVnd(popularPrice * p.days)}</p>
              <p className="text-sm">{p.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section title="Độc giả nói gì" sub="Hơn 5.000 bạn đọc đang thuê sách mỗi tháng">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {reviews.map((r, i) => (
            <Card key={r.name} className={`flex flex-col gap-3 p-5 ${i === 1 ? 'md:translate-y-3' : ''}`}>
              <p className="text-5xl font-bold leading-none text-brand [-webkit-text-stroke:2px_#0A0A0A]">“</p>
              <p className="flex-1">{r.text}</p>
              <p className="border-t-2 border-ink pt-3 font-bold">{r.name} <span className="font-medium text-ink/70">· {r.role}</span></p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Câu hỏi thường gặp">
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-brutal border-2 border-ink bg-white shadow-brutal-sm open:bg-brand/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-bold">
                {f.q}
                <span className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-4 pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Card className="flex flex-col items-center gap-3 bg-brand p-8 text-center">
        <h2 className="text-3xl">Sẵn sàng đọc chưa?</h2>
        <p className="font-medium">Thành viên mới được giảm 20% cho đơn thuê đầu tiên.</p>
        <Button as={Link} to="/register" variant="secondary" className="text-lg">Tạo tài khoản miễn phí</Button>
      </Card>
    </div>
  )
}
