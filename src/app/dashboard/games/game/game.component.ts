import { Component, computed, input } from '@angular/core';
import { Game } from '../../models/game.model';
import { CurrencyPipe, NgClass, PercentPipe } from '@angular/common';
import { PossibleResult } from '../../models/bet.model';

@Component({
  selector: 'app-game',
  imports: [CurrencyPipe, NgClass, PercentPipe],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
 game = input.required<Game>();

 colorTextProfit = computed(() => {
    if (this.game().profit < 0){
      return "profit-red"
    }

    return "profit-green"
  })

  calcWinRate = (totalBets: number | undefined, numWin: number) =>{
    if(totalBets != null && totalBets != undefined){
      return (numWin) / totalBets;
    }

    return;
  }

  winRate = computed(() => {
    const bets = this.game()?.bets;
    let numWin = 0;

    if (!bets || bets.length === 0) {
      return 0;
    }
    
    bets.forEach((bet) => {
      if (bet.result == PossibleResult.WIN) {
        numWin++; 
      }
    });

    const totalBets = bets.length;
  
    if (numWin === 0) {
        return 0;
    }
    
    return this.calcWinRate(totalBets, numWin);

  })

}
