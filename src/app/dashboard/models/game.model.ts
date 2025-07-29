import { Bet } from "./bet.model";

export class Game {
    constructor(
        public readonly name: string,
        public readonly profit: number,
        public bets: Bet[]
    ){}
}
