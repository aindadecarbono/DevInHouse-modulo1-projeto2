import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastroEnergia',
  templateUrl: './cadastroEnergia.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroEnergiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('cadastro')
  }

}
