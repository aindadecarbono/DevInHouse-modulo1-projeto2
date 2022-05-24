import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss']
})
export class EdicaoComponent implements OnInit {

  apelido: string = ''
  local: string = ''
  marca: string = ''
  modelo: string = ''
  ativo: boolean = false


  editarUnidade(){
    //preencher dados da unidade no template
    //PUT 
    this.route.navigateByUrl('/dashboard')
  }

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
