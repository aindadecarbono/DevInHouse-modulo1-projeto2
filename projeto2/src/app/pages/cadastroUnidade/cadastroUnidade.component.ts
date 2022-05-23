import { Component, OnInit } from '@angular/core';
import { IDatabase } from 'src/app/interfaces/database';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-cadastroUnidade',
  templateUrl: './cadastroUnidade.component.html',
  styleUrls: ['./cadastroUnidade.component.scss']
})
export class CadastrounidadeComponent implements OnInit {

  id: number = 0
  apelido: string = ''
  local: string = ''
  marca: string = ''
  modelo: string = ''
  ativo: boolean = false

  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {
    console.log("cadastroUnidade")
  }

  postarNovaUnidade(){
    this.id = Math.round(Math.random()*9999)

    let unidade:IDatabase = {id:this.id, apelido:this.apelido, local:this.local, marca:this.marca, modelo:this.modelo, ativo:this.ativo};
    
    this.databaseService.postarNovaUnidade(unidade).subscribe(sucesso => console.log('sucesso', sucesso))
  }

}
