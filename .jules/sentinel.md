## 2026-08-04 - [Fix GROQ query injection]
**Vulnerability:** Sanity CMS GROQ query injection due to string interpolation of `id` in `getPageById`.
**Learning:** Sanity CMS queries must always be parameterized (e.g., using `$id` instead of string interpolation) to prevent GROQ query injection vulnerabilities.
**Prevention:** Always use parameterized queries for dynamic values in GROQ queries.
