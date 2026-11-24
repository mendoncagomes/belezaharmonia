# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Rodar em outro lugar

O site é estático: as fotos estão dentro de `src/assets/` e o agendamento abre o
WhatsApp do salão. Não há banco de dados nem login, então roda em qualquer
máquina ou hospedagem.

```sh
npm install
npm run dev      # desenvolvimento
npm run build    # gera a versão de produção
npm run preview  # abre a versão de produção
```

O `npm run build` usa o plugin `@lovable.dev/vite-tanstack-config` (público no
npm) e o `nitro` para empacotar o SSR. Se quiser publicar em Vercel, Netlify ou
Cloudflare, use o `npm run build` normal — a saída fica em `dist/`.

Para trocar as fotos, substitua os arquivos de `src/assets/` mantendo os mesmos
nomes: `hero-hair.jpg`, `salon-interior.jpg`, `mechas-peroladas.jpg`,
`escova-mechas.jpg`, `matizacao-corte.jpg`.

Para trocar o número do WhatsApp, edite `WHATSAPP_NUMBER` em `src/lib/booking.ts`
(no formato `55` + DDD + número, sem espaços).

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
