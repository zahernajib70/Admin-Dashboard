import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  todayOrders:any;
  topPriceOrders:any;
  showInput=false;
  showInfo=false;
  filterBy='category';
  dropDownOn1=false;
  dropDownOn2=false;
  chosenTopic='new';
  isCancelClicked=false;
  isStartClicked=false;
  orderToCancelId='';
  orderToStartId='';
  t=Date.now();
  userid='';
  username='';
  shopname='';
  shopid='';
  loading=true;
  uid: string;
  orders:any;
  private readonly destroy$ = new Subject();
  private readonly destroy1$ = new Subject();
  private readonly destroy2$ = new Subject();

  constructor(private auth:AngularFireAuth,private firestore:AngularFirestore) { }
  ngOnInit() {
    this.getUser().then(() => {
      this.firestore.collection('orders',ref=>ref.orderBy('timestamp','desc')).valueChanges().pipe(takeUntil(this.destroy2$))
      .subscribe(res=>{
        this.orders=res;
      });
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy1$.next();
    this.destroy1$.complete();
    this.destroy2$.next();
    this.destroy2$.complete();

  }

  
  getUser() {
    var promise = new Promise<void>((resolve, reject) => {
      this.auth.authState.pipe(takeUntil(this.destroy$)).subscribe(user => {
        this.uid = user.uid;
        resolve();
      });
    });
    return promise;
  }


  showInputMeth(){
    this.showInput=!this.showInput;
  }

}