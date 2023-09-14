import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicoService } from 'src/app/servico/servico.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit{
  constructor(
    private alertController: AlertController,
    private firebaseService: ServicoService
    ) {}

  ngOnInit(){}

  async cadastro(){
    const form = this.alertController.create({
      mode: 'ios',
      header: 'Cadastro',
      inputs:[
        {
          name: 'url',
          placeholder: 'http://imagem.com.br',
          type: 'text'
        },
        {
          name: 'titulo',
          placeholder: 'Informe o título',
          type: 'text'
        },

        {
          name: 'texto',
          placeholder: 'Informe o texto',
          type: 'text'
        },

        {
          name: 'receita',
          placeholder: 'Informe a receita',
          type: 'text'
        }
      ],

      buttons:[
        {
          text: 'Cadastrar', 
          handler: (form) => {

            this.firebaseService.cadastro(form)
          }       
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    (await form).present();
  }
}