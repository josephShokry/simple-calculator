import { Injectable } from '@angular/core';
import { ControllService } from './controll.service';
const maxsize = 15
@Injectable({
  providedIn: 'root'
})
export class ViewService {
  
  private uper:string = ""
  private lower:string = ""
  private operation = ""
  
  private endOperation = false
  private result = ""

  constructor(private controller:ControllService) { }

  addElement(button:string){
    console.log("this button is " + button)
    button = button.toLowerCase()
    if(this.endOperation && (this.isNumber(button)||button == "=")){
      this.clearAll()
    }

    this.endOperation = false;

    if(this.isNumber(button)){
      if(this.lower.length == maxsize)return
      if(button == "."){
        if(this.lower.indexOf(".") == -1){
          this.lower += button
          const indx = this.lower.indexOf(".")
          if(indx-1 == -1||(indx-1 == 0 && this.lower[indx-1] == "-")){
            this.lower=this.lower.slice(0,indx)+"0"+this.lower.slice(indx)
          }
        }
      }
      else this.lower += button
    }
    
    else if(button == "sign"){
      if(this.lower[0] != "-") this.lower = "-" + this.lower
      else if(this.lower[0] == "-")this.lower = this.lower.slice(1) 
    }
    
    else if(this.isOperation(button)&&(this.getOperation()==""||this.lower=="")&&this.lower!=""){
      if(this.lower!="") this.uper = this.lower
      this.operation = button
      this.clearLower()
    }
    
    else if(this.isFunction(button)&&this.lower!=""){
      console.log(button)
      switch (button){
        case "sqrt":
                    this.operation = "sqrt";
                    this.clearUper()
                    this.uper = this.lower
                    break;
        case "square":
          console.log("from pow")
                    this.operation = "square"
                    this.clearUper()
                    this.uper = this.lower
                    break;
        case "inverse": 
                    this.operation = "inverse"
                    this.clearUper()
                    this.uper = this.lower
                    break;
        case "percentage":
                    this.operation = "percentage"
                    this.clearUper()
                    this.uper = this.lower
                    break;        
      }
      this.setFormula()
      this.controller.sendRequest().subscribe((response:any) => {
        this.result = (String(response)=="NaN"||String(response)=="Infinity")?"E":String(response)
        this.lower = this.getResult()})
      this.viewSolution()
    }
    

    else if(this.isSpecial(button)){
      switch (button){
        case "c":
                    this.clearAll() 
                    break;
        case "ce":
                    this.clearLower()
                    break;
        case "del": 
                    this.deleteElement()
                    break;
      }
    }
  }



  isNumber(button:string):boolean{
    return ["1","2","3","4","5","6","7","8","9","0","."].includes(button)
  }

  isOperation(button:string):boolean{
    return ["+","-","x","/"].includes(button)
  }

  isFunction(button:string):boolean{
    return ["sqrt","inverse","percentage","square","="].includes(button.toLowerCase())
  }

  isSpecial(button:string):boolean{
    return ["del","c","ce"].includes(button)
  }

  getUper(){return this.uper}
  getLower(){return this.lower}
  getOperation(){return this.operation}

  clearUper(){this.uper = ""}
  clearLower(){this.lower = ""}
  clearOperation(){this.operation = ""}
  clearAll(){
    this.clearUper()
    this.clearLower()
    this.clearOperation()
  }

  getResult(){return this.result}

  private setFormula(){
    this.controller.setFristNumber(this.uper)
    this.controller.setSecondNumber(this.lower)
    this.controller.setOperation(this.operation)
  }

  private viewSolution(){
    if(this.isFunction(this.operation)) {this.uper = this.operation + " " + this.lower}
    else {this.uper += " " + this.operation + " " + this.lower}
    this.clearOperation()
    this.endOperation = true  
  } 

  private deleteElement(){
    if(this.lower!="")this.lower = this.lower.slice(0,-1)
    else if(this.operation!=""){
      this.operation = "";
      this.lower=this.uper;
      this.clearUper()
    }
    else if(this.uper!="")this.uper = this.uper.slice(0,-1)
  }

}
