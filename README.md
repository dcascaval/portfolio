Development server

```bash
npm install
bun run dev
```

Modifying `pages/index.tsx`. The page auto-updates as you edit the file.

To deploy:

`bun run build`, commit & push

on target machine:
`./clean.sh`, pull & run `./deploy.sh`

---

Bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
