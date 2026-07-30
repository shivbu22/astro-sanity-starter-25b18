## 2024-07-30 - [GROQ Query Injection]
**Vulnerability:** Found unparameterized GROQ query in `src/data/page.js` using string interpolation for `_id`. This allows an attacker to manipulate the query structure.
**Learning:** String interpolation in GROQ queries (e.g. `_id == "${id}"`) leaves the query vulnerable to injection attacks, similar to SQL injection.
**Prevention:** Always use parameterized queries (e.g. `_id == $id` with `{ id }` passed as a separate argument) when using user-supplied input in Sanity CMS GROQ queries.