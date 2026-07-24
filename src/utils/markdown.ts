import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export async function markdownToHtml(markdown: string): Promise<string> {
    if (!markdown) return '';
    const rawHtml = await marked.parse(markdown);
    return sanitizeHtml(rawHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
            'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'a', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'div', 'span', 'blockquote', 'ul', 'ol', 'li'
        ]),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            a: ['href', 'name', 'target', 'rel'],
            img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
            div: ['class', 'id', 'data-sb-field-path'],
            span: ['class', 'id', 'data-sb-field-path'],
            p: ['class', 'id', 'data-sb-field-path'],
            blockquote: ['class', 'id', 'data-sb-field-path'],
            h1: ['class', 'id'],
            h2: ['class', 'id'],
            h3: ['class', 'id'],
            h4: ['class', 'id'],
            h5: ['class', 'id'],
            h6: ['class', 'id']
        },
        allowedClasses: {
            '*': ['*']
        }
    });
}
