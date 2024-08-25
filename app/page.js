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
  const [suggestions, setSuggestions] = useState("");

  // Retrieve the budget data and suggestions from local storage when the component mounts
  useEffect(() => {
    const storedBudgetData = JSON.parse(localStorage.getItem("budgetData"));
    const storedSuggestions = JSON.parse(
      localStorage.getItem("budgetSuggestions")
    );

    if (storedBudgetData) {
      setBudgetData(storedBudgetData);
    }

    if (storedSuggestions) {
      // Replace newline characters with <br /> for HTML rendering
      let formattedSuggestions = storedSuggestions.response
        .replace(/\n/g, "<br />") // Keep newlines as <br />
        .replace(/(\.)(?!\d)/g, ".<br />"); // Replace periods with <br /> unless followed by a digit (to avoid breaking sentences with decimal numbers)

      // Add numbering to each line
      let lines = formattedSuggestions.split("<br />");
      let numberedLines = lines
        .map((line, index) => `${index + 1}. ${line}`)
        .join("<br />");

      setSuggestions(numberedLines);
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
          Suggestions to manage your budget
        </p>
        <div
          style={{ marginTop: "1rem", padding: "0 1rem", color: "white" }}
          dangerouslySetInnerHTML={{
            __html: suggestions || "No suggestions available",
          }}
        />
      </div>
    </>
  );
}
