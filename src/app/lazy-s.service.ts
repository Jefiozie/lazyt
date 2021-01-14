import { Injectable } from '@angular/core';
let i = 0;
@Injectable({
  providedIn: 'root'
})
export class LazySService {

  constructor() { 
    console.error(++i);
  }
}
