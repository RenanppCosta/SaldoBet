import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
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
  initialGames = signal<Game[]>([]);
  bets = signal<Bet[]>([]);

  balance = computed(() => {
    return this.games().reduce((acc, game) => acc + game.profit, 0);
  });

  games = computed(() =>{
    return this.initialGames().map((game) =>{
      const profit = this.calculateProfit(game);

      return {...game, profit: profit}
    })
  })

   calculateProfit(game: Game){
    const betsOfGame = this.bets().filter((bet) =>{
      return game.name == bet.game.name;
    })

    const newProfit = betsOfGame.reduce((acc, bet) =>{
      if(bet.result == PossibleResult.WIN){
        return acc + bet.profit
      }else if(bet.result == PossibleResult.LOSE){
        return acc - bet.profit
      }

      return acc; 
    }, game.profit);

    return newProfit;
  }

  handleNewBet(newBet: Bet) {
    this.bets.update(currentBets => [newBet, ...currentBets]);

    this.initialGames.update(currentGames => {
      const gameToUpdate = currentGames.find(game => game.name === newBet.game.name);

      if (gameToUpdate) {
        gameToUpdate.bets = [newBet, ...(gameToUpdate.bets ?? [])];
      }
      
      return [...currentGames];
    });
  }

  handleNewGame(newGame: Game){
    this.initialGames.update(currentGames => [newGame, ...currentGames])
  }
}
