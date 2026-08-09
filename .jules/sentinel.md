## 2026-08-09 - GROQ Query Injection via String Interpolation
**Vulnerability:** Sanity GROQ query in `src/data/page.js` used string interpolation for the `id` argument (`*[_type == "page" && _id == "${id}"]`), leading to potential GROQ injection attacks.
**Learning:** Astro SSR can pass `undefined` to the data fetcher, which crashes the Sanity client. Further, dynamically evaluating unparameterized variables breaks query safety. Sanity handles variables internally when passed via the config object.
**Prevention:** Use parameterized GROQ queries (e.g. `$id`) and pass variables in the client's options object. Additionally, check for truthy parameters before calling the Sanity client (e.g. `if (!id) return null;`) to avoid unexpected crashes during Astro's build process.
