import { padStart } from "lodash";

export function getDateOfISOWeek(w, y) {
  var simple = new Date(y, 0, 1 + (w - 1) * 7);
  var dow = simple.getDay();
  var ISOweekStart = simple;
  if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return ISOweekStart;
}

export function getWeekNumber(date) {
  var d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

export const getCurrentDateTime = () => {
  const date = new Date();
  var year = date.getFullYear();
  var month = padStart(date.getMonth() + 1, 2, 0);
  var day = padStart(date.getDate(), 2, 0);
  var hr = padStart(date.getHours(), 2, 0);
  var min = padStart(date.getMinutes(), 2, 0);
  return `${year}-${month}-${day}T${hr}:${min}`;
};
