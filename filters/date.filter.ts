import { DateOpt } from '~/interfaces/DateOpt';

export function dateFilter(value: any, format = 'date'): string {
  const options: DateOpt = {};
  let date = value;

  if (typeof date === 'string') {
    const dateArr: number[] = date.split('-').map((d) => Number(d));
    dateArr[1] = dateArr[1] - 1;
    date = new Date(...dateArr);
  }

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

  return Intl.DateTimeFormat('ru-RU', options).format(date);
}
