# Bom Dia Poção

Portal editorial em Next.js de notícias, cultura, memória e rádio de Poção, Pernambuco.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. O painel editorial inicial está em `http://localhost:3000/admin`.

Para validar uma versão de produção:

```bash
npm run build
npm run start
```

## Publicar na Vercel

Importe o repositório na Vercel, selecione **Next.js** e use `BomDiaPo-o` como Root Directory caso o repositório tenha outros projetos. A Vercel detectará automaticamente:

- Build: `next build`
- Output: gerenciado pelo Next.js
- Instalação: `npm install`

Não há variáveis de ambiente obrigatórias nesta primeira versão.

O painel `/admin` é a base visual para a redação. Para produção, conecte autenticação, banco de dados, CMS, stream real da Vale do Açaí FM, API de clima e fontes editoriais validadas.
