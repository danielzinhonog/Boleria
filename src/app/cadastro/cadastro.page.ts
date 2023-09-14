import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servico/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  constructor(
    private autenticar: AuthService
  ) { }

  ngOnInit() { }

  cadastro(form: any) {
    this.autenticar.registrar(form.value);
  }
}