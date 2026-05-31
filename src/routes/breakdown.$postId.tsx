import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { posts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Anchor,
  Target,
  ListOrdered,
  Megaphone,
  Lightbulb,
  ArrowLeft,
  Copy,
  Wand2,
} from "lucide-react";

export const Route = createFileRoute("/breakdown/$postId")({
  head: () => ({ meta: [{ title: "AI Breakdown · Vinrl" }] }),
  component: Breakdown,
});

function Breakdown() {
  const { postId } = Route.useParams();
  const post = posts.find((p) => p.id === postId) ?? posts[0];

  const sections = [
    {
      icon: Anchor,
      label: "Hook",
      tag: "0–3 giây",
      color: "from-brand to-brand-2",
      body: `"${post.hook}"`,
      note: "Đặt một con số cụ thể (12 triệu) tạo cảm giác thật, kèm 'duy nhất' để khơi gợi tò mò có chọn lọc.",
    },
    {
      icon: Target,
      label: "Angle",
      tag: "Góc nhìn",
      color: "from-brand-2 to-brand-3",
      body: "Người trong cuộc đã trả giá — chia sẻ học phí của chính mình thay vì dạy lý thuyết.",
      note: "Khán giả Việt cực kỳ tin 'người đã thử và thất bại' hơn là chuyên gia review.",
    },
    {
      icon: ListOrdered,
      label: "Cấu trúc",
      tag: "Storyline",
      color: "from-brand-3 to-brand-4",
      body: "1. Hook bằng con số sốc → 2. Bối cảnh cá nhân (3 năm da mụn) → 3. Liệt kê 3 sản phẩm với lý do cụ thể → 4. CTA mềm: 'comment da bạn để mình tư vấn'.",
      note: "Mỗi sản phẩm chỉ 8–10 giây. Giữ tổng video dưới 45 giây để retention cao.",
    },
    {
      icon: Megaphone,
      label: "CTA",
      tag: "Kêu gọi",
      color: "from-brand-4 to-brand",
      body: "Comment loại da của bạn — mình sẽ trả lời từng người trong 24h.",
      note: "CTA dạng cá nhân hoá luôn đẩy comment cao gấp 3 lần so với 'like & share'.",
    },
    {
      icon: Lightbulb,
      label: "Vì sao viral",
      tag: "Insight",
      color: "from-brand to-brand-4",
      body: "Kết hợp 3 yếu tố Vietnamese audience yêu: số tiền cụ thể, tự thừa nhận sai lầm, và recommendation 'duy nhất' (loại bỏ tê liệt lựa chọn).",
      note: "Công thức này tái sử dụng được cho mọi niche tiêu dùng: skincare, điện thoại, khoá học.",
    },
  ];

  return (
    <AppShell
      title="AI Breakdown"
      subtitle={`${post.author} · ${post.platform} · ${post.views} views`}
    >
      <Link
        to="/boards/$boardId"
        params={{ boardId: post.boardId }}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Quay lại bảng
      </Link>

      <div className="grid lg:grid-cols-[360px_1fr] gap-8">
        <aside className="space-y-4">
          <div
            className={`rounded-2xl overflow-hidden border border-border/60 aspect-[3/4] bg-gradient-to-br ${post.thumb} p-5 flex flex-col justify-between sticky top-24`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-white bg-black/40 backdrop-blur px-2 py-0.5 rounded-full">
                {post.platform}
              </span>
              <span className="text-[10px] font-bold text-white bg-black/40 backdrop-blur px-2 py-0.5 rounded-full">
                {post.views} views
              </span>
            </div>
            <div>
              <div className="text-white font-display font-bold text-xl leading-tight">
                {post.hook}
              </div>
              <div className="mt-4 flex items-center gap-2 text-white/90 text-xs">
                <div className="h-7 w-7 rounded-full bg-white/20 grid place-items-center font-bold">
                  {post.author[0]}
                </div>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="opacity-80">{post.handle}</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border/60 bg-gradient-brand-soft p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold">Phân tích bằng AI hoàn tất</div>
                <div className="text-xs text-muted-foreground">
                  Sẵn sàng để remix bằng giọng văn của bạn.
                </div>
              </div>
            </div>
            <Link to="/remix">
              <Button className="bg-foreground text-background gap-2">
                <Wand2 className="h-4 w-4" /> Remix ngay
              </Button>
            </Link>
          </div>

          {sections.map(({ icon: Icon, label, tag, color, body, note }) => (
            <article
              key={label}
              className="rounded-2xl border border-border/60 bg-surface-elev p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`h-11 w-11 rounded-xl bg-gradient-to-br ${color} grid place-items-center shadow-glow shrink-0`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-lg font-bold">{label}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-brand font-semibold bg-brand/10 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed">{body}</p>
                  <div className="mt-3 p-3 rounded-xl bg-accent/50 text-sm text-muted-foreground border-l-2 border-brand">
                    <span className="font-semibold text-foreground">Insight: </span>
                    {note}
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
