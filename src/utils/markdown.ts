import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

/**
 * Parses markdown to HTML and sanitizes it to prevent XSS vulnerabilities.
 * Since user content from CMS could contain malicious scripts, this ensures
 * that only safe HTML tags and attributes are rendered.
 */
export function parseMarkdown(text: string): string {
    if (!text) return '';
    const parsed = marked.parse(text) as string;
    return sanitizeHtml(parsed, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'hr', 's', 'u', 'iframe']),
        allowedAttributes: {
            '*': ['class', 'id', 'style', 'data-*', 'aria-*'],
            'a': ['href', 'name', 'target', 'rel'],
            'img': ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
            'iframe': ['src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen']
        }
    });
}
