import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const CatFact = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error occurred while trying to fetch data</h3>;
  }

  return (
    <div>
      <h2>This is the cat fact page</h2>
      <p>{data?.fact}</p>
      <button
        onClick={() => {
          refetch();
        }}
      >
        Update Cat Data
      </button>
    </div>
  );
};

export default CatFact;
