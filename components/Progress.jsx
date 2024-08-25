"use client";
import React, { useEffect, useState } from "react";

const ProgressBar = ({ totalBudget, spentAmount }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatePercentage = () => {
      if (totalBudget > 0) {
        return Math.min((spentAmount / totalBudget) * 100, 100);
      }
      return 0;
    };

    const targetPercentage = calculatePercentage();
    let currentPercentage = 0;

    const updateProgress = setInterval(() => {
      if (currentPercentage >= targetPercentage) {
        clearInterval(updateProgress);
      } else {
        currentPercentage += 1;
        setPercentage(currentPercentage);
      }
    }, 10);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(updateProgress);
    };
  }, [totalBudget, spentAmount]);

  return (
    <div style={styles.body}>
      <p style={{ color: "white", fontWeight: "700", marginTop: "1.5rem" }}>
        {`You've spent $${spentAmount} of your monthly budget`}
      </p>

      <div className="text" style={styles.text}>
        <p>{`${Math.min(percentage, 100)}%`}</p>
      </div>

      <div className="container" style={styles.container}>
        <div
          className="progress"
          style={{ ...styles.progress, width: `${percentage}%` }}
        ></div>
      </div>

      <div className="text" style={{ opacity: "0.85", marginTop: "4px" }}>
        {`$${totalBudget - spentAmount} remaining`}
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
    transition: "width 1s",
  },
  text: {
    color: "white",
    marginBottom: "5px",
    float: "right",
  },
};

export default ProgressBar;
