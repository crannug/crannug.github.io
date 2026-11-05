# description
A one-page portfolio site built as an assignment for my software engineering class.

# built with
Vite, React, TypeScript, plain CSS with custom properties, GitHub Actions and GitHub Pages

Vite provides a dev server with hot module replacement so I can see changes as I make them without reloading. It also builds the real site, converting my TypeScript, JSX, and CSS into plain static files in dist/, which is what GitHub Pages publishes. GitHub Actions is configured to run this build step on every push to main, updating the Pages site.

React: Runs in the visitor's browser. Components make up everything on the page. App.tsx is the top-level component. It brings in data from files in data/ and uses .map() to render array contents as HTML elements. I write the JSX (the HTML-like code in .tsx files) once and React fills in the data when the page loads.

TypeScript: adds types to JavaScript. Uses this to make sure certain types of errors are caught before code is deployed. For example, if I declare a field for a type and then misspell that field later, TypeScript's compiler catches this and forces me to fix it. Also allows my editor to suggest or autofill fields declared for types. TypeScript is only really visible while writing the code: it's converted to regular JavaScript during the build phase and all the types are stripped out, before the code is actually deployed.

# try it yourself
`npm install` then `npm run build` and `npm run dev` to see the locally hosted version. every push to main builds and deploys via .github/workflows/deploy.yml

# credits
- Deploy workflow: taken from [Vite docs, GitHub Pages section](https://vite.dev/guide/static-deploy.html#github-pages)
- CSS reset: Only small modifications were made, from [Andy Bell, A (more) modern CSS reset](https://piccalil.li/blog/a-more-modern-css-reset/)
- Fonts: Fira Sans and Fira Code, via Google Fonts
