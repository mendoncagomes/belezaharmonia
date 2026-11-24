import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero-hair.jpg";
import interior from "@/assets/salon-interior.jpg";
import mechas from "@/assets/mechas-peroladas.jpg";
import escova from "@/assets/escova-mechas.jpg";
import matizacao from "@/assets/matizacao-corte.jpg";
import { WHATSAPP_NUMBER, buildWhatsAppLink } from "@/lib/booking";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hellen Hair — Salão de Beleza em Barretos/SP" },
      { name: "description", content: "Mechas, alisamentos, escovas e maquiagem em Barretos. Escolha o serviço e agende pelo WhatsApp em segundos." },
      { property: "og:title", content: "Hellen Hair — Salão de Beleza em Barretos/SP" },
      { property: "og:description", content: "Transformando beleza há 29 anos. Agende pelo WhatsApp em segundos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { n: "01", name: "Mechas & Loiros", desc: "Luzes, new blond e morena iluminada com tons sob medida." },
  { n: "02", name: "Coloração", desc: "Da cobertura de brancos às cores fantasia, como o azul." },
  { n: "03", name: "Alisamento", desc: "Escova progressiva, ecológica e plástica de fios." },
  { n: "04", name: "Escova", desc: "Escova modelada ou lisa para o dia a dia e eventos." },
  { n: "05", name: "Corte", desc: "Cortes femininos e masculinos com acabamento preciso." },
  { n: "06", name: "Maquiagem", desc: "Make para festas, formaturas e ocasiões especiais." },
];
const PERIODS = ["Manhã", "Tarde", "Noite"];
const GALLERY = [
  {
    tag: "01",
    img: mechas,
    alt: "Cabelo com mechas na nuca e na frente, loiro perolado finalizado em cachos",
    title: "Loiro perolado",
    desc: "Mechas na nuca e na frente, finalizadas em cachos.",
  },
  {
    tag: "02",
    img: escova,
    alt: "Cabelo longo com mechas douradas e escova modelada em ondas",
    title: "Escova & mechas",
    desc: "Escova modelada nas mechas do mega hair.",
  },
  {
    tag: "03",
    img: matizacao,
    alt: "Cabelo castanho acobreado com matização e corte recente",
    title: "Matização & corte",
    desc: "Cor acertada e corte no mesmo dia.",
  },
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-gold" aria-hidden>
      <span className="h-px w-12 bg-gold/50" />
      <span className="text-xs">✦</span>
      <span className="h-px w-12 bg-gold/50" />
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <HowItWorks />
      <Booking />
      <About />
      <Footer />
    </main>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#servicos", "Serviços"],
    ["#galeria", "Galeria"],
    ["#agendar", "Agendar"],
    ["#salao", "O salão"],
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 md:flex md:justify-between">
        <a href="#" className="min-w-0 truncate font-display text-xl tracking-[0.25em] text-on-photo md:text-2xl">HELLEN HAIR</a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-on-photo md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-gold">{label}</a>
          ))}
        </nav>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Abrir menu"
          className="glass-card grid h-11 w-11 shrink-0 place-items-center rounded-full text-base text-on-photo md:hidden">
          <span aria-hidden>{open ? "✕" : "☰"}</span>
        </button>
      </div>
      {open && (
        <nav className="glass-card mx-6 p-6 md:hidden">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="block border-b border-on-photo/20 py-4 text-sm uppercase tracking-[0.25em] text-on-photo last:border-0 hover:text-gold">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <img src={hero} alt="Cabelo loiro ondulado finalizado no Hellen Hair" width={1024} height={1280}
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_30%]" />
      <div className="absolute inset-0 bg-photo-fade" />
      <div className="relative w-full max-w-3xl px-8 py-14 text-shadow-soft text-center text-on-photo fade-up md:px-16 md:py-20">
        <p className="mb-6 text-xs uppercase tracking-[0.4em]">Barretos · SP · desde 1997</p>
        <h1 className="font-display text-5xl leading-[0.95] md:text-8xl">
          Seu cabelo,<br /><em>sua assinatura.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg font-light">Há 29 anos transformando beleza em Barretos.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#agendar" className="glass-card rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] text-on-photo transition hover:bg-on-photo/25">
            Agendar horário
          </a>
          <a href="#servicos" className="glass-card rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] text-on-photo transition hover:bg-on-photo/25">
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <Ornament />
          <h2 className="mt-6 font-display text-5xl md:text-6xl">Nossos <em className="text-gold-gradient">serviços</em></h2>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.n} className="group bg-background p-10 transition hover:bg-card">
              <span className="font-display text-5xl text-gold/40 transition group-hover:text-gold">{s.n}</span>
              <h3 className="mt-4 font-display text-3xl">{s.name}</h3>
              <p className="mt-3 font-light text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <Ornament />
          <h2 className="mt-6 font-display text-5xl md:text-6xl">Nossos <em className="text-gold-gradient">trabalhos</em></h2>
          <p className="mt-4 font-light text-muted-foreground">Fotos reais de quem sentou na nossa cadeira.</p>
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {GALLERY.map((g, i) => (
            <figure key={g.tag} className={`group ${i === 1 ? "md:mt-14" : ""}`}>
              <div className="relative overflow-hidden border border-gold/30 bg-card">
                <img src={g.img} alt={g.alt} width={900} height={900} loading="lazy"
                  className="aspect-square w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
                <span className="absolute left-5 top-4 font-display text-3xl text-on-photo text-shadow-soft">{g.tag}</span>
              </div>
              <figcaption className="mt-5 text-center md:text-left">
                <h3 className="font-display text-3xl">{g.title}</h3>
                <p className="mt-1 font-light text-muted-foreground">{g.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="https://instagram.com/salaohellenhair" target="_blank" rel="noreferrer"
            className="glass-card inline-block rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold transition hover:bg-gold/10">
            Mais fotos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["Escolha", "Marque um ou mais serviços."],
    ["Defina", "Selecione o dia e o melhor período."],
    ["Confirme", "Envie pelo WhatsApp e aguarde a confirmação."],
  ];
  return (
    <section className="bg-card py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        {steps.map(([t, d], i) => (
          <div key={t} className="flex gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-xl text-gold">{i + 1}</span>
            <div>
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="font-light text-muted-foreground">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Booking() {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState("Tarde");
  const today = new Date().toISOString().slice(0, 10);
  const ready = name.trim() && selected.length > 0 && date;

  const toggle = (s: string) =>
    setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready) return;
    window.open(buildWhatsAppLink({ name, services: selected, date, period }), "_blank");
  };

  return (
    <section id="agendar" className="py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <Ornament />
          <h2 className="mt-6 font-display text-5xl md:text-6xl">Agende em <em className="text-gold-gradient">segundos</em></h2>
          <p className="mt-4 font-light text-muted-foreground">Sem ligação, sem espera. Sua mensagem chega pronta no nosso WhatsApp.</p>
        </div>
        <form onSubmit={submit} className="space-y-10 border border-gold/30 bg-card p-8 md:p-12">
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-gold">Seu nome</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Como podemos te chamar?"
              className="mt-3 w-full border-b border-input bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground/60 focus:border-gold" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Serviços</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {SERVICES.map((s) => {
                const on = selected.includes(s.name);
                return (
                  <button type="button" key={s.name} onClick={() => toggle(s.name)} aria-pressed={on}
                    className={`rounded-full border px-5 py-2 text-sm transition ${on ? "border-gold bg-gold text-primary-foreground" : "border-input text-foreground hover:border-gold"}`}>
                    {s.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-gold">Dia</label>
              <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)}
                className="mt-3 w-full border-b border-input bg-transparent py-3 text-lg outline-none [color-scheme:dark] focus:border-gold" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Período</p>
              <div className="mt-4 flex gap-2">
                {PERIODS.map((p) => (
                  <button type="button" key={p} onClick={() => setPeriod(p)} aria-pressed={period === p}
                    className={`flex-1 border py-2 text-sm transition ${period === p ? "border-gold text-gold" : "border-input text-muted-foreground hover:border-gold"}`}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button type="submit" disabled={!ready}
            className="w-full bg-gold-gradient py-5 text-sm uppercase tracking-[0.25em] text-primary-foreground transition hover:opacity-90 disabled:opacity-40">
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="salao" className="border-t border-border">
      <div className="grid md:grid-cols-2">
        <img src={interior} alt="Interior do salão" width={1280} height={896} loading="lazy" className="h-full min-h-80 w-full object-cover" />
        <div className="flex flex-col justify-center p-10 md:p-20">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">O salão</p>
          <h2 className="mt-4 font-display text-5xl">Tradição que <em className="text-gold-gradient">brilha</em></h2>
          <p className="mt-6 font-light leading-relaxed text-muted-foreground">
            Desde 1997 cuidamos de quem é de Barretos com técnica, carinho e as tendências mais atuais —
            do loiro perfeito ao alisamento que dura.
          </p>
          <a href="https://instagram.com/salaohellenhair" target="_blank" rel="noreferrer"
            className="mt-8 self-start border-b border-gold pb-1 text-sm uppercase tracking-[0.2em] text-gold">
            Veja nossos trabalhos no Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <span className="font-display text-xl tracking-[0.25em] text-gold-gradient">HELLEN HAIR</span>
        <span>Barretos · SP</span>
        <div className="flex gap-6">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp</a>
          <a href="https://instagram.com/salaohellenhair" target="_blank" rel="noreferrer" className="hover:text-gold">@salaohellenhair</a>
        </div>
      </div>
    </footer>
  );
}
