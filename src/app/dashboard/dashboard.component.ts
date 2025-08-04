import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { BetsHistoryComponent } from './bets-history/bets-history.component';
import { GamesComponent } from './games/games.component';
import { Game } from './models/game.model';
import { Bet, PossibleResult } from './models/bet.model';

@Component({
  selector: 'app-dashboard',
  imports: [AccountBalanceComponent, BetsHistoryComponent, GamesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {

  balance = 0;
  games = signal<Game[]>([]);
  allBets = signal<Bet[]>([]);

  handleNewBet(newBet: Bet) {
    this.allBets.update(currentBets => [newBet, ...currentBets]);

    this.games.update(currentGames => {
      const gameToUpdate = currentGames.find(game => game.name === newBet.game.name);

      if (gameToUpdate) {
        gameToUpdate.bets = [newBet, ...(gameToUpdate.bets ?? [])];
      }
      
      return [...currentGames];
    });
  }

  handleNewGame(newGame: Game){
    this.games.update(currenteGames => [newGame, ...currenteGames])
  }
}
