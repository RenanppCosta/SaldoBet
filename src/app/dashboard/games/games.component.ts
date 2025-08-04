import { Component, input, output, signal } from '@angular/core';
import { GameComponent } from './game/game.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Game } from '../models/game.model';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-games',
  imports: [GameComponent, ButtonComponent, ModalComponent, FormsModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games = input.required<Game[]>();
  createdGame = output<Game>();

  newGameForm = {
    name: "",
    profit: "",
  }

  onSubmit(){
    const newGame = new Game(
      this.newGameForm.name,
      Number(this.newGameForm.profit)
    )

    this.createdGame.emit(newGame);
    this.openedModal.set(false);
  }

  openedModal = signal(false);

  openModal(){
    this.openedModal.set(true);
  }
}
