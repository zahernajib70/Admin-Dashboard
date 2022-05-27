import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  showInput=false;
  items:any;
  faPlus=faEdit;
  showInfo=false;
  showAddItemModal=false;
  showItemModal=false;
  loading=true;

  constructor(private firestore:AngularFirestore,private storage:AngularFireStorage) { }

  ngOnInit(){
      this.firestore.collection('items').valueChanges().subscribe(res=>{
        this.items=res;
        this.loading=false;
      })  
  }
  showInputMeth(){
    this.showInput=!this.showInput;
  }
  additemModal(){
    this.showAddItemModal=true;
  }
  itemId:string;
  itemTitle:string;
  itemModal(itemId:string,itemTitle:string){
    this.itemId=itemId;
    this.showItemModal=true;
    this.itemTitle=itemTitle;
  }
  imagePath:any;
  imagePreiviewUrl:any;
  previewUrls:Array<string>=[];
  paths:Array<string>=[];
  uploading=false;
  uploadImageProgress:number | undefined=0.1;
  uploaded=false;
  uploadImage($event:any){
      this.imagePath=$event.target.files[0];
      this.paths.push(this.imagePath);
      const reader=new FileReader();
    reader.onload =() =>{
      this.imagePreiviewUrl=reader.result as string;
      this.previewUrls.push(this.imagePreiviewUrl);
    }
    reader.readAsDataURL(this.imagePath);    
  }
  async uplaodItem(title:string,price:number,quantity:number,category:string,description:string){
    if(this.imagePath){
      if(title!='' && price !=0 && quantity !=0 && category !='' && description != ''){
        let id=this.firestore.createId();
        this.showAddItemModal=false;
         for(let i = 0;i<this.paths.length;i++){
         await this.uploadIndividualImgae(id,this.paths[i]);
        }
        const data = {
          key:id,
          title:title,
          price:price,
          discount:0,
          quantity:quantity,
          category:category,
          description:description,
          url:this.toUplaodURLS,
          // addedAt:firebase.default.database.ServerValue.TIMESTAMP
        };
        this.firestore.collection('items').doc(id).set(data).catch(error=>alert(error))

      }
      else{
        alert('Empty field')
      }
    }
    else{
      alert('You need to add an item image')
    }
  }
  toUplaodURLS:Array<string>=[];
  uploadIndividualImgae(id:string,imagepath:any){
    var promise = new Promise<void>((resolve, reject) => {
      var currId = this.firestore.createId();
      const task=this.storage.upload(`/items/${id}/${currId}`,imagepath);
      task.then(img=>{
        img.ref.getDownloadURL().then(imgurl=>{
          this.toUplaodURLS.push(imgurl);
          resolve();
        });
      }).catch(error=>console.log('image not uploaded'));
      task.percentageChanges().subscribe(percent=>{
        this.uploading=true;
        this.uploadImageProgress=percent?.valueOf();
        if(percent==100){
          this.uploading=false;
          this.uploaded=true;
          setInterval(()=>{this.uploaded=false},2000);
        }
    })
    });
    return promise;
  }

  editTitle(title:string){
      // this.database.object(`/items/${this.itemId}/key`).update({title:title}).catch(error=>alert(error))
  }
  itemdeleted=false;
  // deleteThisItem(itemId:string){
  //   this.database.object(`/items/${itemId}`).remove().catch(error=>{
  //     if(error){
  //       alert(error);
  //       return;
  //     }
  //   }).then(res=>{
  //     this.itemdeleted=true;
  //     setInterval(()=>{this.itemdeleted=false},5000)
  //   });
  // }
  deleteItem(){
    // this.database.object(`/items/${this.itemId}`).remove().catch(error=>{
    //   if(error){
    //     alert(error);
    //     return;
    //   }
    // }).then(res=>{
    //   this.showItemModal=false;
    //   this.itemdeleted=true;
    //   setInterval(()=>{this.itemdeleted=false},4000)
    // });;
  }
  filter(filterByValue:string){
    // this.loading=true;
    // this.database.list('items/',ref=>ref.orderByChild(`key/${this.filterBy}`)
    // .equalTo(filterByValue)).valueChanges().subscribe(res=>{
    //   this.items=res;
    //   this.loading=false;
    // })  
  }
}
