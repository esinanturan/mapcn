export const mapInstallCommand = "npx shadcn@latest add @mapcn/map";

export const mapInstallAgentPrompt = `Read the mapcn agent instructions at https://mapcn.dev/llms.txt, then install mapcn in this project. Run ${mapInstallCommand}. Then add a basic example that imports Map and MapControls from "@/components/ui/map" and renders a map inside a sized container. Preserve the existing Tailwind CSS and shadcn/ui setup. Do not manually rewrite the registry component unless the command fails; if it fails, inspect https://mapcn.dev/r/map.json and install the listed dependencies.`;
