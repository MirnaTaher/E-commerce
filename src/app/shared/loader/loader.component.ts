import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  // isLoading:boolean;
  isLoading;
  constructor(private loaderService : LoaderService) { }

  ngOnInit(): void {
    // this.loaderService.getIsLoading().subscribe(value => (this.isLoading=value));
    this.isLoading=this.loaderService.getIsLoading();
  }

}
