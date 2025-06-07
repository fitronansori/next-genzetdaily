import { Plus, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const QuickActions = () => {
  return (
    <div className="bg-background rounded-base shadow-shadow border-2 border-border p-6">
      <h2 className="text-lg font-heading text-foreground mb-4">Aksi Cepat</h2>
      <div className="space-y-3">
        <Button
          asChild
          variant="noShadow"
          className="w-full text-left p-3 rounded-base border-2 border-border bg-chart-1 h-auto justify-start"
        >
          <Link href="/dashboard/articles/create">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-background border-2 border-border rounded-base shadow-shadow">
                <Plus className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="font-heading text-foreground">
                  Buat Artikel Baru
                </p>
                <p className="text-sm font-base text-foreground/80">
                  Tulis dan terbitkan artikel baru
                </p>
              </div>
            </div>
          </Link>
        </Button>
        <Button
          asChild
          variant="noShadow"
          className="w-full text-left p-3 rounded-base border-2 border-border bg-chart-2 h-auto justify-start"
        >
          <Link href="/dashboard">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-background border-2 border-border rounded-base shadow-shadow">
                <BarChart3 className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="font-heading text-foreground">Lihat Analitik</p>
                <p className="text-sm font-base text-foreground/80">
                  Periksa kinerja konten Anda
                </p>
              </div>
            </div>
          </Link>
        </Button>
        <Button
          asChild
          variant="noShadow"
          className="w-full text-left p-3 rounded-base border-2 border-border bg-chart-3 h-auto justify-start"
        >
          <Link href="/dashboard/settings">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-background border-2 border-border rounded-base shadow-shadow">
                <Settings className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="font-heading text-foreground">Pengaturan</p>
                <p className="text-sm font-base text-foreground/80">
                  Kelola pengaturan akun Anda
                </p>
              </div>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
