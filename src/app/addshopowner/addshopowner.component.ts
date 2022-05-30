import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-addshopowner',
  templateUrl: './addshopowner.component.html',
  styleUrls: ['./addshopowner.component.css']
})
export class AddshopownerComponent implements OnInit,OnDestroy {
  @Input() itemId:string;
  item:any;
  
shopname='';
Arealocation='';
address='';
Description='';
isverified=false;


  myArray: any[] = [];
  private readonly destroy$ = new Subject();
  @ViewChild('newIngredient') ingredientHTML!:any;
  constructor(private firestore:AngularFirestore) { }

  ngOnInit(){
    if(this.itemId){
      this.firestore.collection('shopOwners').valueChanges()
      .subscribe(res=>{
        if(res){
          this.item=res;
          console.log(res);
          
        }
      }) 


      
    }
    else{
    }


    // const data=this.firestore.collection('shopOwners',ref=>ref.where('isverified','==','true')).valueChanges().subscribe(val=>{this.myArray = val;
    //   console.log(val);
    //  }
    //  );

  }
  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
  editname(shopname1:string){
    this.shopname=shopname1;
    console.log(shopname1);
   
    // this.firestore.collection('items').doc(this.itemId).update({shopname:+shopname1}).catch(error=>alert(error))
  }
  editQuantity(quantity:string){
    this.firestore.collection('items').doc(this.itemId).update({quantity:+quantity}).catch(error=>alert(error))
  }
  editCategory(category:string){
    this.firestore.collection('items').doc(this.itemId).update({category:category}).catch(error=>alert(error))
  }
  editTopic(topic:string){
    this.firestore.collection('items').doc(this.itemId).update({topics:topic}).catch(error=>alert(error))
  }
  editDescription(description:string){
    this.firestore.collection('items').doc(this.itemId).update({description:description}).catch(error=>alert(error))
  }

  submit(){this.firestore.collection('shopOwners').add({
    // color:this.color,quantity:this.quantity,size:this.size,category:this.category
    shopname:this.shopname,
    Arealocation:this.Arealocation,
   Description: this.Description,
  Adress: this.address,
  isverified:true,







  })

.then(res => {
    console.log(res);
    
})
.catch(e => {
    console.log(e);
})}

}
