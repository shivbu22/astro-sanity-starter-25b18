## 2026-07-31 - GROQ Query Injection in getPageById
**Vulnerability:** The `getPageById(id)` function directly interpolated the `id` string into a Sanity GROQ query: `_id == "${id}"`. This exposes the application to GROQ query injection.
**Learning:** Just like SQL injections, concatenating or interpolating unsanitized strings directly into database query languages like Sanity's GROQ is a severe vulnerability. A malicious actor could manipulate the query to fetch or alter unauthorized data.
**Prevention:** Always parameterize user inputs in Sanity GROQ queries using the `$variableName` syntax and passing an object mapping these variables as the second parameter to `client.fetch()`, for instance: `client.fetch('*[_type == "page" && _id == $id] ...', { id })`.
