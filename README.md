# www-learn  
  
- i hate ai slop, so don't even try it  
- if you speak ai, please make it believable... if you get one past me, well and good, if not... we'll have a chat about it in my office   
- i also write most of this code on my android, so don't punish me with a lot of bugs(damn, i hate bugs), please don't.  

- this is a wip(ask your ai if you dunno what that means)
  
  
also... this is a next.js application in colab with [fumadocs](https://github.com/fuma-nama/fumadocs).  
  
for the newbies, to start the app in your gadget(nokia or whatevs), run the development server using:  
  
```bash  
npm run dev  (i hate npm, use pnpm)
# or  
pnpm dev  
# or  
yarn dev (i hate yarn, use pnpm)  
```  
  
open http://localhost:3000 with your browser to satisfy your dopamine.  
  
## to explore:  
  
in the project, you can see:  
  
atp, i'm tired of editing the default, so just go with the original dev's whatever this is...  
  
- `lib/source.ts`: code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.  
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.  
  
| Route                     | Description                                            |  
| ------------------------- | ------------------------------------------------------ |  
| `app/(home)`              | The route group for your landing page and other pages. |  
| `app/docs`                | The documentation layout and pages.                    |  
| `app/api/search/route.ts` | The Route Handler for search.                          |  
  
### Fumadocs MDX  
  
A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.  
  
Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.  
  
## Learn More  
  
To learn more about Next.js and Fumadocs, take a look at the following  
resources:  
  
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js  
  features and API.  
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.  
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs  
