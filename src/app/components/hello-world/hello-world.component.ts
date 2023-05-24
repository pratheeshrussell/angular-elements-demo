import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ClickcountService } from 'src/app/services/clickcount.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloWorldComponent {
  @Input('title') title='';
  @Output('title-clicked') clickedEmitter:EventEmitter<void> = new EventEmitter();
  constructor(private countService:ClickcountService){}
  titleClicked(){
    this.countService.incCount();
    this.clickedEmitter.emit();
  }
}
