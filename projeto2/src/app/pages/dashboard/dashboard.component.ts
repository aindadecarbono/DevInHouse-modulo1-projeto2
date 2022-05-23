import { Component, OnInit } from '@angular/core';
import { IDashboard } from 'src/app/interfaces/dashboard';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  dashboard: IDashboard[] = []
   
  cards: any[] = [
  {nome: "Total unidades", valor: "lengthArray"},
  {nome: 'Unidades Ativas', valor: "se true, ativo++"}, 
  {nome: 'Unidades Inativas', valor: "se false, inativo++"}, 
  {nome: 'Média de energia', valor: "buscar no outro service"}
]

  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {
    console.log("dashboard")
  }

  montarDashboard(){
    this.databaseService.montarDashboard()
  }

}
