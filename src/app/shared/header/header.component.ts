import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/service/infopagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPaginaService: InfoPaginaService  ) { }

  ngOnInit() {
  }

}
