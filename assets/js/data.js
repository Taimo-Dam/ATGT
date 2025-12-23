// Traffic Questions Data
const trafficQuestions = [
  {
    id: 1,
    question: "Khi điều khiển xe mô tô hai bánh, xe gắn máy, người lái xe phải bật đèn báo rẽ trước khi chuyển hướng, chuyển làn đường trong thời gian tối thiểu là bao nhiêu?",
    options: ["1 giây", "2 giây", "3 giây", "4 giây"],
    correctAnswer: 2,
    explanation: "Theo quy định, phải bật đèn báo rẽ trước khi chuyển hướng tối thiểu 3 giây để báo hiệu cho các phương tiện khác.",
    category: "Quy tắc giao thông"
  },
  {
    id: 2,
    question: "Biển nào sau đây là biển 'Cấm đi ngược chiều'?",
    options: ["Biển tròn, nền đỏ, viền trắng, có hình mũi tên trắng chỉ sang trái", "Biển tròn, nền đỏ, viền trắng, có vạch ngang màu trắng", "Biển tròn, nền xanh, có hình mũi tên trắng chỉ thẳng", "Biển tròn, nền đỏ, viền trắng, có hình vạch ngang và mũi tên"],
    correctAnswer: 1,
    explanation: "Biển cấm đi ngược chiều là biển tròn, nền đỏ, viền trắng, có vạch ngang màu trắng ở giữa.",
    category: "Biển báo hiệu"
  },
  {
    id: 3,
    question: "Tốc độ tối đa cho phép đối với xe máy trong khu vực đông dân cư là bao nhiêu?",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    correctAnswer: 1,
    explanation: "Trong khu vực đông dân cư, tốc độ tối đa cho xe máy là 50 km/h.",
    category: "Tốc độ và khoảng cách"
  },
  {
    id: 4,
    question: "Khi tham gia giao thông, người lái xe mô tô hai bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách. Điều này áp dụng:",
    options: ["Chỉ khi đi trên đường cao tốc", "Chỉ khi đi ban đêm", "Trong mọi trường hợp", "Chỉ khi đi xa"],
    correctAnswer: 2,
    explanation: "Việc đội mũ bảo hiểm có cài quai đúng quy cách là bắt buộc trong mọi trường hợp khi tham gia giao thông.",
    category: "An toàn giao thông"
  },
  {
    id: 5,
    question: "Trong trường hợp nào sau đây, người lái xe mô tô hai bánh được phép sử dụng còi?",
    options: ["Khi muốn vượt xe phía trước trong đường hẹp", "Khi chạy vào ban đêm", "Khi điều khiển xe vào khu vực đông người qua lại", "Khi muốn báo hiệu cho người đi bộ tránh đường"],
    correctAnswer: 0,
    explanation: "Người lái xe được phép sử dụng còi khi muốn vượt xe phía trước trong đường hẹp để báo hiệu.",
    category: "Quy tắc giao thông"
  },
  {
    id: 6,
    question: "Người điều khiển xe mô tô hai bánh, xe gắn máy có được phép chở người ngồi sau hay không?",
    options: ["Không được phép trong mọi trường hợp", "Được phép nếu người ngồi sau đủ 16 tuổi trở lên", "Được phép nếu có đủ ghế ngồi và đảm bảo an toàn", "Chỉ được phép chở trẻ em dưới 14 tuổi"],
    correctAnswer: 2,
    explanation: "Được phép chở người ngồi sau nếu xe có đủ ghế ngồi và đảm bảo an toàn cho cả hai người.",
    category: "An toàn giao thông"
  },
  {
    id: 7,
    question: "Khi dừng xe hoặc đỗ xe trên đường phố, người lái xe phải thực hiện như thế nào để đảm bảo an toàn giao thông?",
    options: ["Dừng xe ở bất cứ đâu có chỗ trống", "Dừng xe sát lề đường, bật đèn báo hiệu", "Dừng xe ở giữa đường nếu cần thiết", "Dừng xe trên vỉa hè"],
    correctAnswer: 1,
    explanation: "Khi dừng xe phải dừng sát lề đường và bật đèn báo hiệu để đảm bảo an toàn cho các phương tiện khác.",
    category: "Dừng xe và đỗ xe"
  },
  {
    id: 8,
    question: "Biển báo hình tam giác viền đỏ, nền trắng, có hình ảnh trẻ em có ý nghĩa gì?",
    options: ["Cấm trẻ em qua lại", "Báo hiệu gần trường học", "Khu vực vui chơi trẻ em", "Đường dành cho trẻ em"],
    correctAnswer: 1,
    explanation: "Biển báo này thông báo khu vực gần trường học, cần chú ý và giảm tốc độ.",
    category: "Biển báo hiệu"
  },
  {
    id: 9,
    question: "Khoảng cách an toàn giữa hai xe khi đi với tốc độ dưới 60 km/h là:",
    options: ["Tối thiểu 20m", "Tối thiểu 35m", "Tối thiểu 50m", "Tối thiểu 70m"],
    correctAnswer: 1,
    explanation: "Khi đi với tốc độ dưới 60 km/h, khoảng cách an toàn tối thiểu là 35m.",
    category: "Tốc độ và khoảng cách"
  },
  {
    id: 10,
    question: "Người lái xe mô tô hai bánh, xe gắn máy có được sử dụng ô, điện thoại di động khi đang điều khiển xe hay không?",
    options: ["Được sử dụng nếu là cuộc gọi khẩn cấp", "Được sử dụng ô khi trời mưa", "Không được sử dụng trong mọi trường hợp", "Được sử dụng khi dừng đèn đỏ"],
    correctAnswer: 2,
    explanation: "Không được sử dụng ô hoặc điện thoại di động khi đang điều khiển xe để đảm bảo an toàn.",
    category: "An toàn giao thông"
  },
  {
    id: 11,
    question: "Khi xe mô tô gặp xe ưu tiên đang phát tín hiệu ưu tiên, người lái xe phải làm gì?",
    options: ["Tiếp tục đi bình thường", "Giảm tốc độ nhường đường", "Tăng tốc để vượt trước", "Dừng lại chờ xe ưu tiên đi qua"],
    correctAnswer: 1,
    explanation: "Khi gặp xe ưu tiên đang phát tín hiệu, phải giảm tốc độ và nhường đường cho xe ưu tiên.",
    category: "Quy tắc giao thông"
  },
  {
    id: 12,
    question: "Nồng độ cồn trong máu tối đa cho phép đối với người điều khiển xe mô tô, xe gắn máy là:",
    options: ["0,25 mg/lít", "0,50 mg/lít", "0 mg/lít", "1,0 mg/lít"],
    correctAnswer: 2,
    explanation: "Người điều khiển xe mô tô, xe gắn máy không được phép có nồng độ cồn trong máu (0 mg/lít).",
    category: "An toàn giao thông"
  },
  {
    id: 13,
    question: "Khi tham gia giao thông ban đêm, xe mô tô hai bánh phải bật:",
    options: ["Chỉ đèn pha", "Chỉ đèn cos", "Đèn cos hoặc đèn pha", "Không cần bật đèn"],
    correctAnswer: 2,
    explanation: "Ban đêm phải bật đèn cos hoặc đèn pha tùy theo tình huống giao thông.",
    category: "Quy tắc giao thông"
  },
  {
    id: 14,
    question: "Biển báo nguy hiểm thường có hình dạng:",
    options: ["Hình tròn", "Hình vuông", "Hình tam giác", "Hình chữ nhật"],
    correctAnswer: 2,
    explanation: "Biển báo nguy hiểm có hình tam giác đều, viền đỏ, nền trắng hoặc vàng.",
    category: "Biển báo hiệu"
  },
  {
    id: 15,
    question: "Khi xe mô tô muốn chuyển làn đường, người lái xe phải:",
    options: ["Quan sát và bật tín hiệu báo rẽ", "Chỉ cần quan sát", "Chỉ cần bật tín hiệu báo rẽ", "Tăng tốc và chuyển làn nhanh"],
    correctAnswer: 0,
    explanation: "Phải vừa quan sát an toàn vừa bật tín hiệu báo rẽ trước khi chuyển làn.",
    category: "Quy tắc giao thông"
  },
  {
    id: 16,
    question: "Tốc độ tối đa của xe máy trên đường cao tốc là:",
    options: ["80 km/h", "90 km/h", "100 km/h", "Xe máy không được đi trên đường cao tốc"],
    correctAnswer: 3,
    explanation: "Xe mô tô có dung tích xi-lanh dưới 175 cm3 không được phép lưu thông trên đường cao tốc.",
    category: "Tốc độ và khoảng cách"
  },
  {
    id: 17,
    question: "Khi điều khiển xe qua vũng nước lớn, người lái xe nên:",
    options: ["Tăng tốc để đi nhanh qua", "Giảm tốc độ và đi chậm", "Đi ở tốc độ bình thường", "Dừng lại chờ nước rút"],
    correctAnswer: 1,
    explanation: "Nên giảm tốc độ và đi chậm để tránh nước bắn và mất kiểm soát xe.",
    category: "Kỹ thuật lái xe"
  },
  {
    id: 18,
    question: "Biển số đỏ được cấp cho:",
    options: ["Xe cá nhân", "Xe công vụ", "Xe kinh doanh vận tải", "Xe ngoại giao"],
    correctAnswer: 3,
    explanation: "Biển số đỏ được cấp cho xe của cơ quan ngoại giao, lãnh sự.",
    category: "Biển báo hiệu"
  },
  {
    id: 19,
    question: "Khi dừng xe trước vạch dừng xe ở ngã tư có đèn tín hiệu, nếu đèn đỏ bật sáng thì:",
    options: ["Được phép rẽ phải", "Được phép đi thẳng", "Phải dừng lại hoàn toàn", "Được phép rẽ trái"],
    correctAnswer: 2,
    explanation: "Khi đèn đỏ bật sáng, tất cả xe phải dừng lại hoàn toàn.",
    category: "Quy tắc giao thông"
  },
  {
    id: 20,
    question: "Khi điều khiển xe mô tô trên đường ướt, người lái xe cần chú ý:",
    options: ["Tăng tốc để đi nhanh", "Giảm tốc độ và tăng khoảng cách", "Đi bình thường", "Chỉ cần thắng gấp khi cần"],
    correctAnswer: 1,
    explanation: "Trên đường ướt cần giảm tốc độ và tăng khoảng cách an toàn do đường trơn trượt.",
    category: "Kỹ thuật lái xe"
  },
  {
    id: 21,
    question: "Người điều khiển xe mô tô hai bánh, xe gắn máy khi tham gia giao thông phải mang theo:",
    options: ["Chỉ cần giấy phép lái xe", "Chỉ cần giấy đăng ký xe", "Giấy phép lái xe và giấy đăng ký xe", "Không cần giấy tờ gì"],
    correctAnswer: 2,
    explanation: "Phải mang theo cả giấy phép lái xe và giấy đăng ký xe khi tham gia giao thông.",
    category: "Giấy tờ xe"
  },
  {
    id: 22,
    question: "Khi tới gần vạch dừng xe ở ngã tư, nếu đèn vàng bật sáng thì:",
    options: ["Tăng tốc để qua nhanh", "Dừng lại nếu có thể dừng được an toàn", "Tiếp tục đi bình thường", "Bấm còi và đi qua"],
    correctAnswer: 1,
    explanation: "Khi đèn vàng bật sáng, nếu có thể dừng an toàn thì phải dừng lại.",
    category: "Quy tắc giao thông"
  },
  {
    id: 23,
    question: "Khi vượt xe khác, người lái xe mô tô phải:",
    options: ["Vượt bên phải", "Vượt bên trái", "Vượt bên nào cũng được", "Không được vượt xe"],
    correctAnswer: 1,
    explanation: "Khi vượt xe phải vượt bên trái và phải đảm bảo an toàn.",
    category: "Quy tắc giao thông"
  },
  {
    id: 24,
    question: "Biển báo hình tròn nền xanh có nghĩa là:",
    options: ["Biển cấm", "Biển báo nguy hiểm", "Biển hiệu lệnh", "Biển chỉ dẫn"],
    correctAnswer: 2,
    explanation: "Biển tròn nền xanh là biển hiệu lệnh, báo hiệu điều bắt buộc phải làm.",
    category: "Biển báo hiệu"
  },
  {
    id: 25,
    question: "Trước khi khởi hành, người lái xe mô tô cần kiểm tra:",
    options: ["Chỉ cần kiểm tra xăng", "Chỉ cần kiểm tra lốp xe", "Hệ thống phanh, lốp xe, đèn, còi", "Không cần kiểm tra gì"],
    correctAnswer: 2,
    explanation: "Cần kiểm tra toàn bộ hệ thống phanh, lốp xe, đèn, còi trước khi khởi hành.",
    category: "Kỹ thuật lái xe"
  },
  {
    id: 26,
    question: "Khi đi qua khu vực trường học, bệnh viện, người lái xe phải:",
    options: ["Đi với tốc độ bình thường", "Giảm tốc độ, không sử dụng còi", "Tăng tốc độ đi nhanh", "Liên tục bấm còi"],
    correctAnswer: 1,
    explanation: "Qua khu vực trường học, bệnh viện phải giảm tốc độ và không sử dụng còi.",
    category: "An toàn giao thông"
  },
  {
    id: 27,
    question: "Khoảng cách phanh an toàn khi đi với tốc độ 50 km/h là:",
    options: ["15-20m", "25-30m", "35-40m", "45-50m"],
    correctAnswer: 1,
    explanation: "Khoảng cách phanh an toàn ở tốc độ 50 km/h là khoảng 25-30m.",
    category: "Tốc độ và khoảng cách"
  },
  {
    id: 28,
    question: "Người lái xe mô tô bị cận thị có được điều khiển xe không?",
    options: ["Không được phép", "Được phép nếu đeo kính hoặc kính áp tròng", "Được phép trong mọi trường hợp", "Chỉ được phép đi ban ngày"],
    correctAnswer: 1,
    explanation: "Người cận thị được phép lái xe nếu đeo kính hoặc kính áp tròng để đảm bảo tầm nhìn.",
    category: "Điều kiện lái xe"
  },
  {
    id: 29,
    question: "Khi xe mô tô bị hỏng trên đường, người lái xe phải:",
    options: ["Để xe giữa đường", "Đẩy xe vào lề đường an toàn", "Sửa xe ngay tại chỗ", "Bỏ xe lại và đi bộ"],
    correctAnswer: 1,
    explanation: "Khi xe hỏng phải đẩy xe vào lề đường an toàn và đặt biển báo hiệu.",
    category: "Xử lý sự cố"
  },
  {
    id: 30,
    question: "Tuổi tối thiểu để được cấp giấy phép lái xe mô tô hạng A1 là:",
    options: ["16 tuổi", "18 tuổi", "20 tuổi", "21 tuổi"],
    correctAnswer: 1,
    explanation: "Tuổi tối thiểu để được cấp giấy phép lái xe mô tô hạng A1 là 18 tuổi.",
    category: "Giấy tờ xe"
  }
];

