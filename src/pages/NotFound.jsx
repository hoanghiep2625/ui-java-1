import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFound({ title = 'Không tìm thấy trang', backTo = '/', backLabel = 'Về trang chủ' }) {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <p className="text-7xl font-bold">404</p>
      <h1 className="text-2xl">{title}</h1>
      <Button as={Link} to={backTo}>{backLabel}</Button>
    </div>
  )
}
