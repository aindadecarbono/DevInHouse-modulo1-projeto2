import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDashboard } from '../interfaces/dashboard';
import { IDatabase } from '../interfaces/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  urlBase = 'http://localhost:3000/unidades'

  constructor(private http: HttpClient) { }

  chamarUnidades():Observable<IDatabase[]>{
    return this.http.get<IDatabase[]>(this.urlBase);
  }

  postarNovaUnidade(unidade:IDatabase){
    console.log("unidade", unidade)
    return this.http.post<IDatabase>(this.urlBase, unidade)
  
  }


  // fazer com observable
  // montarDashboard():Observable<IDashboard[]>{
  //   let unidades = this.chamarUnidades()
  //   unidades.forEach((element)=>console.log(element))
    
  // }

  montarDashboard():IDashboard{
    let observable = this.chamarUnidades()
          //extrair dados observable -> formar array dashboard
    console.log(observable)


    let dashboard:IDashboard = {
      totalUnidades: 0,
      unidadesAtivas: 0,
      unidadesInativas: 0,
      mediaDeEnergia: 0
    }

    return dashboard;

    //receber esse array numa variavel tipo IDashboard?
    // let dashboard:IDashboard = 
    
  }
}
