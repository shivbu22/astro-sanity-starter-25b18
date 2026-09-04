## 2024-09-04 - [GROQ Injection]
**Vulnerability:** GROQ injection vulnerability in `src/data/page.js` due to using string interpolation for `_id` in `client.fetch`.
**Learning:** Sanity CMS uses GROQ queries which are susceptible to injection attacks if user inputs are concatenated directly into the query strings. This pattern existed here.
**Prevention:** Always use parameterized queries (e.g. `_id == $id`) and explicitly handle falsy/undefined parameter values before calling `client.fetch` to prevent injection and avoid unexpected Sanity client errors during SSG.
