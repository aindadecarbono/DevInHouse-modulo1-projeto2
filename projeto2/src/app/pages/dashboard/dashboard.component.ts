import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  cards: any[] = [
  {nome: "Total unidades", valor: 0},
  {nome: 'Unidades Ativas', valor: 0}, 
  {nome: 'Unidades Inativas', valor: 0}, 
  {nome: 'Média de energia', valor: this.funcaoMediaEnergia().a}
]

  constructor(private databaseService:DatabaseService) { 
    
  }


  ngOnInit(): void {

    
    console.log("dashboard")
    
    this.montarDashboard()

    
  }

  //teste
  funcaoMediaEnergia(){
    console.log('aaa')
    return {a: 'a', b: 'b'}
  }

  montarDashboard():any{

        this.databaseService.chamarUnidades().subscribe((arrayDatabase:any)=>{
        
        // Somar total unidades
        this.cards[0].valor = arrayDatabase.length

        // Somar unidades ativas
        this.cards[1].valor = arrayDatabase.filter((el: any)=> el.ativo == true).length
        

        // Somar unidades inativas
        this.cards[2].valor = arrayDatabase.filter((el: any)=> el.ativo == false).length
        
        // Somar média de energia
        // :(
      
    })

    }

  }

