## 2024-03-24 - [Title]
**Vulnerability:** [What you found]
**Learning:** [Why it existed]
**Prevention:** [How to avoid next time]

## 2025-02-27 - [Fix GROQ Injection Vulnerability]
**Vulnerability:** Found GROQ query injection in `getPageById` within `src/data/page.js` where user input `id` was concatenated into the query string (`*[_type == "page" && _id == "${id}"]`).
**Learning:** Concatenating strings into GROQ queries exposes the application to injection attacks just like SQL injection. Also learned that in CI environments, missing Sanity credentials cause fetch to fail with 401 Unauthorized, so it's critical to add try/catch wrappers with safe fallback return values (`[]` for arrays).
**Prevention:** Always use parameterized queries (e.g., `$id`) instead of string interpolation for variables. Provide `id` inside a parameter object (`{ id }`) to `client.fetch`. Wrap `client.fetch` inside a try/catch and gracefully handle errors.
