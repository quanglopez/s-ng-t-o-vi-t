import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link2, ClipboardPaste, Sparkles, Loader2 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export function AddContentModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const analyze = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      navigate({ to: "/breakdown/$postId", params: { postId: "p1" } });
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Thêm nội dung để phân tích</DialogTitle>
          <DialogDescription>
            Dán link TikTok, Instagram, YouTube hoặc paste nguyên caption. AI sẽ bóc tách hook, cấu
            trúc và lý do viral.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="url" className="mt-2">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="url" className="gap-2">
              <Link2 className="h-4 w-4" /> Dán link
            </TabsTrigger>
            <TabsTrigger value="text" className="gap-2">
              <ClipboardPaste className="h-4 w-4" /> Paste text
            </TabsTrigger>
          </TabsList>

          <TabsContent value="url" className="space-y-3 pt-4">
            <Input placeholder="https://www.tiktok.com/@trangbeauty/video/..." className="h-12" />
            <div className="text-xs text-muted-foreground">
              Hỗ trợ TikTok, Instagram Reels, YouTube Shorts, Threads, Facebook Reels.
            </div>
          </TabsContent>

          <TabsContent value="text" className="pt-4">
            <Textarea
              placeholder="Dán caption hoặc script bạn muốn AI phân tích…"
              className="min-h-[160px] resize-none"
            />
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="text-xs text-muted-foreground">
            Sẽ lưu vào <span className="font-semibold text-foreground">Hook viral 2026</span>
          </div>
          <Button
            onClick={analyze}
            disabled={loading}
            className="bg-gradient-brand text-white shadow-glow"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
            {loading ? "Đang phân tích…" : "Phân tích bằng AI"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
