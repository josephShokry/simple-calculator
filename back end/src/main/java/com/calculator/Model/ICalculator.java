package com.calculator.Model;

public interface ICalculator {
    double add(double firstNumber, double secondNumber);
    double subtract(double firstNumber, double secondNumber);
    double multiply(double firstNumber, double secondNumber);
    double divide(double firstNumber, double secondNumber);
    double sqrt(double firstNumber);
    double power2(double firstNumber);
    double inverse(double firstNumber);
    double percentage(double firstNumber);

}
