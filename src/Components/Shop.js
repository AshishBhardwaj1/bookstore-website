import React from "react";
import "./list";
import list from "./list";
import Card from "./Card";
export default function Shop({ handleClick }) {
  return (
    <section>
      {list.map((item) => {
        // console.log(item);
        return <Card item={item} key={item.id} handleClick={handleClick} />;
      })}
    </section>
  );
}
