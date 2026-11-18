import { Link } from 'react-router-dom'
import RentalItem from '../components/RentalItem'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { books } from '../data/books'
import { rentals } from '../data/rentals'

export default function MyRentals() {
  const items = rentals
    .map((r) => ({ rental: r, book: books.find((b) => b.id === r.bookId) }))
    .filter((x) => x.book)

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl">Sách của tôi</h1>
      {items.length === 0 ? (
        <Card className="flex flex-col items-center gap-4 p-10 text-center">
          <p className="text-xl font-bold">Bạn chưa thuê cuốn sách nào</p>
          <Button as={Link} to="/books">Đến kho sách</Button>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map(({ rental, book }) => <RentalItem key={rental.id} rental={rental} book={book} />)}
        </div>
      )}
    </div>
  )
}
