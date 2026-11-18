import BookCard from '../components/BookCard'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { books, categories } from '../data/books'

export default function Books() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl">Kho sách</h1>
      <div className="flex flex-col gap-4">
        <Input name="q" placeholder="Tìm theo tên sách hoặc tác giả..." aria-label="Tìm sách" />
        <div className="flex flex-wrap gap-2">
          <Button className="px-3 py-1 text-sm">Tất cả</Button>
          {categories.map((c) => (
            <Button key={c} variant="secondary" className="px-3 py-1 text-sm">{c}</Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {books.map((b) => <BookCard key={b.id} book={b} />)}
      </div>
    </div>
  )
}
