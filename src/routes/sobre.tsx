import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "./index";

export const Route = createFileRoute("/sobre")({ component: SobrePage });

function SobrePage() {
  return <SitePage current="sobre" />;
}
