"use client";
import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [spentAmount, setSpentAmount] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);

  useEffect(() => {
    // Retrieve data from local storage
    const storedBudgetData = localStorage.getItem("budgetData");
    if (storedBudgetData) {
      const { totalExpenses, income, remainingIncome } =
        JSON.parse(storedBudgetData);
      setSpentAmount(totalExpenses);
      setRemainingAmount(remainingIncome);

      // Calculate percentage and update progress bar
      const percentage = (totalExpenses / income) * 100;
      setProgress(percentage);
    }
  }, []);

  useEffect(() => {
    let cnt = 0;
    const red = setInterval(() => {
      let bar = document.querySelector(".progress");
      let percentage = setInterval(() => {
        cnt += 1;
        if (cnt >= progress) clearInterval(percentage);
        document.querySelector(".text").innerHTML = `<p>${cnt}%</p>`;
      }, 100);

      if (cnt >= progress) clearInterval(red);
      bar.style.width = cnt + "%";
    }, 500);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(red);
    };
  }, [progress]);

  return (
    <div style={styles.body}>
      <p style={{ color: "white", fontWeight: "700", marginTop: "1.5rem" }}>
        You&apos;ve spent ${spentAmount} of your monthly budget
      </p>

      <div className="text" style={styles.text}></div>

      <div className="container" style={styles.container}>
        <div className="progress" style={styles.progress}></div>
      </div>

      <div className="text" style={{ opacity: "0.85", marginTop: "4px" }}>
        ${remainingAmount} remaining
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "20px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    padding: "2px",
  },
  progress: {
    height: "60%",
    backgroundColor: "#DEDFE1",
    width: "0%",
    borderRadius: "10px",
    transition: "all 1s",
  },
  text: {
    color: "white",
    marginBottom: "5px",
    float: "right",
  },
};

export default ProgressBar;
