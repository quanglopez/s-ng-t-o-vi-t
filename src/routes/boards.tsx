import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { boards } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/boards")({
  head: () => ({ meta: [{ title: "Bảng cảm hứng · Vinrl" }] }),
  component: BoardsPage,
});

function BoardsPage() {
  return (
    <AppShell
      title="Bảng cảm hứng"
      subtitle="Tổ chức ý tưởng viral theo niche, theo client, theo campaign."
    >
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Tìm bảng…" className="pl-9 bg-surface-elev h-11" />
        </div>
        <div className="flex gap-2">
          {["Tất cả", "Cá nhân", "Team", "Client"].map((t, i) => (
            <Button
              key={t}
              variant={i === 0 ? "default" : "outline"}
              size="sm"
              className={i === 0 ? "bg-foreground text-background" : ""}
            >
              {t}
            </Button>
          ))}
        </div>
        <Button className="bg-gradient-brand text-white gap-2 ml-auto shadow-glow">
          <Plus className="h-4 w-4" /> Bảng mới
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {boards.map((b) => (
          <Link
            key={b.id}
            to="/boards/$boardId"
            params={{ boardId: b.id }}
            className="group rounded-2xl border border-border/60 bg-surface-elev p-5 hover:shadow-card transition"
          >
            <div
              className={`h-32 rounded-xl bg-gradient-to-br ${b.color} relative overflow-hidden flex items-end p-4`}
            >
              <span className="absolute top-3 left-3 text-3xl">{b.emoji}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="relative text-xs font-semibold text-white bg-black/30 backdrop-blur px-2 py-1 rounded-full">
                {b.count} post
              </span>
            </div>
            <div className="mt-4 flex items-start justify-between gap-2">
              <div>
                <div className="font-display font-bold text-lg">{b.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">Cập nhật 2 giờ trước</div>
              </div>
              <div className="flex -space-x-2">
                {["M", "L", "T"].map((c, i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-card bg-gradient-brand grid place-items-center text-[10px] font-bold text-white"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}

        <button className="rounded-2xl border-2 border-dashed border-border bg-transparent p-5 grid place-items-center text-muted-foreground hover:border-brand hover:text-brand transition min-h-[220px]">
          <div className="text-center">
            <Plus className="h-8 w-8 mx-auto" />
            <div className="mt-2 font-display font-semibold">Tạo bảng mới</div>
          </div>
        </button>
      </div>
    </AppShell>
  );
}
