import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rw-test';
  data ={};
  private baseUrl = "http://rwtestadminui.azurewebsites.net/api/v1/";
  // private baseUrl = "http://localhost:7000/api/v1/";

  constructor(private http: HttpClient){
  }

  login(){
    this.http.post(this.baseUrl+"login" , {
      Username:'admin',
      password:'rightwatts@admin'
    },{
      withCredentials: true // -===> important
    }).subscribe((response)=>{
      this.data = response; 
      console.log("login data ",response);
    })
  }

  logout(){
    this.http.get(this.baseUrl+"login/clear_session",{
      withCredentials: true // -===> important
    }).subscribe((response)=>{
      this.data = response; 
      console.log("logout data",response);
    })
  }

  checkSession(){
    this.http.get(this.baseUrl+"login/check_session",{
      withCredentials: true // -===> important
    }).subscribe((response)=>{
      this.data = response; 
      console.log("session data ",response);
    })
  }
}

