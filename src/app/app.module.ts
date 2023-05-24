import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { HelloCountComponent } from './components/hello-count/hello-count.component';

@NgModule({
  declarations: [
    HelloWorldComponent,
    HelloCountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    // Component 1
    const HelloWorldel = createCustomElement(HelloWorldComponent, { injector: this.injector });
    customElements.define('hello-world', HelloWorldel);

    // Component 2
    const HelloCountel = createCustomElement(HelloCountComponent, { injector: this.injector });
    customElements.define('hello-count', HelloCountel);
  }
 }
