const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const daysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


export class D {
  _date: Date;

  constructor(...args: any[]) {
    
    this._date = new Date(...(args as []));
  }

  get year() {
    return this._date.getFullYear();
  }

  get yr() {
    return this.year % 100;
  }

  get month() {
    return months[this._date.getMonth()];
  }

  get mon() {
    return monthsShort[this._date.getMonth()];
  }

  get date() {
    return this._date.getDate();
  }

  get day() {
    // return days[this._date.getDay()];
    return days[this._date.getDay()];
  }

  get dy() {
    // return daysShort[this._date.getDate()];
    return daysShort[this._date.getDay()];
  }

  format(mask = "") {
    let dateStr = "";
    //i 6 -> lenght 5
    for (let i = 0; i < mask.length; i++) {
      let ch = mask[i];
      if (ch === "Y") {
        dateStr += this.year;
      } else if (ch === "y") {
        dateStr += this.yr;
      } else if (ch === "M") {
        dateStr += this.month;
      } else if (ch === "m") {
        dateStr += this.mon;
      } else if (ch === "d") {
        dateStr += this.date;
      } else if (ch === "W") {
        dateStr += this.day;
      } else if (ch === "w") {
        dateStr += this.dy;
      } else {
        dateStr += ch;
      }
    }

    return dateStr;
  }
  
  when(otherDate: any) {
    const today = new Date();
    const diff = Math.abs((today as any) - (otherDate as any));

    const isPast = otherDate < today;
    const isFuture = otherDate > today;

    const diffDays = isPast
      ? Math.floor(diff / (1000 * 60 * 60 * 24))
      : Math.ceil(diff / (1000 * 60 * 60 * 24));
    const diffMonths = isPast
      ? Math.floor(diff / (1000 * 60 * 60 * 24 * 30))
      : Math.ceil(diff / (1000 * 60 * 60 * 24 * 30));
    const diffYears = isPast
      ? Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
      : Math.ceil(diff / (1000 * 60 * 60 * 24 * 365));

    console.log(diffDays);
    if (isPast) {
      if (diffYears >= 1) {
        return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
      } else if (diffMonths >= 1) {
        return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
      } else if (diffDays >= 1) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
      } else {
        return "today";
      }
    } else if (isFuture) {
      if (diffYears > 1) {
        return `${diffYears} year${diffYears > 1 ? 's' : ''} from now`;
      } else if (diffMonths > 1) {
        return `${diffMonths} month${diffMonths > 1 ? 's' : ''} from now`;
      } else if (diffDays > 1) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} from now`;
      } else {
        return "tomorrow";
      }
    } else {
      return "today";
    }
  }
}
