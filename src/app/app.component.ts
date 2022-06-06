import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { faEdit,faBell,faHome,faShoppingBasket,faHandHoldingHeart,faCar,faMagnet,faUserAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rabi3AdminApp';
  user:any;
  userData:any;
  faEdit=faEdit;
  faBell=faBell;
  faHome=faHome;
  faShoppingBasket=faShoppingBasket;
  faHandHoldingHeart=faHandHoldingHeart;
  faCar=faCar;
  faMagnet=faMagnet;
  faUserAlt=faUserAlt;
  isUserDropClickedd=false;
  chosen='dashboard';

  constructor(private router:Router,private auth:AngularFireAuth,private firestore:AngularFirestore){
    this.getUser().then(()=>{
      this.getUserData();
    });
  }
  getUser(){
    var promise = new Promise<void>((resolve, reject) => {
      this.auth.authState.subscribe(user=>{
        if(user){
          this.user=user;
          resolve();
        }
      })
    });
    return promise;
  }
  getUserData(){
    var promise = new Promise<void>((resolve, reject) => {
      this.firestore.collection('shopOwners').doc(this.user.uid).valueChanges().subscribe(userdata=>{
        this.userData=userdata;
      })
    });
    return promise;
  }


  toDashboard(){
    this.chosen='dashboard';

    this.router.navigate(['dashboard']
    
    );
  }

  toCustomers(){
    this.chosen='customers';

    this.router.navigate(['customers']);
  }

  toShopowner(){
    this.chosen='shopowner';

    this.router.navigate(['shopowner']);
  }


  toItems(){
    this.chosen='items';
    this.router.navigate(['items']);
  }

  tomap(){
    this.chosen='map';
    this.router.navigate(['map']);
  }
  toOrders(){
    this.chosen='orders';
    this.router.navigate(['orders']);
  }
  toEditshop(){
    this.chosen='editshop';
    this.isUserDropClickedd=false;
    this.router.navigate(['editshop']);
  }
  signOut(){
    this.chosen='logout';
    this.auth.signOut().catch(error=>alert(error)).then(()=>{
      window.location.reload();
    });
  }
}
