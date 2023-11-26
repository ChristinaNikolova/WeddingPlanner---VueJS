import moment from 'moment';

function getDifference(start, end) {
  const difference = new Date(`01/01/2007 ${end}`) - new Date(`01/01/2007 ${start}`);

  let hours = formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24));
  let minutes = formatTime(Math.floor((difference / (1000 * 60)) % 60));

  if (hours.toString().includes('-') || minutes.toString().includes('-')) {
    hours = '00';
    minutes = '00';
  }

  return [hours, minutes];
};

function formatTime(time) {
  return time <= 9 ? `0${time}` : time;
}

function formatDate(value) {
  console.log(value);
  if (value) {
    console.log('if', moment(String(value)).format('hh:mm'));
    return moment(String(value)).format('YYYYMMDD');
  }
}

export default {
  getDifference,
  formatDate,
};
