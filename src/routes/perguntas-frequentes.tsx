import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "./index";

export const Route = createFileRoute("/perguntas-frequentes")({ component: PerguntasFrequentesPage });

function PerguntasFrequentesPage() {
  return <SitePage current="faq" />;
}
