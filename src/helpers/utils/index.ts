import { Dayjs } from 'dayjs/index';
import dayjs from 'dayjs';

const YEAR = 1000 * 60 * 60 * 24;
export const dateParser = (dateValue: string | Dayjs | null, outputFormat = 'MMM YYYY') => {
  if (dateValue === null) return;
  const dayjsDate = dayjs(dateValue);
  return dayjsDate.format(outputFormat);
};

export const numberOfYears = (fromDate: string | null, toDate: string | null) => {
  if (fromDate == null) {
    return '';
  }
  const todayDate = new Date().toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  toDate = toDate ?? todayDate;
  const startDate = new Date(fromDate).valueOf();
  const endDate = new Date(toDate).valueOf();
  const exp = ((endDate - startDate) / YEAR / 365).toFixed(1);

  return +exp > 0 ? `${exp} Years` : '';
};
