import { highlightCode } from "@/lib/highlight";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopyButton?: boolean;
}

export async function CodeBlock({
  code,
  language = "tsx",
  showCopyButton = true,
}: CodeBlockProps) {
  const highlighted = await highlightCode(code, language);

  return (
    <div className="relative rounded-lg border bg-muted/30 min-w-full overflow-x-auto">
      {showCopyButton && (
        <CopyButton text={code} className="absolute top-3 right-3" />
      )}
      <div
        className="p-4 text-sm [&_pre]:bg-transparent! [&_code]:bg-transparent!"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}
