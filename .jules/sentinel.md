## 2024-05-18 - [CRITICAL] GROQ Query Injection
**Vulnerability:** The function `getPageById(id)` in `src/data/page.js` used string interpolation to build the GROQ query (`*[_type == "page" && _id == "${id}"]`), which is vulnerable to query injection.
**Learning:** This existed because standard string interpolation was used to construct Sanity queries, allowing arbitrary GROQ queries to be executed if the input is not sanitized or checked. Unhandled falsy parameters can also cause Sanity client errors during static generation.
**Prevention:** Always use parameterized queries in Sanity (e.g. `*[_type == "page" && _id == $id]`) and explicitly handle undefined values for parameters prior to calling `client.fetch`.
