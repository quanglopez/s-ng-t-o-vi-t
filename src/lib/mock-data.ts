export type Post = {
  id: string;
  platform: "TikTok" | "Instagram" | "YouTube" | "Facebook" | "Threads";
  author: string;
  handle: string;
  hook: string;
  thumb: string;
  views: string;
  likes: string;
  saved: string;
  niche: string;
  boardId: string;
};

export const platformGradient: Record<Post["platform"], string> = {
  TikTok: "from-[#ff0050] to-[#00f2ea]",
  Instagram: "from-[#f7931e] to-[#e84393]",
  YouTube: "from-[#ff0000] to-[#ff6b35]",
  Facebook: "from-[#1877f2] to-[#6c5ce7]",
  Threads: "from-[#1a1a1a] to-[#444444]",
};

export const boards = [
  { id: "viral-hooks", name: "Hook viral 2026", emoji: "🪝", count: 42, color: "from-brand to-brand-2" },
  { id: "skincare", name: "Skincare cho Gen Z", emoji: "✨", count: 28, color: "from-brand-2 to-brand-3" },
  { id: "fnb", name: "F&B Sài Gòn", emoji: "🍜", count: 36, color: "from-brand-3 to-brand-4" },
  { id: "ecom", name: "E-commerce dropship", emoji: "📦", count: 19, color: "from-brand-4 to-brand" },
  { id: "personal", name: "Personal branding", emoji: "🎙️", count: 24, color: "from-brand to-brand-3" },
  { id: "edu", name: "Edutok tài chính", emoji: "💸", count: 15, color: "from-brand-2 to-brand-4" },
];

export const posts: Post[] = [
  {
    id: "p1",
    platform: "TikTok",
    author: "Minh Trang",
    handle: "@trangbeauty",
    hook: "Mình đã bỏ 12 triệu mua skincare và đây là 3 sản phẩm DUY NHẤT đáng tiền…",
    thumb: "from-[#ff6b35] to-[#e84393]",
    views: "2.4M",
    likes: "189K",
    saved: "42K",
    niche: "Beauty",
    boardId: "skincare",
  },
  {
    id: "p2",
    platform: "Instagram",
    author: "Quán Cô Ba",
    handle: "@quancoba.sg",
    hook: "Tô bún bò 35K ở quận 3 mà khách xếp hàng từ 6h sáng — bí mật nằm ở…",
    thumb: "from-[#f7931e] to-[#ff0050]",
    views: "890K",
    likes: "67K",
    saved: "12K",
    niche: "F&B",
    boardId: "fnb",
  },
  {
    id: "p3",
    platform: "TikTok",
    author: "Hiếu Nguyễn",
    handle: "@hieufinance",
    hook: "Tuổi 25 mà chưa có 100 triệu? Xem video này trước khi quá muộn.",
    thumb: "from-[#6c5ce7] to-[#1e1e5a]",
    views: "1.7M",
    likes: "124K",
    saved: "58K",
    niche: "Tài chính",
    boardId: "edu",
  },
  {
    id: "p4",
    platform: "YouTube",
    author: "Phương Anh",
    handle: "@phuonganhvlog",
    hook: "Tôi nghỉ việc văn phòng để bán hàng online — sau 6 tháng tôi nhận ra…",
    thumb: "from-[#ff0000] to-[#f7931e]",
    views: "543K",
    likes: "38K",
    saved: "9.2K",
    niche: "Lifestyle",
    boardId: "personal",
  },
  {
    id: "p5",
    platform: "Threads",
    author: "Khoa Phạm",
    handle: "@khoacopywriter",
    hook: "Tôi viết caption cho 47 brand Việt — đây là công thức 3 dòng luôn viral.",
    thumb: "from-[#1a1a1a] to-[#6c5ce7]",
    views: "412K",
    likes: "29K",
    saved: "11K",
    niche: "Copywriting",
    boardId: "viral-hooks",
  },
  {
    id: "p6",
    platform: "Instagram",
    author: "Linh Chi Store",
    handle: "@linhchi.studio",
    hook: "Cách mình lên đơn 500 váy/tháng chỉ với 1 chiếc iPhone và cái bàn gỗ.",
    thumb: "from-[#e84393] to-[#ff6b35]",
    views: "1.1M",
    likes: "82K",
    saved: "23K",
    niche: "E-com",
    boardId: "ecom",
  },
  {
    id: "p7",
    platform: "TikTok",
    author: "Bảo Trân",
    handle: "@baotran.derm",
    hook: "Da dầu mụn ở Việt Nam đừng bao giờ làm 5 điều này (mình đã trả giá).",
    thumb: "from-[#ff6b35] to-[#6c5ce7]",
    views: "3.1M",
    likes: "245K",
    saved: "71K",
    niche: "Beauty",
    boardId: "skincare",
  },
  {
    id: "p8",
    platform: "TikTok",
    author: "Đạt Vlog",
    handle: "@datvlog",
    hook: "20 quán cà phê Đà Lạt năm 2026 — chỉ 3 quán thực sự đáng đi.",
    thumb: "from-[#f7931e] to-[#e84393]",
    views: "780K",
    likes: "54K",
    saved: "18K",
    niche: "Travel",
    boardId: "fnb",
  },
];

export const calendar30 = Array.from({ length: 30 }, (_, i) => {
  const types = ["Hook", "Story", "Educate", "Sell", "Trend", "BTS"] as const;
  const platforms = ["TikTok", "Instagram", "YouTube", "Threads"] as const;
  const titles = [
    "Bí mật sau 3 năm làm freelance",
    "Review skincare Hàn vs Nhật",
    "Cách viết caption bán hàng",
    "Một ngày của founder VN",
    "5 sai lầm content creator mới",
    "Tự học chạy ads với 500K",
    "Routine sáng cho người bận",
    "Phỏng vấn chủ quán bún bò",
    "Trend mới trên Threads Việt",
    "Behind the scene shoot lookbook",
  ];
  return {
    day: i + 1,
    type: types[i % types.length],
    platform: platforms[i % platforms.length],
    title: titles[i % titles.length],
  };
});