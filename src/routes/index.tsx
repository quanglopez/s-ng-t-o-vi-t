import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Mic, CalendarDays, ArrowRight, Check, Zap, FolderHeart, PlayCircle } from "lucide-react";
import { posts, boards } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinrl — Workspace AI cho creator Việt" },
      { name: "description", content: "Lưu, phân tích và remix nội dung viral trên TikTok, Instagram, YouTube — tất cả trong một workspace dành cho creator và agency Việt Nam." },
      { property: "og:title", content: "Vinrl — Workspace AI cho creator Việt" },
      { property: "og:description", content: "Biến mọi video viral thành công thức bạn có thể tái sử dụng. Voice profile riêng, lịch 30 ngày, remix AI bằng tiếng Việt." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <LogosRow />
      <Features />
      <BoardsShowcase />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-display font-bold text-lg">Vinrl</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#tinh-nang" className="hover:text-foreground">Tính năng</a>
          <a href="#cach-dung" className="hover:text-foreground">Cách dùng</a>
          <Link to="/pricing" className="hover:text-foreground">Gói cước</Link>
          <a href="#" className="hover:text-foreground">Cộng đồng</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/dashboard"><Button variant="ghost" size="sm">Đăng nhập</Button></Link>
          <Link to="/dashboard"><Button size="sm" className="bg-gradient-brand text-white shadow-glow">Dùng thử 7 ngày</Button></Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-brand opacity-30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-brand-4 opacity-20 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border/60 text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
          Beta mở · 2.400 creator Việt đang dùng
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
          Workspace AI cho<br />
          <span className="text-gradient-brand">creator Việt</span> nghiêm túc.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Lưu mọi video viral, để AI bóc tách hook và cấu trúc, rồi remix lại bằng đúng giọng văn của bạn — toàn bộ bằng tiếng Việt.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/dashboard">
            <Button size="lg" className="h-12 px-6 bg-gradient-brand text-white shadow-glow gap-2">
              Bắt đầu miễn phí <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="h-12 px-6 gap-2">
            <PlayCircle className="h-4 w-4" /> Xem demo 90 giây
          </Button>
        </div>

        <div className="mt-16 relative mx-auto max-w-5xl">
          <div className="rounded-3xl border border-border/60 bg-surface-elev shadow-glow overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60 bg-surface">
              <span className="h-3 w-3 rounded-full bg-brand-3/60" />
              <span className="h-3 w-3 rounded-full bg-brand-2/60" />
              <span className="h-3 w-3 rounded-full bg-brand/60" />
              <span className="ml-3 text-xs text-muted-foreground">vinrl.app/boards/hook-viral-2026</span>
            </div>
            <div className="grid grid-cols-3 gap-3 p-4 bg-gradient-brand-soft">
              {posts.slice(0, 6).map((p) => (
                <div key={p.id} className="rounded-2xl overflow-hidden border border-border/40 bg-card text-left">
                  <div className={`aspect-[3/4] bg-gradient-to-br ${p.thumb} p-3 flex flex-col justify-between`}>
                    <span className="text-[10px] font-bold text-white/90 bg-black/30 backdrop-blur w-fit px-2 py-0.5 rounded-full">{p.platform}</span>
                    <div className="text-white text-xs font-semibold line-clamp-3">{p.hook}</div>
                  </div>
                  <div className="p-2.5 text-[11px] flex items-center justify-between">
                    <span className="font-semibold truncate">{p.author}</span>
                    <span className="text-muted-foreground">{p.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosRow() {
  const items = ["VnExpress", "Vietcetera", "Shopee", "Tiki", "Cocoon", "Bobapop", "Highlands", "L'Oréal VN"];
  return (
    <section className="border-y border-border/60 bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-5">Được tin dùng bởi creator & agency</div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-lg font-display font-semibold text-muted-foreground/70">
          {items.map((i) => <span key={i}>{i}</span>)}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: FolderHeart, title: "Bảng cảm hứng", desc: "Lưu video viral theo niche. Tag, ghi chú, chia sẻ với team agency.", color: "from-brand to-brand-2" },
    { icon: Sparkles, title: "AI bóc tách", desc: "Phân tích hook, angle, cấu trúc, CTA — kèm lý do vì sao video đó viral.", color: "from-brand-2 to-brand-3" },
    { icon: Mic, title: "Voice profile", desc: "Dạy AI cách bạn nói chuyện. Mọi caption sinh ra đều nghe như chính bạn.", color: "from-brand-3 to-brand-4" },
    { icon: Wand2, title: "Remix AI", desc: "Biến 1 video viral thành 10 phiên bản cho brand của bạn — tiếng Việt tự nhiên.", color: "from-brand-4 to-brand" },
    { icon: CalendarDays, title: "Lịch 30 ngày", desc: "AI dựng kế hoạch nội dung cả tháng, cân đối hook/story/sell.", color: "from-brand to-brand-3" },
    { icon: Zap, title: "Cho agency", desc: "Mời thành viên, gắn tag client, theo dõi ai đã duyệt nội dung nào.", color: "from-brand-2 to-brand-4" },
  ];
  return (
    <section id="tinh-nang" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand">Bộ công cụ</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Mọi thứ một creator nghiêm túc cần — không hơn.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group rounded-2xl border border-border/60 bg-surface-elev p-6 hover:shadow-card transition">
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${color} grid place-items-center shadow-glow`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="mt-5 font-display text-xl font-semibold">{title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoardsShowcase() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">Bảng cảm hứng</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Tổ chức ý tưởng như studio thật sự.</h2>
          </div>
          <Link to="/boards"><Button variant="outline" className="gap-2">Xem tất cả <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {boards.slice(0, 6).map((b) => (
            <div key={b.id} className="rounded-2xl border border-border/60 bg-card p-5 hover:shadow-card transition">
              <div className={`h-24 rounded-xl bg-gradient-to-br ${b.color} relative overflow-hidden`}>
                <span className="absolute top-3 left-3 text-2xl">{b.emoji}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-display font-semibold">{b.name}</div>
                <span className="text-xs text-muted-foreground">{b.count} post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Lưu video viral", d: "Dán link TikTok hoặc Reels. Vinrl scrape caption, view, hook ngay lập tức." },
    { n: "02", t: "AI bóc tách công thức", d: "Mỗi post được phân tích: hook, angle, cấu trúc, CTA, vì sao viral." },
    { n: "03", t: "Remix bằng giọng bạn", d: "Voice profile + niche của bạn → caption mới sẵn sàng đăng." },
  ];
  return (
    <section id="cach-dung" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand">Quy trình</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 max-w-3xl">Từ một video viral đến nội dung của bạn — 3 phút.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border/60 bg-surface-elev p-7">
              <div className="text-gradient-brand font-display text-5xl font-extrabold">{s.n}</div>
              <div className="mt-4 font-display text-xl font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-16 text-white shadow-glow">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h2 className="font-display text-4xl md:text-5xl font-extrabold max-w-2xl">Đừng đoán nội dung nào sẽ viral. Hãy phân tích nó.</h2>
          <p className="mt-4 max-w-xl text-white/85">Dùng thử 7 ngày, không cần thẻ. Mở khoá Remix AI, voice profile và lịch 30 ngày ngay.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 h-12 px-6 gap-2">
                Tạo workspace miễn phí <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 h-12 px-6 bg-transparent">
                Xem giá
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            {["Hỗ trợ tiếng Việt", "Huỷ bất cứ lúc nào", "Dữ liệu lưu tại VN"].map((x) => (
              <span key={x} className="flex items-center gap-1.5"><Check className="h-4 w-4" /> {x}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-brand grid place-items-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-display font-bold text-foreground">Vinrl</span>
          <span>· Made in Sài Gòn</span>
        </div>
        <div className="flex gap-6">
          <a href="#">Bảo mật</a>
          <a href="#">Điều khoản</a>
          <a href="#">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
}
