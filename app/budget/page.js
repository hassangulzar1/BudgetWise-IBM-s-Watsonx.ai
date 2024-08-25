"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import "./budget.css";

const Page = () => {
  // State to hold the input values
  const [budget, setBudget] = useState({
    income: "",
    savingGoals: "",
    groceries: "",
    rent: "",
    bills: "", // Changed from "eatingOut" to "bills"
    transportation: "",
    shopping: "",
    others: "", // Added "others" field
  });

  // State to manage loading state for the submit button
  const [isLoading, setIsLoading] = useState(false);

  // Initialize router for redirection
  const router = useRouter();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBudget((prevBudget) => ({
      ...prevBudget,
      [name]: value,
    }));
  };

  // Handle form submission
  // Handle form submission
  // Handle form submission
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Calculate total expenses
    const totalExpenses =
      Number(budget.groceries) +
      Number(budget.rent) +
      Number(budget.bills) +
      Number(budget.transportation) +
      Number(budget.shopping) +
      Number(budget.others);

    // Check if expenses exceed income
    if (totalExpenses > Number(budget.income)) {
      alert("Income is lower than expenses!");
      setIsLoading(false);
      return;
    }

    // Prepare the budget data to store in local storage
    const budgetData = {
      income: budget.income,
      savingGoals: budget.savingGoals,
      totalExpenses: totalExpenses,
      remainingIncome: Number(budget.income) - totalExpenses,
    };

    // Store budget data in local storage (replace if it already exists)
    try {
      localStorage.setItem("budgetData", JSON.stringify(budgetData));
      console.log(
        "Budget Data successfully saved to local storage:",
        budgetData
      );
    } catch (error) {
      console.error("Failed to save budget data to local storage:", error);
    }

    // Create a prompt for the API based on the budget data
    const prompt = `Given the following budget details:
    - Income: $${budget.income}
    - Saving Goals: $${budget.savingGoals}
    - Groceries: $${budget.groceries}
    - Rent: $${budget.rent}
    - Bills: $${budget.bills}
    - Transportation: $${budget.transportation}
    - Shopping: $${budget.shopping}
    - Others: $${budget.others}
    
    Provide suggestions to manage expenses effectively and improve savings. Include a step-by-step procedure to optimize spending.`;

    // Call API to get suggestions
    try {
      const response = await fetch(
        "https://budgetwise-plxm.onrender.com/budgetwise/v1/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: prompt }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from the API");
      }

      const apiData = await response.json();

      // Store API response in local storage
      try {
        localStorage.setItem("budgetSuggestions", JSON.stringify(apiData));
        console.log(
          "Suggestions from API successfully saved to local storage:",
          apiData
        );
      } catch (error) {
        console.error("Failed to save suggestions to local storage:", error);
      }
    } catch (error) {
      alert(`Error sending data to the backend: ${error.message}`);
      setIsLoading(false);
      return;
    }

    // Reset the form fields
    setBudget({
      income: "",
      savingGoals: "",
      groceries: "",
      rent: "",
      bills: "",
      transportation: "",
      shopping: "",
      others: "",
    });

    setIsLoading(false);

    // Redirect to home page
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Income Section */}
      <div className="contain">
        <h1 style={{ textAlign: "center", marginTop: "15px" }}>
          Add your Income
        </h1>
        <div
          className="group"
          style={{ marginTop: "1rem", marginLeft: "6rem" }}
        >
          <input
            type="number"
            name="income"
            value={budget.income}
            onChange={handleInputChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Income$</label>
        </div>
      </div>

      {/* Expenses Section */}
      <div className="contain2">
        <h1 style={{ textAlign: "center", marginTop: "15px" }}>
          Add your Expenses
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input
              type="number"
              name="groceries"
              value={budget.groceries}
              onChange={handleInputChange}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Groceries$</label>
          </div>

          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input
              type="number"
              name="rent"
              value={budget.rent}
              onChange={handleInputChange}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Rent$</label>
          </div>

          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input
              type="number"
              name="bills" // Changed from "eatingOut" to "bills"
              value={budget.bills} // Changed from "eatingOut" to "bills"
              onChange={handleInputChange}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Bills$</label> {/* Changed from "Eating out" to "Bills" */}
          </div>

          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input
              type="number"
              name="transportation"
              value={budget.transportation}
              onChange={handleInputChange}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Transportation$</label>
          </div>

          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input
              type="number"
              name="shopping"
              value={budget.shopping}
              onChange={handleInputChange}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Shopping$</label>
          </div>

          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input
              type="number"
              name="others"
              value={budget.others}
              onChange={handleInputChange}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Others$</label>
          </div>
        </div>
      </div>

      {/* Saving Goals Section */}
      <div className="contain">
        <h1 style={{ textAlign: "center", marginTop: "15px" }}>
          Add your Saving Goals
        </h1>
        <div
          className="group"
          style={{ marginTop: "1rem", marginLeft: "6rem" }}
        >
          <input
            type="number"
            name="savingGoals"
            value={budget.savingGoals}
            onChange={handleInputChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Saving Goals$</label>
        </div>
      </div>

      {/* Submit Button */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button type="submit" className="submitBtn" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Page;
