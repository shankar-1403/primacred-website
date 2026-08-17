import { useEffect } from 'react'
import { canonicalUrl, type SeoConfig } from '@/data/seo'
import { SITE_NAME } from '@/data/site'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attributes).forEach(([key, value]) => {
    el?.setAttribute(key, value)
  })
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function SEO({ title, description, path }: SeoConfig) {
  useEffect(() => {
    document.title = title
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl(path),
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    upsertLink('canonical', canonicalUrl(path))
  }, [title, description, path])

  return null
}
