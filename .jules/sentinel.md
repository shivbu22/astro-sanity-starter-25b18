## 2024-03-21 - [GROQ Query Injection]
**Vulnerability:** Found unsanitized input used via string interpolation in GROQ query in `src/data/page.js` (`*[_type == "page" && _id == "${id}"]`).
**Learning:** Using template literals to inject variables directly into GROQ queries allows attackers to break out of the string context and manipulate the query structure, potentially accessing unauthorized data or causing denial of service.
**Prevention:** Always use parameterized queries (e.g., passing `{ id }` as the second argument to `client.fetch` and using `$id` in the GROQ query string) when passing dynamic values to Sanity CMS.
