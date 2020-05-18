import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SegundaGenService {

  private pokemons:Pokemon[] = [
    {
      id:1,
      nombre: "Chikorita N.º152",
      bio: "Al luchar, Chikorita agita la hoja que tiene para mantener a raya al rival. Pero, al mismo tiempo, libera una suave fragancia que apacigua el encuentro y crea un ambiente agradable y de amistad.",
      img: "assets/img/152.png",
      tipo: "Planta"
    },
    {
      id:2,
      nombre: "Bayleef N.º153",
      bio: "Bayleef tiene un collar de hojas alrededor del cuello y un brote de un árbol en cada una de ellas. La fragancia que desprenden estos brotes anima a la gente.",
      img: "assets/img/153.png",
      tipo: "Planta"
    },
    {
      id:3,
      nombre: "Meganium N.º154",
      bio: "La fragancia de la flor de Meganium aplaca y suaviza los ánimos. Al luchar, este Pokémon libera mayor cantidad de esencia para disminuir el ánimo de combate de su oponente.",
      img: "assets/img/154.png",
      tipo: "Planta"
    },
    {
      id:4,
      nombre: "Cyndaquil N.º155",
      bio: "Cyndaquil se protege soltando llamas por el lomo. Cuando está enfadado, las llamas son fieras, pero, si está cansado, solo consigue echar algunas chispas que no llegan a cuajar en una completa combustión.",
      img: "assets/img/155.png",
      tipo: "Fuego"
    },
    {
      id:5,
      nombre: "Quilava N.º156",
      bio: "Quilava mantiene a sus rivales a raya con la intensidad de sus llamas y las ráfagas de aire ígneo que producen. También aprovecha su espectacular agilidad para esquivar ataques a la vez que abrasa al rival con sus llamas.",
      img: "assets/img/156.png",
      tipo: "Fuego"
    },
    {
      id:6,
      nombre: "Typhlosion N.º157",
      bio: "Typhlosion se oculta tras un trémulo haz de calor que crea mediante sus intensas y sofocantes llamaradas. Este Pokémon causa explosiones de fuego que reducen todo a cenizas.",
      img: "assets/img/157.png",
      tipo: "Fuego"
    },
    {
      id:7,
      nombre: "Totodile N.º158",
      bio: "Totodile tiene cuerpo pequeño, pero fuertes mandíbulas. A veces, piensa que solo está dando un mordisquito y hace unas heridas bastante considerables.",
      img: "assets/img/158.png",
      tipo: "Agua"
    },
    {
      id:8,
      nombre: "Croconaw N.º159",
      bio: "Una vez que Croconaw le ha clavado los colmillos a su presa, es imposible que escape porque los tiene hacia adentro como si fueran anzuelos. Cuando Croconaw hinca los dientes, no hay escapatoria.",
      img: "assets/img/159.png",
      tipo: "Agua"
    },
    {
      id:9,
      nombre: "Feraligatr N.º160",
      bio: "Feraligatr intimida a sus oponentes abriendo las grandes fauces que tiene. En combate, golpea el suelo bruscamente con las gruesas y fuertes patas traseras que tiene para cargar contra su rival a una velocidad de vértigo",
      img: "assets/img/160.png",
      tipo: "Agua"
    }
  ];

  constructor() {
    console.log("Servicio listo");
  }

  getPokemons():Pokemon[]{
    return this.pokemons;
  }

  getPokemon( idx: number  ){
    return this.pokemons[idx-1];
  }
}

//Creo una interface para poder usar Arrays de Camaras y no tipo Any
export interface Pokemon{
  id:number;
  nombre:string;
  bio:string;
  img:string;
  tipo:string;
}
