## 2024-03-24 - GROQ Query Injection
**Vulnerability:** String interpolation in GROQ queries in `src/data/page.js` (`_id == "${id}"`). This could allow an attacker to inject arbitrary GROQ clauses if the `id` argument is user-controlled.
**Learning:** Sanity CMS with GROQ is vulnerable to injection if user input is concatenated directly into the query string, similar to SQL injection.
**Prevention:** Always use parameterized queries for GROQ (e.g., `*[_type == "page" && _id == $id]` and pass `{ id }` as the parameters object) when accepting user input or dynamic arguments.
