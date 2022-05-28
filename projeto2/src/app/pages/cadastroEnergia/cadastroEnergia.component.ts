import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGeracao } from 'src/app/interfaces/geracao';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-cadastroEnergia',
  templateUrl: './cadastroEnergia.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroEnergiaComponent implements OnInit {

  unidade:string = ''

  lista:any = []

  mesAno:any = ''

  totalKw:number = 0

  

  constructor(private databaseService:DatabaseService, private route:Router) { }

  ngOnInit(): void {
    
    this.databaseService.chamarUnidades().subscribe((unidades)=>
    {
      this.lista = unidades
    }
    )
    
  }

  cadastrarEnergia(){
    
    let cadastroEnergia:IGeracao = {
      id: Math.round(Math.random()*9999),
      apelido: '',
      data: '',
      totalKw: 0
    }

    cadastroEnergia.apelido = this.unidade
    cadastroEnergia.data = this.mesAno
    cadastroEnergia.totalKw = this.totalKw

    this.databaseService.cadastrarEnergia(cadastroEnergia).subscribe(sucesso => console.log('sucesso', sucesso))

    this.databaseService.chamarEnergia().subscribe(sucesso => console.log('sucesso get energia', sucesso))
  }

}
