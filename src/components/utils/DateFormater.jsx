var moment = require('moment');

const inputStringFormat = 'YYYY-MM';
const outputStringFormat = 'MMM YYYY';

export function formatDate(date) {
  return moment(date, inputStringFormat).format(outputStringFormat);
}

export function formatStartEndDates(start, end) {
  let dates = formatDates(start, end)
  let duration = formatDuration(start, end)

  return `${dates} ${duration}`;
}

function createMoment(date, format = inputStringFormat) {
  return (date) ? moment(date, format) : moment();
}

function formatDates(start, end) {
  const startMoment = createMoment(start);
  const endMoment = createMoment(end);

  let startFormatString = (startMoment.year() === endMoment.year()) ? 'MMM' : outputStringFormat;

  let startDate = startMoment.format(startFormatString);
  let endDate = endMoment.format(outputStringFormat);

  return (end) ? `${startDate} - ${endDate}` : `${startDate} - Current`;
}

function formatDuration(start, end) {
  const startMoment = createMoment(start);
  const endMoment = createMoment(end);
  const durationMoment = moment.duration(endMoment.diff(startMoment));

  let duration = `${durationMoment.months()} Month${durationMoment.months() > 1 ? 's' : ''}`;

  if (durationMoment.years() > 0) {
    duration = `${durationMoment.years()} Year${durationMoment.years() > 1 ? 's' : ''} and ${duration}`;
  }

  return `(${duration})`;
}