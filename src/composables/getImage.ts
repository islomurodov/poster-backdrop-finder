import type { Result } from '~/types/Result'

export function getPoster(item: Result): string {
  return `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}`
}

export function getBackdrop(item: Result): string {
  return `https://image.tmdb.org/t/p/original${item.backdrop_path}`
}
