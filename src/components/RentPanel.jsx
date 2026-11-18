import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './ui/Button'
import Card from './ui/Card'
import Dialog from './ui/Dialog'
import Select from './ui/Select'
import { durations, formatVnd } from '../data/books'

export default function RentPanel({ book }) {
  const [days, setDays] = useState(durations[1])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const total = book.pricePerDay * days

  return (
    <Card className="flex flex-col gap-4 bg-brand/20 p-4">
      <h2 className="text-xl">Thuê sách này</h2>
      <Select
        label="Thời hạn thuê"
        name="days"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        options={durations.map((d) => ({ value: d, label: `${d} ngày` }))}
      />
      <div className="flex items-baseline justify-between border-t-2 border-ink pt-3">
        <span className="font-medium">Tổng tiền</span>
        <span className="text-2xl font-bold">{formatVnd(total)}</span>
      </div>
      <Button onClick={() => setOpen(true)}>Thuê ngay</Button>

      <Dialog open={open} onClose={() => setOpen(false)} title="Xác nhận thuê sách">
        <dl className="mb-6 flex flex-col gap-2">
          <div className="flex justify-between gap-4"><dt>Sách</dt><dd className="text-right font-bold">{book.title}</dd></div>
          <div className="flex justify-between"><dt>Thời hạn</dt><dd className="font-bold">{days} ngày</dd></div>
          <div className="flex justify-between"><dt>Tổng tiền</dt><dd className="font-bold">{formatVnd(total)}</dd></div>
        </dl>
        <div className="flex gap-3">
          <Button variant="secondary" className="flex-1" onClick={() => setOpen(false)}>Hủy</Button>
          <Button className="flex-1" onClick={() => navigate('/my-rentals')}>Thanh toán</Button>
        </div>
      </Dialog>
    </Card>
  )
}
