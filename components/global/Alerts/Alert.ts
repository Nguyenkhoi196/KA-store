interface Alert {
  message?: string
  type?: 'info' | 'warning' | 'success' | 'danger'
  timeout?: number
  show: boolean
}
export default Alert
