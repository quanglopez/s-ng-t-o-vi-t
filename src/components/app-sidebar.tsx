import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  FolderHeart,
  Sparkles,
  Mic,
  Wand2,
  CalendarDays,
  Tag,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/dashboard", label: "Tổng quan", icon: LayoutDashboard },
  { to: "/boards", label: "Bảng cảm hứng", icon: FolderHeart },
  { to: "/voice", label: "Giọng văn", icon: Mic },
  { to: "/remix", label: "Remix AI", icon: Wand2 },
  { to: "/calendar", label: "Lịch 30 ngày", icon: CalendarDays },
  { to: "/pricing", label: "Gói cước", icon: Tag },
] as const;

export function AppSidebar({ onAdd }: { onAdd: () => void }) {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <aside className="hidden md:flex md:fixed md:inset-y-0 md:left-0 md:z-30 md:w-64 flex-col border-r border-border/60 bg-sidebar">
      <div className="px-5 pt-6 pb-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-brand grid place-items-center shadow-glow">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base">Vinrl</div>
            <div className="text-[11px] text-muted-foreground">AI content workspace</div>
          </div>
        </Link>
      </div>

      <div className="px-3">
        <Button
          onClick={onAdd}
          className="w-full justify-start gap-2 bg-gradient-brand text-white hover:opacity-95 shadow-glow"
        >
          <Plus className="h-4 w-4" /> Thêm nội dung
        </Button>
      </div>

      <nav className="mt-6 px-3 space-y-0.5 flex-1">
        {nav.map((item) => {
          const active = pathname === item.to || (item.to !== "/dashboard" && pathname.startsWith(item.to));
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-sidebar-accent text-foreground font-semibold"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="m-3 rounded-2xl p-4 bg-gradient-brand-soft border border-border/60">
        <div className="text-xs font-semibold text-foreground">Bạn còn 7 ngày dùng thử</div>
        <div className="text-[11px] text-muted-foreground mt-1">Nâng cấp để mở khoá Remix AI không giới hạn.</div>
        <Link to="/pricing">
          <Button size="sm" className="mt-3 w-full bg-foreground text-background hover:bg-foreground/90">
            Xem gói
          </Button>
        </Link>
      </div>

      <div className="px-5 py-4 border-t border-border/60 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-brand grid place-items-center text-white text-sm font-bold">M</div>
        <div className="text-xs leading-tight">
          <div className="font-semibold">Minh Lê</div>
          <div className="text-muted-foreground">Creator · Pro</div>
        </div>
      </div>
    </aside>
  );
}