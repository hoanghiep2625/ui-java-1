import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './ui/Button'

export default function SearchBar({ className = '', onDone, size = 'md' }) {
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const submit = (e) => {
    e.preventDefault()
    const term = q.trim()
    navigate(term ? `/books?q=${encodeURIComponent(term)}` : '/books')
    onDone?.()
  }
  const pad = size === 'lg' ? 'py-3 text-lg' : 'py-2'
  return (
    <form onSubmit={submit} role="search" className={`flex gap-2 ${className}`}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Tìm sách"
        placeholder="Tìm tên sách, tác giả..."
        className={`min-w-0 flex-1 rounded-brutal border-2 border-ink bg-white px-3 shadow-brutal-sm outline-none focus:bg-brand/20 ${pad}`}
      />
      <Button type="submit" className={size === 'lg' ? 'px-6 text-lg' : ''}>Tìm</Button>
    </form>
  )
}
