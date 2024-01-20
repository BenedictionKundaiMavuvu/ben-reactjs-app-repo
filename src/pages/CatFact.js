import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const CatFact = () => {
  const { data } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });
  return (
    <div>
      <h2>This is the cat fact page</h2>
      <p>{data.fact}</p>
    </div>
  );
};

export default CatFact;
