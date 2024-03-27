# Practice Session: NextJs

Changes made:

- Code split html files into nextjs pages
- Refactor common sections (headers, footers) into [layout.tsx](./src/app/layout.tsx)
- Componentize some common code (mostly on [index page](./src/app/page.tsx), it's an annoying task `:\`)
- Change anchor tags to next `Link` components
- Change img tags to next `Image` components
- Refactor fonts loading with [nextjs defaults](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- Create API endpoint (POST to `/api/reserve`) to simulate saving data from a reservation (sent to https://httpbin.org/)
- Setup deployment to Vercel (https://frontend-performance-homeworks-next.vercel.app/)
