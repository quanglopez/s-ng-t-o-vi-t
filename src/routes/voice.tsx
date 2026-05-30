import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Mic, Save, Upload, Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/voice")({
  head: () => ({ meta: [{ title: "Voice Profile · Vinrl" }] }),
  component: VoicePage,
});

function VoicePage() {
  const traits = [
    { label: "Trang trọng ← → Đời thường", value: 75 },
    { label: "Ngắn gọn ← → Kể chuyện", value: 60 },
    { label: "Lý trí ← → Cảm xúc", value: 70 },
    { label: "An toàn ← → Phá cách", value: 55 },
  ];

  return (
    <AppShell title="Voice Profile" subtitle="Dạy AI cách bạn nói chuyện — caption sinh ra sẽ nghe đúng là bạn.">
      <div className="grid lg:grid-cols-[1fr_360px] gap-8">
        <div className="space-y-6">
          <section className="rounded-2xl border border-border/60 bg-surface-elev p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
                <Mic className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">Bạn là ai?</h2>
                <p className="text-sm text-muted-foreground">Tự mô tả bằng tiếng Việt, hoặc paste 3–5 caption cũ bạn ưng nhất.</p>
              </div>
            </div>
            <Textarea
              defaultValue={"Mình là Minh, 27 tuổi, founder studio nhỏ ở Sài Gòn. Mình viết caption kiểu thân thiện, hay dùng dấu '—' và emoji vừa phải, thích kể chuyện cá nhân trước rồi mới chốt sản phẩm. Không thích từ 'wow', 'cực phẩm', 'must-have'."}
              className="min-h-[160px] resize-none"
            />
          </section>

          <section className="rounded-2xl border border-border/60 bg-surface-elev p-6">
            <h2 className="font-display text-xl font-bold mb-1">Tinh chỉnh giọng văn</h2>
            <p className="text-sm text-muted-foreground mb-6">Kéo thanh trượt để AI hiểu rõ hơn cách bạn viết.</p>
            <div className="space-y-6">
              {traits.map((t) => (
                <div key={t.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{t.label}</span>
                    <span className="text-xs text-muted-foreground">{t.value}%</span>
                  </div>
                  <Slider defaultValue={[t.value]} max={100} step={1} className="[&_[role=slider]]:bg-brand [&_[role=slider]]:border-brand" />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border/60 bg-surface-elev p-6">
            <h2 className="font-display text-xl font-bold mb-1">Mẫu caption tham khảo</h2>
            <p className="text-sm text-muted-foreground mb-4">Tải lên 3–10 caption cũ. AI học nhịp câu, từ ưa dùng, cách ngắt dòng.</p>
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-brand transition cursor-pointer">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
              <div className="mt-2 font-semibold">Kéo thả file .txt hoặc .csv</div>
              <div className="text-xs text-muted-foreground mt-1">Hoặc paste trực tiếp ở ô trên</div>
            </div>
          </section>

          <div className="flex gap-3">
            <Button className="bg-gradient-brand text-white shadow-glow gap-2 h-11"><Save className="h-4 w-4" /> Lưu voice profile</Button>
            <Button variant="outline" className="h-11 gap-2"><Sparkles className="h-4 w-4" /> Test thử</Button>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border/60 bg-surface-elev p-5 sticky top-24">
            <div className="text-xs uppercase tracking-wider text-brand font-bold mb-3">Preview giọng văn</div>
            <div className="text-sm leading-relaxed">
              "Mình từng ngồi tính lại — 3 năm làm freelance, mình bỏ gần 80 triệu cho khoá học online. Và đây là <span className="text-brand font-semibold">2 khoá duy nhất</span> mình thật sự dùng tới giờ —"
            </div>
            <div className="mt-4 pt-4 border-t border-border/60 space-y-2">
              {[
                "Dùng dấu '—' thay vì dấu ':'",
                "Bắt đầu bằng câu chuyện cá nhân",
                "Né từ marketing như 'cực phẩm'",
                "Emoji 1 cái/caption thôi",
              ].map((r) => (
                <div key={r} className="flex items-start gap-2 text-xs">
                  <Check className="h-3.5 w-3.5 text-brand mt-0.5 shrink-0" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}