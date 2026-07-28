## 2024-07-28 - [CRITICAL] Prevented GROQ Query Injection
**Vulnerability:** Sanity CMS fetch function used string interpolation for the `_id` parameter (`_id == "${id}"`) in `src/data/page.js`, creating a critical query injection risk. An attacker could pass a crafted string (e.g., `"] { ... } //`) to arbitrarily alter the GROQ query and access unauthorized data.
**Learning:** String concatenation or interpolation in GROQ queries (especially inside filter expressions) can lead to query injection. Sanity's `client.fetch` requires using parameterization for variable inputs, similar to SQL prepared statements.
**Prevention:** Always use parameterized queries (e.g., `_id == $id`) and provide the parameters as a secondary object to `client.fetch()` (e.g., `{ id }`).
