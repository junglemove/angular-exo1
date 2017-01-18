export abstract class Bankable {
	//constructeur de la classe
	//constructor(private _id: number,protected _total: number);
	//vérifie le solde actuel, si la valeur est inférieure retourne true sinon false
	public abstract canPay(value: number): boolean;
	//ajoute la valeur de amount au solde actuel
	abstract addMoney(amount: number);
	//enleve la quantité amount du sold actuel
	abstract spendMoney(amount: number);
	//retourne l'id
	public abstract get bankId(): number;
	//Ne permet pas le changement d'id
	public abstract set bankId(newNumber: number);
	abstract get total(): number;
}