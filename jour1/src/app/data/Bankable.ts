export abstract class Bankable {
	//constructeur de la classe
	constructor(private _id: number,protected _total: number){

	}
    //vérifie le solde actuel, si la valeur est inférieure retourne true sinon false
	public canPay(value: number): boolean{
		if(this.total < value)
			return true;
    }
	//ajoute la valeur de amount au solde actuel
	addMoney(amount: number){
		this._total += amount;
    }
	//enleve la quantité amount du sold actuel
	spendMoney(amount: number){
		this._total -= amount;
    }
	//retourne l'id
	public get bankId(): number{
		return this._id;
    }
	//Ne permet pas le changement d'id
	public set bankId(newNumber: number){

    }
	abstract get total(): number;
}