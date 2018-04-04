import {Component} from '@angular/core';
import {Risk} from './risk';


@Component({
  selector: 'risk-new',
  templateUrl: 'risk-new.component.html'
})

export class RiskNewComponent {
  risk = new Risk();
}
