import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { calendar30 } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronLeft, ChevronRight, Download } from "lucide-react";

export const Route = createFileRoute("/calendar")({
  head: () => ({ meta: [{ title: "Lịch 30 ngày · Vinrl" }] }),
  component: CalendarPage,
});

const typeColors: Record<string, string> = {
  Hook: "bg-brand/15 text-brand border-brand/30",
  Story: "bg-brand-2/15 text-[color:var(--brand-2)] border-brand-2/30",
  Educate: "bg-brand-4/15 text-[color:var(--brand-4)] border-brand-4/30",
  Sell: "bg-brand-3/15 text-[color:var(--brand-3)] border-brand-3/30",
  Trend: "bg-foreground/10 text-foreground border-foreground/20",
  BTS: "bg-accent text-accent-foreground border-border",
};

function CalendarPage() {
  return (
    <AppShell title="Lịch nội dung 30 ngày" subtitle="AI cân đối hook / story / educate / sell để bạn không lặp ý.">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="h-9 w-9"><ChevronLeft className="h-4 w-4" /></Button>
          <div className="px-4 font-display font-bold">Tháng 6 · 2026</div>
          <Button variant="outline" size="icon" className="h-9 w-9"><ChevronRight className="h-4 w-4" /></Button>
        </div>
        <div className="flex flex-wrap gap-2 ml-auto">
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-3.5 w-3.5" /> Export CSV</Button>
          <Button size="sm" className="bg-gradient-brand text-white shadow-glow gap-2"><Sparkles className="h-4 w-4" /> Tạo lịch mới bằng AI</Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border/60 bg-surface-elev p-4 overflow-hidden">
        <div className="grid grid-cols-7 gap-1 mb-2 text-xs font-semibold text-muted-foreground">
          {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
            <div key={d} className="px-2 py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 30 }).map((_, i) => {
            const item = calendar30[i];
            return (
              <div key={i} className="aspect-[3/4] rounded-xl border border-border/60 p-2.5 bg-card hover:shadow-card transition flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-sm">{item.day}</span>
                  <span className="text-[9px] text-muted-foreground">{item.platform}</span>
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider w-fit px-1.5 py-0.5 rounded border ${typeColors[item.type]}`}>{item.type}</span>
                <div className="text-[11px] leading-tight line-clamp-3 text-foreground/80">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-3 mt-6">
        {[
          { label: "Hook", n: 8, c: "bg-brand" },
          { label: "Story", n: 7, c: "bg-brand-2" },
          { label: "Educate", n: 8, c: "bg-brand-4" },
          { label: "Sell", n: 7, c: "bg-brand-3" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border/60 bg-surface-elev p-4">
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${s.c}`} />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</span>
            </div>
            <div className="font-display text-2xl font-bold mt-1">{s.n} post</div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}