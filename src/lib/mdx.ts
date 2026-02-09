import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

async function loadEntries<T>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  let entries = await Promise.all(
    (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
      async (filename) => {
        let metadata = (await import(`../app/${directory}/${filename}`))[
          metaName
        ] as T
        return {
          ...metadata,
          metadata,
          href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
        }
      },
    ),
  )
  // Sort by date if available, otherwise maintain original order
  return entries.sort((a, b) => {
    const aDate = (a as any).date
    const bDate = (b as any).date
    if (aDate && bDate) {
      return bDate.localeCompare(aDate)
    }
    return 0
  })
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface CaseStudy {
  title: string
  description: string
  summary: Array<string>
  image: ImagePropsWithOptionalAlt
  logo?: ImageProps['src']
  technologies?: Array<string>
  liveUrl?: string
}

export function loadArticles() {
  return loadEntries<Article>('blog', 'article')
}

export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy')
}
