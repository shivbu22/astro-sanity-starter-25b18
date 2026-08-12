## 2026-08-12 - GROQ Injection Vulnerability in Sanity Queries

**Vulnerability:**
A critical GROQ injection vulnerability was discovered in `src/data/page.js` where user input (`id`) was directly interpolated into the query string: `*[_type == "page" && _id == "${id}"]`. This allows an attacker to inject arbitrary GROQ syntax, potentially exposing sensitive data across the Sanity dataset or causing Denial of Service.

**Learning:**
This existed because Sanity GROQ queries look like standard string literals in JS/TS, making it tempting to use standard JS template literal interpolation. The project lacks centralized query builders that enforce parameterization, leaving data fetching functions vulnerable to injection. Furthermore, passing `undefined` parameters to `client.fetch` without guards during Astro's SSR/SSG phase can break the build or evaluation processes due to Sanity client throwing errors on missing parameters.

**Prevention:**
Always use parameterized queries for Sanity GROQ fetches:
1. Replace interpolated variables with parameter placeholders (e.g., `$id`).
2. Pass parameters as the second argument object to `client.fetch(query, { id })`.
3. Add guard clauses (e.g., `if (!id) return [];`) before calling `client.fetch` to ensure variables are defined, preventing runtime evaluation errors and further sanitizing inputs.
