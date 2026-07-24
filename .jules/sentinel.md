## 2026-07-24 - [XSS Fix]
**Vulnerability:** Markdown parsing was vulnerable to XSS.
**Learning:** By directly rendering HTML using `marked.parse()` without a sanitization step, the application was exposed to XSS vulnerabilities.
**Prevention:** Always sanitize HTML when converting from Markdown using tools like `sanitize-html` before rendering.
