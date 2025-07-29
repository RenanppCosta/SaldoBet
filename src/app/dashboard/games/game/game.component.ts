import { Component, input } from '@angular/core';
import { Game } from '../../models/game.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [CurrencyPipe],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
 game = input.required<Game>();
}
