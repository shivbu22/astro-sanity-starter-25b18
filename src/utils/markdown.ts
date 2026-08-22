import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const purify = DOMPurify(window as unknown as Window);

export function safeMarkedParse(markdown: string): string {
  const parsed = marked.parse(markdown) as string;
  return purify.sanitize(parsed);
}
