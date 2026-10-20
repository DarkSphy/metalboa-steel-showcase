import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "./index";

export const Route = createFileRoute("/cozinhas-industriais")({
  component: CozinhasIndustriaisPage,
});

function CozinhasIndustriaisPage() {
  return <SitePage current="cozinhas" />;
}
