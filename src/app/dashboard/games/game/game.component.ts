import { Component, computed, input } from '@angular/core';
import { Game } from '../../models/game.model';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [CurrencyPipe, NgClass],
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
}
