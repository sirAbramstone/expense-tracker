import { DateOpt } from '~/interfaces/DateOpt';

export function dateFilter(value: Date, format = 'date'): string {
  const options: DateOpt = {};

  if (format.includes('date')) {
    options.day = '2-digit';
    options.month = 'long';
    options.year = 'numeric';
  }

  if (format.includes('time')) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.second = '2-digit';
  }

  return Intl.DateTimeFormat('ru-RU', options).format(value);
}
