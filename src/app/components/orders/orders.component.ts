import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

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
  orderToCancelId='';
  loading=true;
  constructor(private database:AngularFireDatabase) { }

  ngOnInit(){
    this.getTodayOrders();
    this.getTopPriceOrders();
  }
  getTodayOrders(){
    this.database.list('orders').valueChanges().subscribe(res=>{
      this.todayOrders=res;
      this.loading=false;
    })  
  }
  getTopPriceOrders(){
    this.database.list('orders',ref=>ref.orderByChild('totalPrice')).valueChanges().subscribe(res=>{
      this.topPriceOrders=res;
      this.loading=false;
    }) 
  }
  showInputMeth(){
    this.showInput=!this.showInput;
  }
  setFilterBy(filter:string){
    this.filterBy=filter;
    this.dropDownOn1=false;
  }
  filter(filterByValue:string){
    this.database.list('orders/',ref=>ref.orderByChild(`${this.filterBy}`)
    .equalTo(filterByValue)).valueChanges().subscribe(res=>{
      this.todayOrders=res;
      this.loading=false;
    })  
  }
  setorderToCancel(orderID:string){
    this.orderToCancelId=orderID;
    this.isCancelClicked=true;
  }
  cancelOrder(){
    if(this.orderToCancelId!=''){
      this.database.object(`/orders/${this.orderToCancelId}`).update({status:'canceled'}).catch(error=>{
        alert(error);
        return ;}).then(res=>{
          this.isCancelClicked=false;
        })
    }
    else{
      alert('Specify Order to Delete')
    }
  }
}
