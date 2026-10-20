import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "./index";

export const Route = createFileRoute("/contato")({ component: ContatoPage });

function ContatoPage() {
  return <SitePage current="contato" />;
}
