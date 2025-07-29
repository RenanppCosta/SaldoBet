import { Component, computed, input } from '@angular/core';
import { Bet, PossibleResult } from '../../models/bet.model';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-bet',
  imports: [DatePipe, NgClass, CurrencyPipe],
  templateUrl: './bet.component.html',
  styleUrl: './bet.component.css'
})
export class BetComponent {
  bet = input.required<Bet>();

  profit = computed(() =>{
    if (this.bet().result === PossibleResult.LOSE){
      return -this.bet().profit;
    }

    return this.bet().profit;
  })

  colorTextProfit = computed(() => {
    if (this.bet().result === PossibleResult.LOSE){
      return "profit-red"
    }

    return "profit-green"
  })
}
