import { Component, OnInit } from '@angular/core';
import { Receitas } from '../model/receita.model';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/app/servico/auth.service';
import { ServicoService } from 'src/app/servico/servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  minhasReceitas: any[] = [];


  showMore: boolean = false;


  constructor(
    private firebase: ServicoService,
    private actionSheet: ActionSheetController,
    private authServicce: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebase.consulta().subscribe(results => this.minhasReceitas = results);
  }

  toggleMoreText() {
    this.showMore = !this.showMore;
  }
}