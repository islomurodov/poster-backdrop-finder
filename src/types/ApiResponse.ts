import type { Result } from './Result'

export interface ApiResponse {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}
