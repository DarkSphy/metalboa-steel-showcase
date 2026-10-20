import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "./index";

export const Route = createFileRoute("/atacado")({ component: AtacadoPage });

function AtacadoPage() {
  return <SitePage current="atacado" />;
}
