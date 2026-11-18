import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div className="mx-auto flex max-w-md flex-col gap-4 py-8">
      <Card className="flex flex-col gap-5 p-6">
        <div>
          <h1 className="text-3xl">Đăng nhập</h1>
          <p className="mt-1 text-ink/70">Chào mừng bạn quay lại BookNook!</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/') }}>
          <Input label="Email" name="email" type="email" placeholder="ban@email.com" />
          <Input label="Mật khẩu" name="password" type="password" placeholder="••••••" />
          <Button type="submit" className="mt-2">Đăng nhập</Button>
        </form>
        <p className="text-center text-sm">Chưa có tài khoản? <Link to="/register" className="font-bold underline">Đăng ký</Link></p>
      </Card>
    </div>
  )
}
