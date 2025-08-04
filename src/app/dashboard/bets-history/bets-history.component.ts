import { Component, input, output, signal } from '@angular/core';
import { BetComponent } from './bet/bet.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Bet, PossibleResult } from '../models/bet.model';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-bets-history',
  imports: [BetComponent, ButtonComponent, ModalComponent, FormsModule],
  templateUrl: './bets-history.component.html',
  styleUrl: './bets-history.component.css'
})
export class BetsHistoryComponent {
  bets = input.required<Bet[]>();
  games = input.required<Game[]>();

  createdBet = output<Bet>();

  newBetForm = {
    description: "",
    result: "",
    profit:"",
    date:"",
    gameName: ""
  }

  onSubmit(){
    const selectedGame = this.games().find(game => game.name === this.newBetForm.gameName);

    if (!selectedGame) {
      return; 
    }

    const newBet = new Bet(
      this.newBetForm.description,
      this.newBetForm.result as PossibleResult,
      Number(this.newBetForm.profit),
      this.newBetForm.date,
      selectedGame
    )

    this.createdBet.emit(newBet);
    this.openedModal.set(false);
  }

  openedModal = signal(false);

  openModal(){
    this.openedModal.set(true);
  }
}
