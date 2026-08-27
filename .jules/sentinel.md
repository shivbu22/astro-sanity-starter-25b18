## 2024-08-27 - [CRITICAL] GROQ Query Injection
**Vulnerability:** Found GROQ query injection in `src/data/page.js` where user input `id` was directly interpolated into the Sanity query string: `client.fetch('*[_type == "page" && _id == "${id}"] ...')`.
**Learning:** String interpolation in CMS queries functions exactly like SQL injection, allowing attackers to manipulate the query structure or access unauthorized data. Sanity GROQ requires parameterized variables to securely pass dynamic values.
**Prevention:** Always use parameterized queries (e.g., `_id == $id` with `{ id }` passed as the second argument) for all dynamic values in Sanity queries. Never use string interpolation.
