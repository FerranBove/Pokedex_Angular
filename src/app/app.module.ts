import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamaraComponent } from './components/camara/camara.component';
import { CamarasComponent } from './components/camaras/camaras.component';
import { GeneralComponent } from './components/general/general.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TripodesComponent } from './components/tripodes/tripodes.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    CamaraComponent,
    CamarasComponent,
    GeneralComponent,
    HomeComponent,
    SobreComponent,
    TripodesComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
