import React from "react";
import "./budget.css";
const page = () => {
  return (
    <>
      <div className="contain">
        <h1 style={{ textAlign: "center", marginTop: "15px" }}>
          Add your Income
        </h1>

        <div
          className="group"
          style={{ marginTop: "1rem", marginLeft: "6rem" }}
        >
          <input type="number" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Income$</label>
        </div>
      </div>

      <div className="contain2">
        <h1 style={{ textAlign: "center", marginTop: "15px" }}>
          Add your Expenses
        </h1>

        {/* expenses inputs  */}

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input type="number" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Groceries$</label>
          </div>

          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input type="number" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Rent$</label>
          </div>
          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input type="number" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Eating out$</label>
          </div>
          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input type="number" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Transportation$</label>
          </div>
          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input type="number" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Shopping$</label>
          </div>

          <div
            className="group"
            style={{ marginTop: "1rem", marginLeft: "6rem" }}
          >
            <input type="number" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Saving Goals$</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
