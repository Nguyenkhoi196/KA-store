export interface Alert {
  message?: string
  type?: 'info' | 'warning' | 'success' | 'danger'
  timeout?: number
}
