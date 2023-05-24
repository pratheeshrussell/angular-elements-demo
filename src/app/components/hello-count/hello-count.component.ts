import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickcountService } from 'src/app/services/clickcount.service';

@Component({
  selector: 'app-hello-count',
  templateUrl: './hello-count.component.html',
  styleUrls: ['./hello-count.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HelloCountComponent implements OnInit, OnDestroy{
  constructor(private countService:ClickcountService){}
  
  count=0;
  countSubscription: (Subscription|null) = null;
  ngOnInit(): void {
   this.countSubscription =
    this.countService.countSubject.subscribe((val)=>{
      this.count = val;
    })
  }
  ngOnDestroy(): void {
   if(this.countSubscription){
    this.countSubscription.unsubscribe();
   }
  }

}
