"use client";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import ProgressBar from "@/components/Progress";
import BudgetBox from "@/components/BudgetBox";

export default function Home() {
  // State to hold the budget data and suggestions
  const [budgetData, setBudgetData] = useState({
    income: 0,
    totalExpenses: 0,
    remainingIncome: 0,
  });

  const [suggestions, setSuggestions] = useState([]);

  // Retrieve the budget data and suggestions from local storage when the component mounts
  useEffect(() => {
    try {
      // Retrieve and parse budget data from local storage
      const storedBudgetData = JSON.parse(
        localStorage.getItem("budgetData")
      ) || {
        income: 0,
        totalExpenses: 0,
        remainingIncome: 0,
      };

      // Retrieve and parse suggestions from local storage
      const storedSuggestions =
        JSON.parse(localStorage.getItem("budgetSuggestions")) || [];

      // Set the state with the retrieved values
      setBudgetData(storedBudgetData);
      setSuggestions(storedSuggestions.slice(0, -1));
    } catch (error) {
      console.error("Error parsing local storage data:", error);

      // Handle the error or set default values as needed
      setBudgetData({
        income: 0,
        totalExpenses: 0,
        remainingIncome: 0,
      });
      setSuggestions([]);
    }
  }, []);

  return (
    <>
      <h1 className={`${classes.contain} ${classes.headingLine}`}>
        Your personalized budget
      </h1>

      <p className={`${classes.contain} ${classes.para}`}>
        based on your income, expenses, and goals
      </p>

      <div style={{ marginTop: "1rem" }} className={classes.contain}>
        <ProgressBar
          totalBudget={budgetData.income}
          spentAmount={budgetData.totalExpenses}
        />
      </div>

      <h1
        className={classes.contain}
        style={{ marginTop: "1rem", fontSize: "1.5rem", fontWeight: "800" }}
      >
        Monthly budget
      </h1>

      {/* Budget boxes */}
      <div
        className={classes.contain}
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <BudgetBox name="Income" price={`${budgetData.income}`} />
        <BudgetBox name="Expenses" price={`${budgetData.totalExpenses}`} />
        <BudgetBox name="Remaining" price={`${budgetData.remainingIncome}`} />
      </div>

      {/* Budget Summary */}
      <div
        className={classes.contain}
        style={{ marginTop: "2rem", textAlign: "center" }}
      >
        <p style={{ fontSize: "1.2rem", color: "white" }}>
          {`You've spent $${budgetData.totalExpenses} of your monthly budget`}
        </p>
        <p style={{ fontSize: "1.2rem", color: "white" }}>
          {`$${budgetData.remainingIncome} remaining`}
        </p>
      </div>

      {/* AI Suggestions box */}
      <div
        className={classes.contain}
        style={{
          marginTop: "4rem",
          border: "1px solid white",
          height: "40vh",
          borderRadius: "10px",
          textOverflow: "clip",
          overflow: "auto", // Added to handle overflow of long suggestions
          padding: "1rem", // Added padding for better readability
        }}
      >
        <p
          style={{ textAlign: "center", fontSize: "1.4rem", marginTop: "5px" }}
        >
          Suggestions by (IBM watsonx) to manage your budget
        </p>
        <div />
        <ol style={{ marginTop: "10px" }}>
          {suggestions.map((item, index) => (
            <li
              key={index}
              style={{ color: "white", marginLeft: "15px", marginTop: "2px" }}
            >
              {item}.
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
