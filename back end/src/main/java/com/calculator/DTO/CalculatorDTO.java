package com.calculator.DTO;

public class CalculatorDTO {
    private double firstNumber;
    private double secondNumber;
    private String operation;
//    CalculatorDTO instant;
//
//    CalculatorDTO getInstant(){
//        if(instant==null){
//            instant = new CalculatorDTO();
//        }
//        return instant;
//    }

    public double getFirstNumber() {
        return firstNumber;
    }

    public void setFirstNumber(double firstNumber) {
        this.firstNumber = firstNumber;
    }

    public double getSecondNumber() {
        return secondNumber;
    }

    public void setSecondNumber(double secondNumber) {
        this.secondNumber = secondNumber;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }
}
