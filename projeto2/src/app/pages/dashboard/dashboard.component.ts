import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  mes:any[] = [
    'jan.',
    'fev.',
    'mar.',
    'abr.',
    'maio',
    'jun.',
    
  ]

  totalKw:any[] = [
    {jan: 0},
    {fev: 0},
    {mar: 0},
    {abr: 0},
    {mai: 0},
    {jun: 0},
  ]

  cards: any[] = [
  {nome: "Total unidades", valor: 0},
  {nome: 'Unidades Ativas', valor: 0}, 
  {nome: 'Unidades Inativas', valor: 0}, 
  {nome: 'Média de energia', valor: 0}
]

  constructor(private databaseService:DatabaseService) { 
    
  }


  ngOnInit(): void {
    
    this.montarDashboard()

    this.chamarTotalKwMes()
    
  }

  
  montarDashboard():any{

        this.databaseService.chamarUnidades().subscribe((arrayDatabase:any)=>{
        
        this.cards[0].valor = arrayDatabase.length
        this.cards[1].valor = arrayDatabase.filter((el: any)=> el.ativo == true).length
        this.cards[2].valor = arrayDatabase.filter((el: any)=> el.ativo == false).length
        this.databaseService.chamarEnergia().subscribe((sucesso)=>{
          sucesso.forEach((elemento)=>{
            this.cards[3].valor = this.cards[3].valor + elemento.totalKw})  
            this.cards[3].valor = Math.round(this.cards[3].valor/arrayDatabase.length)
        })
      })

    }

     chamarTotalKwMes(){
      this.databaseService.chamarEnergia().subscribe((arrayDatabase)=>{
        arrayDatabase.forEach(elemento => {
          switch (elemento.data) {
            case '2022-01':
              this.totalKw[0].jan = this.totalKw[0].jan + elemento.totalKw
              break;

            case '2022-02':
            this.totalKw[1].fev = this.totalKw[1].fev + elemento.totalKw
            break;

            case '2022-03':
            this.totalKw[2].mar = this.totalKw[2].mar + elemento.totalKw
            break;

            case '2022-04':
            this.totalKw[3].abr = this.totalKw[3].abr + elemento.totalKw
            break;

            case '2022-05':
            this.totalKw[4].mai = this.totalKw[4].mai + elemento.totalKw
            break;

            case '2022-06':
            this.totalKw[5].jun = this.totalKw[5].jun + elemento.totalKw
            break;
              
            default:
              break;
          }
        });
      })
    }

  }

