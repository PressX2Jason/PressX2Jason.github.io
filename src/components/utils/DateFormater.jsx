var moment = require('moment');

const inputStringFormat = 'YYYY-MM';
const outputStringFormat = 'MMM YYYY';

export function formatDate(date) {
  return moment(date, inputStringFormat).format(outputStringFormat);
}

export function formatStartEndDates(startDate, endDate) {
  return `${formatDates(startDate, endDate)} ${formatDuration(startDate, endDate)}`
}

function formatDates(startDate, endDate) {
  const startMoment = moment(startDate, inputStringFormat);
  const endMoment = moment(endDate, inputStringFormat);

  let startFormatString = (startMoment.year() === endMoment.year()) ? outputStringFormat : 'MMM';

  return `${startMoment.format(startFormatString)} - ${endMoment.format(outputStringFormat)}`
}

function formatDuration(startDate, endDate) {
  const startMoment = moment(startDate, inputStringFormat);
  const endMoment = endDate ? moment(endDate, inputStringFormat) : moment();
  const durationMoment = moment.duration(endMoment.diff(startMoment));

  let duration = `${durationMoment.months()} Month${durationMoment.months() > 1 ? 's' : ''}`;

  if (durationMoment.years() > 0) {
    duration = `${durationMoment.years()} Year${durationMoment.years() > 1 ? 's' : ''} and ${duration}`;
  }

  return `(${duration})`;
}