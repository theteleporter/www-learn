import { docs } from '@/.source';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

// Create the Fumadocs source with clean URLs
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
  transformPage(page) {
    // Remove numeric prefixes from every slug segment, e.g. "01-getting-started" -> "getting-started"
    page.slugs = page.slugs.map(slug => slug.replace(/^\d+-/, ''));
    return page;
  },
});

// Generate Open Graph / social preview image URL for a page
export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

// Extract processed markdown for LLM or other purposes
export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
