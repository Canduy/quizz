const data = [
  {
    id: 1,
    question: "Trái Đất cách Mặt Trời khoảng bao nhiêu dặm??",
    answers: [
      {
        text: " 9,3 triệu",
        correct: false,
      },
      {
        text: "39 triệu",
        correct: false,
      },
      {
        text: "93 triệu",
        correct: true,
      },
      {
        text: "193 triệu",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "Theo Văn phòng Tham khảo Dân số, thì tổng số người từng sống trên Trái Đất từ xưa đến nay là khoảng bao nhiêu người?",
    answers: [
      {
        text: "50 tỷ",
        correct: false,
      },
      {
        text: "100 tỷ",
        correct: true,
      },
      {
        text: "1000 tỷ",
        correct: false,
      },
      {
        text: "5000 tỷ",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Các nhà thần kinh học tin rằng vỏ thùy giữa trán của não được kích hoạt khi bạn làm gì?",
    answers: [
      {
        text: "Bị hoảng loạn",
        correct: false,
      },
      {
        text: "Ghi nhớ một cái tên",
        correct: false,
      },
      {
        text: "Nghe nhạc",
        correct: false,
      },
      {
        text: "Hiểu một chuyện cười.",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question:
      "Loài côn trùng nào đã từng làm chập một chiếc máy tính và sau đó khiến người ta bắt đầu dùng cụm từ computer bug (“rệp máy tính”, tức là lỗi phần mềm)?",
    answers: [
      {
        text: "Sâu bướm",
        correct: true,
      },
      {
        text: "Gián",
        correct: false,
      },
      {
        text: "Ruồi",
        correct: false,
      },
      {
        text: "Bọ cánh cứng Nhật Bản",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "Tổng thống Mỹ nào từng xuất hiện trong loạt phim truyền hình Laugh-In?",
    answers: [
      {
        text: "Lyndon Johnson",
        correct: false,
      },
      {
        text: "Richard Nixon.",
        correct: true,
      },
      {
        text: "Jimmy Carter.",
        correct: false,
      },
      {
        text: "Gerald Ford.",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question:
      "Sau chiến tranh toàn cầu 2, phong trào giải phóng dân tộc nổi lên mạnh nhất ở đâu?",
    answers: [
      {
        text: "Châu Phi",
        correct: true,
      },
      {
        text: "Châu Á",
        correct: false,
      },
      {
        text: "Châu âu",
        correct: false,
      },
      {
        text: "Châu Nam Cực",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "Câu nói: “Đầu tôi chưa rơi xuống đất, xin bệ hạ đừng lo” là của ai?",
    answers: [
      {
        text: "Lê Văn Hưu",
        correct: false,
      },
      {
        text: "Phan Huy Chú",
        correct: false,
      },
      {
        text: "Trần Thủ Độ",
        correct: true,
      },
      {
        text: "Lương Văn Can",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Biển có nồng độ muối khổng lồ nhất toàn cầu?",
    answers: [
      {
        text: "Biển Đông",
        correct: false,
      },
      {
        text: "Biển Đen",
        correct: false,
      },
      {
        text: "Biển chết",
        correct: true,
      },
      {
        text: "Biển noname",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Quốc kỳ nào giống hệt quốc kỳ Indonexia tuy nhiên ngược chiều?",
    answers: [
      {
        text: "Thụy Điển",
        correct: false,
      },
      {
        text: "Ba Lan",
        correct: true,
      },
      {
        text: "Bồ Đào Nha",
        correct: false,
      },
      {
        text: "Phần Lan",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Kinh thành trà kiệu thuộc tỉnh nào?",
    answers: [
      {
        text: "Quảng Nam",
        correct: true,
      },
      {
        text: "Quảng Bình",
        correct: false,
      },
      {
        text: "Quảng Trị",
        correct: false,
      },
      {
        text: "Thanh Hóa",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question:
      "Lần thứ nhất Việt Nam sử dụng bộc phá 1000 kg thuốc nổ đánh giặc là ở đâu?",
    answers: [
      {
        text: "Quảng Nam",
        correct: false,
      },
      {
        text: "Quảng Bình",
        correct: false,
      },
      {
        text: "Quảng Trị",
        correct: false,
      },
      {
        text: "Điện Biên Phủ",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question: "Ở Chùa Bộc, ngoài thờ phật, nhân dân còn thờ vị tướng nào?",
    answers: [
      {
        text: "Vua Quang Trung",
        correct: true,
      },
      {
        text: "Vua Lê Lợi",
        correct: false,
      },
      {
        text: "Ngô Quyền",
        correct: false,
      },
      {
        text: "Lý Thái Tổ",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Quốc gia nào là quê hương của ông già tuyết?",
    answers: [
      {
        text: "Bồ Đào Nha",
        correct: false,
      },
      {
        text: "Đức",
        correct: false,
      },
      {
        text: "Phần Lan",
        correct: true,
      },
      {
        text: "Ba Lan",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Giải Grand Slam đầu tiên trong năm là giải nào?",
    answers: [
      {
        text: "Austrlia mở rộng",
        correct: true,
      },
      {
        text: "Wimbledon",
        correct: false,
      },
      {
        text: "Roland Garos",
        correct: false,
      },
      {
        text: "Mỹ mở rộng",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "worldCup 2022 được tổ chức ở quốc gia nào?",
    answers: [
      {
        text: "Qatar",
        correct: true,
      },
      {
        text: "Hàn Quốc",
        correct: false,
      },
      {
        text: "Nhật Bản",
        correct: false,
      },
      {
        text: "Iraq",
        correct: false,
      },
    ],
  },
];

export default data;
