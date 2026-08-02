## 2025-02-12 - [CRITICAL] GROQ Query Injection in Data Fetching
**Vulnerability:** Sanity CMS queries in `src/data/page.js` were using string interpolation (e.g., `_id == "${id}"`) instead of parameterized queries. This is a critical GROQ query injection vulnerability.
**Learning:** String interpolation in GROQ queries, especially for user-controlled inputs like IDs, exposes the application to query injection attacks, allowing attackers to manipulate queries and potentially access unauthorized data or cause denial of service.
**Prevention:** Always use parameterized queries for dynamic values in Sanity CMS GROQ queries. Example: `client.fetch('*[_type == "page" && _id == $id]', { id })`.
