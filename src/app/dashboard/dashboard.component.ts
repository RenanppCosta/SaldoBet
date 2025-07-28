import { Component } from '@angular/core';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { BetsHistoryComponent } from './bets-history/bets-history.component';
import { GamesComponent } from './games/games.component';

@Component({
  selector: 'app-dashboard',
  imports: [AccountBalanceComponent, BetsHistoryComponent, GamesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
