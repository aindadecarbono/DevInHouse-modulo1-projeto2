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

  unidade = ''

  constructor(private http: HttpClient) { }

  chamarUnidades():Observable<IDatabase[]>{
    return this.http.get<IDatabase[]>(this.urlBase);
  }

  postarNovaUnidade(unidade:IDatabase){
    console.log("postando unidade", unidade)
    return this.http.post<IDatabase>(this.urlBase, unidade)
  
  }

  deletarUnidade(unidade:string){
    console.log("deletando unidade", unidade)
    return this.http.delete<string>(`${this.urlBase}/${unidade}`).subscribe()
  }

  editarUnidade(unidade:IDatabase){
    console.log("editando unidade", unidade)
    console.log(`${this.urlBase}/${unidade.id}`, unidade)
    return this.http.put<IDatabase>(`${this.urlBase}/${unidade.id}`, unidade).subscribe()
  }

  receberUnidade(item:string){
    this.unidade = item
  }

  chamarUnidade(unidade:string):Observable<IDatabase>{
    return this.http.get<IDatabase>(`${this.urlBase}/${unidade}`);
  }


  montarDashboard():IDashboard{
    let observable = this.chamarUnidades()
          
    console.log('observable', observable)


    let dashboard:IDashboard = {
      totalUnidades: 0,
      unidadesAtivas: 0,
      unidadesInativas: 0,
      mediaDeEnergia: 0
    }

   

    return dashboard;

    
  }
}
