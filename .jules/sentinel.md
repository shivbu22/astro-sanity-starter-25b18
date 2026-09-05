## 2024-09-05 - GROQ Query Injection
**Vulnerability:** A GROQ query in `src/data/page.js` used string interpolation (`*[_type == "page" && _id == "${id}"]`) to embed a parameter into the query string. This is a form of injection vulnerability that allows arbitrary queries if the input is manipulated.
**Learning:** String interpolation should never be used to construct database or API queries with user-supplied or variable inputs, as it creates a vector for injection attacks. The developer didn't realize Sanity GROQ supported parameterized queries.
**Prevention:** Always use parameterized queries (e.g. `_id == $id` and pass parameters in a variables object) to ensure variables are treated strictly as data, not executable query syntax.
