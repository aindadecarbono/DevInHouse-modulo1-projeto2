import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListaComponent } from './pages/lista/lista.component';
import { CadastroEnergiaComponent } from './pages/cadastroEnergia/cadastroEnergia.component';
import { CadastrounidadeComponent } from './pages/cadastroUnidade/cadastroUnidade.component';
import { NavComponent } from './components/nav/nav.component';
import { EdicaoComponent } from './pages/edicao/edicao.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: LoginComponent
  },{
    path: "dashboard",
    component: DashboardComponent
  },{
    path: "cadastroenergia",
    component: CadastroEnergiaComponent
  },{
    path: "cadastrounidade",
    component: CadastrounidadeComponent
  },{
    path: "lista",
    component: ListaComponent
  },{
    path: "edicao",
    component: EdicaoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EdicaoComponent,
    ListaComponent,
    CadastroEnergiaComponent,
    CadastrounidadeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
