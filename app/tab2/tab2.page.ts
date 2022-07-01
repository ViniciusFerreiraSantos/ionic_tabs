import { SerieDetalhePage } from './../serie-detalhe/serie-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Vikings (2013-2022)',
      lancamento: '03/03/2013 (BR)',
      duracao: '89 episódios',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg',
      generos: ['Ação', 'Drama', 'Aventura', 'Guerra', 'Política'],
      pagina: '/Vikings',
      favorito: true
    },
    {
      nome: 'Stranger Things (2016-)',
      lancamento: '15/07/2016 (BR)',
      duracao: '34 episódios',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uKYUR8GPkKRCksczYDJb3pwZauo.jpg',
      generos: ['Ação', 'Drama', 'Ficção Científica', 'Mistério', 'Fantasia'],
      pagina: '/Stranger Things',
      favorito: true
    },
    {
      nome: 'O Gambito da Rainha (2020-)',
      lancamento: '23/09/2020 (BR)',
      duracao: '7 episódios',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ubWpLTkwcms5PfZJMFZkNXVYXqJ.jpg',
      generos: ['Drama'],
      pagina: '/O Gambito da Rainha',
      favorito: true
    },
    {
      nome: 'Peaky Blinders (2013-2022)',
      lancamento: '12/09/2013 (BR)',
      duracao: '36 episódios',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg',
      generos: ['Drama', 'Crime'],
      pagina: '/Peaky Blinders',
      favorito: false
    },
    {
      nome: ' Cavaleiro da Lua (2022-)',
      lancamento: '15/04/2020 (BR)',
      duracao: '6 episódios',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg',
      generos: ['Ficção', 'Ação', 'Aventura', 'Mistério'],
      pagina: '/Cavaleiro da Lua',
      favorito: false
    }
  ];
  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
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