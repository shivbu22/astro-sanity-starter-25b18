import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

/**
 * Safely parses markdown to HTML and sanitizes it to prevent XSS.
 * @param markdown The markdown string to parse.
 * @returns The sanitized HTML string.
 */
export function safeMarkedParse(markdown: string): string {
    if (!markdown) return '';
    const rawHtml = marked.parse(markdown) as string;
    return sanitizeHtml(rawHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            'img': ['src', 'alt', 'title', 'width', 'height'],
            '*': ['class', 'id', 'data-sb-field-path'] // allow Stackbit inline editing attributes
        },
    });
}
