## 2024-05-18 - [Fix GROQ injection in page fetch]
**Vulnerability:** Sanity GROQ queries in `src/data/page.js` were constructed using string interpolation (`_id == "${id}"`) instead of parameters, leaving them open to injection attacks.
**Learning:** Sanity queries should always be parameterized, just like SQL queries. Additionally, when using parameterized queries during static site generation (like Astro's `npm run build`), the build can crash if falsy variables (like `undefined`) are passed to `client.fetch`.
**Prevention:** Always use query parameters (e.g., `$id`) alongside an options object containing variables for Sanity queries. Always add an early return (`if (!id) return null;`) before `client.fetch` to prevent passing undefined parameters during build time.
