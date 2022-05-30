import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-inside-item',
  templateUrl: './inside-item.component.html',
  styleUrls: ['./inside-item.component.css']
})
export class InsideItemComponent implements OnInit,OnDestroy {
  @Input() itemId:string;
  @Input() uid:string;
  item:any;
  private readonly destroy$ = new Subject();
  @ViewChild('newIngredient') ingredientHTML!:any;
  constructor(private auth:AngularFireAuth,private firestore:AngularFirestore) { }

  ngOnInit(){
      if(this.itemId){
        this.firestore.collection('items').doc(this.itemId).valueChanges().pipe(takeUntil(this.destroy$))
        .subscribe(res=>{
          if(res){
            this.item=res;
          }
        })  
      }
      else{
        alert('something went wrong! ')
      }

  }
  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
  editPrice(price:string){
    var batch = this.firestore.firestore.batch();
    var item = this.firestore.firestore.collection("items").doc(this.itemId);
    batch.update(item,{price:+price});
    var shopItem = this.firestore.firestore.collection('shopOwners').doc(this.uid).collection('items').doc(this.itemId);
    batch.update(shopItem,{price:+price});
    batch.commit().catch(error=>{if(error){
      alert(error);
      return;
    }});
  }
  editQuantity(quantity:string){
    var batch = this.firestore.firestore.batch();
    var item = this.firestore.firestore.collection("items").doc(this.itemId);
    batch.update(item,{quantity:+quantity});
    var shopItem = this.firestore.firestore.collection('shopOwners').doc(this.uid).collection('items').doc(this.itemId);
    batch.update(shopItem,{quantity:+quantity});
    batch.commit().catch(error=>{if(error){
      alert(error);
      return;
    }});
  }
  editCategory(category:string){
    var batch = this.firestore.firestore.batch();
    var item = this.firestore.firestore.collection("items").doc(this.itemId);
    batch.update(item,{category:category});
    var shopItem = this.firestore.firestore.collection('shopOwners').doc(this.uid).collection('items').doc(this.itemId);
    batch.update(shopItem,{category:category});
    batch.commit().catch(error=>{if(error){
      alert(error);
      return;
    }});


    this.firestore.collection('items').doc(this.itemId).update({category:category}).catch(error=>alert(error))
  }
  editCarBrand(brand:string){
    var batch = this.firestore.firestore.batch();
    var item = this.firestore.firestore.collection("items").doc(this.itemId);
    batch.update(item,{brand:brand});
    var shopItem = this.firestore.firestore.collection('shopOwners').doc(this.uid).collection('items').doc(this.itemId);
    batch.update(shopItem,{brand:brand});
    batch.commit().catch(error=>{if(error){
      alert(error);
      return;
    }});


    this.firestore.collection('items').doc(this.itemId).update({brand:brand}).catch(error=>alert(error))

  }
  editTopic(topic:string){
    var batch = this.firestore.firestore.batch();
    var item = this.firestore.firestore.collection("items").doc(this.itemId);
    batch.update(item,{topics:topic});
    var shopItem = this.firestore.firestore.collection('shopOwners').doc(this.uid).collection('items').doc(this.itemId);
    batch.update(shopItem,{topics:topic});
    batch.commit().catch(error=>{if(error){
      alert(error);
      return;
    }});
  }
  editDescription(description:string){
    var batch = this.firestore.firestore.batch();
    var item = this.firestore.firestore.collection("items").doc(this.itemId);
    batch.update(item,{description:description});
    var shopItem = this.firestore.firestore.collection('shopOwners').doc(this.uid).collection('items').doc(this.itemId);
    batch.update(shopItem,{description:description});
    batch.commit().catch(error=>{if(error){
      alert(error);
      return;
    }});
  }

}