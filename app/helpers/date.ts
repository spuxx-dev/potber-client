import Helper from '@ember/component/helper';

export default class DateHelper extends Helper {
  compute([date]: [Date]) {
    return date.toLocaleString();
  }
}
