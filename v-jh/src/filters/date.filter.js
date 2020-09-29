export default function dateFilter (value, format = 'date') {
  const options = {}
  if (format.includes('date')) {
    options.year = 'numeric'
    options.month = 'long'
    options.day = 'numeric'
  }

  if (format.includes('time')) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }
  return new Intl.DateTimeFormat('ru-Ru', options).format(value)
}
