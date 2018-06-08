var moment = require("moment");

export function formatStartEndDates(startDate, endDate) {
  return (`${startDate} ${endDate ? endDate : "Current"} ${formatDuration(startDate, endDate)}`);
}

function formatDuration(startDate, endDate) {
  const formatString = "YYYY-MM";
  const startMoment = moment(startDate, formatString);
  const endMoment = endDate ? moment(endDate, formatString) : moment();
  const durationMoment = moment.duration(endMoment.diff(startMoment));

  let duration = `${durationMoment.months()} Month${durationMoment.months() > 1 ? "s" : ""}`;

  if (durationMoment.years() !== 0) {
    duration = `${durationMoment.years()} Year${durationMoment.years() > 1 ? "s" : ""} ${duration}`;
  }
  return `( ${duration} )`;
}
