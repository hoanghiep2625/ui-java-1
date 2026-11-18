import { useEffect } from 'react'

export default function Dialog({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-md rounded-brutal border-2 border-ink bg-white p-6 shadow-brutal"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="mb-4 text-xl">{title}</h2>}
        {children}
      </div>
    </div>
  )
}
