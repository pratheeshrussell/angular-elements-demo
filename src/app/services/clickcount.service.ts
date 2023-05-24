import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickcountService {
  private count = 0;
  countSubject:BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }
  incCount(){
    this.count++;
    this.countSubject.next(this.count);
  }
  getCount(){
    return this.count;
  }
}
