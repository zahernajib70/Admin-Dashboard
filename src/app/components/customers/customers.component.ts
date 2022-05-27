import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:any;
  faEdit=faEdit;
  showInput=false;
  showSeacrhSpace=false;
  showInfo=false;
  filterBy='category';
  dropDownOn1=false;
  dropDownOn2=false;
  chosenTopic='new';
  docs: any[] = [];
  myArray: any[] = [];
  loading=true;
  constructor(private database:AngularFireDatabase,private fbs: AngularFirestore,private firestore: AngularFirestore) { }

  ngOnInit(){
    this.database.list('users').valueChanges().subscribe(res=>{
      this.customers=res;
      this.docs = [];
       const data=this.fbs.collection('users').valueChanges().subscribe(val=>{this.myArray = val;
        console.log(val);
       }
       );
        
    // const collectionRef = this.firestore.collection('Accounts');
    // const collectionInstance = collectionRef.valueChanges();
    // collectionInstance.subscribe(ss => this.myArray = ss);
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
      this.customers=res;
      this.loading=false;
    })  
  } 
  
  getData() {
    return this.fbs
   .collection("users")
   .snapshotChanges();
  }

}
