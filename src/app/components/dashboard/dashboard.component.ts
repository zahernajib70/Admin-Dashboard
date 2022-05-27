import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy{
  private readonly destroy$ = new Subject();
  constructor() {
    
   }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }  
}
