## 2023-10-27 - [CRITICAL] GROQ Query Injection
**Vulnerability:** Sanity GROQ query in `src/data/page.js` (`getPageById` function) used string interpolation (`"${id}"`) to pass user-provided IDs. This left the query vulnerable to GROQ injection.
**Learning:** Hardcoded/interpolated parameters in GROQ queries, especially for user input, can expose the CMS to injection attacks, similar to SQL injection.
**Prevention:** Always use parameterized queries (e.g., `*[_type == "page" && _id == $id]`) and pass an object with variables to `client.fetch(query, params)`. Implement early exits for invalid/falsy parameters (`if (!id) return [];`) and use a `try/catch` block for resilient error handling in CMS queries.
