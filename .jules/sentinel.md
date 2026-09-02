## 2024-05-24 - [CRITICAL] GROQ Query Injection
**Vulnerability:** Unsanitized user input was passed directly into a GROQ query via string interpolation in `getPageById`.
**Learning:** GROQ queries are susceptible to injection attacks just like SQL when variables are interpolated as strings. The Sanity client handles parameterized queries natively.
**Prevention:** Always use parameterized queries (e.g., `_id == $id`) and pass variables as the second argument to `client.fetch`. Validate inputs before querying.
