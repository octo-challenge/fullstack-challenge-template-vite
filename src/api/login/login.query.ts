import { queryOptions } from '@tanstack/react-query'

export function loginQueryOptions() {
  return queryOptions({
    queryKey: ['login'],
  })
}
