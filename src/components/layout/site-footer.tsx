import { profile } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground print:hidden">
      © 2026 {profile.name} · Built with Next.js, shadcn/ui & Motion
    </footer>
  );
}
