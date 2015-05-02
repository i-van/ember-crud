import Ember from 'ember';

function leadingZero(number) {
  return ('0' + number).slice(-2);
}

export function formattedDate(date) {
  // clone date to prevent modification
  date = new Date(date);
  if (isNaN(date)) {
    return '';
  }

  return date.getFullYear() + '-'
       + leadingZero(date.getMonth() + 1) + '-'
       + leadingZero(date.getDate()) + ' '
       + leadingZero(date.getHours()) + ':'
       + leadingZero(date.getMinutes()) + ':'
       + leadingZero(date.getSeconds());
}

export default Ember.HTMLBars.makeBoundHelper(formattedDate);
