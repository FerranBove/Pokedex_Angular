import { Component, OnInit } from '@angular/core';
import { CamarasService } from 'src/app/services/camaras.service';
import {ActivatedRoute} from '@angular/router';
CamarasService

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {

  constructor(private route:ActivatedRoute, private CamarasService: CamarasService) {   }

  item = this.CamarasService.getCamara(parseInt(this.route.snapshot.paramMap.get("id")));
  ngOnInit() {

  }

}
