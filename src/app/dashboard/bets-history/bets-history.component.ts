import { Component, input, signal } from '@angular/core';
import { BetComponent } from './bet/bet.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Bet } from '../models/bet.model';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-bets-history',
  imports: [BetComponent, ButtonComponent, ModalComponent],
  templateUrl: './bets-history.component.html',
  styleUrl: './bets-history.component.css'
})
export class BetsHistoryComponent {
  bets = input.required<Bet[]>();

  openedModal = signal(false);

  openModal(){
    this.openedModal.set(true);
  }
}
