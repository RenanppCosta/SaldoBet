import { Component } from '@angular/core';
import { GameComponent } from './game/game.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-games',
  imports: [GameComponent, ButtonComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

}
