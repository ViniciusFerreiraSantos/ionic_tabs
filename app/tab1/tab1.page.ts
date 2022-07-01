import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'As Branquelas (2004)',
      lancamento: '12/11/2004 (BR)',
      duracao: '2h29m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aJZOcorpgloDLkPP6ED0t9sXjNu.jpg',
      generos: ['Comédia', 'Crime'],
      pagina: '/As Branquelas',
      favorito: true
    },
    {
      nome: 'Doutor Estranho no Multiverso da Loucura (2022)',
      lancamento: '05/05/2022',
      duracao: '2h6m',
      classificacao: 3,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia'],
      pagina: '/Doutor Estranho',
      favorito: false
    },
    {
      nome: 'O homem de aço (2013)',
      lancamento: '12/07/2013 (BR)',
      duracao: '2h23m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/c1k1N5rrA6NGhKUZ6hOYR0Am9Ss.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/O homem de aço',
      favorito: false
    },
    {
      nome: 'Homem Aranha: Sem Volta Para Casa (2021)',
      lancamento: '16/12/2021 (BR)',
      duracao: '2h29m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Ação', 'Ficção científica', 'Aventura'],
      pagina: '/Homem Aranha',
      favorito: true
    },
    {
      nome: 'Batman: O Cavaleiro das Trevas (2008)',
      lancamento: '18/07/2008',
      duracao: '2h32m',
      classificacao: 3,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg',
      generos: ['Ação', 'Drama', 'Crime', 'Thriller'],
      pagina: '/Batman',
      favorito: false
    }
    

  ];
  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}