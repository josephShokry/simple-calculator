export class FormulaDTO{

    private firstNumber?:number
    private secondNumber?:number
    private operation?:string;
    
    constructor(){}

    getFirstNumber(){return this.firstNumber}
    getSecondNumber(){return this.secondNumber}
    getOperation(){return this.operation}

    addFirstNumber(firstNumber:string){
        if(this.firstNumber==null) this.firstNumber = Number(firstNumber)
        else this.firstNumber = Number(String(this.firstNumber)+firstNumber)
    }
    addSecondNumber(secondNumber:string){
        if(this.secondNumber==null) this.secondNumber = Number(secondNumber)
        else this.secondNumber = Number(String(this.secondNumber)+secondNumber)
    }

    addOperation(operation:string){
        this.operation = operation
    }

    setFirstNumber(firstNumber:string){this.firstNumber=Number(firstNumber)}
    setSecondNumber(secondNumber:string){this.secondNumber=Number(secondNumber)}
    setOperation(operation:string){this.operation=operation}

}