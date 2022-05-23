import { Injectable } from '@angular/core';
import { Database } from "../../assets/database/databaseLogin" 


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private login: boolean = false

  constructor() { }

  verificarLogin(email: string, senha: string):boolean{
    let testeLogin = new Database()
    
    if(email != testeLogin.usuario.EMAIL || senha != testeLogin.usuario.SENHA){
    return false} else {
    this.login = true;
    return true}
     
  }

  

}

