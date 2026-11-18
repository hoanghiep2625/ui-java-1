import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import Button from './ui/Button'
import { categories } from '../data/books'

const catLink = (c) => `/books?category=${encodeURIComponent(c)}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)
  const close = () => { setOpen(false); setCatOpen(false) }
  const topLink = 'rounded-brutal border-2 border-transparent px-3 py-1 font-bold hover:border-ink hover:bg-brand/40'

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2 text-xl font-bold" onClick={close}>
          <span className="rounded-brutal border-2 border-ink bg-brand px-2 shadow-brutal-sm">B</span>BOOKNOOK
        </Link>
        <SearchBar className="hidden flex-1 md:flex" />
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <NavLink to="/my-rentals" className={topLink}>Sách của tôi</NavLink>
          <Button as={Link} to="/login" variant="secondary">Đăng nhập</Button>
          <Button as={Link} to="/register">Đăng ký</Button>
        </div>
        <button
          type="button"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="ml-auto rounded-brutal border-2 border-ink bg-brand px-3 py-1 font-bold shadow-brutal-sm md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Desktop category bar */}
      <nav className="hidden border-t-2 border-ink bg-brand md:block" aria-label="Danh mục">
        <div className="mx-auto flex max-w-6xl items-center gap-1 px-4 py-2">
          <div className="relative" onMouseLeave={() => setCatOpen(false)}>
            <button
              type="button"
              aria-expanded={catOpen}
              onClick={() => setCatOpen((o) => !o)}
              onMouseEnter={() => setCatOpen(true)}
              className="rounded-brutal border-2 border-ink bg-white px-3 py-1 font-bold shadow-brutal-sm"
            >
              ☰ Thể loại ▾
            </button>
            {catOpen && (
              <div className="absolute left-0 top-full z-50 w-56 pt-1">
                <ul className="rounded-brutal border-2 border-ink bg-white shadow-brutal">
                  {categories.map((c) => (
                    <li key={c}>
                      <Link to={catLink(c)} onClick={close} className="block px-4 py-2 font-medium hover:bg-brand">{c}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link to="/books" className={topLink}>Tất cả sách</Link>
          <Link to="/books?sort=hot" className={topLink}>Sách hot</Link>
          <Link to="/books?sort=new" className={topLink}>Sách mới</Link>
          {categories.slice(0, 4).map((c) => <Link key={c} to={catLink(c)} className={topLink}>{c}</Link>)}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav className="flex max-h-[80vh] flex-col gap-3 overflow-y-auto border-t-2 border-ink bg-white p-4 md:hidden">
          <SearchBar onDone={close} />
          <div className="flex flex-wrap gap-2" onClick={close}>
            <Link to="/books?sort=hot" className="rounded-brutal border-2 border-ink bg-brand px-3 py-1 font-bold">Sách hot</Link>
            <Link to="/books?sort=new" className="rounded-brutal border-2 border-ink bg-brand px-3 py-1 font-bold">Sách mới</Link>
            <Link to="/books" className="rounded-brutal border-2 border-ink px-3 py-1 font-bold">Tất cả sách</Link>
          </div>
          <p className="text-sm font-bold">Thể loại</p>
          <div className="flex flex-wrap gap-2" onClick={close}>
            {categories.map((c) => <Link key={c} to={catLink(c)} className="rounded-brutal border-2 border-ink px-3 py-1 text-sm font-medium">{c}</Link>)}
          </div>
          <div className="flex flex-col gap-2 border-t-2 border-ink pt-3" onClick={close}>
            <Link to="/my-rentals" className="font-bold">Sách của tôi</Link>
            <Button as={Link} to="/login" variant="secondary">Đăng nhập</Button>
            <Button as={Link} to="/register">Đăng ký</Button>
          </div>
        </nav>
      )}
    </header>
  )
}
