## 2024-05-18 - [CRITICAL] GROQ Query Injection
**Vulnerability:** The codebase uses string interpolation for GROQ queries (e.g. `_id == "${id}"`) in `src/data/page.js` instead of parameterized queries. This makes the application susceptible to GROQ injection.
**Learning:** Hardcoded string interpolation in database queries without validation exposes backend data. Queries must always use explicit parameterization provided by the query language or client library.
**Prevention:** Always use parameterized queries (e.g. `$id`) and pass parameters as a separate object instead of concatenating strings.
