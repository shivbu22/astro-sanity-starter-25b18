## 2024-05-24 - GROQ Query Injection
**Vulnerability:** String interpolation was used in a Sanity GROQ query in `src/data/page.js` (`*[_type == "page" && _id == "${id}"]`), making it vulnerable to query injection.
**Learning:** Sanity GROQ queries, like SQL queries, are susceptible to injection attacks if user-controlled data is concatenated directly into the query string. In addition, when executing queries during server-side rendering (e.g. Astro), passing `undefined` as a query parameter can break the application.
**Prevention:** Always use parameterized queries (e.g. `$id`) with the `client.fetch` second argument (`{ id }`) instead of string interpolation. Always handle falsy/undefined variables before querying the CMS.
