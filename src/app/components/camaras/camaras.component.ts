import { Component, OnInit } from '@angular/core';
import { CamarasService } from 'src/app/services/camaras.service';
CamarasService

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.css']
})
export class CamarasComponent implements OnInit {

  constructor(private CamarasService: CamarasService) { }

  items = this.CamarasService.getCamaras();


  ngOnInit() {
  }

}
