## 2026-07-30 - Parameterize GROQ Queries to Prevent Injection
**Vulnerability:** Found string interpolation used in Sanity GROQ query in `getPageById` within `src/data/page.js` (`_id == "${id}"`).
**Learning:** Using string interpolation for user-provided IDs or variables allows attackers to manipulate the query, potentially leading to unauthorized data access or disruption (GROQ query injection).
**Prevention:** Always use parameterized variables (e.g., `_id == $id`) and pass an object with variables as the second argument to `client.fetch`.
