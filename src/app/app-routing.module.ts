import  { NgModule } from '@angular/core';
import  { Routes, RouterModule } from '@angular/router';
import  { HomeComponent } from './components/home/home.component';
import  { SobreComponent } from './components/sobre/sobre.component';
import  { CamarasComponent } from './components/camaras/camaras.component';
import  { TripodesComponent } from './components/tripodes/tripodes.component';
import  { CamaraComponent } from './components/camara/camara.component';
import  { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'sobre', component:SobreComponent},
  { path:'camaras', component:CamarasComponent},
  { path:'tripodes', component:TripodesComponent},
  { path:'camara/:id', component:CamaraComponent},
  { path:'pokemon/:id', component:PokemonComponent},
  { path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
