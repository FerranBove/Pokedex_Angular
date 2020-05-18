import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CamarasService {

  private camaras:Camara[] = [
    {
      id:1,
      nombre: "Bulbasaur N.º001",
      bio: "A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.",
      img: "assets/img/001.png",
      tipo: "Planta, Veneno"
    },
    {
      id:2,
      nombre: "Ivysaur N.º002",
      bio: "Este Pokémon lleva un bulbo en el lomo y, para poder con su peso, tiene unas patas y un tronco gruesos y fuertes. Si empieza a pasar más tiempo al sol, será porque el bulbo está a punto de hacerse una flor grande.",
      img: "assets/img/002.png",
      tipo: "Planta, Veneno"
    },
    {
      id:3,
      nombre: "Venusaur N.º003",
      bio: "Venusaur tiene una flor enorme en el lomo que, según parece, adquiere unos colores muy vivos si está bien nutrido y le da mucho el sol. El aroma delicado de la flor tiene un efecto relajante en el ánimo de las personas.",
      img: "assets/img/003.png",
      tipo: "Planta, Veneno"
    },
    {
      id:4,
      nombre: "Charmander N.º004",
      bio: "La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado.",
      img: "assets/img/004.png",
      tipo: "Fuego"
    },
    {
      id:5,
      nombre: "Charmeleon N.º005",
      bio: "Charmeleon no tiene reparo en acabar con su rival usando las afiladas garras que tiene. Si su enemigo es fuerte, se vuelve agresivo, y la llama que tiene en el extremo de la cola empieza a arder con mayor intensidad tornándose azulada.",
      img: "assets/img/005.png",
      tipo: "Fuego"
    },
    {
      id:6,
      nombre: "Charizard N.º006",
      bio: "Charizard se dedica a volar por los cielos en busca de oponentes fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa. No obstante, si su rival es más débil que él, no usará este ataque.",
      img: "assets/img/006.png",
      tipo: "Fuego, Volador"
    },
    {
      id:7,
      nombre: "Squirtle N.º007",
      bio: "El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad.",
      img: "assets/img/007.png",
      tipo: "Agua"
    },
    {
      id:8,
      nombre: "Wartortle N.º008",
      bio: "Tiene una cola larga y cubierta de un pelo abundante y grueso que se torna más oscuro a medida que crece. Los arañazos que tiene en el caparazón dan fe de lo buen guerrero que es.",
      img: "assets/img/008.png",
      tipo: "Agua"
    },
    {
      id:9,
      nombre: "Blastoise N.º009",
      bio: "Blastoise lanza chorros de agua con gran precisión por los tubos que le salen del caparazón que tiene en la espalda. Puede disparar chorros de agua con tanta puntería que no fallaría al tirar contra una lata pequeña a 50 m.",
      img: "assets/img/009.png",
      tipo: "Agua"
    }
  ];

  constructor() {
    console.log("Servicio listo");
  }

  getCamaras():Camara[]{
    return this.camaras;
  }

  getCamara( idx: number  ){
    return this.camaras[idx-1];
  }
}

//Creo una interface para poder usar Arrays de Camaras y no tipo Any
export interface Camara{
  id:number;
  nombre:string;
  bio:string;
  img:string;
  tipo:string;
}
