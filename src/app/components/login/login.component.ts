import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLOading=false;
  constructor(private auth:AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
  }
  async login(email:string,password:string){
    if(email!='' && password!=''){
      this.isLOading=true;
      await this.auth.signInWithEmailAndPassword(email,password).catch(error=>{
        alert(error)
      }).then(()=>{
        this.router.navigate(['dashboard']);
        this.isLOading=false;
      })
    }else{
      alert('Empty Fields')
    }
  }
}
