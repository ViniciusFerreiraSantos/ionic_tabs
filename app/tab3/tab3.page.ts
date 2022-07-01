import { AtorDetalhePage } from './../ator-detalhe/ator-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IAtor } from '../model/IAtor';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaAtores: IAtor[] = [
     {
      nome: 'Tyler Posey',
      lancamento: '30 anos',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gagloED5Frh412G2ImBiWD14y9O.jpg',
      
      pagina: '/Tyler Posey',
      favorito: true
    },
     {
      nome: 'Ashley Greene',
      lancamento: '35 anos',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qcuqjfZvusdjV9B2sLrxU3iajWj.jpg',
      
      pagina: '/Ashley Greene',
      favorito: true
    },
    {
      nome: 'Andrew Garfield',
      lancamento: '38 anos',
      
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xKnUNWFsAOaKIviIYBLei02Bauu.jpg',
      
      pagina: '/Andrew Garfield',
      favorito: true
    },
    {
      nome: 'Katheryn Winnick',
      lancamento: '44 anos',
      
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vQSqH3ybDWZHZIqX4NZKhOCXAhQ.jpg',
      
      pagina: '/Katheryn Winnick',
      favorito: false
    },
    {
      nome: 'John Cena',
      lancamento: '45 anos',
      
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3xKC4ByuHIStXV4kTrbCCF8cozt.jpg',
      
      pagina: '/John Cena',
      favorito: false
    }
  ];
  exibirAtor(ator: IAtor){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(ator: IAtor) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Serie adicionada aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}