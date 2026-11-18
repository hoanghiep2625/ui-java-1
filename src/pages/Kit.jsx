import { useState } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Badge from '../components/ui/Badge'
import Dialog from '../components/ui/Dialog'

export default function Kit() {
  const [open, setOpen] = useState(false)
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6 p-4">
      <h1 className="text-3xl">UI Kit</h1>
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {['yellow', 'black', 'white', 'red', 'green'].map((t) => <Badge key={t} tone={t}>{t}</Badge>)}
      </div>
      <Card className="flex flex-col gap-3 p-4">
        <Input label="Email" placeholder="ban@email.com" />
        <Input label="Lỗi" defaultValue="abc" error="Thông tin không hợp lệ" />
        <Select label="Thời hạn" options={[{ value: 3, label: '3 ngày' }, { value: 7, label: '7 ngày' }]} />
        <Button onClick={() => setOpen(true)}>Mở dialog</Button>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)} title="Xác nhận"><Button onClick={() => setOpen(false)}>Đóng</Button></Dialog>
    </div>
  )
}
