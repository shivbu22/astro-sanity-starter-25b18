## 2024-05-18 - GROQ Query Injection in Sanity Client
**Vulnerability:** Sanity GROQ queries were vulnerable to query injection because string interpolation was used to construct query filters, notably in `_id == "${id}"`.
**Learning:** Even NoSQL query languages like GROQ can be vulnerable to injection when user input is directly concatenated into the query string, which could allow attackers to alter the query logic. Using string interpolation for parameters breaks the separation between query logic and data.
**Prevention:** Always use parameterized queries (e.g. `$id`) with a parameters object passed to `client.fetch(query, params)`. Also, proactively handle invalid inputs, such as returning early if required parameters are falsy, to avoid unexpected runtime errors.
