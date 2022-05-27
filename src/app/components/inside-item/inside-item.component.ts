import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  item:any;
  myArray: any[] = [];
  private readonly destroy$ = new Subject();
  @ViewChild('newIngredient') ingredientHTML!:any;
  constructor(private firestore:AngularFirestore) { }

  ngOnInit(){
    if(this.itemId){
      this.firestore.collection('items').doc(this.itemId).valueChanges()
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
  editPrice(price:string){
    this.firestore.collection('items').doc(this.itemId).update({price:+price}).catch(error=>alert(error))
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
  addIngredient(ingredients:Array<string>,newIngredeient:string){
    if(newIngredeient!=null && newIngredeient!=''){
      let newIngredients=ingredients;
      newIngredients.push(newIngredeient);
      this.firestore.collection('items').doc(this.itemId).update({ingredients:newIngredients})
      this.ingredientHTML.nativeElement.value='';
    }
  }
  removeIngredient(ingredients:Array<string>,ToDeleteIngredeient:string){
    let afterdeleteIngts=ingredients;
    let index = afterdeleteIngts.indexOf(ToDeleteIngredeient);
    if (index !== -1) {
        afterdeleteIngts.splice(index, 1);
        this.firestore.collection('items').doc(this.itemId).update({ingredients:afterdeleteIngts})
    } 
  }
}
