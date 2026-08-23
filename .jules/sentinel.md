## 2024-03-24 - [GROQ Injection]
**Vulnerability:** Found GROQ injection vulnerability in `src/data/page.js` where user input `id` was directly interpolated into the query string (`_id == "${id}"`).
**Learning:** Sanity GROQ queries must always be parameterized (e.g., using `$id`) to prevent injection attacks, similar to SQL injection.
**Prevention:** Use parameterized queries with the `{}` syntax for variables (e.g., `client.fetch('*[_type == "page" && _id == $id]', { id })`) and always validate/handle missing input parameters before querying.