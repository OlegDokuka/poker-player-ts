export class Bet {
    constructor(private _bet: number) {

    }

    public get bet(): number {
        return this._bet;
    }
}

export default Bet;