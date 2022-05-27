import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css']
})
export class EditShopComponent implements OnInit {
  faArrowLeft=faArrowLeft;
  shopname:string;
  shopDescription:string;
  shopAdress:string;
  shopNewsImage:string;
  shopnewsFile:any;
  myArray: any[] = [];
  constructor(private fbs: AngularFirestore,) { }

  ngOnInit(): void {
    const data=this.fbs.collection('shopOwners',ref=>ref.where('isverified','==','false')).valueChanges().subscribe(val=>{this.myArray = val;
      console.log(val);
     }
     );  }
  changeName(name:string){
    this.shopname=name;
  }
  changeAddress(adress:string){
    this.shopAdress=adress;
  }
  changeDescription(desc:string){
    this.shopDescription=desc;
  }

  

}
