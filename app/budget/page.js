"use client";
import React, { useState } from "react";
import "./budget.css";

const Page = () => {
  // State to hold the input values
  const [budget, setBudget] = useState({
    income: "",
    groceries: "",
    rent: "",
    eatingOut: "",
    transportation: "",
    shopping: "",
    savingGoals: "",
  });

  // State to manage loading state for the submit button
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBudget((prevBudget) => ({
      ...prevBudget,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call or processing time
    setTimeout(() => {
      console.log("Budget Data:", budget);
      // Reset the form fields
      setBudget({
        income: "",
        groceries: "",
        rent: "",
        eatingOut: "",
        transportation: "",
        shopping: "",
        savingGoals: "",
      });
      setIsLoading(false);
    }, 2000); // Simulate a 2 second delay
  };

  return (
    <form onSubmit={handleSubmit}>
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
              name="eatingOut"
              value={budget.eatingOut}
              onChange={handleInputChange}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Eating out$</label>
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
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button type="submit" className="submitBtn" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Page;
