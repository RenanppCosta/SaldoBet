import { Component, input } from '@angular/core';
import { BetComponent } from './bet/bet.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Bet } from '../models/bet.model';

@Component({
  selector: 'app-bets-history',
  imports: [BetComponent, ButtonComponent],
  templateUrl: './bets-history.component.html',
  styleUrl: './bets-history.component.css'
})
export class BetsHistoryComponent {
  bets = input.required<Bet[]>();
}
