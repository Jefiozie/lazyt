import { InjectionToken } from "@angular/core";
import { LazySService } from "./lazy-s.service";

export const lazyToken = new InjectionToken<LazySService>('lazy');
// export const lazyToken = new InjectionToken<LazySService>('lazy', {factory: ()=> new LazySService(), providedIn: 'any'})