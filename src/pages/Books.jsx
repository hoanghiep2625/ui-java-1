import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import BookCard from '../components/BookCard'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import { books, categories, priceRanges, sortOptions } from '../data/books'

const sorters = {
  default: () => 0,
  hot: (a, b) => b.rentCount - a.rentCount,
  new: (a, b) => a.addedDaysAgo - b.addedDaysAgo,
  'price-asc': (a, b) => a.pricePerDay - b.pricePerDay,
  'price-desc': (a, b) => b.pricePerDay - a.pricePerDay,
}

export default function Books() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const category = params.get('category') || ''
  const price = params.get('price') || 'all'
  const sort = params.get('sort') || 'default'

  const set = (key, value) => {
    const next = new URLSearchParams(params)
    if (value && value !== 'all' && value !== 'default') next.set(key, value)
    else next.delete(key)
    setParams(next)
  }

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    const range = priceRanges.find((r) => r.value === price) || priceRanges[0]
    return books
      .filter((b) => !term || b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term))
      .filter((b) => !category || b.category === category)
      .filter((b) => range.test(b.pricePerDay))
      .sort(sorters[sort] || sorters.default)
  }, [q, category, price, sort])

  const hasFilter = q || category || price !== 'all' || sort !== 'default'

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl">Kho sách</h1>
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="flex flex-col gap-4 lg:sticky lg:top-36 lg:self-start">
          <Card className="flex flex-col gap-4 p-4">
            <Input label="Tìm kiếm" name="q" value={q} onChange={(e) => set('q', e.target.value)} placeholder="Tên sách, tác giả..." />
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold">Thể loại</p>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
                <Button variant={category ? 'secondary' : 'primary'} className="px-3 py-1 text-sm lg:justify-start" onClick={() => set('category', '')}>Tất cả</Button>
                {categories.map((c) => (
                  <Button key={c} variant={category === c ? 'primary' : 'secondary'} className="px-3 py-1 text-sm lg:justify-start" onClick={() => set('category', c)}>{c}</Button>
                ))}
              </div>
            </div>
            <Select label="Mức giá" name="price" value={price} onChange={(e) => set('price', e.target.value)} options={priceRanges} />
            <Select label="Sắp xếp" name="sort" value={sort} onChange={(e) => set('sort', e.target.value)} options={sortOptions} />
            {hasFilter && <Button as={Link} to="/books" variant="secondary" className="text-sm">Xóa bộ lọc</Button>}
          </Card>
        </aside>

        <section className="flex min-w-0 flex-col gap-4">
          <p className="font-medium"><span className="font-bold">{results.length}</span> sách{category && <> trong <span className="font-bold">{category}</span></>}{q && <> cho “{q}”</>}</p>
          {results.length === 0 ? (
            <Card className="flex flex-col items-center gap-4 p-10 text-center">
              <p className="text-xl font-bold">Không tìm thấy sách phù hợp</p>
              <Button as={Link} to="/books">Xóa bộ lọc</Button>
            </Card>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
              {results.map((b) => <BookCard key={b.id} book={b} tag={sort === 'hot' && results.indexOf(b) < 3 ? 'HOT' : sort === 'new' && results.indexOf(b) < 3 ? 'NEW' : undefined} />)}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
