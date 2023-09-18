import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servico/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  autenticar(formUm:any){
    this.auth.login(formUm.value)
  }
}