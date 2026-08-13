## 2026-08-13 - Fix GROQ Query Injection
**Vulnerability:** Unsanitized user input concatenated directly into a GROQ query in `getPageById` (`*[_type == "page" && _id == "${id}"]`).
**Learning:** String interpolation in GROQ queries exposes the application to query injection attacks, allowing attackers to manipulate queries.
**Prevention:** Always use parameterized queries (e.g., `$id`) provided by the Sanity client to sanitize input and prevent injection. Include early exit logic for empty parameters to avoid runtime errors.
