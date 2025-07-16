import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  if (!userInput || userInput.duration <= 0) {
    return <p className="center">Please enter a duration greater than 0.</p>;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          
          <th>Invested Capital</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          yearData.totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear- yearData.totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              
              <td>
                {formatter.format(userInput.annualInvestment * yearData.year)}
              </td>
              <td>
                {formatter.format(totalAmountInvested)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
