import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SegundaGenService } from 'src/app/services/segunda-gen.service';
SegundaGenService

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private route:ActivatedRoute, private SegundaGenService: SegundaGenService) { }

  item = this.SegundaGenService.getPokemon(parseInt(this.route.snapshot.paramMap.get("id")));
  ngOnInit() {
  }

}
