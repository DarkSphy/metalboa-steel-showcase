import { HeaterPage } from "@/components/heater-page";
import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailPage } from "./index";

export const Route = createFileRoute("/produtos/$slug")({ component: ProdutoPage });

function ProdutoPage() {
  const { slug } = Route.useParams();
  return slug === "aquecedor-de-marmitas-veicular" ? <HeaterPage /> : <ProductDetailPage slug={slug} />;
}
