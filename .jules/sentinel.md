## 2024-07-25 - [Fix GROQ Query Injection]
**Vulnerability:** String concatenation of user input `id` directly into GROQ queries in `src/data/page.js` (`getPageById`), allowing potential GROQ query injection.
**Learning:** This codebase uses Sanity and GROQ for data fetching. Standard string injection vulnerabilities exist in GROQ queries just like SQL injection if variables aren't parameterized.
**Prevention:** Always use parameterized queries (e.g. `$id`) with `client.fetch(query, params)` instead of template literal string interpolation for dynamic values.