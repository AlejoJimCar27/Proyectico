import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/service/infopagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  anio: number = new Date().getFullYear();

  constructor( public infoPaginaService: InfoPaginaService ) { }


  ngOnInit() {
  }

}
