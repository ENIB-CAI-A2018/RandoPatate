import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';
import { GrService } from '../services/grs.service';
import { Gr } from '../Gr';

@Component({
  selector: 'app-gr-detail',
  templateUrl: './gr-detail.component.html',
  styleUrls: ['./gr-detail.component.css'],
})
export class GrDetailComponent implements OnInit {
    Gr : {};

    constructor(private route: ActivatedRoute,private grService : GrService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.getGr(params['id']);
        });
    }

    getGr(GrId : string): void{
        this.grService.getGr(GrId).subscribe(data => { this.Gr = data},err => console.error(err));
    }

}

