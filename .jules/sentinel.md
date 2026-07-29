## 2026-07-29 - [CRITICAL] GROQ Query Injection Vulnerability
**Vulnerability:** Found GROQ query injection vulnerability in `src/data/page.js` where user-controlled string (`id`) was being directly interpolated into the query string: `client.fetch('*[_type == "page" && _id == "${id}"] ...')`. This allowed arbitrary manipulation of the Sanity query.
**Learning:** String interpolation should never be used for variables in database queries, even with CMS APIs like Sanity. It allows injection of arbitrary logic that bypasses intended constraints or exposes data.
**Prevention:** Always use parameterized queries for dynamic values, passing them as an object in the second argument: `client.fetch('*[_type == "page" && _id == $id] ...', { id })`.
