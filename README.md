# Idea Generator

## How to start locally

```sh
npm i

touch .env
echo 'DATABASE_URL="file:./dev.db"' >> .env


npx prisma db push # `prisma/dev.db`作成 & packageの型修正
npx prisma db seed # seedの追加

npm run dev


```
