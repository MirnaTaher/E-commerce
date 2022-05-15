import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {
  private isLoggedInBehaviour = new BehaviorSubject(false)
  // isLoading = this.isLoggedInBehaviour.asObservable()
  constructor() { }
  getIsLoggedIn(){
    return this.isLoggedInBehaviour;
  }
  setIsLoggedIn(newValue){
    this.isLoggedInBehaviour.next(newValue)
  }
}