// Traffic Signs Data
const trafficSigns = [
  {
    id: 1,
    name: "Biển cấm đi ngược chiều",
    description: "Biển tròn, nền đỏ, viền trắng, có vạch ngang màu trắng",
    meaning: "Cấm các phương tiện giao thông đi ngược chiều",
    imageUrl: "https://images.unsplash.com/photo-1632071948197-42608efac9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwc2lnbnMlMjBwcm9oaWJpdGlvbiUyMHJvYWR8ZW58MXx8fHwxNzU2OTc0NzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Biển cấm"
  },
  {
    id: 2,
    name: "Biển báo nguy hiểm",
    description: "Biển tam giác đều, viền đỏ, nền trắng hoặc vàng",
    meaning: "Báo hiệu những tình huống nguy hiểm có thể xảy ra",
    imageUrl: "https://images.unsplash.com/photo-1513797839453-8d1e735369ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJuaW5nJTIwdHJhZmZpYyUyMHNpZ25zJTIwdHJpYW5nbGV8ZW58MXx8fHwxNzU2OTc0NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Biển báo nguy hiểm"
  },
  {
    id: 3,
    name: "Biển chỉ dẫn",
    description: "Biển hình chữ nhật hoặc hình vuông, nền xanh, chữ và hình vẽ màu trắng",
    meaning: "Chỉ dẫn hướng đi và thông tin cần thiết",
    imageUrl: "https://images.unsplash.com/photo-1606230535080-45fdf9d56512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwcm9hZCUyMHNpZ25zJTIwZGlyZWN0aW9ufGVufDF8fHx8MTc1Njk3NDcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Biển chỉ dẫn"
  },
  {
    id: 4,
    name: "Biển hiệu lệnh",
    description: "Biển tròn, nền xanh, hình vẽ màu trắng",
    meaning: "Báo hiệu các quy định bắt buộc phải tuân theo",
    imageUrl: "https://images.unsplash.com/photo-1714230625824-c212d25d95e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5kYXRvcnklMjB0cmFmZmljJTIwc2lnbnMlMjBibHVlJTIwY2lyY2xlfGVufDF8fHx8MTc1Njk3NDcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Biển hiệu lệnh"
  },
  {
    id: 5,
    name: "Biển cấm dừng xe và đỗ xe",
    description: "Biển tròn, nền đỏ, viền trắng, có hình chữ X màu trắng",
    meaning: "Cấm dừng xe và đỗ xe tại khu vực này",
    imageUrl: "https://images.unsplash.com/photo-1632071948197-42608efac9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwc2lnbnMlMjBwcm9oaWJpdGlvbiUyMHJvYWR8ZW58MXx8fHwxNzU2OTc0NzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Biển cấm"
  },
  {
    id: 6,
    name: "Biển báo giao nhau với đường không ưu tiên",
    description: "Biển tam giác, viền đỏ, nền trắng, có hình giao nhau",
    meaning: "Báo hiệu sắp tới chỗ giao nhau với đường không ưu tiên",
    imageUrl: "https://images.unsplash.com/photo-1513797839453-8d1e735369ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJuaW5nJTIwdHJhZmZpYyUyMHNpZ25zJTIwdHJpYW5nbGV8ZW58MXx8fHwxNzU2OTc0NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Biển báo nguy hiểm"
  }
];

// Get unique categories from questions
function getQuestionCategories() {
  return [...new Set(trafficQuestions.map(q => q.category))];
}

// Get unique categories from signs
function getSignCategories() {
  return [...new Set(trafficSigns.map(s => s.category))];
}

// Get random questions for quiz
function getRandomQuestions(count = 10) {
  const shuffled = [...trafficQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Filter questions by category
function filterQuestionsByCategory(category) {
  if (category === 'all') return trafficQuestions;
  return trafficQuestions.filter(q => q.category === category);
}

// Search questions
function searchQuestions(query, questions = trafficQuestions) {
  if (!query) return questions;
  
  const lowerQuery = query.toLowerCase();
  return questions.filter(q => 
    q.question.toLowerCase().includes(lowerQuery) ||
    q.options.some(option => option.toLowerCase().includes(lowerQuery))
  );
}

// Filter traffic signs by category
function filterSignsByCategory(category) {
  if (category === 'all') return trafficSigns;
  return trafficSigns.filter(s => s.category === category);
}