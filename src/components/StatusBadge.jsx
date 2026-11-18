import Badge from './ui/Badge'

const tones = { 'Chờ duyệt': 'white', 'Đang mượn': 'yellow', 'Quá hạn': 'red', 'Đã trả': 'green' }

export default function StatusBadge({ status }) {
  return <Badge tone={tones[status]}>{status}</Badge>
}
