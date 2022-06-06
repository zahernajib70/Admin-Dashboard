import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ItemsComponent } from './components/items/items.component';
import { LoaderComponent } from './components/loader/loader.component';
import { InsideItemComponent } from './components/inside-item/inside-item.component';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditShopComponent } from './components/edit-shop/edit-shop.component';
import { ShopownerComponent } from './shopowner/shopowner.component';
import { AddshopownerComponent } from './addshopowner/addshopowner.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ItemsComponent,
    LoaderComponent,
    InsideItemComponent,
    OrdersComponent,
    LoginComponent,
    DashboardComponent,
    EditShopComponent,
    ShopownerComponent,
    AddshopownerComponent,
    MapComponent,
   
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
