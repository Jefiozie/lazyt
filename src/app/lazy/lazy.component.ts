import { Component, Injector, OnInit } from '@angular/core';
import { lazyToken } from '../token';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(private injector:Injector) {

   }

  ngOnInit(): void {
  }

  onClick(){
    debugger;
    const lazyornot = this.injector.get(lazyToken, '');
    console.error('lazy',lazyornot)
  }

}
