import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }

  isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  getFloat(n): number {
    return n - Math.floor(n);
  }
}
