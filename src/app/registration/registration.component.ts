import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  user:any ={}
  constructor(private http:HttpClient){ }

  ngOnInit(): void {
    
  }
  register(){
    console.log(this.user)
    this.http.post("http://localhost:3000/users/registration",this.user).subscribe(result=>{
      console.log(result)


      
    }
  )

    
  }
} 

  
  // indentifier(private/public) variableName:dataType=intialVaue
  // name:string="";
  // age:number=0;
  // mobile:number=0;
  // city:string="";
  // data:any={
  //   name: this.name,
  //   age: this.age,
  //   mobie:this.mobile,
  //   city:this.city
  

//   registration(){
//     console.log(this.name,this.age,this.mobile,this.city);
//     console.log(this.data);
//     this.http.post("https://localhost:8000/users",this.data).subscribe((response:any)=>{
//       // response.json(response);
//       console.log("response:",response);
//     })
//   }
// }
