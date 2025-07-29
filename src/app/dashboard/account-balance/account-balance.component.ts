import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-account-balance',
  imports: [CurrencyPipe],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.css'
})
export class AccountBalanceComponent {
  balance = input.required<number>();
}
