import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { posts } from "@/lib/mock-data";
import { Wand2, RefreshCw, Copy, Heart, Sparkles, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/remix")({
  head: () => ({ meta: [{ title: "Remix AI · Vinrl" }] }),
  component: RemixPage,
});

const variants = [
  {
    angle: "Cá nhân — kể chuyện",
    body: "Mình từng tốn 12 triệu cho skincare trong 1 năm — và bạn biết không, cuối cùng chỉ có 3 thứ mình thật sự dùng tới giờ. Cái đầu tiên rẻ bất ngờ, mình tưởng nó là 'placebo' cho tới khi…",
  },
  {
    angle: "Đối thoại — gây tò mò",
    body: "Bạn có bao giờ mở tủ skincare rồi tự hỏi: 'Mình mua đống này làm gì?'. Mình có — và mình đã quẳng 80% đi. 3 lọ ở lại đáng từng đồng. Đây là chúng —",
  },
  {
    angle: "Số liệu — chuyên gia",
    body: "92% skincare bạn mua sẽ vô tủ rồi quên. Mình test 47 sản phẩm cho da dầu mụn Việt Nam trong 14 tháng. 3 sản phẩm sống sót — không quảng cáo, không affiliate.",
  },
];

function RemixPage() {
  const [src] = useState(posts[0]);
  return (
    <AppShell title="Remix AI" subtitle="Biến 1 video viral thành 3–10 phiên bản caption sẵn sàng đăng — bằng giọng văn của bạn.">
      <div className="grid lg:grid-cols-[400px_1fr] gap-8">
        <aside className="space-y-4">
          <div className="rounded-2xl border border-border/60 bg-surface-elev p-5 sticky top-24 space-y-5">
            <div>
              <div className="text-xs uppercase tracking-wider text-brand font-bold mb-2">Nguồn cảm hứng</div>
              <div className={`rounded-xl aspect-[4/5] bg-gradient-to-br ${src.thumb} p-4 flex flex-col justify-between`}>
                <span className="text-[10px] font-bold text-white bg-black/40 backdrop-blur w-fit px-2 py-0.5 rounded-full">{src.platform}</span>
                <div className="text-white font-display font-bold text-sm leading-snug">{src.hook}</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold mb-2">Nội dung / sản phẩm của bạn</div>
              <Textarea
                defaultValue="Mình bán serum vitamin C cho da dầu mụn Việt. Giá 320K, làm thủ công ở xưởng Bình Dương."
                className="min-h-[100px] resize-none text-sm"
              />
            </div>

            <div>
              <div className="text-xs font-semibold mb-2">Nền tảng đích</div>
              <div className="flex flex-wrap gap-1.5">
                {["TikTok", "Instagram Reels", "Threads", "Facebook"].map((p, i) => (
                  <button key={p} className={`text-xs px-3 py-1.5 rounded-full border ${i === 0 ? "bg-foreground text-background border-foreground" : "border-border bg-card"}`}>{p}</button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold mb-2">Voice</div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-accent/50 border border-border/60">
                <span className="text-sm font-semibold">Minh — founder studio SG</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <Button className="w-full bg-gradient-brand text-white shadow-glow gap-2 h-11">
              <Wand2 className="h-4 w-4" /> Tạo 3 phiên bản mới
            </Button>
          </div>
        </aside>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold flex items-center gap-2"><Sparkles className="h-5 w-5 text-brand" /> 3 phiên bản remix</h2>
            <Button variant="outline" size="sm" className="gap-2"><RefreshCw className="h-3.5 w-3.5" /> Tạo lại</Button>
          </div>

          {variants.map((v, i) => (
            <article key={i} className="rounded-2xl border border-border/60 bg-surface-elev p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg">Phiên bản {i + 1}</span>
                  <span className="text-[10px] uppercase tracking-wider text-brand font-semibold bg-brand/10 px-2 py-0.5 rounded-full">{v.angle}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Heart className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Copy className="h-4 w-4" /></Button>
                </div>
              </div>
              <p className="leading-relaxed">{v.body}</p>
              <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <span>192 ký tự · ~38 giây đọc</span>
                <Button size="sm" variant="outline" className="h-7">Lưu nháp</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppShell>
  );
}