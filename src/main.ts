import 'zone.js/dist/zone';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

@NgModule({
  declarations: [App],
  imports: [BrowserModule],
  bootstrap: [App],
})
export class AppModule {}

