import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Risk } from './risk';

@Component({

  selector: 'risk-show',
  templateUrl: 'risk-show.component.html'

})

export class RiskShowComponent implements OnInit {
  id: number;
  routerId: any;

  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.routerId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    );
  }
}
