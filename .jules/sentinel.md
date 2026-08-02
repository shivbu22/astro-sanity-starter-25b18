## 2026-08-02 - GROQ Query Injection
**Vulnerability:** Found string interpolation being used for user input (IDs) in GROQ queries (e.g. `*[_type == "page" && _id == "${id}"]`), which allows a user to inject arbitrary GROQ commands and potentially extract sensitive data or bypass filters.
**Learning:** In Sanity CMS projects, it's a common mistake to use standard JavaScript string interpolation for GROQ queries, overlooking that GROQ has its own parameterization mechanism to sanitize inputs.
**Prevention:** Always use parameterized queries (e.g. `*[_type == "page" && _id == $id]`, passing `{ id }` as a parameter object) when querying Sanity CMS to ensure all inputs are safely escaped.
