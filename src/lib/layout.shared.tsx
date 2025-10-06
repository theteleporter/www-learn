import { Major_Mono_Display } from 'next/font/google'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

const majorMono = Major_Mono_Display({
  subsets: ['latin'],
  weight: ['400'],
})

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span className={majorMono.className}>
             WWW-LEARN
          </span>
        </>
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}