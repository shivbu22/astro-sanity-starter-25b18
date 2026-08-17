## 2026-08-17 - [CRITICAL] GROQ Query Injection
**Vulnerability:** Found GROQ query injection via unparameterized input (`${id}`) in `src/data/page.js` when querying the Sanity CMS.
**Learning:** String interpolation in GROQ queries acts like SQL injection, allowing attackers to manipulate queries. Additionally, falsy values like `undefined` can break queries if passed directly during SSR or SSG.
**Prevention:** Always use parameterized queries (e.g. `client.fetch('*[_type == "page" && _id == $id]', { id })`) and validate inputs (e.g., `if (!id) return [];`) before running queries.