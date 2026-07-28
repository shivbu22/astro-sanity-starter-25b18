## 2024-05-24 - [CRITICAL] GROQ Injection Vulnerability in Sanity Queries

**Vulnerability:**
The codebase was vulnerable to GROQ injection due to the use of string interpolation for variable assignment in Sanity CMS queries. Specifically, user-provided inputs like `id` were directly concatenated into queries, bypassing proper sanitization (e.g., `_id == "${id}"`).

**Learning:**
Just like SQL injection, NoSQL querying languages such as GROQ (Graph-Relational Object Queries) are susceptible to injection attacks if query parameters aren't explicitly parameterized. String interpolation allows attackers to append arbitrary conditions or manipulate the query logic.

**Prevention:**
Always use parameterized queries for dynamic values in GROQ. Sanity's client natively supports parameterization by prefixing variables with `$` in the query string and passing an object of variables as the second argument to `client.fetch`.

Example:
```javascript
// DO NOT use string interpolation:
// client.fetch(`*[_type == "page" && _id == "${id}"]`);

// INSTEAD use parameterization:
client.fetch(`*[_type == "page" && _id == $id]`, { id });
```
