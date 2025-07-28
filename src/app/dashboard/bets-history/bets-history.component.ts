import { Component } from '@angular/core';
import { BetComponent } from './bet/bet.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-bets-history',
  imports: [BetComponent, ButtonComponent],
  templateUrl: './bets-history.component.html',
  styleUrl: './bets-history.component.css'
})
export class BetsHistoryComponent {

}
