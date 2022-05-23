import { Component, OnInit } from '@angular/core';
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
    
  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {
    
    this.preencheLista()
       
  }

  preencheLista(){
    this.databaseService.chamarUnidades().subscribe((resposta:IDatabase[])=>{
    this.unidades = resposta
    this.confereListaVazia(this.unidades)
    console.log('resposta', resposta)
    })
    
  // serviçoesDashboard
  
  }

  confereListaVazia(array:any){
    console.log('confereListaVazia')
    if (array.length!=0){ 
      console.log(this.unidades.length)
    this.listaVazia = false
    } else {
      console.log(this.unidades.length)
      this.listaVazia = true
    }
  }
}
