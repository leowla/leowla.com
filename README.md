# leowla.com

This project started from the [Cloudflare Workers Astro blog template v8.1.0](https://github.com/cloudflare/templates/tree/v.8.1.0/astro-blog-starter-template) and has been simplified into a one-page personal website.

## Stack

- Astro
- Tailwind CSS
- Biome
- Cloudflare Workers

## Development

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Content

Update content in `src/pages/index.astro`.
Update SEO title/description in `src/consts.ts`.

## Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`         | Get help using the Astro CLI                     |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare        |
| `npm wrangler tail`               | View real-time logs for all Workers              |

## License

The source code for this site is licensed under the MIT License.

All written content, images, and other media are &copy; Leo Wang and may not be reproduced without permission.
