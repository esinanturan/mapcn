"use client";

import Link from "next/link";
import { useState } from "react";
import { Bot, Check, ChevronDown, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { mapInstallAgentPrompt } from "@/lib/llm-prompts";

type Mode = "humans" | "agents";

export function GetStartedActions() {
  const [mode, setMode] = useState<Mode>("humans");
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(mapInstallAgentPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error("Failed to copy prompt:", error);
    }
  }

  return (
    <div className="relative">
      <ButtonGroup>
        {mode === "humans" ? (
          <Button asChild className="group/link min-w-30 justify-center">
            <Link href="/docs">Get Started</Link>
          </Button>
        ) : (
          <Button
            onClick={copyPrompt}
            className="min-w-30 justify-center"
            aria-live="polite"
          >
            {copied ? "Copied" : "Copy prompt"}
          </Button>
        )}

        <ButtonGroupSeparator />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              aria-label="Switch get started mode"
              className="group/trigger w-8"
            >
              <ChevronDown className="transition-transform duration-200 group-data-[state=open]/trigger:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="grid w-56 gap-1">
            <DropdownMenuItem
              onSelect={() => setMode("humans")}
              className={cn(mode === "humans" && "bg-accent")}
            >
              <Users />
              <div className="flex flex-col">
                <span className="text-foreground">For humans</span>
                <span className="text-muted-foreground text-xs">
                  Read the documentation
                </span>
              </div>
              {mode === "humans" && <Check className="ml-auto" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => setMode("agents")}
              className={cn(mode === "agents" && "bg-accent")}
            >
              <Bot />
              <div className="flex flex-col">
                <span className="text-foreground">For agents</span>
                <span className="text-muted-foreground text-xs">
                  Copy a prompt for your AI
                </span>
              </div>
              {mode === "agents" && <Check className="ml-auto" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>

      {copied && (
        <p className="animate-fade-up text-muted-foreground absolute top-full left-0 mt-2 flex items-center gap-1 text-xs whitespace-nowrap">
          <Check className="size-3.5" />
          Copied - paste this into your coding agent!
        </p>
      )}
    </div>
  );
}
