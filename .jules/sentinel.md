## 2024-05-24 - [CRITICAL] GROQ Query Injection
**Vulnerability:** Found string interpolation being used directly in GROQ queries (e.g. `*[_type == "page" && _id == "${id}"]`) in Sanity fetch calls. This could allow an attacker to inject arbitrary GROQ commands if `id` is user-controlled.
**Learning:** Even though Sanity is a headless CMS, query languages like GROQ are still susceptible to injection attacks similar to SQL injection if input is not parameterized.
**Prevention:** Always use parameterized queries for dynamic values in GROQ queries, like `client.fetch('*[_type == "page" && _id == $id]', { id })`. Never use string interpolation for variables. Also ensure falsy variables are handled before querying.
