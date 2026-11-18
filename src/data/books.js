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

export const books = raw.map(([title, author, category, pricePerDay, featured], i) => ({
  id: String(i + 1),
  title,
  author,
  category,
  description: desc,
  pricePerDay,
  featured,
}))

export const durations = [3, 7, 14]

export const formatVnd = (n) => `${n.toLocaleString('vi-VN')}đ`
