package com.calculator.Model;
public class Calculator implements ICalculator{
    @Override
    public double add(double firstNumber, double secondNumber) {
        return firstNumber + secondNumber;
    }

    @Override
    public double subtract(double firstNumber, double secondNumber) {
        return firstNumber - secondNumber;
    }

    @Override
    public double multiply(double firstNumber, double secondNumber) {
        return firstNumber * secondNumber;
    }

    @Override
    public double divide(double firstNumber, double secondNumber) {
        return firstNumber/secondNumber;
    }

    @Override
    public double sqrt(double firstNumber) {
        return Math.sqrt(firstNumber);
    }

    @Override
    public double power2(double firstNumber) {
        return Math.pow(firstNumber,2);
    }

    @Override
    public double inverse(double firstNumber) {
        return 1/firstNumber;
    }

    @Override
    public double percentage(double firstNumber) {
        return firstNumber/100;
    }
}
