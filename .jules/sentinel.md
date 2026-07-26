## 2024-05-24 - GROQ Query Injection
**Vulnerability:** String interpolation in GROQ queries (e.g. `client.fetch(\`*[_type == "page" && _id == "${id}"]\`)`) allowed potential GROQ query injection.
**Learning:** Sanity CMS GROQ queries are vulnerable to injection when user input or variable values are embedded directly into the query string using string interpolation. This could allow attackers to alter the query logic and bypass access controls or extract unintended data.
**Prevention:** Always parameterize GROQ queries. Pass variables as an object in the second argument to `client.fetch()` and reference them with `$variableName` in the query string (e.g. `client.fetch(\`*[_type == "page" && _id == $id]\`, { id })`).
