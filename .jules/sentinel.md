## 2024-05-18 - GROQ Query Injection
**Vulnerability:** User input was directly concatenated into Sanity GROQ query strings using template literals (e.g., `*[_type == "page" && _id == "${id}"]`), enabling a potential GROQ query injection attack.
**Learning:** String interpolation in query parameters should not be used as it does not sanitize input, putting the query and dataset at risk of injection payloads.
**Prevention:** Always use parameterized GROQ queries (e.g., `*[_type == "page" && _id == $id]` and pass a parameter object `{ id }` to `client.fetch()`) to handle user input securely.
