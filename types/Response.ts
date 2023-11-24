export interface Pagination<T> {
  page: T | null
  pageSize: T | null
  pageCount?: any
  total?: any
}
