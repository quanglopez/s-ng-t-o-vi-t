import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { boards, posts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Sparkles, Share2, Filter, Grid3x3, List, Heart, Bookmark, Eye } from "lucide-react";

export const Route = createFileRoute("/boards/$boardId")({
  head: () => ({ meta: [{ title: "Bảng · Vinrl" }] }),
  component: BoardDetail,
});

function BoardDetail() {
  const { boardId } = Route.useParams();
  const board = boards.find((b) => b.id === boardId) ?? boards[0];
  const list = posts
    .filter((p) => p.boardId === boardId)
    .concat(posts)
    .slice(0, 9);

  return (
    <AppShell title={board.name} subtitle={`${board.count} post viral đã lưu`}>
      <div
        className={`rounded-3xl bg-gradient-to-br ${board.color} p-8 mb-8 text-white relative overflow-hidden`}
      >
        <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-5xl mb-3">{board.emoji}</div>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold">{board.name}</h1>
            <p className="mt-2 text-white/85 max-w-xl">
              Bộ sưu tập video viral để team Vinrl phân tích công thức và remix mỗi tuần.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 bg-transparent gap-2"
            >
              <Share2 className="h-4 w-4" /> Chia sẻ
            </Button>
            <Button className="bg-white text-foreground hover:bg-white/90 gap-2">
              <Sparkles className="h-4 w-4" /> Remix cả bảng
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="h-3.5 w-3.5" /> Tất cả niche
        </Button>
        <Button variant="outline" size="sm">
          TikTok
        </Button>
        <Button variant="outline" size="sm">
          Instagram
        </Button>
        <Button variant="outline" size="sm">
          YouTube
        </Button>
        <div className="ml-auto flex gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((p, i) => (
          <Link
            key={`${p.id}-${i}`}
            to="/breakdown/$postId"
            params={{ postId: p.id }}
            className="group rounded-2xl border border-border/60 bg-surface-elev overflow-hidden hover:shadow-card transition"
          >
            <div
              className={`aspect-[4/5] bg-gradient-to-br ${p.thumb} p-4 flex flex-col justify-between relative`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-white bg-black/30 backdrop-blur px-2 py-0.5 rounded-full">
                  {p.platform}
                </span>
                <button className="h-7 w-7 rounded-full bg-black/30 backdrop-blur grid place-items-center">
                  <Bookmark className="h-3.5 w-3.5 text-white fill-white" />
                </button>
              </div>
              <div className="text-white font-display font-semibold text-base leading-snug line-clamp-4">
                {p.hook}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-sm">{p.author}</div>
                  <div className="text-muted-foreground">{p.handle}</div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand">
                  {p.niche}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> {p.views}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" /> {p.likes}
                </span>
                <span className="flex items-center gap-1">
                  <Bookmark className="h-3.5 w-3.5" /> {p.saved}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
