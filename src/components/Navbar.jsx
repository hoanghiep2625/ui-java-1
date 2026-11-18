import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './ui/Button'

const links = [
  { to: '/books', label: 'Sách' },
  { to: '/my-rentals', label: 'Của tôi' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `rounded-brutal border-2 px-3 py-1 font-bold ${isActive ? 'border-ink bg-brand' : 'border-transparent hover:border-ink'}`

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold" onClick={() => setOpen(false)}>
          <span className="rounded-brutal border-2 border-ink bg-brand px-2 shadow-brutal-sm">B</span>BOOKNOOK
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>)}
          <Button as={Link} to="/login" variant="secondary" className="ml-2">Đăng nhập</Button>
          <Button as={Link} to="/register">Đăng ký</Button>
        </nav>
        <button
          type="button"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-brutal border-2 border-ink bg-brand px-3 py-1 font-bold shadow-brutal-sm md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-2 border-t-2 border-ink bg-white p-4 md:hidden" onClick={() => setOpen(false)}>
          {links.map((l) => <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>)}
          <Button as={Link} to="/login" variant="secondary">Đăng nhập</Button>
          <Button as={Link} to="/register">Đăng ký</Button>
        </nav>
      )}
    </header>
  )
}
