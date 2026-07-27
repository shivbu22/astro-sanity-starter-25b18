## 2026-07-27 - GROQ Query Injection
**Vulnerability:** Found GROQ query injection vulnerability where user-controlled string interpolation was used for the `_id` parameter in a sanityClient fetch query in `src/data/page.js`.
**Learning:** Unsanitized user input can be passed into queries via template literals, potentially allowing unauthorized data access or modification by altering the structure of the GROQ query.
**Prevention:** Always use parameterized queries for dynamic values, passing them as an options object instead of interpolating strings directly into the query string.
