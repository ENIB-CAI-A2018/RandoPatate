import { Component, OnInit } from '@angular/core';
import { GrService } from '../services/grs.service';
import { Gr } from '../Gr';

@Component({
  selector: 'gr-list',
  templateUrl: './gr-list.component.html',
  styleUrls: ['./gr-list.component.css']
})
export class GrListComponent implements OnInit {

  orderProp : string = "longueur";

  Grs : Array<Gr> = [];

  constructor(private GrService: GrService) { 
  }

  ngOnInit() {
    this.getGrs();
  }

  getGrs(): void {
    this.GrService.getGrs().subscribe(data => { this.Grs = data},err => console.error(err));
  }
}
