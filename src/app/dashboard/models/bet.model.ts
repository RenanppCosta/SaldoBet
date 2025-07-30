import { nanoid } from "nanoid";
import { Game } from "./game.model";

export class Bet {
    public readonly id = nanoid();
    public readonly date: Date;

    constructor(
        public readonly description: string,
        public readonly result: PossibleResult,
        public readonly profit: number,
        date: string,
        public readonly game: Game,
    ){
        if (!date.includes('T') || !date.includes(' ')) {
            date+= "T00:00";
        }
        
        this.date = new Date(date);
    }  
}


export enum PossibleResult{
    WIN = "Win",
    LOSE = "Lose"
}
     
