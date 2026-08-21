## 2025-02-23 - [Fix] GROQ Query Injection Vulnerability
**Vulnerability:** Found string interpolation used for a GROQ query ID parameter in `src/data/page.js` (`_id == "${id}"`). This creates a critical GROQ query injection vulnerability where untrusted input could manipulate the query logic, similar to SQL injection.
**Learning:** The project relies on Sanity CMS with GROQ queries. Queries must always be parameterized (e.g., using `$id`) instead of string interpolation. Additionally, missing credentials during CI/builds can cause `client.fetch` to fail with 401 errors, and passing `undefined` parameters during SSR evaluation causes client errors.
**Prevention:**
1. Always use parameterized query variables: `client.fetch('*[_type == "page" && _id == $id]', { id })`.
2. Add early validation for parameters (e.g., `if (!id) return [];`) before calling `client.fetch`.
3. Wrap `client.fetch` calls in `try/catch` blocks and return safe fallbacks (e.g., `[]` or `null`) to allow builds to gracefully complete even if credentials are missing.
