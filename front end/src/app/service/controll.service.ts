import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormulaDTO } from '../Models/model';

@Injectable({
  providedIn: 'root'
})
export class ControllService {

  formula:FormulaDTO=new FormulaDTO()
  private url:string = "http://localhost:8080/formula"

  constructor(private http:HttpClient) { }

  sendRequest(){
    console.log(this.formula)
    return this.http.post(this.url,this.formula)
  }

  setFristNumber(firstNumber:string){
    this.formula?.setFirstNumber(firstNumber)
  }
  setSecondNumber(secondNumber:string){
    this.formula?.setSecondNumber(secondNumber)
  }
  setOperation(operation:string){
    this.formula?.setOperation(operation)
  }


}
