import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { IDatabase } from '../../interfaces/database';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss']
})
export class EdicaoComponent implements OnInit {

  // unidade:IDatabase = {
  //   id: 0,
  //   apelido: '',
  //   local: '',
  //   marca: '',
  //   modelo: '',
  //   ativo: false
  // }

  id: number = 0
  apelido: string = ''
  local: string = ''
  marca: string = ''
  modelo: string = ''
  ativo: boolean = false


  constructor(private route:Router, private databaseService:DatabaseService) { }

  ngOnInit(): void {
    this.preencheUnidade()
    
  }
  
  preencheUnidade()
  {
    let itemId = this.databaseService.unidade
   
    this.databaseService.chamarUnidade(itemId).subscribe((resultado)=>
    {
      console.log('resultado', resultado)
      
      this.id = resultado.id
      this.apelido = resultado.apelido
      this.local = resultado.local
      this.marca = resultado.marca
      this.modelo = resultado.modelo
      this.ativo = resultado.ativo

      
    })
    
  
    
  }

  editarUnidade(){
    let unidade:IDatabase = {id:this.id, apelido:this.apelido, local:this.local, marca:this.marca, modelo:this.modelo, ativo:this.ativo};
    this.databaseService.editarUnidade(unidade)
    this.route.navigateByUrl('/dashboard')
  }

}
