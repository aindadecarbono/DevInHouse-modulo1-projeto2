import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDashboard } from '../interfaces/dashboard';
import { IDatabase } from '../interfaces/database';
import { IGeracao } from '../interfaces/geracao';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  urlBase = 'http://localhost:3000/unidades'

  urlGeracao = 'http://localhost:3000/energia'

  unidade = ''

  constructor(private http: HttpClient) { }

  chamarUnidades():Observable<IDatabase[]>{
    return this.http.get<IDatabase[]>(this.urlBase);
  }

  postarNovaUnidade(unidade:IDatabase){
    return this.http.post<IDatabase>(this.urlBase, unidade)
  
  }

  deletarUnidade(unidade:string){
    return this.http.delete<string>(`${this.urlBase}/${unidade}`).subscribe()
  }

  editarUnidade(unidade:IDatabase){
    return this.http.put<IDatabase>(`${this.urlBase}/${unidade.id}`, unidade).subscribe()
  }

  receberUnidade(item:string){
    this.unidade = item
  }

  chamarUnidade(unidade:string):Observable<IDatabase>{
    return this.http.get<IDatabase>(`${this.urlBase}/${unidade}`);
  }

  cadastrarEnergia(unidade:IGeracao){
    return this.http.post<IGeracao>(this.urlGeracao, unidade)
  }

  chamarEnergia():Observable<IGeracao[]>{
    return this.http.get<IGeracao[]>(this.urlGeracao)
  }

  montarDashboard():IDashboard{
      let dashboard:IDashboard = {
      totalUnidades: 0,
      unidadesAtivas: 0,
      unidadesInativas: 0,
      mediaDeEnergia: 0
    }

   return dashboard;
    
  }
}
