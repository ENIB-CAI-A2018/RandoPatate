import { Component, OnInit } from '@angular/core';
import { Spec } from '../Spec';
import { GrService } from '../services/grs.service';

@Component({
  selector: 'app-bouffe',
  templateUrl: './bouffe.component.html',
  styleUrls: ['./bouffe.component.css']
})
export class BouffeComponent implements OnInit {

  Specs : Array<Spec> = [];

  constructor(private GrService: GrService) { 
  }

  ngOnInit() {
    this.getSpecs();
  }

  getSpecs(): void {
    this.GrService.getSpecs().subscribe(data => { this.Specs = data},err => console.error(err));
  }
}