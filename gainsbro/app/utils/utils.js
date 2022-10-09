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

export const getGradientFromWorkout = (id, date) => {
  const idRGB = hexToRGB(`#${random(id)}`, 0.3);
  const dateRGB = hexToRGB(`#${random(date)}`, 0.5);
  return `linear-gradient(to left, ${idRGB}, ${dateRGB})`;
};

const random = (seed) => {
  return Math.floor(Math.abs(Math.sin(seed) * 16777215)).toString(16);
};

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

export function toTime(time) {
  return (
    <div>
      {time > 24 * 36 * 60 * 1000 &&
        (Math.floor(time / 24 / 36 / 60 / 1000) % 24) + "day(s) "}
      <span>{("0" + (Math.floor(time / 3600000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
}

/**
 * Retrieve a fixed number of elements from an array, evenly distributed but
 * always including the first and last elements.
 *
 * @param   {Array} items - The array to operate on.
 * @param   {number} n - The number of elements to extract.
 * @returns {Array}
 */
export function distributedCopy(items, n) {
  if (items?.length <= n) {
    return items;
  }
  var elements = [items[0]];
  var totalItems = items.length - 2;
  var interval = Math.floor(totalItems / (n - 2));
  for (var i = 1; i < n - 1; i++) {
    elements.push(items[i * interval]);
  }
  elements.push(items[items.length - 1]);
  return elements;
}
