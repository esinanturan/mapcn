"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowDown,
  ArrowUp,
  CornerDownLeft,
  FileText,
  SearchIcon,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";
import { docsNavigation } from "@/lib/docs-navigation";
import { Button } from "./ui/button";

export function CommandSearch() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleSelect(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Search documentation"
        className="hidden group md:flex items-center w-[180px] dark:border-border/50 border-border/70 rounded-lg text-sm font-normal text-muted-foreground"
      >
        <SearchIcon className="size-3.5 shrink-0" />
        <span>Search docs...</span>
        <Kbd className="ml-auto">⌘K</Kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search Documentation"
        description="Search for documentation pages and components"
        showCloseButton={false}
      >
        <CommandInput
          placeholder="Search documentation..."
          className="border-none text-sm h-10"
        />
        <CommandList>
          <CommandEmpty className="py-8 text-muted-foreground text-sm">
            <div className="flex flex-col items-center gap-1.5">
              <FileText className="size-5 opacity-40" />
              <span>No results found.</span>
            </div>
          </CommandEmpty>
          {docsNavigation.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => handleSelect(item.href)}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
        <div className="border-t p-3 text-xs text-muted-foreground/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1.5">
              <Kbd>
                <ArrowUp className="size-3" />
              </Kbd>
              <Kbd>
                <ArrowDown className="size-3" />
              </Kbd>
              <span>navigate</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd>
                <CornerDownLeft className="size-3" />
              </Kbd>
              <span>select</span>
            </span>
          </div>
          <span className="flex items-baseline gap-1.5">
            <Kbd>esc</Kbd>
            <span>close</span>
          </span>
        </div>
      </CommandDialog>
    </>
  );
}
