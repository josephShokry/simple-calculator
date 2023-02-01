package com.calculator.controllers;

import com.calculator.DTO.CalculatorDTO;
import com.calculator.Model.Formula;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CalculatorController {
    Formula formula = Formula.getInstance();
    @PostMapping("/formula")
    double makeFormula(@RequestBody CalculatorDTO calculatorDTO){
        formula.setFirstNumber(calculatorDTO.getFirstNumber());
        formula.setSecondNumber(calculatorDTO.getSecondNumber());
        formula.setOperation(calculatorDTO.getOperation());
        return formula.execute();
    }
}
