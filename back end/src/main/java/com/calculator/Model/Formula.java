package com.calculator.Model;

public class Formula {
    private double firstNumber;
    private double secondNumber;
    private String operation;
    private Calculator calculator;
    private static Formula formula;

    private Formula(Calculator calculator) {
        this.calculator = calculator;
    }

    public static Formula getInstance(){
        if(formula==null){
            formula = new Formula(new Calculator());
        }
        return formula;
    }

    public double execute(){
        double result=0;
        if(operation.equals("+")) result = calculator.add(firstNumber,secondNumber);
        else if(operation.equals("-")) result = calculator.subtract(firstNumber,secondNumber);
        else if(operation.equals("x")) result = calculator.multiply(firstNumber,secondNumber);
        else if(operation.equals("/")) result = calculator.divide(firstNumber,secondNumber);
        else if(operation.equals("sqrt")) result = calculator.sqrt(firstNumber);
        else if(operation.equals("square")) result = calculator.power2(firstNumber);
        else if(operation.equals("inverse")) result = calculator.inverse(firstNumber);
        else if(operation.equals("percentage")) result = calculator.percentage(firstNumber);
        return result;

    }

    public void setFirstNumber(double firstNumber) {
        this.firstNumber = firstNumber;
    }

    public void setSecondNumber(double secondNumber) {
        this.secondNumber = secondNumber;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }
}
