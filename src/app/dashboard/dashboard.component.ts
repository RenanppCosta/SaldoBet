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
export class DashboardComponent implements OnInit {

  balance: WritableSignal<number> = signal(0);
  games: WritableSignal<Game[]> = signal([]);
  allBets: WritableSignal<Bet[]> = signal([]);

  ngOnInit() {
    const lolGame: Game = {
      name: 'LoL',
      profit: 320, 
      bets: []
    };

    const csgoGame: Game = {
      name: 'CS',
      profit: 140, 
      bets: []
    };

    const lolBets: Bet[] = [
      {
        id: '1',
        description: 'ML paiN - paiN x LOUD',
        result: PossibleResult.LOSE,
        profit: 150,
        date: new Date('2025-01-05T00:00'),
        game: lolGame 
      },
      {
        id: '2',
        description: 'First Blood - LOUD vs RED',
        result: PossibleResult.WIN,
        profit: 80,
        date: new Date('2025-02-10T00:00'),
        game: lolGame
      },
      {
        id: '3',
        description: 'Total de Torres - INTZ vs paiN',
        result: PossibleResult.LOSE,
        profit: 110,
        date: new Date('2025-03-11T00:00'),
        game: lolGame
      },
      {
        id: '4',
        description: 'Vencedor - KaBuM! vs LOUD',
        result: PossibleResult.WIN,
        profit: 500,
        date: new Date('2025-04-22T00:00'),
        game: lolGame
      }
    ];

    const csgoBets: Bet[] = [
      {
        id: '5',
        description: 'Vencedor - Imperial vs MIBR',
        result: PossibleResult.WIN,
        profit: 200,
        date: new Date('2025-05-15T00:00'),
        game: csgoGame
      },
      {
        id: '6',
        description: 'Handicap - FURIA vs FaZe',
        result: PossibleResult.LOSE,
        profit: 120,
        date: new Date('2025-06-01T00:00'),
        game: csgoGame
      },
      {
        id: '7',
        description: 'Total de Mapas - Fluxo vs 00Nation',
        result: PossibleResult.WIN,
        profit: 60,
        date: new Date('2025-07-20T00:00'),
        game: csgoGame
      }
    ];

    lolGame.bets = lolBets;
    csgoGame.bets = csgoBets;

    const initialGames = [lolGame, csgoGame];
    const initialBets = [...lolBets, ...csgoBets].sort((a, b) => b.date.getTime() - a.date.getTime());

    this.games.set(initialGames);
    this.allBets.set(initialBets);
  }

  handleNewBet(newBet: Bet) {
    this.allBets.update(currentBets => [newBet, ...currentBets]);

    this.games.update(currentGames => {
      const gameToUpdate = currentGames.find(game => game.name === newBet.game.name);

      if (gameToUpdate) {
        gameToUpdate.bets = [newBet, ...gameToUpdate.bets];
      }
      
      return [...currentGames];
    });
  }
}
