import { Component } from '@angular/core';
import { AccountBalanceComponent } from './account-balance/account-balance.component';

@Component({
  selector: 'app-dashboard',
  imports: [AccountBalanceComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
