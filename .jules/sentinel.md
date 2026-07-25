## 2025-02-14 - [GROQ Injection]
**Vulnerability:** String interpolation used in Sanity GROQ query in `src/data/page.js` (`_id == "${id}"`). This allows attackers to inject malicious GROQ syntax and bypass filters or access unintended data.
**Learning:** Hardcoded string interpolation in database/API queries is dangerous, even in NoSQL/Graph querying languages like GROQ. Parameterized queries should be used.
**Prevention:** Always use query parameters (e.g., `$id`) when passing variables to a GROQ query in Sanity.
