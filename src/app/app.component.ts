import { Component, Injector } from '@angular/core';
import { lazyToken } from './token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyt';

  constructor(private injector:Injector){}

  
  onClick(){
    debugger;
    const lazyornot = this.injector.get(lazyToken, '');
    console.error('app',lazyornot)
  }
}
