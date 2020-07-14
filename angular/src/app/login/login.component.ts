import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PermisosService } from '../servicios/permisos.service'
import { Data } from '../modelo/data'
import { LoginService } from '../servicios/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginData: FormGroup;
  constructor(private router: Router,
    private loginServices:LoginService,
    private permisos: PermisosService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      email:["ble.ona@hotmail.com",Validators.required],
      password:["123456",Validators.required],
  }); 
  }

login():void{
  let email =this.loginData.get('email').value;
  let password =this.loginData.get('password').value;
  let datalogin = {
    data:{
      password,
      email
    }
  };
    this.loginServices.login(datalogin).subscribe((data:Data)=>{
  if(data.transaccion){
    if(this.permisos.decodificarToken(data.token)){
    this.router.navigate(['/menu']);
    }else{
     email='';
      password='';
      alert('error')
    }
  } error=>{
    email='';
      password='';
    alert('ERROR')
  };
});
}
  
}

