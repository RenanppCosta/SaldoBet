import { nanoid } from "nanoid";
import { Game } from "./game.model";

export class Bet {
    public readonly id = nanoid();

    constructor(
        public readonly description: string,
        public readonly result: PossibleResult,
        public readonly profit: number,
        public readonly date: Date,
        public readonly game: Game,
    ){}  
}


export enum PossibleResult{
    WIN = "Win",
    LOSE = "Lose"
}
     
