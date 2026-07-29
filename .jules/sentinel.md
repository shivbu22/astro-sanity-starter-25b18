## 2024-03-01 - GROQ Query Injection
**Vulnerability:** String interpolation in GROQ query for Sanity CMS fetch
**Learning:** Hardcoding user-controlled input (like `id`) using string interpolation in Sanity queries can lead to GROQ query injection.
**Prevention:** Always use parameterized queries like `$id` when passing variables into Sanity queries.