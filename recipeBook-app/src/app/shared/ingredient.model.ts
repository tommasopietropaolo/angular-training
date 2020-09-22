export class Ingredient{
    /*instead of this:

    public name:string;
    public amount:number;

    constructor(name:string, amount:number){
        this.name=name;
        this.amount=amount;
    }*/
    //you can add public inside of constructor and automatically create the attribute
    constructor(public name:string, public amount:number){}
}