import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 border-t">
      <div className="w-full container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="font-medium text-foreground">mapcn</span>
          <span className="text-muted-foreground/80">•</span>
          <span>
            Built by{" "}
            <a
              href="https://github.com/AnmolSaini16"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Anmol
            </a>
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="/docs"
            className="hover:text-foreground transition-colors"
          >
            Documentation
          </Link>
          <a
            href="https://github.com/AnmolSaini16/mapcn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
