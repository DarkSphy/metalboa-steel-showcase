import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { heaterPhotos } from "@/components/heater-photos";

export function HeaterPage() {
  const [selected, setSelected] = useState(0);
  const [capacity, setCapacity] = useState(4);
  const photo = heaterPhotos[selected];
  const image = `/aquecedor/${selected + 1}.webp`;
  const message = encodeURIComponent(
    `Olá! Gostaria de uma cotação do aquecedor de marmitas veicular Metalboa para ${capacity} marmitas.`,
  );

  return (
    <main className="min-h-screen bg-background pb-24 text-ink lg:pb-12">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-12">
          <Link to="/"><img src="/metalboa-logo.png" alt="Metalboa" width={240} height={42} className="h-auto w-48 xl:w-60" /></Link>
          <Link to="/" className="text-sm font-semibold text-primary hover:underline">← Catálogo de produtos</Link>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-8 md:px-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-14">
        <section aria-label="Fotos do aquecedor" className="min-w-0">
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" aria-label={`Ampliar foto: ${photo.label}`} className="group relative block w-full overflow-hidden border border-border bg-white">
                <img src={image} alt={photo.label} width={photo.size} height={photo.size} className="aspect-[5/4] w-full object-contain" fetchPriority="high" />
                <span className="absolute bottom-3 right-3 border border-border bg-white px-3 py-2 text-sm font-semibold text-primary">Ampliar foto</span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-4xl" aria-describedby={undefined}>
              <DialogTitle>{photo.label}</DialogTitle>
              <img src={image} alt={photo.label} className="max-h-[72dvh] w-full object-contain" />
            </DialogContent>
          </Dialog>
          <div role="group" aria-label="Escolher foto" className="mt-3 grid grid-cols-6 gap-2">
            {heaterPhotos.map(({ label }, index) => (
              <button key={label} type="button" aria-label={label} aria-pressed={selected === index} onClick={() => setSelected(index)}
                className="aspect-square min-w-0 border border-border bg-white hover:border-primary aria-pressed:border-primary aria-pressed:ring-1 aria-pressed:ring-primary">
                <img src={`/aquecedor/${index + 1}.webp`} alt="" className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
        </section>
        <div>
          <h1 className="font-display font-bold text-4xl leading-tight sm:text-5xl">Aquecedor de marmitas veicular</h1>
          <p className="mt-4 max-w-lg text-muted-foreground">Compacto para uso em veículos, mantém a temperatura controlada por termostato para que a equipe possa fazer uma refeição quente em campo.</p>
          <fieldset className="mt-7">
            <legend className="mb-3 font-semibold">Escolha a capacidade</legend>
            <div className="flex flex-wrap gap-3">
              {[4, 6].map((option) => (
                <label key={option} className="cursor-pointer border border-border bg-white px-4 py-3 text-sm font-semibold has-checked:border-primary has-checked:text-primary">
                  <input type="radio" name="capacity" value={option} checked={capacity === option} onChange={() => setCapacity(option)} className="mr-2 accent-primary" />
                  {option} marmitas
                </label>
              ))}
            </div>
          </fieldset>
          <dl className="mt-7 space-y-4 border-t border-border pt-5">
            <div><dt className="font-semibold">Controle de temperatura</dt><dd className="text-sm text-muted-foreground">Aquecimento com termostato.</dd></div>
            <div><dt className="font-semibold">Alimentação</dt><dd className="text-sm text-muted-foreground">Conexão à bateria do veículo.</dd></div>
            <div><dt className="font-semibold">Instalação</dt><dd className="text-sm text-muted-foreground">Projetado para instalação sem cortes ou adaptações. Acompanha guia de instalação.</dd></div>
          </dl>
          <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-white px-6 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:static lg:mt-8 lg:border-0 lg:bg-transparent lg:p-0">
            <a href={`https://wa.me/5531971775866?text=${message}`} className="flex justify-center gap-3 bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-ink lg:w-fit">
              Pedir cotação · {capacity} marmitas <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
