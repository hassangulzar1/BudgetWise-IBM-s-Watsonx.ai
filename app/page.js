import classes from "./page.module.css";
import ProgressBar from "@/components/Progress";
import BudgetBox from "@/components/BudgetBox";

export default function Home() {
  return (
    <>
      <h1 className={`${classes.contain} ${classes.headingLine}`}>
        Your personlized budget
      </h1>

      <p className={`${classes.contain} ${classes.para}`}>
        based on you income, expenses and goals
      </p>

      <div style={{ marginTop: "1rem" }} className={classes.contain}>
        <ProgressBar />
      </div>

      <h1
        className={classes.contain}
        style={{ marginTop: "1rem", fontSize: "1.5rem", fontWeight: "800" }}
      >
        Monthly budget
      </h1>

      {/* budget boxex  */}
      <div
        className={classes.contain}
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <BudgetBox name="Income" price="10,000" />
        <BudgetBox name="Expenses" price="3,000" />
        <BudgetBox name="Remaining" price="7,000" />
      </div>
    </>
  );
}
