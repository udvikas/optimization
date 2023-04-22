import React, { useMemo, useState, useCallback } from "react";
import classes from "./DemoList.module.css";
import Button from "../UI/Button/Button";

const DemoList = (props) => {
  const { items } = props;
  const [isDescending, setIsDescending] = useState(false);

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    const sorted = [...items];
    if (isDescending) {
      sorted.sort((a, b) => b - a);
    } else {
      sorted.sort((a, b) => a - b);
    }
    return sorted;
  }, [items, isDescending]);

  const toggleDescendingHandler = useCallback(() => {
    setIsDescending((prevState) => !prevState);
  }, []);

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button onClick={toggleDescendingHandler}>
        {isDescending
          ? "Change to Ascending Order"
          : "Change to Descending Order"}
      </Button>
    </div>
  );
};

export default React.memo(DemoList);
