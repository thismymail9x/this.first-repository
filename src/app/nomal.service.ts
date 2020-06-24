import { Injectable } from '@angular/core';
import { addMonths, addYears, differenceInDays, differenceInYears, differenceInMonths, addDays } from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class NomalService {

  constructor() { }
  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);
    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years} years`);
      diff = addYears(diff, years);
    }
    const months = differenceInMonths(now, diff);
    if (months > 0) {
      result.push(`${months} months`);
      diff = addMonths(diff, months);
    }
    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
      diff = addDays(diff, days);
    }
    return result.join(' ');

  }
}
