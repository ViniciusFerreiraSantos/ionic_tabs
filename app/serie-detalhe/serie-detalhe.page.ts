import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/dot-notation */
import { IFilme } from './../model/IFilme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './serie-detalhe.page.html',
  styleUrls: ['./serie-detalhe.page.scss'],
})
export class SerieDetalhePage implements OnInit {
  serie: any;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.serie = getNav.extras.state.paramSerie;
      }
    });
  }
}