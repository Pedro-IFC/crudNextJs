# Projeto Next.js

Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Como começar

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando o arquivo `app/page.js`. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente [Geist](https://vercel.com/font), uma nova família de fontes da Vercel.

## Saiba mais

Para aprender mais sobre o Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - conheça os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo sobre Next.js.

Você pode acessar [o repositório do Next.js no GitHub](https://github.com/vercel/next.js) - seu feedback e contribuições são bem-vindos!

## Implantação na Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), criada pelos desenvolvedores do Next.js.

Confira nossa [documentação sobre implantação no Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

---

## Configuração do arquivo `.env.local`

Para que o projeto funcione corretamente, é necessário criar um arquivo chamado `.env.local` na raiz do projeto. Este arquivo deve conter as seguintes variáveis de ambiente:

```
NEXT_PUBLIC_FIREBASE_apiKey=SEU_API_KEY
NEXT_PUBLIC_FIREBASE_authDomain=SEU_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_projectId=SEU_PROJECT_ID
```

Substitua `SEU_API_KEY`, `SEU_AUTH_DOMAIN` e `SEU_PROJECT_ID` pelos valores corretos fornecidos pela sua configuração do Firebase.
