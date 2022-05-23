import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  private login: boolean = false
  email: string = ''
  senha: string = ''
  

  constructor(private usuarioService:UsuarioService, private route:Router) {
   }

  ngOnInit(): void {
  }

  verificarLogin(email: string, senha: string) {
    this.login = this.usuarioService.verificarLogin(email, senha)
    if (this.login){
      
      this.route.navigateByUrl('/dashboard')} 
    else {
        alert('Usuário ou senha inválido(s)')}
    
    
  }


}
