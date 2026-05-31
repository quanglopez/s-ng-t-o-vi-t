import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Gói cước · Vinrl" },
      {
        name: "description",
        content:
          "Bảng giá Vinrl — workspace AI cho creator và agency Việt. Dùng thử 7 ngày miễn phí.",
      },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter",
    price: "Miễn phí",
    sub: "Cho creator mới bắt đầu",
    cta: "Bắt đầu miễn phí",
    features: [
      "20 post lưu / tháng",
      "10 AI breakdown / tháng",
      "1 bảng cảm hứng",
      "Voice profile cơ bản",
    ],
    highlight: false,
  },
  {
    name: "Creator Pro",
    price: "249.000đ",
    period: "/tháng",
    sub: "Cho creator nghiêm túc",
    cta: "Dùng thử 7 ngày",
    features: [
      "Lưu không giới hạn",
      "AI breakdown không giới hạn",
      "Voice profile nâng cao",
      "Remix AI không giới hạn",
      "Lịch 30 ngày tự động",
      "Hỗ trợ tiếng Việt 1-1",
    ],
    highlight: true,
  },
  {
    name: "Agency",
    price: "1.490.000đ",
    period: "/tháng",
    sub: "Cho team & studio",
    cta: "Liên hệ sales",
    features: [
      "Mọi thứ ở Pro, cho 5 thành viên",
      "Workspace theo client",
      "Brand voice riêng từng client",
      "Duyệt & comment nội bộ",
      "Export báo cáo PDF",
      "Account manager riêng",
    ],
    highlight: false,
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg">Vinrl</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Trang chủ
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border/60 text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-brand animate-pulse" /> Ra mắt — giảm 30% cho
          1.000 user đầu
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-6xl font-extrabold tracking-tight">
          Giá <span className="text-gradient-brand">đơn giản</span>, không bẫy.
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Mọi gói đều có 7 ngày dùng thử. Huỷ bất cứ lúc nào, không cần lý do.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-7 border ${
                p.highlight
                  ? "bg-gradient-brand text-white border-transparent shadow-glow scale-[1.02]"
                  : "bg-surface-elev border-border/60"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-foreground text-background px-3 py-1 rounded-full">
                  Phổ biến nhất
                </span>
              )}
              <div
                className={`text-sm font-semibold ${p.highlight ? "text-white/90" : "text-muted-foreground"}`}
              >
                {p.name}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <div className="font-display text-4xl font-extrabold">{p.price}</div>
                {p.period && (
                  <div
                    className={`text-sm ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}
                  >
                    {p.period}
                  </div>
                )}
              </div>
              <div
                className={`text-sm mt-1 ${p.highlight ? "text-white/85" : "text-muted-foreground"}`}
              >
                {p.sub}
              </div>

              <Button
                className={`w-full mt-6 ${p.highlight ? "bg-white text-foreground hover:bg-white/90" : "bg-foreground text-background"}`}
              >
                {p.cta}
              </Button>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlight ? "text-white" : "text-brand"}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Câu hỏi thường gặp</h2>
          <div className="space-y-3">
            {[
              {
                q: "Vinrl có hỗ trợ tiếng Việt không?",
                a: "Có — toàn bộ AI breakdown và Remix đều tối ưu cho tiếng Việt và văn hoá Việt Nam.",
              },
              {
                q: "Tôi có thể huỷ bất cứ lúc nào?",
                a: "Có. Không hợp đồng, không phí huỷ. Bạn dùng đến cuối kỳ thanh toán.",
              },
              {
                q: "Dữ liệu của tôi có an toàn?",
                a: "Server đặt tại Singapore + backup tại VN. Mọi voice profile chỉ bạn truy cập được.",
              },
              {
                q: "Có thể đổi gói giữa chừng?",
                a: "Có thể nâng cấp hoặc hạ cấp bất cứ lúc nào, tính theo tỉ lệ ngày.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border/60 bg-surface-elev p-5"
              >
                <summary className="font-display font-semibold cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-brand text-xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
