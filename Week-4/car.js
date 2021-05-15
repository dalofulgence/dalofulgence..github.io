export class Car{
    constructor(make, model, year, color) {
        this.CardId = Date.now(),
        this.Make = make,
        this.Model = model,
        this.Year = year,
        this.color = color
    }
}