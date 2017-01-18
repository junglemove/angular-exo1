import {Bankable} from './Bankable';
export class Restaurant extends Bankable{

	public canPay(value: number){

    }
	//ajoute la valeur de amount au solde actuel
	addMoney(amount: number){

    }
	//enleve la quantité amount du sold actuel
	spendMoney(amount: number){

    }
	//retourne l'id
	public get bankId(){
        //return ;
    }
	//Ne permet pas le changement d'id
	public set bankId(newNumber: number){

    }
	get total(){
        //return ;
    }

}