import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoadingBehaviour = new BehaviorSubject(false)
  // isLoading = this.isLoadingBehaviour.asObservable()
  constructor() { }

  getIsLoading(){
    return this.isLoadingBehaviour;
  }

  setIsLoading(newValue){
    this.isLoadingBehaviour.next(newValue)
  }
}
