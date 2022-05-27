import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopowner',
  templateUrl: './shopowner.component.html',
  styleUrls: ['./shopowner.component.css']
})
export class ShopownerComponent implements OnInit {
  faArrowLeft=faArrowLeft;
  shopname:string;
  shopDescription:string;
  shopAdress:string;
  shopNewsImage:string;
  shopnewsFile:any;
  myArray: any[] = [];
  myArray1: any[] = [];

  showItemModal=false;
  constructor(private fbs: AngularFirestore,) { }

  ngOnInit(): void {
    const data=this.fbs.collection('shopOwners',ref=>ref.where('isverified','==','true')).valueChanges().subscribe(val=>{this.myArray = val;
      console.log(val);
     }
     );
  }
  getVerified(){
    

  }
  getunverified(){
    
  }
  changeName(name:string){
    this.shopname=name;
  }
  changeAddress(adress:string){
    this.shopAdress=adress;
  }
  changeDescription(desc:string){
    this.shopDescription=desc;
  }

  Approve(shopid:string){
    this.fbs.collection('shopOwners').doc(shopid).update({
      isVerified:true
    }).catch(error=>{alert(error)});
  }
  reject(shopid:string){
    this.fbs.collection('shopOwners').doc(shopid).delete().catch(error=>{alert(error)});
  }

}
