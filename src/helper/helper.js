export function timeDifference(timestamp) {
  const dateTime = timestamp;
  let dateTimeParts = dateTime.split(/[- : . T]/).slice(0, 6);
  dateTimeParts[1]--;
  const date2 = new Date(...dateTimeParts);
  const date1 = new Date();

  var difference = date1.getTime() - date2.getTime();

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);
  if (daysDifference > 365) {
    if (parseInt(daysDifference / 365) === 1) {
      return `${parseInt(daysDifference / 365)} year ago`;
    } else {
      return `${parseInt(daysDifference / 365)} years ago`;
    }
  } else if (daysDifference >= 30) {
    if (parseInt(daysDifference / 30) === 1) {
      return `${parseInt(daysDifference / 30)} month ago`;
    } else {
      return `${parseInt(daysDifference / 30)} months ago`;
    }
  } else if (daysDifference >= 1) {
    if (parseInt(daysDifference) === 1) {
      return `${parseInt(daysDifference)} day ago`;
    } else {
      return `${parseInt(daysDifference)} days ago`;
    }
  } else if (hoursDifference >= 1) {
    if (parseInt(hoursDifference) === 1) {
      return `${parseInt(hoursDifference)} hour ago`;
    } else {
      return `${parseInt(hoursDifference)} hours ago`;
    }
  } else if (minutesDifference >= 1) {
    if (parseInt(minutesDifference) === 1) {
      return `${parseInt(minutesDifference)} minute ago`;
    } else {
      return `${parseInt(minutesDifference)} minutes ago`;
    }
  } else {
    if (secondsDifference >= 1) {
      return `${parseInt(secondsDifference)} second ago`;
    } else {
      return `${parseInt(secondsDifference)} seconds ago`;
    }
  }
}
