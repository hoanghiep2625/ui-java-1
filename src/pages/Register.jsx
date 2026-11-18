import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'

export default function Register() {
  const navigate = useNavigate()
  return (
    <div className="mx-auto flex max-w-md flex-col gap-4 py-8">
      <Card className="flex flex-col gap-5 p-6">
        <div>
          <h1 className="text-3xl">Đăng ký</h1>
          <p className="mt-1 text-ink/70">Tạo tài khoản để bắt đầu thuê sách.</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/') }}>
          <Input label="Họ tên" name="name" placeholder="Nguyễn Văn A" />
          <Input label="Email" name="email" type="email" placeholder="ban@email.com" />
          <Input label="Mật khẩu" name="password" type="password" placeholder="Tối thiểu 6 ký tự" />
          <Input label="Nhập lại mật khẩu" name="confirm" type="password" placeholder="••••••" error="Mật khẩu nhập lại không khớp" />
          <Button type="submit" className="mt-2">Tạo tài khoản</Button>
        </form>
        <p className="text-center text-sm">Đã có tài khoản? <Link to="/login" className="font-bold underline">Đăng nhập</Link></p>
      </Card>
    </div>
  )
}
