import Ember from 'ember';

function leadingZero(number) {
  return ('0' + number).slice(-2);
}

export function formattedDate(date) {
  date = new Date(date || Date.now());
  return date.getFullYear() + '-'
       + leadingZero(date.getMonth() + 1) + '-'
       + leadingZero(date.getDate()) + ' '
       + leadingZero(date.getHours()) + ':'
       + leadingZero(date.getMinutes()) + ':'
       + leadingZero(date.getSeconds());
}

export default Ember.HTMLBars.makeBoundHelper(formattedDate);
