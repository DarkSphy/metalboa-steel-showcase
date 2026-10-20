import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "./index";

export const Route = createFileRoute("/gourmet")({ component: GourmetPage });

function GourmetPage() {
  return <SitePage current="gourmet" />;
}
