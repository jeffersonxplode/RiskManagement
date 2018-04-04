import { Component } from '@angular/core';
import { Risk} from './risk';

@Component({

  selector: 'risk-list',
  templateUrl: 'risk-list.component.html'

})

export class RiskListComponent {

  riskOne: Risk = new Risk(1, 'Incendio', 'Ta pegando fogo bicho', 0.2, 20, 'Joga agua');
  riskTwo: Risk = new Risk(2, 'Inundaçao', 'Esta alagando tudo bicho', 0.01, 20, 'Bote salva vidas');


  risks: Risk[] = [this.riskOne, this.riskTwo];

}

