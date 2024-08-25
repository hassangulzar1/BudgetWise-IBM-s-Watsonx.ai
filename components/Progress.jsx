"use client";
import React, { useEffect } from "react";
const ProgressBar = () => {
  useEffect(() => {
    let cnt = 0;
    let per = 0;

    const red = setInterval(() => {
      let bar = document.querySelector(".progress");
      let percentage = setInterval(() => {
        per += 1;
        if (per >= cnt) clearInterval(percentage);
        document.querySelector(".text").innerHTML = `<p>${per}%</p>`;
      }, 100);

      cnt += 10;

      if (cnt === 50) clearInterval(red);
      bar.style.width = cnt + "%";
      console.log(cnt);
    }, 1000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(red);
    };
  }, []);

  return (
    <div style={styles.body}>
      <p style={{ color: "white", fontWeight: "700", marginTop: "1.5rem" }}>
        You've spent $3000 of your monthly budget
      </p>

      <div className="text" style={styles.text}></div>

      <div className="container" style={styles.container}>
        <div className="progress" style={styles.progress}></div>
      </div>

      <div className="text" style={{ opacity: "0.85", marginTop: "4px" }}>
        $7,000 remaining
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
