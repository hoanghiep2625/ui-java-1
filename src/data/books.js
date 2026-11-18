export const categories = ['Văn học', 'Kinh tế', 'Kỹ năng', 'Thiếu nhi', 'Khoa học', 'Lịch sử']

const desc =
  'Một cuốn sách được nhiều độc giả yêu thích, với nội dung cuốn hút, dễ đọc và để lại nhiều suy ngẫm sau từng chương. Phù hợp để đọc vào cuối tuần hoặc trên đường đi làm.'

const raw = [
  ['Dế Mèn phiêu lưu ký', 'Tô Hoài', 'Thiếu nhi', 3000, true],
  ['Nhà giả kim', 'Paulo Coelho', 'Văn học', 5000, true],
  ['Đắc nhân tâm', 'Dale Carnegie', 'Kỹ năng', 4000, true],
  ['Sapiens: Lược sử loài người', 'Yuval Noah Harari', 'Lịch sử', 6000, true],
  ['Cha giàu cha nghèo', 'Robert Kiyosaki', 'Kinh tế', 4000, true],
  ['Tôi thấy hoa vàng trên cỏ xanh', 'Nguyễn Nhật Ánh', 'Văn học', 4000, false],
  ['Lược sử thời gian', 'Stephen Hawking', 'Khoa học', 5000, false],
  ['Hoàng tử bé', 'Antoine de Saint-Exupéry', 'Thiếu nhi', 3000, false],
  ['Tư duy nhanh và chậm', 'Daniel Kahneman', 'Kỹ năng', 6000, false],
  ['Súng, vi trùng và thép', 'Jared Diamond', 'Lịch sử', 6000, false],
  ['Số đỏ', 'Vũ Trọng Phụng', 'Văn học', 3000, false],
  ['Nghĩ giàu làm giàu', 'Napoleon Hill', 'Kinh tế', 4000, false],
  ['Vũ trụ trong vỏ hạt dẻ', 'Stephen Hawking', 'Khoa học', 5000, false],
  ['Kafka bên bờ biển', 'Haruki Murakami', 'Văn học', 5000, false],
  ['Atomic Habits – Thay đổi tí hon, hiệu quả bất ngờ và những phương pháp xây dựng thói quen tốt trong cuộc sống hằng ngày của bạn', 'James Clear', 'Kỹ năng', 5000, false],
  ['Việt Nam sử lược', 'Trần Trọng Kim', 'Lịch sử', 4000, false],
  ['Gen: Lịch sử và tương lai', 'Siddhartha Mukherjee', 'Khoa học', 6000, false],
  ['Bố già', 'Mario Puzo', 'Văn học', 5000, false],
  ['Từ tốt đến vĩ đại', 'Jim Collins', 'Kinh tế', 5000, false],
  ['Totto-chan bên cửa sổ', 'Tetsuko Kuroyanagi', 'Thiếu nhi', 3000, false],
]

// ISBN (bản tiếng Anh) để lấy ảnh bìa từ Open Library; null = dùng bìa màu mặc định
const isbns = [
  null, '9780062315007', '9780671027032', '9780062316097', '9781612680194',
  null, '9780553380163', '9780156012195', '9780374533557', '9780393317558',
  '9780472030224', '9781585424337', '9780553802023', '9781400079278', '9780735211292',
  null, '9781476733524', '9780451205766', '9780066620992', '9784770020475',
]

export const books = raw.map(([title, author, category, pricePerDay, featured], i) => ({
  id: String(i + 1),
  title,
  author,
  category,
  description: desc,
  pricePerDay,
  featured,
  cover: isbns[i] ? `https://covers.openlibrary.org/b/isbn/${isbns[i]}-L.jpg?default=false` : null,
  rating: Number((4 + ((i * 3) % 10) / 10).toFixed(1)),
  rentCount: 12 + ((i * 37) % 90),
  addedDaysAgo: (i * 7) % 60,
  pages: 180 + ((i * 53) % 320),
  publisher: ['NXB Trẻ', 'NXB Kim Đồng', 'NXB Tổng hợp', 'NXB Thế Giới', 'Alpha Books'][i % 5],
  year: 2008 + ((i * 5) % 17),
  condition: i % 4 === 0 ? 'Như mới' : 'Tốt',
}))

export const hotBooks = [...books].sort((a, b) => b.rentCount - a.rentCount)
export const newBooks = [...books].sort((a, b) => a.addedDaysAgo - b.addedDaysAgo)

export const priceRanges = [
  { value: 'all', label: 'Tất cả mức giá', test: () => true },
  { value: 'lt4', label: 'Dưới 4.000đ/ngày', test: (p) => p < 4000 },
  { value: '4to5', label: '4.000đ – 5.000đ', test: (p) => p >= 4000 && p <= 5000 },
  { value: 'gt5', label: 'Trên 5.000đ', test: (p) => p > 5000 },
]

export const sortOptions = [
  { value: 'default', label: 'Mặc định' },
  { value: 'hot', label: 'Thuê nhiều nhất' },
  { value: 'new', label: 'Mới nhất' },
  { value: 'price-asc', label: 'Giá tăng dần' },
  { value: 'price-desc', label: 'Giá giảm dần' },
]

export const durations = [3, 7, 14]

export const formatVnd = (n) => `${n.toLocaleString('vi-VN')}đ`
