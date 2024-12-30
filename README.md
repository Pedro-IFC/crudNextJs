# Crud Next.js

Este é um projeto [Next.js](https://nextjs.org) voltado para criação de um crud de clientes em uma aplicação single page em react/next

## Como começar

## Configuração do arquivo `.env.local`

Para que o projeto funcione corretamente, é necessário criar um arquivo chamado `.env.local` na raiz do projeto. Este arquivo deve conter as seguintes variáveis de ambiente:

```
NEXT_PUBLIC_FIREBASE_apiKey=SEU_API_KEY
NEXT_PUBLIC_FIREBASE_authDomain=SEU_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_projectId=SEU_PROJECT_ID
```

Substitua `SEU_API_KEY`, `SEU_AUTH_DOMAIN` e `SEU_PROJECT_ID` pelos valores corretos fornecidos pela sua configuração do Firebase.

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


