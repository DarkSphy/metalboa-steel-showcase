import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "./index";

export const Route = createFileRoute("/varejo")({ component: VarejoPage });

function VarejoPage() {
  return <SitePage current="varejo" />;
}
