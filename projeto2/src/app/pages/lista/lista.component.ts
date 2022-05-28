import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDatabase } from 'src/app/interfaces/database';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  unidades: IDatabase[] = []
  listaVazia: boolean = false
  headers:string[] = ['Id', 'Apelido', 'Local', 'Marca', 'Modelo']
    
  constructor(private databaseService:DatabaseService, private route:Router) { }

  ngOnInit(): void {
    
    this.preencheLista()
       
  }

  preencheLista(){
    this.databaseService.chamarUnidades().subscribe((resposta:IDatabase[])=>{
    this.unidades = resposta
    this.confereListaVazia(this.unidades)
    })
  }

  confereListaVazia(array:any){
    if (array.length!=0){ 
      console.log(this.unidades.length)
    this.listaVazia = false
    } else {
      console.log(this.unidades.length)
      this.listaVazia = true
    }
  }

  editarItem(itemId:number){
    this.databaseService.receberUnidade(itemId.toString())
    this.route.navigateByUrl('/edicao')
    
  }

  removerItem(itemId:number){
    console.log("Remover id", itemId)
    this.databaseService.deletarUnidade(itemId.toString())
    this.preencheLista()
  }

}
