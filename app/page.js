import classes from "./page.module.css";
import ProgressBar from "@/components/Progress";
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
    </>
  );
}
