import { Component, OnInit } from '@angular/core';
import { SegundaGenService } from 'src/app/services/segunda-gen.service';
SegundaGenService

@Component({
  selector: 'app-tripodes',
  templateUrl: './tripodes.component.html',
  styleUrls: ['./tripodes.component.css']
})
export class TripodesComponent implements OnInit {

  constructor(private SegundaGenService: SegundaGenService) { }

  items = this.SegundaGenService.getPokemons();

  ngOnInit() {
  }

}
